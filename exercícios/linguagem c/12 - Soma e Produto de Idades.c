/*
Escreva um programa em C que leia a idade de 2 homens e 2 mulheres (considere que
a idade dos homens será sempre diferente, assim como das mulheres). Calcule e
escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto
das idades do homem mais novo com a mulher mais velha.
*/

#include <stdio.h>

int main()
{
  int homem1, homem2, mulher1, mulher2, mnovo, mvelho, fnova, fvelha;
  printf("Insira a idade do primeiro homem: ");
  scanf("%d", &homem1);
  printf("Insira a idade do segundo homem: ");
  scanf("%d", &homem2);
  printf("Insira a idade da primeira mulher: ");
  scanf("%d", &mulher1);
  printf("Insira a idade do segundo mulher: ");
  scanf("%d", &mulher2);

  if (mulher1 > mulher2)
  {
    fvelha = mulher1;
    fnova = mulher2;
  }
  else
  {
    fvelha = mulher2;
    fnova = mulher1;
  }

  if (homem1 > homem2)
  {
    mvelho = homem1;
    mnovo = homem2;
  }
  else
  {
    mvelho = homem2;
    mnovo = homem1;
  }

  printf("Idades inseridas:\nHomem 01: %d\nHomem 02: %d\nMulher 01: %d\nMulher 02: %d", homem1, homem2, mulher1, mulher2);
  printf("\nA soma das idades do homem mais velho com a mulher mais nova é igual a %d.", mvelho + fnova);
  printf("\nO produto das idades do homem mais novo com a mulher mais velha é igual a %d.", mnovo * fvelha);

  return 0;
}