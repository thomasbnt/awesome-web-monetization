/*
    Seems not really correct for scrolling on small devices.
function Scroll_to(x) {
    window.scroll({
        top: x,
        left: 0,
        behavior: 'smooth'
    })
}*/
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
        document.getElementById('x').classList.remove('hidden')
        document.getElementById('m').classList.add('b')
    }

    const stopButton = document.getElementById('stop-button')
    const startButton = document.getElementById('start-button')
    const monetizationTag = document.querySelector('meta[name="monetization"]')

    stopButton.addEventListener('click', () => {
        monetizationTag.remove()

        stopButton.disabled = true
        startButton.disabled = false
        document.getElementById('x').classList.add('hidden')
        document.getElementById('y').classList.remove('hidden')
        document.getElementById('m').classList.remove('b')
        document.getElementById('m').classList.add('n')
    })

    startButton.addEventListener('click', () => {
        document.head.appendChild(monetizationTag)
        stopButton.disabled = false
        startButton.disabled = true
        document.getElementById('x').classList.remove('hidden')
        document.getElementById('y').classList.add('hidden')
        document.getElementById('m').classList.remove('n')
        document.getElementById('m').classList.add('b')
    })
})
const cfcl = 'color:#314759; font-size: small; font-family: \'Open Sans\', SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", sans-serif'
if (document.monetization) {
    document.monetization.addEventListener('monetizationstart', () => {
        document.getElementById('exclusive').classList.remove('hidden')
        console.log("%c🔓 You have unlocked a exclusive content with Web Monetization.", cfcl)
    })
}
console.group("Informations")
console.log('%cHello friend. — Created by Thomas Bnt and contributors.', cfcl)
console.log('%cFollow me on GitHub : https://github.com/thomasbnt', cfcl)
console.groupEnd()
