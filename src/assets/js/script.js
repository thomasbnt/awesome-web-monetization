//  For the example, we'll use a button to toggle the monetization state.
(function() {
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
})()

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
