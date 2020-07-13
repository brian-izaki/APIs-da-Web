// este banco é limitado apenas a armazenar STRING
// recupera o objeto 
const storage = window.localStorage;

// define os dados como chave-valor
storage.setItem('nome', 'Brian');
storage.setItem('idade', 20);

// recupera o dado pela chave
let nome = storage.getItem('nome');
let idade = storage.getItem('idade')

// apaga o dado pela chave
// storage.removeItem('nome');


// utilizando JSON expande o horizonte dos dados armazenados
const json = {'nome': 'Brian', 'idade': 20}
storage.setItem('json', JSON.stringify(json));
let getJson = JSON.parse(storage.getItem('json'));
// console.log(getJson)
 
let nomeJson = getJson.nome;
let idadeJson = getJson.idade;


console.log( `sem json: `,typeof nome, typeof idade)
console.log( `com json: `,typeof nomeJson, typeof idadeJson)

