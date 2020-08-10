'use strict'

const video = document.querySelector('video');
const btnStop = document.querySelector('#stop');
const btnStart = document.querySelector('#start');
const btnToogleVideo = document.querySelector('#toogleVideo');
const deviceVideoList = [];
let videoDeviceAtual = { id: '', index: 0 };

btnStart.onclick = () => {
  init();
}

btnStop.onclick = () => {
  stopVideo(video.srcObject);
}

btnToogleVideo.onclick = () => {
  videoDeviceAtual.index = videoDeviceAtual.index + 1;

  const hasDevice = Boolean(deviceVideoList[videoDeviceAtual.index]);
  console.log(hasDevice)

  if (hasDevice){
    videoDeviceAtual.id = deviceVideoList[videoDeviceAtual.index];
  }
  else{
    videoDeviceAtual.id = deviceVideoList[0];
    videoDeviceAtual.index = 0;
  }

  console.log('video atual', videoDeviceAtual);
  console.log('lista de video', deviceVideoList);

  stopVideo(video.srcObject);
  init();
}

function stopVideo(stream) {
  // console.log('track inicio', stream);
  // console.log('track inicio', stream.getVideoTracks() );
  
  // o seguinte código pausa o video da webcan
  const videoTracks = stream.getVideoTracks();
  const mediaAtual = videoTracks[0];

  mediaAtual.stop();

}

async function pegarDevices(){  
  // retorna uma lista preenchido com "inputDevicesInfo"
  const devicesList = await navigator.mediaDevices.enumerateDevices();
  // console.log('lista de inputDevicesInfo', devicesList);
  
  
  devicesList.map((device)=> {
    // verifica se o tipo do item do array é o de video
    // o id é o mais importante pois é ele que vai mostrar a camera que o usuário quer
    if (device.kind === 'videoinput'){
      deviceVideoList.push(device.deviceId);
      // console.log('nome do device', device.label, device.deviceId, device)
      // console.log('lista de devices de video', deviceVideoList)
    }
  })
  videoDeviceAtual.id = deviceVideoList[0];
}
pegarDevices();

function init(){

  // a propriedade video da constraint permite acessar qualquer dispositivo de video. 
  // apenas precisa passar o id do dispositivo. 
  // para pegar o id do dispositivo precisa pegar a resposta da promisse de mediaDevices.enumerateDevices()
  const constraints = {
    audio: false,
    // video: true,
    video: {deviceId: videoDeviceAtual.id},
  };
  
  function handleSucces(stream){
    // console.log('Promisse -> stream', stream)
    window.stream = stream;
    video.srcObject = stream;
    // vai retorna outra promisse. Se resolvida será uma lista os dispositivos de audio e video
    // return navigator.mediaDevices.enumerateDevices();
  }
  
  function handleError(error){
    console.log("mensagem de erro : ", error.message, error.name)
  }
  
  // com esta promisse o stream retorna um objeto 
  // MEDIASTREAM (ela possui propriedades relacionadas com o video)
  navigator.mediaDevices.getUserMedia(constraints).then(handleSucces).catch(handleError)
}
