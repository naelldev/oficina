/*
Escreva um programa em C para ler 3 valores (considere que não serão informados
valores iguais) e escrever a soma dos 2 maiores.
*/

#include <stdio.h>

int main()
{
  int num1, num2, num3, maior1, maior2;
  printf("Digite um número: ");
  scanf("%d", &num1);
  printf("Digite outro número: ");
  scanf("%d", &num2);
  printf("Digite mais um número: ");
  scanf("%d", &num3);

  if ((num1 > num3) && (num2 > num3))
  {
    maior1 = num1;
    maior2 = num2;
    printf("A soma de %d e %d é igual a %d.", maior1, maior2, maior1 + maior2);
  }
  else if ((num1 > num2) && (num3 > num2))
  {
    maior1 = num1;
    maior2 = num3;
    printf("A soma de %d e %d é igual a %d.", maior1, maior2, maior1 + maior2);
  }
  else if ((num2 > num1) && (num3 > num1))
  {
    maior1 = num2;
    maior2 = num3;
    printf("A soma de %d e %d é igual a %d.", maior1, maior2, maior1 + maior2);
  }
  else
  {
    printf("Os valores inseridos não são diferentes.");
  }

  return 0;
}