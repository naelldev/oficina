//  Acrescentando propriedades a um objeto:
exemploObjeto.nomePropriedade1 = "propriedade a";   // forma mais comum de adicionar.

//  Quando o nome possui espaços ou quando ele é uma variável, utiliza-se colchetes:
exemploObjeto['nome da propriedade 2'] = "propriedade b";
let nomeVariavel = "propriedade3";
exemploObjeto[nomeVariavel] = "propriedade c";

//  Deletando propriedades de um objeto:
delete exemploObjeto.nomePropriedade1;

//  Verificando a existência de uma propriedade dentro de um objeto:
exemploObjeto.hasOwnProperty(nomeVariavel);
    // ou
nomeVariavel in exemploObjeto;

//  Iteração através de objetos por meio do 'for ... in':
for (let variavelUm in exemploObjeto) {
    console.log(variavelUm);
}

//  Gerar array com as chaves de um objeto:
let umaArrayAqui = Object.keys(exemploObjeto);