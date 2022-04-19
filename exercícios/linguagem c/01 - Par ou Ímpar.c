/*
Escreva um programa em C que peça para o usuário fornecer um número inteiro. O
programa deve exibir se o número é par ou ímpar.
*/

#include <stdio.h>

int main()
{
  int num;
  printf("Digite um número: ");
  scanf("%d", &num);

  if (num % 2 == 0)
  {
    printf("%d é um número par.", num);
  }
  else
  {
    printf("%d é um número ímpar.", num);
  }

  return 0;
}