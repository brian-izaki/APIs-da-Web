# APIs-da-Web

Estudo de APIs nativos dos Browsers

<br>

# Executando o projeto

- Clone o repositório
- Pode utilizar o npm ou a extensão live-server do VScode para iniciar o projeto.
  - **Com npm** execute o comando npm run start
  - **Com a extensão** clique em "Go live" no canto inferior direito do VScode.

<br>

# Estudado até o momento

<details>
  <summary style="color: #FAF566; cursor: pointer">IndexedDB</summary>

## IndexedDB

- É criado um mini banco de dados no proprio navegador

### Referencias
- [CanIUse](https://caniuse.com/indexeddb)

</details>

<br>

<details>
<summary style="color: #9ACFDD; cursor: pointer">Web-RTC</summary>

## Web-RTC

- Utilizado para conexões peer-to-peer;
- Permite acessar a Câmera e microfone do dispositivo;

### Referencias
- [WebRTC.org](https://webrtc.org/)

</details>

<br>

<details>
<summary style="color: #9ACFDD; cursor: pointer">Web Component - customElements & shadowDOM</summary>

## Web Component

- São utilizadas as APIs **CustomElements** e **ShadowDOM** para poder gerar um WebComponent.
- Com ela, não é necessário o uso de um framework para gerar componentes HTML.
- é possivel criar novas tags ou customizar tags existentes com o **CustomElements** e o **ShadowDOM** gerar o conteudo em html dessa tag customizada

### Referencias
- MDN doc
  - [webComponents](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)
  - [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
  - [customElements](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components/Using_custom_elements)
- [Anotações do Notion](https://woolen-muskmelon-bff.notion.site/Web-Components-64a211cb7d7440338541284a18001a24)

</details>

<br>

<details>
<summary style="color: #9ACFDD; cursor: pointer">SVG</summary>

## SVG

- utilizado para criar desenhos e gráficos no html.
- elemento `path` é um dos elementos importantes para poder criar elementos com linhas e curvas.
  - ele possui **comandos** para representar o tipo de movimento que será feito, linha, mover, curva, etc.

### Referencias
- [w3shools](https://www.w3schools.com/html/html5_svg.asp)
- [path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)

</details>