/*  Para encontrar uma parte específica de uma string e verificar se ela está presente ou não,
    é necessário o uso de expressões regulares através da função '.test()' da seguinte forma:
*/
let testandoString = "String aleatória apenas para teste.";
let testandoRegEx = /aleatória/;    // a parte selecionada que deseja extrair precisa estar dentro de barras.
testandoRegEx.test(testandoString); // tal comando retornará 'true', pois a palavra "aleatória" está na string.

/*  Tal forma de busca, no entanto, retornará 'false' se a string estiver escrita de forma diferente
    do que foi solicitado buscar como, por exemplo, "Aleatória", "ALEATÒRIA" e quaisquer outras formas que não
    sejam exatamente "aleatória". Isso pode ser contornado utilizando o operador de alternativa '|'.
    Exemplo:
*/
let testandoRegEx2 = /aleatória|Aleatória|ALEATÓRIA/; // a busca então levará também em conta essas opções.
testandoRegEx2.test(testandoString);

/*  Outra forma ainda mais eficaz de resolver isso está no uso de uma flag para sinalizar aquilo que deseja
    ignorar na busca. No caso, caixas altas e baixas (letras maiúsculas e minúsculas).
*/
let testandoRegEx3 = /aleatória/i; // a busca então ignorará todas as diferenciações de caixas.
testandoRegEx3.test(testandoString);

//  Para extrair essa parte localizada, utiliza-se a função '.match()' da seguinte forma:
"String aleatória apenas para teste.".match(/apenas/);
//  Ou então:
testandoString.match(testandoRegEx);

// Para extrair mais de um dos resultados encontrados, é necessário usar a flag global 'g'.
let testandoString2 = "Repetição, repetição e REPETIÇÃO";
let testandoRegEx4 = /repetição/gi;     // flags: global e ignore, respectivamente.
testandoString2.match(testandoRegEx4);  // irá retornar todas as palavras "repetição" presentes na string.

/*  O caractere curinga é um caractere omitido na solicitação de busca por um ponto. Dessa forma, as funções
    'test' e 'match' irão trazer qualquer palavra na string que contenha parte dos caracteres pedidos, mesmo
    que sejam palavras diferentes.
    Exemplo:
*/
let testandoString3 = "run, sun, fun, pun, nun e bun";
let testandoRegEx5 = /.un/; // utilização do ponto para omitir um caractere.
testandoRegEx5.test(testandoString3);

/*  Para uma busca abrangente porém mais seletiva, é possível fazer o uso de colchetes para destacar as
    variações específicas que deseja encontrar da seguinte forma:
*/
let bigString = "big";
let bagString = "bag";
let bugString = "bug";
let bogString = "bog";
let bgRegExes = /b[aiu]g/;  // as colchetes contém as vogais requisitadas, tornando a busca mais filtrada.
bigString.match(bgRegExes);
bagString.match(bgRegExes);
bugString.match(bgRegExes);
bogString.match(bgRegExes); // como "bog" não possui nenhuma das vogais requisitadas, o valor retornado será 'null'.

/*  Para capturar letras dentro de um intervalo alfabético como, por exemplo, do "a" até o "f"
    utiliza-se o hífen.
*/
let catString = "cat";
let batString = "bat";
let matString = "mat";
let afRegEx = /[a-f]at/;
catString.match(afRegEx);
batString.match(afRegEx);
matString.match(afRegEx); // 'matString' retornará 'null'.

//  O mesmo também vale para números:
let testandoString4 = "Testando 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12";
let testandoRegEx6 = /[0-9]/;
testandoString4.match(testandoRegEx6);

/*  Para criar exceções em relação a aquilo que deseja capturar em uma string, é necessário o uso do
    símbolo '^' para especificar a classe de caracteres negados, assim como no exemplo:
*/
let testandoString5 = "Testando expressões regulares.";
let testandoRegEx7 = /[^a-u]/gi; // tal comando excluirá todas as vogais da string, retornando apenas consoantes.
testandoString5.match(testandoRegEx7);

/*  Esse mesmo símbolo também pode ser usado para encontrar o conteúdo apenas se ele estiver localizado no
    início da string. Para isso, no entanto, ele precisa estar fora de colchetes, tal como:
*/
let comecoString = "Ricky está no início desta string.";
let comecoRegEx = /^Ricky/;
comecoRegEx.test(comecoString); // retornará 'true'.
let naoComeco = "Você não pode encontrar Ricky no começo agora.";
comecoRegEx.test(naoComeco);    // retornará 'false'.

