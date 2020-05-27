<img src="assets/wm_icon_animated.svg" alt="Logo Web Monetization" align="right" width="120px" />

# Awesome Web Monetization [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)


> Awesome stuffs about Web Monetization. Learn more, check modules and others tools.


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



## About Web Monetization ![](assets/small_icons/webmonetization.svg)

Web Monetization is a web service that allows you to send money directly in your browser. — If you want you know more, see :

- [Webmonetization.org](https://webmonetization.org/) 
- [Documentation](https://webmonetization.org/docs/getting-started.html)
- [How Web Monetization work for paying payments](https://webmonetization.org/docs/sending)
- [How Web Monetization work for receiving payments](https://webmonetization.org/docs/receiving)
- [Specifications](https://webmonetization.org/specification.html)
- [ILP Forum](https://forum.interledger.org/)
- [Grant For The Web](https://www.grantfortheweb.org/)
___
- [Interledger : Open protocol suite for sending payments across different ledgers](https://interledger.org/)
- [Coil : Web monetized content in your browser while supporting sites you love in real time.](https://coil.com)

## How to start monetize my website

If you would like to monetize your content, you must have a Wallet and Provider account. See below the platforms that allow you to use them.


<details><summary>More details here</summary>
<p>

| **Wallets** |  |  |  |  |
|:-----------:|:----------------------------------------------------------:|:------------------------------------------------------------:|:------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------:|
| Name | [![Uphold](https://webmonetization.org/img/uphold_logo.svg)](https://uphold.com) | [![GateHub](https://webmonetization.org/img/gatehub_logo.svg)](https://gatehub.net) | [![Stronghold](https://webmonetization.org/img/stronghold_logo.svg)](https://stronghold.co/real-time-payments#coil) | [New Wallet ?<br>Create a issue !](https://github.com/thomasbnt/awesome-web-monetization/issues/new?assignees=thomasbnt&labels=Wallet%2C+%E2%86%94+WM+repository&template=new-wallet.md&title=%5BWa%5D) |
| Fees | None | SEPA: 1.00 EUR < 50,000 EUR<br>Wire: $15 min ($150 max) | $3 withdrawal fee |  |

If you are use already XRP Tipbot, [check here to migrate on Uphold](https://webmonetization.org/docs/xrptipbot).


| **Payments** |  |
|--------------|----------------------------------------------------------------------------|
| Name | [![Coil](https://webmonetization.org/img/coil_logo.svg)](https://coil.com) |
</p>
</details>



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

###### *Any packages/modules and plugins.*

* [svelte-monetization : A minimal and lightweight wrapper for the Web Monetization API](https://github.com/sorxrob/svelte-monetization) ![](assets/small_icons/svelte.png)
* [monetize.js : An event-driven library to manage and simulate Web Monetization.](https://github.com/sunchayn/monetize.js) ![](assets/small_icons/javascript.png)
* [types-wm : TypeScript definitions for Web Monetization](https://github.com/dacioromero/types-wm) ![](assets/small_icons/typescript.png)
* [ngx-monetization : Web Monetization API for Angular !](https://github.com/CDDelta/ngx-monetization) ![](assets/small_icons/angular.png)
* [react-hook-wm : React hooks for integrating with Web Monetization.](https://github.com/dacioromero/react-hook-wm) ![](assets/small_icons/react.png)
* [react-monetize: Helpers and hooks to speed up your integration with Web Monetization API ](https://github.com/guidovizoso/react-monetize) ![](assets/small_icons/react.png)
* [wp-connect-coil : Plugin for applying Coil payment pointer meta tag to WordPress site.](https://wordpress.org/plugins/wp-connect-coil/) ![](assets/small_icons/wordpress.png)
* [xrptipbot-wordpress-widget : Wordpress Widget based on XRPTIPBOT embed code to donate content creators](https://wordpress.org/plugins/widget-xrptipbot/) ![](assets/small_icons/wordpress.png)
* [eleventy-plugin-monetization : An Eleventy plugin to monetize posts and site content](https://github.com/DanCanetti/eleventy-plugin-monetization) ![](assets/small_icons/11ty.png)
* [web-monetization-components : A suite of web components you can use on your web monetized sites](https://github.com/philnash/web-monetization-components) ![](assets/small_icons/javascript.png)

* [web-monetized-video : experimenting with web monetisation API](https://github.com/Jasmin2895/web-monetized-video) ![](assets/small_icons/javascript.png)

* [web-monetization-proxy : Simple Go proxy for injecting Web Monetization meta tags.](https://github.com/tcdowney/web-monetization-proxy) ![](assets/small_icons/go.png)

##### Tutorials 

* [Official **Getting started** from webmonetization.org](https://webmonetization.org/docs/getting-started)
* [Put exclusive content on your website](https://webmonetization.org/docs/exclusive-content)

##### Articles

* [Monetizing Content in View, Paying for what you see](https://dev.to/godwinagedah/monetizing-content-in-view-paying-for-what-you-see-462a)
* [Web Components for the Web Monetization API (serie)](https://dev.to/philnash/web-components-for-the-web-monetization-api-4ed9)

##### Newsletters

* [Newsletter of grantfortheweb.org](https://www.grantfortheweb.org/signup)

##### Videos
##### Books
##### Blogs
##### Courses
##### Tools

* [Is web monetized : A very simple tool for checking if Web Monetization is enabled](https://github.com/jkga/is-web-monetized)

* [Paytrackr : Track and manage your micropayments into one place](https://github.com/sorxrob/paytrackr) 

  > PayTrackr is the easiest and safest way to track and manage your micropayments to web monetized websites, having a web monetization provider membership.

##### Community

* [grantfortheweb.org Forum](https://forum.grantfortheweb.org/)
* [@GrantForTheWeb on Twitter](https://twitter.com/GrantForTheWeb)
* [@Coil on Twitter](https://twitter.com/Coil)
* [@CinnamonVideo on Twitter](https://twitter.com/CinnamonVideo)
* [Web Monetization tag on ![DEV](assets/small_icons/devto.svg)](https://dev.to/t/webmonetization) 

##### Miscellaneous

___
## Contribute

Contributions welcome ! Read the [contribution guidelines](contributing.md) first.
You can also contribute to share this repository and Web Monetization with your friends. 😄

If you want add a new small icon, the height must be **16px**. Put in `assets/small_icons/NAME.png`. Format PNG only accepted.

## License

[![License](https://img.shields.io/github/license/thomasbnt/awesome-web-monetization.svg?style=for-the-badge)](https://github.com/thomasbnt/awesome-web-monetization/blob/master/LICENSE)

To the extent possible under law, **Thomas Bnt** has waived all copyright and
related or neighboring rights to this work.

