const form = document.querySelector('form')
const productInput = form.elements.product
const qtyInput = form.elements.qty
const list = document.querySelector('ul')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const li = document.createElement('li')
  li.innerText = `${qtyInput.value} ${productInput.value}`
  list.appendChild(li)
  productInput.value = ''
  qtyInput.value = ''
})