/*
Escreva um programa em C que peça para o usuário fornecer dois números reais. O
programa deve somar esses dois números e se essa soma for maior que 10, os dois
números devem ser exibidos. Caso contrário, a subtração dos dois números deve ser
mostrada.
*/

#include <stdio.h>

float main()
{
  float num1, num2;
  printf("Digite um número: ");
  scanf("%f", &num1);
  printf("Digite outro número: ");
  scanf("%f", &num2);

  if ((num1 + num2) > 10)
  {
    printf("%f, %f", num1, num2);
  }
  else
  {
    printf("A subtração de %f por %f é igual a %f.", num1, num2, num1 - num2);
  }

  return 0;
}