function transformarNotas(nota) {
    if (nota >= 90){
        console.log('Nota obtida foi: A')
    } else if (nota >= 80 && nota < 90) {
        console.log('Nota obtida foi: B')
    } else if (nota >= 70 && nota < 80) {
        console.log('Nota obtida foi: C')
    } else if (nota >= 60 && nota < 70) {
        console.log('Nota obtida foi: D')
    } else {
        console.log('Nota obtida foi: F')
    }

}

transformarNotas(59)

