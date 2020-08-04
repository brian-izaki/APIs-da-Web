if (window.indexedDB){
  let db;
  
  // cria uma nova tabela no browser
  // deve verificar na "devtools > application" (Chrome) 
  const request = window.indexedDB.open('teste', 1);
  
  // funções de erro e sucesso
  request.onerror = event => {
    console.error('erro no request.onerror', event.target.errorCode)
  }
  
  request.onsuccess = event => {
    db = event.target.result;
  }
};

console.log('indexedDB não é suportado pelo browser');