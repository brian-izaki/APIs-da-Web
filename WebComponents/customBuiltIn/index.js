// é extendido o tipo de um elemento existente
class ListaColorida extends HTMLUListElement {
  constructor() {
    super();

    const lis = this.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++) {
      // hsl = hue, saturarion, lightning
      lis[i].style.color = `hsl(${(i/lis.length) * 360}, 100%, 50%)`
    }
  }
}

// diferente do que é visto no hello world, quando é para customizar um elemento, 
// é passando o terceiro argumento que se refere a qual elemento HTML está sendo extendido.
customElements.define('lista-colorida', ListaColorida, { extends: "ul" })