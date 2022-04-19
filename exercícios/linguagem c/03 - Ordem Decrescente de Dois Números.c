/*
Escreva um programa em C que peça para o usuário fornecer dois números inteiros. O
programa deve exibir esses dois números em ordem decrescente.
*/

#include <stdio.h>

int main()
{
  int num1, num2;
  printf("Digite um número: ");
  scanf("%d", &num1);
  printf("Digite outro número: ");
  scanf("%d", &num2);

  if (num1 < num2)
  {
    printf("%d, %d", num2, num1);
  }
  else
  {
    printf("%d, %d", num1, num2);
  }

  return 0;
}