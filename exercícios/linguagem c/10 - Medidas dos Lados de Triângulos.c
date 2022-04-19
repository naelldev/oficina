/*
Escreva um programa em C que leia as medidas dos lados de um triângulo e escreva
se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO. Observação:
  ● Triângulo equilátero: Possui os 3 lados iguais;
  ● Triângulo isósceles: Possui 2 lados iguais;
  ● Triângulo escaleno: Possui 3 lados diferentes.
*/

#include <stdio.h>

int main()
{
  int lado1, lado2, lado3;
  printf("Insira a medida do primeiro lado: ");
  scanf("%d", &lado1);
  printf("Insira a medida do segundo lado: ");
  scanf("%d", &lado2);
  printf("Insira a medida do terceiro lado: ");
  scanf("%d", &lado3);

  if ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3))
  {
    printf("Triângulo equilátero.");
  }
  else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3))
  {
    printf("Triângulo isósceles.");
  }
  else if ((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3))
  {
    printf("Triângulo escaleno.");
  }
  else
  {
    printf("Valor inválido.");
  }
  return 0;
}