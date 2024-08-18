import { h, render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';
import { signal } from "@preact/signals";

const html = htm.bind(h)

const App = (props) => html`<div><h1>Still crossing the bleeps and dotting the bloops...</h1></div>`

render(html`<${App} />`, document.getElementById("app"))
