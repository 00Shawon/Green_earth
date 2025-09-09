const categoryContainer = document.getElementById('category-container');
const treeContainer = document.getElementById('tree-container');
const cartContainer = document.getElementById('cart-container');
let totalPrice = document.getElementById('total-price').innerText;


const loadCategoryData = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => {
      const categories = data.categories;
     showCategoryData(categories) 
    //  console.log(categories)
    })
    .catch(err => {
      console.log(err);
    });
};



const showCategoryData =(categories) => {
 categories.forEach(category => {
  categoryContainer.innerHTML +=`<li id="${category.id}"class="font-semibold bg-white text-black hover:bg-[#15803D] w-full hover:text-white mb-2 p-2 rounded">${category.category_name} </li>`
 });
}



categoryContainer.addEventListener('click', (e)=>{
  const allLi = document.querySelectorAll('li');
  allLi.forEach(li => {
    li.classList.remove("bg-green-700", "text-white");
  })
  if(e.target.localName === 'li'){
    // console.log(e.target)
  e.target.classList.remove("bg-white");
  e.target.classList.add("bg-green-700", "text-white");
    loadTreeCategory(e.target.id)
  }
})
const loadTreeCategory = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
  .then(res => res.json())
  .then(data => showTreeByCategory(data.plants))
}

 

const showTreeByCategory = (treeArr) =>{
treeContainer.innerHTML='';
treeArr.forEach(tree => {
  // console.log(tree)
  treeContainer.innerHTML +=`<div class="card bg-base-100 items-center w-full shadow-sm">
            <figure class="px-10 pt-10">
              <img class="max-h-[250px] cover rounded-md" src="${tree.image}" alt="Shoes" />
            </figure>
            <div class=" px-10 pt-10 space-y-5">
              <h2 id="${tree.id} " class="card-title">${tree.name}</h2>
              <p>${tree.description}</p>
              <div class="flex justify-between items-center">
                <p>${tree.category}</p>
                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price} </p>
              </div>
              <div class="card-actions">
                <button class="btn bg-green-700 w-full rounded-3xl text-white mb-[20px]">Add to Cart</button>
              </div>
            </div>
          </div>`
})
}

 const loadAllTrees = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => {
      const allTrees = data.plants;
      showTreeByCategory(allTrees)
      
    })
    .catch(err => {
      console.log(err);
    });
};

let myCart = [];
treeContainer.addEventListener('click', (e) => {
 handleCart(e)
  showMyCart(myCart)
  currentTotal(myCart)
  removeCartElement(myCart)

})

const handleCart = (e) =>{
if(e.target.innerText === 'Add to Cart'){
  console.log(e.target.parentNode.parentNode.children[0].id)
  const title = e.target.parentNode.parentNode.children[0].innerText;
  const price = e.target.parentNode.parentNode.children[2].children[1].innerText;
  const id = e.target.parentNode.parentNode.children[0].id;
  
  myCart.push({
    title: title,
    price: price,
    id: id
  });
}
}

const showMyCart = (myCart) => {
cartContainer.innerHTML ='';
myCart.forEach(cart => {
  cartContainer.innerHTML += `  <div class=" bg-[#F0FDF4] flex justify-between p-2 m-3">
            <div class="space-y-2">
              <p class="font-bold">${cart.title} </p>
              <p class="text-gray-500 text-xl"> <i class="fa-solid fa-bangladeshi-taka-sign"></i>${cart.price} <span><i class="fa-solid fa-xmark text-sm"></i></span> 1 </p>
            </div>
            <div><i class="fa-solid fa-xmark remove-cart-item" data-id="${cart.id}"></i></div>
          </div>`;
         
}) 
}

const currentTotal = (cartArr) => {
  let total = 0;
  cartArr.forEach(item => {
    total += Number(item.price);
  });
  document.getElementById('total-price').innerText = total;
  // console.log(total);
   
}

const removeCartElement = (id) => {
  myCart = myCart.filter(item => item.id !== id);
  showMyCart(myCart);
  currentTotal(myCart);
}
cartContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-cart-item')) {
    const id = e.target.getAttribute('data-id');
    removeCartElement(id);
  }
});

loadAllTrees()
 loadCategoryData()



