
var cart = [];

function addToCart(id) {
  var producto = PRODUCTOS.find(function(p) { return p.id === id; });
  if (!producto) return;
  var existing = cart.find(function(item) { return item.id === id; });
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, qty: 1 });
  }
  updateCartUI();
  var sidebar = document.getElementById('cart-sidebar');
  if (sidebar) sidebar.classList.add('open');
}

function removeFromCart(id) {
  cart = cart.filter(function(item) { return item.id !== id; });
  updateCartUI();
}

function updateCartUI() {
  var total = cart.reduce(function(sum, item) { return sum + item.precio * item.qty; }, 0);
  var count = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
  var countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = count;
  var totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = total.toLocaleString();
  var listEl = document.getElementById('cart-items-list');
  if (listEl) {
    listEl.innerHTML = '';
    if (cart.length === 0) {
      listEl.innerHTML = '<p style="color:#7c7469;padding:1rem 0">Tu carrito esta vacio.</p>';
      return;
    }
    cart.forEach(function(item) {
      var div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = '<div><p class="cart-item-name">' + item.nombre + '</p><p style="font-size:0.8rem;color:#7c7469">Cant: ' + item.qty + '</p></div><div style="display:flex;align-items:center;gap:1rem"><span class="cart-item-price">$' + (item.precio * item.qty).toLocaleString() + '</span><button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')">x</button></div>';
      listEl.appendChild(div);
    });
  }
}

function toggleCart() {
  var sidebar = document.getElementById('cart-sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

function checkout() {
  if (cart.length === 0) { alert('Tu carrito esta vacio.'); return; }
  alert('Gracias por tu compra! Total: $' + cart.reduce(function(s,i){return s+i.precio*i.qty;},0).toLocaleString());
  cart = [];
  updateCartUI();
  var sidebar = document.getElementById('cart-sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
  var navCart = document.querySelector('.nav-cart');
  if (navCart) navCart.addEventListener('click', function(e) {
    var sidebar = document.getElementById('cart-sidebar');
    if (sidebar) { e.preventDefault(); sidebar.classList.toggle('open'); }
  });
});
