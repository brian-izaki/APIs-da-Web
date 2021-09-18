class MeuContador extends HTMLElement {
  constructor() {
    super();

    // cria o shadow dom
    this.attachShadow({ mode: "open" });

    /**
     * adiciona CSS incorporado
     */
    // const styleEl = document.createElement("style");
    // styleEl.textContent = `
    //   button {
    //     margin-left: 1em;
    //   }
    // `;

    /**
     * adiciona CSS externo
     */
    const linkEl = document.createElement("link");
    linkEl.setAttribute("rel", "stylesheet")
    linkEl.setAttribute("href", "./style.css")

    let counter = 0;

    const spanEl = document.createElement("span");
    spanEl.textContent = counter;

    const controlsEl = document.createElement("div");
    controlsEl.className = 'contador-controls'

    const incrementEl = document.createElement("button");
    incrementEl.textContent = 'Incrementar';
    incrementEl.addEventListener('click', () => {
      counter++;
      spanEl.textContent = counter;
    })

    const decrementEl = document.createElement("button");
    decrementEl.textContent = 'Decrementar';
    decrementEl.addEventListener('click', () => {
      counter--;
      spanEl.textContent = counter;
    })

    controlsEl.append(incrementEl, decrementEl)
  
    /**
     * adidciona elementos ao ShadowDOM
     */
    this.shadowRoot.append(linkEl, spanEl, controlsEl)
  }
}

customElements.define('meu-contador', MeuContador);