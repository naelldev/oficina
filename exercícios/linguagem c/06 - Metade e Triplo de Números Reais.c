/*
Escreva um programa em C que peça para o usuário fornecer um número real. Se esse
número for maior que 20, imprimir sua metade, caso contrário, imprimir seu triplo.
*/

#include <stdio.h>

float main()
{
  float num;
  printf("Digite um número: ");
  scanf("%f", &num);

  if (num > 20)
  {
    printf("%f", num / 2);
  }
  else
  {
    printf("%f", num * 3);
  }

  return 0;
}