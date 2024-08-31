let shop = document.getElementById('shop');
let Cartquantity = document.getElementById('cart-quantity');

let shopItemsData = [
  {
    id: 'zz',
    name: 'Apple',
    price: '10000',
    desc: 'xcklcxccc xjv;vcjvc;ck kvjxkcv',
    img: "img/apple.jpeg"
  },
  {
    price: 30000,
    id: 'jj',
    name: 'Coffee Cup',
    desc: 'xcljzcjjlc',
    img: "img/COFFEE-CUP.jpeg"
  },
  {
    id: 'dd',
    price: 4000000,
    name: 'Mask',
    desc: 'dsjkjvc;cclklc',
    img: "img/mask.jpeg"
  },
  {
    id: 'kk',
    price: 90000,
    name: 'Socks',
    desc: 'lsdjjvcvjvcvcv;c',
    img: "img/socks.jpeg"
  }
];

let basket = [{
  id: 'idijkccccxxc',
  item: 1
}];

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, desc, img, price } = x;
    return `
      <div id="product-id-${id}" class="item">
        <img src="${img}" alt="" width="200">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$${price}</h2>
            <div class="buttons">
              <div onclick="decrement(${id})" class="dash">-</div>
              <div id="${id}" class="quantity">0</div>
              <div onclick="increment(${id})" class="plus">+</div>
            </div>
 <button onclick="deleteitem(${id})">Delete</button>

          </div>
        </div>
      </div>
    `;
  }).join("");
};

generateShop();
Cartquantity.innerHTML = shopItemsData.length;

let increment = (id) => {
  let selectedItem = id; 
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  // console.log(basket);
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0)  return;
   else {
    search.item -= 1;
  }
  // console.log(basket);
  update(selectedItem.id);
};


let update = (id) => {
  let search = basket.find((x) => x.id === id)
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  console.log("calculation function is running")
}

let deleteitem = (id) => {

  let itemsLeft = shopItemsData.filter((item) => item.id != id.id)
 shopItemsData = itemsLeft
 Cartquantity.innerHTML = itemsLeft.length;
 generateShop()
};

