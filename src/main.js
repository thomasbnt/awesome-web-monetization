import { createApp } from 'vue'
import App from './App.vue'

// Highlight.js
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage('javascript', javascript);

const app = createApp(App)
app.use(hljsVuePlugin)
app.mount('#app')
