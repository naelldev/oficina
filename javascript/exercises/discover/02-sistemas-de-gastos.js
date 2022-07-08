const conta = {
    incomes: [6478.78, 334, 7397, 7382],
    expenses: [7374, 64, 2893.65]
};

function somarValoresDaConta(arrayName) {
    let total = 0;
    for (let value of arrayName) {
        total += value;
    }
    return total;
}

function balanceCalc() {
    const incomesTotal = somarValoresDaConta(conta.incomes);
    const expensesTotal = somarValoresDaConta(conta.expenses);
    console.log(`Receita total: ${incomesTotal.toFixed(2)}`);
    console.log(`Despesas totais: ${expensesTotal.toFixed(2)}`);
    const saldo = incomesTotal - expensesTotal;
    if (saldo >= 0) {
        console.log(`Saldo positivo. Valor: ${saldo.toFixed(2)}`);
    } else {
        console.log(`Saldo negativo. Valor: ${saldo.toFixed(2)}`);
    }
}

balanceCalc();