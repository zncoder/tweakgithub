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

function openPRsInNewTab() {
  if (location.pathname === '/pulls' || location.pathname.startsWith("/pulls/")) {
    let links = document.querySelectorAll('a[data-hovercard-type="pull_request"]')
    for (let a of links) {
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
    }
  }
}

const obs = new MutationObserver(tweak)

function observe() {
  obs.observe(document, {attributes: false, childList: true, subtree: true})
}

function tweak() {
  obs.disconnect()
  replaceIssuesWithPulls()
  replaceActionsWithRequested()
  replaceCodeFont()
  openPRsInNewTab()
  observe()
}

tweak()
