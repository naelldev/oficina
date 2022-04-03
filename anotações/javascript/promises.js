/*  As promises no javascript são funções construtoras e servem como uma promessa de que uma tarefa
    será realizada. Sua realização é, na maioria, assíncrona, podendo resultar
    em uma promessa cumprida ou como uma falha em tentar cumprí-la.
    Essa função é iniciada com 'new' por ser construtora e recebe dois parâmetros: 'resolve' para
    quando a promessa for concluída e 'reject' para quando ela falhar.
*/

const exemploPromessa = new Promise((resolve, reject) => {
    if("alguma condição aqui") {
        resolve("fulfilled, promise foi cumprida"); // resolve pode receber apenas um parâmetro.
    } else {
        reject("rejected, promise foi rejeitada");  // reject pode receber apenas um parâmetro.
      }
});

/*  Promises possuem três estados: pending, fulfilled e rejected.
    pending para quando a promise ainda está pendente, aguardando ser realizada.
    fulfilled para quando a promise é concluída com êxito.
    rejected para quando há falha em executá-la.
*/

// Utiliza-se 'then' para indicar o que deve ser executado após uma promise ser resolvida:

exemploPromessa.then(result => {
    console.log(result); // ação que deverá executar; retorna o parâmetro contido em 'resolve'.
});

// Utiliza-se 'catch' para indicar o que deve ser executado após uma promise ser rejeitada:

exemploPromessa.catch(error => {
    console.log(error); // ação que deverá executar; retorna o parâmetro contido em 'reject'.
});