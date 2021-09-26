class HelloWorldElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' })

        const tpl = document.getElementById('template-wc');

        this.shadowRoot.append(tpl.content.cloneNode(true));
    }
}

customElements.define('hello-world', HelloWorldElement)