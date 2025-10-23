const legacyToggleElement = document.getElementById('legacyToggle');

async function renderOption() {
  const rulesetIds = await browser.declarativeNetRequest.getEnabledRulesets()
  console.log('Current rulesets : ', rulesetIds.join(', '))
  legacyToggleElement.checked = rulesetIds.includes('rules-legacy')
}

function setRuleset(event) {
  browser.runtime.sendMessage(event.target.checked);
  browser.storage.local.set({preferLegacy: event.target.checked});
}

document.addEventListener('DOMContentLoaded', renderOption);
legacyToggleElement.addEventListener('change', setRuleset);
