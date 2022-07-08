// Para converter uma string em um número inteiro, utiliza-se o seguinte comando:

parseInt("10") // A string '10' se tornará então um number.

// Em casos de divisão com strings, a conversão é feita automaticamente.

console.log("6" / "2") // Retornará 3.

// No entanto, a conversão não será realizada se o conteúdo da string não for possível de ser transcrita como número.

console.log("Texto aqui" / "2") // Retornará NaN (Not a Number).