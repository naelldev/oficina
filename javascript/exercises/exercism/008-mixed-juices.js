// 1. Determine how long it takes to mix a juice
// Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered. She has a hard time remembering the exact numbers because the time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.
// To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the number of minutes it takes to mix that drink.

function timeToMixJuice(name) {
    let time = 0;
    switch (name) {
      case 'Pure Strawberry Joy':
        time = 0.5
        break;
      case 'Energizer':
        time = 1.5
        break;
      case 'Green Garden':
        time = 1.5
        break;
      case 'Tropical Island':
        time = 3
        break;
      case 'All or Nothing':
        time = 5
        break;
      default:
        time = 2.5;
    }
    return time;
}

// 2. Replenish the lime wedge supply
// A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.
// Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.
// Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.

function limesToCut(wedgesNeeded, limes) {
    let i = 0, wedgesAlreadyTakes = 0;
    while((i < limes.length) && (wedgesAlreadyTakes <= wedgesNeeded)) {
      switch (limes[i]) {
        case 'small':
          wedgesAlreadyTakes += 6;
          break;
        case 'medium':
          wedgesAlreadyTakes += 8;
          break;
        case 'large':
          wedgesAlreadyTakes += 10;
          break;
        default:
          wedgesAlreadyTakes += 0;
      }
      if (wedgesNeeded !== 0) { i++ }
    }
    return i;
}


// 3. Terminar o turno
// Li Mei sempre trabalha até as 15h. Em seguida, seu funcionário Dmitry assume. Muitas vezes há bebidas que foram pedidas, mas ainda não estão preparadas quando o turno de Li Mei termina. Dmitry irá então preparar os sucos restantes.
// Para facilitar a transferência, implemente uma função remainingOrdersque leve o número de minutos restantes no turno de Li Mei e uma variedade de sucos que foram pedidos, mas ainda não preparados. A função deve retornar os pedidos que Li Mei não pode começar a preparar antes do final de seu dia de trabalho.
// O tempo restante no turno será sempre maior que 0. Além disso, os pedidos são preparados na ordem em que aparecem no array. Se Li Mei começar a misturar um certo suco, ela sempre o terminará, mesmo que tenha que trabalhar um pouco mais. Se não houver mais pedidos restantes que Dmitry precise cuidar, um array vazio deve ser retornado.

function remainingOrders(timeLeft, orders) {
    do {
      timeLeft -= timeToMixJuice(orders.shift())
    } while (timeLeft > 0);
    return orders;
}