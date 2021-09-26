const template = document.createElement("template");
template.innerHTML = `
<style>
    :host {
        display: flex;
        flex-direction: column;
        background-color: #778;
        color: white;
        padding: 1em;
        margin: 1em;
    }
</style>

<slot name="titulo">
    <h2>Este é o título default</h2>
</slot>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam doloribus quia dolor, atque omnis
    officia est minima doloremque fuga corrupti quae ipsum?</p>

<slot name="conteudo"></slot>

<slot></slot>
`

class HelloWorldElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' })

        this.shadowRoot.append(template.content.cloneNode(true));
    }
}

customElements.define('hello-world', HelloWorldElement)