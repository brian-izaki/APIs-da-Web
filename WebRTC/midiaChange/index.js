'use strict'

const video = document.querySelector('video');
const btn = document.querySelector('button');
const btnStop = document.querySelector('#stop');
const btnStart = document.querySelector('#start');



btnStart.onclick = () => {
  init();
}

btnStop.onclick = () => {
  stopVideo(video.srcObject);
}

function stopVideo(stream) {
  console.log('track inicio', stream);
  console.log('track inicio', stream.getVideoTracks() );
  
  // o seguinte código pausa o video da webcan
  const videoTracks = stream.getVideoTracks();
  const mediaAtual = videoTracks[0];

  mediaAtual.stop();

}

function init(){

  const constraints = {
    audio: false,
    video: true,
  };
  
  function handleSucces(stream){
    console.log('Promisse -> stream', stream)
      window.stream = stream;
      video.srcObject = stream;
  }
  
  function handleError(error){
    console.log("mensagem de erro : ", error.message, error.name)
  }
  
  // com esta promisse o stream retorna um objeto 
  // MEDIASTREAM (ela possui propriedades relacionadas com o video)
  navigator.mediaDevices.getUserMedia(constraints).then(handleSucces).catch(handleError)
}

