const productsGrid = document.getElementById("products-grid");
const cartCount = document.getElementById("cart-count");
const emptyCart = document.getElementById("empty-cart");
const cartContent = document.getElementById("cart-content");
const cartItems = document.getElementById("cart-items");
const orderTotal = document.getElementById("order-total");

const confirmOrderBtn = document.getElementById("confirm-order");
const orderModal = document.getElementById("order-modal");
const confirmedItems = document.getElementById("confirmed-items");
const confirmedTotal = document.getElementById("confirmed-total");
const newOrderBtn = document.getElementById("new-order");




let products = productData;
let cart = [];



function displayProducts() {
  productsGrid.innerHTML = "";

  products.forEach((product, index) => {
    const productCard = document.createElement("article");

    productCard.classList.add("food-content");
    productCard.dataset.index = index;

    productCard.innerHTML = `
      <div class="product-image">

        <picture>
          <source
            media="(max-width: 600px)"
            srcset="${product.image.mobile}">

          <source
            media="(max-width: 1000px)"
            srcset="${product.image.tablet}">

          <img
            src="${product.image.desktop}"
            alt="${product.name}">
        </picture>

        <button
          type="button"
          class="add-to-cart"
          data-index="${index}">

          <img
            src="./assets/images/icon-add-to-cart.svg"
            alt="">

          Add to Cart
        </button>

      </div>

      <div class="details">

        <p class="category">${product.category}</p>

        <h2>${product.name}</h2>

        <p class="price">
          $${product.price.toFixed(2)}
        </p>

      </div>
    `;

    productsGrid.appendChild(productCard);
  });

  updateProductButtons();
}


function addToCart(index) {
  const product = products[index];

  if (!product) return;

  const existingProduct = cart.find(
    item => item.name === product.name
  );

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
}

function increaseQuantity(index) {
  if (!cart[index]) return;

  cart[index].quantity++;

  updateCart();
}


function decreaseQuantity(index) {
  if (!cart[index]) return;

  cart[index].quantity--;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}


function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;

  cart.splice(index, 1);

  updateCart();
}


function updateCart() {
  displayProducts();
  displayCart();
}


function updateProductButtons() {
  const productCards =
    document.querySelectorAll(".food-content");

  productCards.forEach((card, index) => {
    const product = products[index];

    const selectedProduct = cart.find(
      item => item.name === product.name
    );

    if (selectedProduct) {
      const quantity = selectedProduct.quantity;

      card.classList.add("selected");

      const addButton =
        card.querySelector(".add-to-cart");

      if (addButton) {
        addButton.outerHTML = `
          <div class="quantity-control">

            <button
              type="button"
              class="decrease-quantity"
              data-index="${index}"
              aria-label="Decrease quantity">

              &minus;

            </button>

            <span>${quantity}</span>

            <button
              type="button"
              class="increase-quantity"
              data-index="${index}"
              aria-label="Increase quantity">

              &plus;

            </button>

          </div>
        `;
      } else {
        card.querySelector(
          ".quantity-control span"
        ).textContent = quantity;
      }
    } else {
      card.classList.remove("selected");
    }
  });
}



function displayCart() {
  cartItems.innerHTML = "";

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  cartCount.textContent = totalQuantity;

  orderTotal.textContent =
    `$${totalPrice.toFixed(2)}`;

  if (cart.length === 0) {
    emptyCart.hidden = false;
    cartContent.hidden = true;
    return;
  }

  emptyCart.hidden = true;
  cartContent.hidden = false;

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="cart-item-info">

        <h3>${item.name}</h3>

        <div class="cart-item-details">

          <span class="cart-item-quantity">
            ${item.quantity}x
          </span>

          <span class="cart-item-price">
            @ $${item.price.toFixed(2)}
          </span>

          <span class="cart-item-subtotal">
            $${(
              item.price * item.quantity
            ).toFixed(2)}
          </span>

        </div>

      </div>

      <button
        type="button"
        class="remove-item"
        data-index="${index}"
        aria-label="Remove ${item.name}">

        &times;

      </button>
    `;

    cartItems.appendChild(cartItem);
  });
}




function displayConfirmedOrder() {
  confirmedItems.innerHTML = "";

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  confirmedTotal.textContent =
    `$${totalPrice.toFixed(2)}`;

  cart.forEach(item => {
    const confirmedItem =
      document.createElement("div");

    confirmedItem.classList.add("confirmed-item");

    confirmedItem.innerHTML = `
      <img
        src="${item.image.thumbnail}"
        alt="${item.name}">

      <div class="confirmed-item-info">

        <h3>${item.name}</h3>

        <p>
          <span>${item.quantity}x</span>
          @ $${item.price.toFixed(2)}
        </p>

      </div>

      <strong>
        $${(
          item.price * item.quantity
        ).toFixed(2)}
      </strong>
    `;

    confirmedItems.appendChild(confirmedItem);
  });
}


function confirmOrder() {
  if (cart.length === 0) return;

  displayConfirmedOrder();

  orderModal.hidden = false;

  newOrderBtn.focus();
}




function startNewOrder() {
  cart = [];

  orderModal.hidden = true;

  updateCart();

  confirmOrderBtn.focus();
}




productsGrid.addEventListener("click", event => {


  const addButton =
    event.target.closest(".add-to-cart");

  if (addButton) {
    const index = Number(addButton.dataset.index);

    addToCart(index);

    return;
  }


  const increaseButton =
    event.target.closest(".increase-quantity");

  if (increaseButton) {
    const productIndex =
      Number(increaseButton.dataset.index);

    const product = products[productIndex];

    if (!product) return;

    const cartIndex = cart.findIndex(
      item => item.name === product.name
    );

    if (cartIndex !== -1) {
      increaseQuantity(cartIndex);
    }

    return;
  }


  const decreaseButton =
    event.target.closest(".decrease-quantity");

  if (decreaseButton) {
    const productIndex =
      Number(decreaseButton.dataset.index);

    const product = products[productIndex];

    if (!product) return;

    const cartIndex = cart.findIndex(
      item => item.name === product.name
    );

    if (cartIndex !== -1) {
      decreaseQuantity(cartIndex);
    }
  }

});



cartItems.addEventListener("click", event => {

  const removeButton =
    event.target.closest(".remove-item");

  if (removeButton) {
    const index = Number(removeButton.dataset.index);

    removeFromCart(index);
  }

});


confirmOrderBtn.addEventListener(
  "click",
  confirmOrder
);

newOrderBtn.addEventListener(
  "click",
  startNewOrder
);


function loadProducts() {
  displayProducts();
  displayCart();
}

loadProducts();