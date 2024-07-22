# BOM Secure Redirect

<img src="/extension/icon.svg" width="100%" height="130">

A Firefox browser extension to redirect the Bureau of Meteorology (BOM) website to its HTTPS capable version.

[<img src="/img/get-the-addon-fx-apr-2020.svg" height="50">](https://addons.mozilla.org/firefox/addon/bom-secure-redirect/)

## Background

If you've ever visited the BOM website, chances are you were greeted by an 'Insecure' warning and/or message as below about HTTPS connections not being supported. For legacy or other reasons, the BOM sticks out as one of a few major web properties still only offering plain old HTTP :(

<img src="/img/https-not-supported.png" height="500">

Lesser known is the BOM seem to make a HTTPS enabled mirror of the site available at https://reg.bom.gov.au. Enter this extension.

> [!NOTE]
> In late June 2024, the new beta.bom.gov.au test site was [announced](https://media.bom.gov.au/releases/1229/bureau-of-meteorologys-new-test-website-now-available-to-the-community/) offering enhanced security (Yes, including HTTPS!). The BOM plan for it to eventually supersede the existing site, which should remove the need for this extension

## Other

The extension is built to the latest Manifest V3 specification, taking advantage of the rule-based [declarativeNetRequest](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#comparison_with_the_webrequest_api) API

Latest Firefox releases should prompt for required permissions (to www<span/>.bom.gov.au and bom.gov.au) on extension install. To check permissions have been granted, click the Extensions toolbar icon > Manage extensions > BOM Secure Redirect > Permissions tab, and ensure both entries are toggled on

Extension icon adapted from the [BOM Weather](http://www.bom.gov.au/app/) app logo. <-- Use this same link for testing the extension is redirecting correctly
