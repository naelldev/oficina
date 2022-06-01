const express = require('express') // inclusão dos pacotes.
const app = express() // instanciamento do express.
const port = 3000 // definição da porta.

// criando serviço com método GET, path (caminho) configurado
// como "barra" ('/') e parâmetros de requisição e resposta.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// subindo o servidor web na porta indicada anteriormente e
// ouvindo todos os pedidos que chegarem a ela.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
