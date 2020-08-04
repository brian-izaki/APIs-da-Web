'use strict'

const video = document.querySelector('video');
const canvas = document.querySelector('#canvas');
const btn = document.querySelector('button');
  

// outra maneira de baixar seria utilizando uma tag a, na qual passa o URL no src e dps a.dowload 
btn.onclick = function (e){
  console.log(video.__proto__)
  console.log(typeof video.width)
  console.log(video.videoHeight)

  // fazer o canvas ter msm tamnaho do video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  // transforma o canvas em URL para que possa armazenar ele
  const img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  // window.location.href = img; // baixa um arquivo sem extesão por causa do MIME octet-stream
  window.localStorage.setItem("imagem", img)
  console.log(img)
}

canvas.width = 500;
canvas.height = 300;

const constraints = {
  audio: false,
  video: true,
};

// com esta promisse o stream retorna um objeto 
// MEDIASTRAM (ela possui propriedades relacionadas com o video)
navigator.mediaDevices.getUserMedia(constraints)
  .then( stream => {
    console.log(stream)
    // instancia um MediaStream
    window.stream = stream;
    // srcObject é propriedade de HTMLMediaElement (elementos de midia no HTML) carrega um src na tag video
    video.srcObject = stream;
  })
  .catch(error => {
    console.log("mensagem de erro : ", error.message, error.name)
    if (error.message === "Permission denied"){
      Permissions
    }
  })