/* Inversamente, para encontrar conteúdos no final de uma string utiliza-se o símbolo '$'.
*/
let finalString = "Ricky está no início desta string.";
let finalRegEx = /string$/;
finalRegEx.test(finalString); // retornará 'true'.
let naoFinal = "Você não pode encontrar string no começo agora.";
finalRegEx.test(naoFinal);    // retornará 'false'.

/*  Busca por uma ou mais repetições consecutivas utiliza-se o símbolo '+' seguido do caractere que se repete.
    Exemplo:
*/
let testandoString6 = "Mississipi";
let testandoRegEx8 = /[s+]/gi;
testandoString6.match(testandoRegEx8);

/*  Busca por zero ou mais repetições consecutivas utiliza-se o símbolo '*' seguido do caractere que se repete.
    Exemplo:
*/
let testandoString7 = "goooool!";
let testandoString8 = "gut feeling";
let testandoString9 = "over the moon";
let testandoRegEx9 = /[go*]/;
testandoString7.match(testandoRegEx9);  // retornará "gooooo".
testandoString8.match(testandoRegEx9);  // retornará "g".
testandoString9.match(testandoRegEx9);  // retornará 'null'.

/*  Para definir a quantidade mínima e máxima de repetições consecutivas que deseja localizar, utiliza-se chaves
    contendo os valores necessários.
    Exemplo:
*/
let testandoString12 = "aaaah";
let testandoString13 = "aah";
let testandoRegEx12 = /a{3,5}h/;        // os valores de repetição são passados para dentro das chaves.
testandoRegEx12.test(testandoString12); // retornará 'true';
testandoRegEx12.test(testandoString13); // retornará 'false';

/*  Em '{3,5}' o primeiro valor inserido será um número mínimo de repetições enquanto o segundo será um número
    máximo. Para obter um mínimo sem especificar o máximo, basta deixar a chave apenas com o primeiro valor
    seguido de uma vírgula '{3,}'. O inverso se aplica para quando deseja obter o máximo sem especificar o
    mínimo: '{,5}'.
*/
let testandoRegEx13 = /a{3,}h/;   
let testandoRegEx14 = /a{,5}h/;   

/*  Já para definir um valor exato de repetições, sem mínimo e/ou máximo, insere-se um valor único dentro
    das chaves, ausente de vírgula:
*/
let testandoRegEx15 = /a{3}h/;   


/*  Capturas Gananciosas são formas de busca que retornam a maior string possível que atenda ao padrão
    solicitado, assim como no código abaixo:
*/
let testandoString10 = "titanic"
let testandoRegEx10 = /t[a-z]*i/;
testandoString10.match(testandoRegEx10); // retornará "titani".

/*  Capturas Preguiçosas são formas de busca que retornam a menor string possível que atenda ao padrão
    solicitado, assim como no código abaixo:
*/
let testandoString11 = "titanic"
let testandoRegEx11 = /t[a-z]*?i/;
testandoString11.match(testandoRegEx11); // retornará "ti".

/*  A captura de caracteres alfanúmericos (letras e números) em sua totalidade pode ser definida de uma forma
    mais simplificada que a classe de caractere '[A-Za-z0-9_]', sendo ela da seguinte maneira:
*/
let selecionaTodosAlfanumericos = /\w/;   // retornará letras e números de uma string.

/*  De forma contrária, também é possível usar tal comando para buscar a exceção aos alfanúmericos, ou seja,
    tudo aquilo dentro de uma string que não seja letras ou números. Para isso, utiliza-se o W em maiúsculo:
*/
let naoSelecionaAlfanumericos = /\W/; // retornará tudo o que não for letras e números.

//  Outra forma simplificada, porém destinada para a captura somente de números, é através do comando:
let selecionaNumeros = /\d/;  // retornará apenas números.

//  Assim como no exemplo do '\W', capturar exceções a números pode ser feito através de um D maiúsculo:
let naoSelecionaNumeros = /\D/;  // retornará tudo o que não for números.

//  Para capturar espaços em branco:
let selecionaEspacos = /\s/;

//  Para capturar tudo, exceto espaços em branco:
let naoSelecionaEspacos = /\S/;

/*  A verificação da existência de um padrão opcional dentro de uma string, que pode ou não existir, se dá
    através do ponto de interrogação:
*/
let testandoString14 = "color";
let testandoString15 = "colour";
let testandoRegEx16= /colou?r/;         // o caractere "u" se torna opcional.
testandoRegEx16.test(testandoString14); // retornará 'true'.
testandoRegEx16.test(testandoString15); // retornará 'true'.

// A substituição do conteúdo de uma string pode ser realizada da seguinte forma:
let textoErrado = "The sky is silver.";
let regExCorrigindo = /silver/;
textoErrado.replace(regExCorrigindo, "blue");