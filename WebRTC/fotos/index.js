'use strict'

const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const btn = document.querySelector('button');
const localImage = document.querySelector('#local');
const imgSalvo = document.querySelector('#imgSalvo');

// recupera uma imagem que esteja salvo no localStorage
localImage.onclick = function(){

  console.log(window.localStorage.getItem('imagem'))
  // é criado uma tag image
  const imgRecuperado = new Image();
  // é adicionado ao src dele o URI recuperado do localStorage
  imgRecuperado.src = window.localStorage.getItem('imagem');
  // é colocado dentro da div
  imgSalvo.appendChild(imgRecuperado)
  
}

// outra maneira de baixar seria utilizando uma tag a, na qual passa o URL no src e dps a.dowload 
btn.onclick = function (){
  console.log('__proto__', video.__proto__)
  console.log('height', video.videoHeight)

  // fazer o canvas ter msm tamnaho do video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  // renderizar imagem
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  
  // transforma o canvas em URL para que possa armazenar ele
  const img = canvas.toDataURL("image/png", 0.1) //.replace("image/png", "image/octet-stream");
  // window.location.href = img; // baixa um arquivo sem extesão por causa do MIME octet-stream
  window.localStorage.setItem("imagem", img)
  console.log(img)
}

const constraints = {
  audio: false,
  video: true,
};

function handleSucces(stream){
  console.log('Promisse -> stream', stream)
    // instancia um MediaStream
    window.stream = stream;
    // srcObject é propriedade de HTMLMediaElement (elementos de midia no HTML) carrega um src na tag video
    video.srcObject = stream;
}

function handleError(error){
  console.log("mensagem de erro : ", error.message, error.name)
  if (error.message === "Permission denied"){
    // poderia utilizar a API nativa "Permissions" (https://caniuse.com/#feat=permissions-api) 
    
  }
}

// com esta promisse o stream retorna um objeto 
// MEDIASTREAM (ela possui propriedades relacionadas com o video)
navigator.mediaDevices.getUserMedia(constraints).then(handleSucces).catch(handleError)
