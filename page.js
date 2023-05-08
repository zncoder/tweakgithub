// add "Reviews" to the nav bar
if (document.querySelector('#global-nav') && !document.querySelector('#my-review-requests')) {
  let item = document.querySelector('#global-nav .js-selected-navigation-item')
  let newItem = item.cloneNode(true)
  newItem.href = "/pulls/review-requested"
  newItem.innerHTML = 'Reviews'
  newItem.id = 'my-review-requests'
  item.parentNode.insertBefore(newItem, item.nextSibling)
}
