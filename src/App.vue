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
            provider.
          </div>
          <div id='error-wrong-protocol' class='error'>
            Error: This demo must be
            <a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server'>run
              from a server</a>.
          </div>
          <div id='error-timeout' class='error'>
            <p>Warning: No monetization events occurred after six seconds.
              This probably indicates that you have a web monetization extension, but no active account.</p>
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
      <div class='row'>
        <div class='col'>
          <h3>How it works?</h3>
          <p>On your webpage, integrate your monetization tag on link :</p>
          <highlightjs class='selectAll' language='html' :code='exampleCodeLink' />
          <p>And detect if monetization is possible, then work.</p>
          <highlightjs class='selectAll' language='JavaScript' :code='exampleCodeJavaScript' />
        </div>

      </div>
    </section>
    <div class='contribute__section'>
      <div class='row'>
        <div class='col'>
          <h2>
            Contribute to the project.
          </h2>
          <h3>
            Anyone can add a ressource, a plugin, script, post,
            extension, tool and more.
          </h3>
          <contributors/>
          <a class='btn-main' href='https://github.com/thomasbnt/awesome-web-monetization'>
            <i class='fa fa-github' aria-hidden='true'></i> Contribute on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
  <mainFooter />
</template>
<script>
import mainFooter from './components/footer.vue'
import contributors from './components/contributors.vue'
// highlight.js
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

export default {
  name: 'App',
  components: {
    mainFooter,
    highlight: hljsVuePlugin.component,
    contributors
  },
  data() {
    return {
      git: [this.git],
      exampleCodeLink: `<link rel="monetization" href="https://ilp.example.com/alice">`,
      exampleCodeJavaScript: `if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    console.log('🎉 Awesome ! You use Web Monetization. More information https://webmonetization.org')
  })
}`
    }
  },
  async mounted() {
    //  For the example, we'll use a button to toggle the monetization state.
    let monetizationStartEventOccurred = false
    if (window.location.protocol.indexOf('http') !== 0) {
      document.getElementById('error-wrong-protocol').style.display = 'block'
    } else if (!document.monetization) {
      document.getElementById('error-no-monetization').style.display = 'block'
    } else {
      setTimeout(function() {
        if (!monetizationStartEventOccurred) {
          document.getElementById('error-timeout').style.display = 'block'
        }
      }, 7500)
    }
    if (document.monetization) {
      const container_of_script = document.getElementById('container_of_script')
      /** scrollIntoView()
       * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
       */
      container_of_script.scrollIntoView({ behavior: 'smooth', block: 'end' })
      document.monetization.addEventListener('monetizationstart', function(event) {
        monetizationStartEventOccurred = true
        container_of_script.innerText = container_of_script.innerText + 'Monetization Started : ' +
          JSON.stringify(event.detail, null, 2) + '\n\n'
      })
      document.monetization.addEventListener('monetizationprogress', function(event) {
        container_of_script.innerText = container_of_script.innerText +
          JSON.stringify(event.detail, null, 2) + '\n\n'
      })
    }

    function showMonetizationState() {
      document.getElementById('state').innerText = document.monetization.state
    }

    if (document.monetization) {
      document.monetization.addEventListener('monetizationstop', showMonetizationState)
      document.monetization.addEventListener('monetizationpending', showMonetizationState)
      document.monetization.addEventListener('monetizationstart', showMonetizationState)
    }

    window.addEventListener('load', () => {
      if (!document.monetization) {
        document.getElementById('state').innerText = 'Not enabled in browser'
      } else {
        showMonetizationState()
      }

      const stopButton = document.getElementById('stop-button')
      const startButton = document.getElementById('start-button')
      const monetizationTag = document.querySelector('meta[name="monetization"]')

      stopButton.addEventListener('click', () => {
        monetizationTag.remove()
        stopButton.disabled = true
        startButton.disabled = false
        document.getElementById('state').classList.remove('state__color_active')
        document.getElementById('state').classList.add('state__color_inactive')
      })

      startButton.addEventListener('click', () => {
        document.head.appendChild(monetizationTag)
        stopButton.disabled = false
        startButton.disabled = true
        document.getElementById('state').classList.remove('state__color_inactive')
        document.getElementById('state').classList.add('state__color_active')
      })
    })
    const cfcl = 'color:#314759; font-size: small; font-family: \'Open Sans\', SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", sans-serif'
    if (document.monetization) {
      document.monetization.addEventListener('monetizationstart', () => {
        document.getElementById('exclusive').classList.remove('hidden')
        console.log('%c🔓 You have unlocked a exclusive content with Web Monetization.', cfcl)
      })
    }
    console.group('Informations')
    console.log('%cHello friend. — Created by Thomas Bnt and contributors.', cfcl)
    console.log('%cFollow me on GitHub : https://github.com/thomasbnt', cfcl)
    console.groupEnd()

    await fetch(
      `https://api.github.com/repos/thomasbnt/awesome-web-monetization`, {
        headers: {
          'accept': 'application/vnd.github+json',
          'content-type': 'application/json',
          'Authorization': import.meta.env.GITHUB_TOKEN
        }
      })
      .then(async res => {
        this.git = await res.json()
      })
      .catch(err => console.log(err))
  }
}
</script>
<style lang='scss'>
@import './assets/css/default.min.css';
@import './assets/scss/main.scss';
</style>
