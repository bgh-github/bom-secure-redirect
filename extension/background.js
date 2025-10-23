function setRuleset(preferLegacy) {
  return browser.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: preferLegacy ? ['rules-legacy']: [],
    disableRulesetIds: preferLegacy ? [] : ['rules-legacy']
  });
}

browser.runtime.onMessage.addListener(setRuleset);

browser.runtime.onInstalled.addListener(async details => {
  if (details.reason === 'update') {
    const optionKey = 'preferLegacy';
    const storageItem = await browser.storage.local.get(optionKey);
    await setRuleset(storageItem[optionKey]);
  }
});
