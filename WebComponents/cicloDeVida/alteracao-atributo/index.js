class HelloWorldElement extends HTMLElement {

  static observedAttributes = ["data-name"];

  constructor() {
    super();

    this.attachShadow({mode: 'open'})

    this.spanEl = document.createElement('span')
    
    this.shadowRoot.append(this.spanEl)
  }

  connectedCallback() {
    this.spanEl.textContent = `Hello ${this.dataset.name}`
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName === 'data-name') {
      this.spanEl.textContent = `Hello ${newValue}`
    }
  }
} 

customElements.define('hello-world', HelloWorldElement);