// Para exportar funções de um arquivo javascript e reaproveitá-las
// em outros arquivos, economizando assim o tempo de reescrevê-las, é possível utilizar o seguinte comando:
const função1 = x + y;
const função2 = a * b;
const função3 = c / d;

export {função1, função2, função3}; // exportando.

// Dessa forma tais funções podem ser usadas no código dos outros arquivos javascript
// apenas mencionando-as diretamente:

import {função1, função2, função3} from './export and import functions.js'; // importando.

console.log(função1, função2, função3);

// Para importar todas as funções disponíveis para exportação de um arquivo js, utiliza-se o comando:

import * as exemploImportandoTudo from './export and import functions.js';

// 'exemploImportandoTudo' passará a se comportar como um objeto, em que funções específicas podem ser
// acessadas assim como são acessadas as propriedades de um objeto:

exemploImportandoTudo.função1(2, 8);
exemploImportandoTudo.função2(6, 12);
exemploImportandoTudo.função3(10, 16);

// Para exportar um valor único utiliza-se o comando de exportação padrão:

export default function (x, z) {
    return x + z;
}

// A exportação padrão não pode ser usada para var, let ou const.

// Para importar uma exportação padrão não é necessário o uso de chaves para
// referenciar o que pretende trazer, apenas dê um nome qualquer para identificar
// aquilo que estiver importando:

import funcaoExportacaoPadrao from "./export and import functions.js";