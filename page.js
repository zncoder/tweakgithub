// replace Issues with my pull requests
function replaceIssues() {
  let issues = document.querySelector('#issues-tab')
  if (!issues) return false

  let text = issues.querySelector('span[data-content="Issues"]')
  text.innerText = "Pulls"
  issues.href = '/pulls'
  return true
}

const obs = new MutationObserver(replaceIssues)
obs.observe(document.body, {attributes: false, childList: true, subtree: false})

replaceIssues()
