/*
Escreva um programa em C que peça para o usuário fornecer três números inteiros. O
programa deve exibir esses três números em ordem crescente.
*/

#include <stdio.h>

int main()
{
  int num1, num2, num3;
  printf("Digite um número: ");
  scanf("%d", &num1);
  printf("Digite outro número: ");
  scanf("%d", &num2);
  printf("Digite mais um número: ");
  scanf("%d", &num3);

  if ((num1 < num2) && (num1 < num3) && (num2 < num3))
  {
    printf("%d, %d, %d", num1, num2, num3);
  }
  else if ((num3 < num2) && (num3 < num1) && (num2 < num1))
  {
    printf("%d, %d, %d", num3, num2, num1);
  }
  else if ((num1 < num3) && (num1 < num2) && (num3 < num2))
  {
    printf("%d, %d, %d", num1, num3, num2);
  }
  else if ((num2 < num3) && (num2 < num1) && (num3 < num1))
  {
    printf("%d, %d, %d", num2, num3, num1);
  }
  else if ((num2 < num1) && (num2 < num3) && (num1 < num3))
  {
    printf("%d, %d, %d", num2, num1, num3);
  }
  else if ((num3 < num1) && (num1 < num2) && (num1 < num2))
  {
    printf("%d, %d, %d", num3, num1, num2);
  }
  else
  {
    printf("Valor inválido.");
  }

  return 0;
}