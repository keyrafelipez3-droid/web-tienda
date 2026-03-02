
var currentFilter = 'all';

function filterProducts(categoria) {
  currentFilter = categoria;
  var btns = document.querySelectorAll('.filter-btn');
  btns.forEach(function(btn) { btn.classList.remove('active'); });
  event.target.classList.add('active');
  renderShop();
}

function renderShop() {
  var grid = document.getElementById('shop-grid');
  if (!grid) return;
  var filtered = currentFilter === 'all' ? PRODUCTOS : PRODUCTOS.filter(function(p) { return p.categoria === currentFilter; });
  grid.innerHTML = '';
  filtered.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = '<div class="product-img" style="background:' + p.color + '">' + p.emoji + '</div><div class="product-info"><h3>' + p.nombre + '</h3><p style="font-size:0.85rem;color:#7c7469;margin-bottom:0.8rem">' + p.descripcion + '</p><p class="product-price">$' + p.precio.toLocaleString() + '</p><button class="btn-add" onclick="addToCart(' + p.id + ')">Agregar al carrito</button></div>';
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderShop);
