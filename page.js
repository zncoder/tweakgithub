function replaceIssuesWithPulls() {
  let issues = document.querySelector('#issues-tab')
  if (!issues) return

  let text = issues.querySelector('span[data-content="Issues"]')
  text.innerText = "Pulls"
  issues.href = '/pulls'
}

function replaceActionsWithRequested() {
  let actions = document.querySelector('#actions-tab')
  if (!actions) return

  let text = actions.querySelector('span[data-content="Actions"]')
  text.innerText = "Requested"
  actions.href = '/pulls/review-requested'
}

function replaceCodeFont() {
  if (document.querySelector('blob-code-inner-tweakgithub')) return

  for (let node of document.querySelectorAll('.blob-code-inner')) {
    node.classList.add('blob-code-inner-tweakgithub')
  }
}

const obs = new MutationObserver(tweak)

function observe() {
  obs.observe(document, {attributes: false, childList: true, subtree: true})
}

function tweak() {
  obs.disconnect()
  replaceIssuesWithPulls()
  replaceActionsWithRequested
  replaceCodeFont()
  observe()
}

tweak()
