# Awesome Web Monetization [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

> Awesome stuffs about Web Monetization. Learn more, check modules and others tools.

<img src="assets/wm_logo_animated.svg" alt="Logo Web Monetization" align="right" width="20px" />

## Menu

- [About Web Monetization](#About-Web-Monetization)
- [How to start monetize my website](#How-to-start-monetize-my-website)
- [Resources](#Ressources)
    - [Packages](#Packages)
    - [Tutorials](#Tutorials)
    - [Articles](#Articles)
    - [Newsletters](#Newsletters)
    - [Videos](#Videos)
    - [Books](#Books)
    - [Blogs](#Blogs)
    - [Courses](#Courses)
    - [Tools](#Tools)
    - [Community](#Community)
    - [Miscellaneous](#Miscellaneous)


## About Web Monetization

Web Monetization is a web service that allows you to send money directly in your browser. — If you want you know more, see :

- [Webmonetization.org](https://webmonetization.org/)
- [Documentation](https://webmonetization.org/docs/getting-started.html)
- [How Web Monetization work for paying payments](https://webmonetization.org/docs/sending)
- [How Web Monetization work for receiving payments](https://webmonetization.org/docs/receiving)
- [Specifications](https://webmonetization.org/specification.html)
- [ILP Forum](https://forum.interledger.org/)
___
- [Interledger : Open protocol suite for sending payments across different ledgers](https://interledger.org/)
- [Coil : Web monetized content in your browser while supporting sites you love in real time.](https://coil.com)

## How to start monetize my website

If you would like to monetize your content, you must have a Wallet and Provider account. See below the platforms that allow you to use them.



| **Wallets** |  |  |  |  |
|-------------|------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Name | [![Uphold](https://webmonetization.org/img/uphold_logo.svg)](https://uphold.com) | [![GateHub](https://webmonetization.org/img/gatehub_logo.svg)](https://gatehub.net) | [![Stronghold](https://webmonetization.org/img/stronghold_logo.svg)](https://stronghold.co/real-time-payments#coil) | [New Wallet ? Create a issue !](https://github.com/thomasbnt/awesome-web-monetization/issues) |
| Fees | None | SEPA: 1.00 EUR < 50,000 EUR<br>Wire: $15 min ($150 max) | $3 withdrawal fee |  |
If you are already use XRP Tipbot, [check here to migrate on Uphold](https://webmonetization.org/docs/xrptipbot).
| **Payments** |  |
|--------------|----------------------------------------------------------------------------|
| Name | [![Coil](https://webmonetization.org/img/coil_logo.svg)](https://coil.com) |
On your webpage, intregate your `monetization` tag on meta
```html
<meta name='monetization' content='$ilp.example.com/123456789'>
```
and detect if `monetization` is possible, then work 

```js
if (document.monetization) {
    document.monetization.addEventListener('monetizationstart', () => {
        console.log("🎉 Awesome ! You use Web Monetization.\nMore information https://webmonetization.org")
    })
}
```
## Ressources
##### Packages 
##### Tutorials 
##### Articles
##### Newsletters
##### Videos
##### Books
##### Blogs
##### Courses
##### Tools
##### Community
##### Miscellaneous
 
___
## Contribute

Contributions welcome ! Read the [contribution guidelines](contributing.md) first.
You can also contribute to share this repository and Web Monetization with your friends. 😄

## License

[![License](https://img.shields.io/github/license/thomasbnt/awesome-web-monetization.svg?style=for-the-badge)](https://github.com/thomasbnt/awesome-web-monetization/blob/master/LICENSE)

To the extent possible under law, Thomas Bnt has waived all copyright and
related or neighboring rights to this work.

