# BOM Secure Redirect

<img src="/extension/icon.svg" width="100%" height="130">

A Firefox browser extension to redirect the Bureau of Meteorology (BOM) website to its HTTPS capable version.

[<img src="/img/get-the-addon-fx-apr-2020.svg" height="50">](https://addons.mozilla.org/firefox/addon/bom-secure-redirect/)

## Why?

If you've ever visited the BOM website, chances are you were greeted by an 'Insecure' warning and message like below about HTTPS connections not being supported. For legacy or other reasons, the BOM sticks out as one of a few major web properties still only offering plain old HTTP :(

<img src="/img/https-not-supported.png" height="600">

Lesser known is the BOM seem to make a HTTPS enabled mirror of the site available at https://reg.bom.gov.au. Enter, this extension.

## Other

The extension is built to the latest Manifest V3 specification, taking advantage of the rule-based [declarativeNetRequest](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#comparison_with_the_webrequest_api) API

Extension icon adapted from the [BOM Weather] (http://www.bom.gov.au/app/) app logo. <-- Use this same link for testing the extension is redirecting correctly!
