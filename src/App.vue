<template>
  <div>
    <section class='header__section'>
      <div class='row'>
        <div class='col'>
          <div class='title'>
            <img src='/src/assets/img/wm_small_icon_animated.svg' alt='Web Monetization logo' width='100' height='100'>
            <h1>Awesome Web Monetization</h1>
          </div>
          <h2>Stuffs about Web Monetization. Packages, articles, documentation links and others tools.</h2>
          <a href='https://github.com/thomasbnt/awesome-web-monetization' class='btn-main'>
            <i class='fa fa-github' aria-hidden='true'></i> See the list on GitHub
          </a>
        </div>
      </div>
    </section>
    <section class='example__section'>
      <div class='row'>
        <div class='col'>
          <p>Current Monetization State: <span id='state'></span></p>
          <pre id='container_of_script' class='scroll'></pre>
          <div id='error-no-monetization' class='error'>
            Note: In order to see any events here, you need to have an extension installed from a web monetization
            provider,
            like <a href='https://coil.com'>coil.com</a>.
            (<a href='https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca'>Chrome</a>
            or <a href='https://addons.mozilla.org/en-US/firefox/addon/coil/'>Firefox</a>)
          </div>
          <div id='error-wrong-protocol' class='error'>
            Error: This demo must be
            <a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server'>run
              from a server</a>.
          </div>
          <div id='error-timeout' class='error'>
            <p>Warning: No monetization events occurred after six seconds.
              This probably indicates that you have a web monetization extension, but no active account.
              Get one at <a href='https://coil.com'
                            rel='noopener noreferrer' target='_blank'>coil.com</a>.</p>
          </div>
          <small>This script is from
            <a href='https://testwebmonetization.com/' rel='noopener noreferrer'
               target='_blank'>testwebmonetization.com</a>
          </small>
        </div>
        <div class='col'>
          <h3>About Web Monetization</h3>
          <p>Web Monetization is a web service that allows you to send money directly in your browser.</p>
          <p>
            This is becoming more and more used on the Internet.
            Interesting for people to turn to a <b>new payment method for websites</b> such as blogs, videos,
            newsletters or shared photos whether it is monetized according to the time spent reading/watching.
            And all this natively on your computer.
          </p>
          <p>
            If you want more about the Web Monetization, motivation to publish that, know payments/wallets
            providers and more, you can check
            <a href='https://webmonetization.org/?utm_source=awesome-web-monetization&utm_medium=website'
               rel='noopener' target='_blank' class='primary-color'>
              WebMonetization.org, the official website</a>.
          </p>
          <p class='hidden' id='exclusive'>
            But you know already what is
            <span style='cursor: help;' title='Web Monetization'>WM</span> no?
            This page detected you have got Coil or other payment providers.
          </p>
          <div class='grp_buttons'>
            <button id='stop-button' class='btn'>Stop Monetization</button>
            <button id='start-button' class='btn' disabled>Start Monetization</button>
          </div>
        </div>
      </div>
    </section>
    <section class='how__section'>
      <h3>How it works?</h3>
      <p>On your webpage, integrate your monetization tag on meta :</p>
      <highlightjs class='selectAll' language='html' :code='exampleCodeMeta' />
      <p>And detect if monetization is possible, then work.</p>
      <highlightjs class='selectAll' language='JavaScript' :code='exampleCodeJavaScript' />
      <div class='how__section_image'>

      </div>
    </section>
  </div>
  <mainFooter />
</template>
<script>
import mainFooter from './components/footer.vue'
// highlight.js
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

export default {
  name: 'App',
  components: {
    mainFooter,
    highlight: hljsVuePlugin.component
  },
  data() {
    return {
      exampleCodeMeta: `<meta name='monetization' content='$ilp.example.com/123456789'>`,
      exampleCodeJavaScript: `if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    console.log('🎉 Awesome ! You use Web Monetization. More information https://webmonetization.org')
  })
}`
    }
  }
}
</script>
<style lang='scss'>
@import './assets/css/default.min.css';
@import './assets/scss/main.scss';
</style>
