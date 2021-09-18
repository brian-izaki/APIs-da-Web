class MeuRelogioElement extends HTMLElement {
  constructor() {
    super();
    console.log('constructor do componente');
    this.attachShadow({ mode: 'open' });
    
    this.timer = null;

    this.spanEl = document.createElement('span');
    this.spanEl.textContent = getHMS();;
    this.shadowRoot.append(this.spanEl)
  }

  connectedCallback() {
    console.log('componente conectado');
    this.spanEl.textContent = getHMS();

    this.timer = setInterval(() => {
      this.spanEl.textContent = getHMS();
      console.log('segundos');
    }, 1000)
  }

  disconnectedCallback() {
    clearInterval(this.timer)
    console.log('componente finalizado');
  }
}

function getHMS() {
  const dh = new Date();
  const h = formatNumber(dh.getHours());
  const m = formatNumber(dh.getMinutes());
  const s = formatNumber(dh.getSeconds());

  return `${h}:${m}:${s}`;
}

function formatNumber(n) {
  return String(n).padStart(2, "0");
}

// do html
customElements.define('meu-relogio', MeuRelogioElement);
const meuRelogio = document.querySelector("#meu-relogio")

function addComponent() {
  document.body.append(meuRelogio)
}

function removeComponent() {
  meuRelogio.remove()
}