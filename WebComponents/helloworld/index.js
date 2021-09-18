class HelloWorldElement extends HTMLElement {
  constructor() {
    super();

    // pode ser construido o shadowDOM 
    this.attachShadow({ mode: "open" });
    
    const span = document.createElement("span")
    span.textContent = "Hello Weorld!!"

    this.shadowRoot.append(span);

  }


}

// o name do componente deve ter AO MENOS 1 hífen(-) é para que a API reconheça como WebComponent
window.customElements.define("hello-world", HelloWorldElement)