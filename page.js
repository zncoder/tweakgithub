// replace Issues with my pull requests
let issues = document.querySelector('#issues-tab')
if (issues) {
  let text = issues.querySelector('span[data-content="Issues"]')
  text.innerText = "Pulls"
  issues.href = '/pulls'
}
