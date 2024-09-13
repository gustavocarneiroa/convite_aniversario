import { createApp } from 'vue'
import Main from './Main.vue'
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';

let deck = new Reveal({
    preloadIframes: true,
});

deck.initialize();
createApp(Main).mount('#app');