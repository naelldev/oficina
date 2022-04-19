/*
Escreva um programa em C que leia o valor de 3 ângulos de um triângulo e escreva se
o triângulo é acutângulo, retângulo ou obtusângulo. Observação:
  ● Triângulo retângulo: possui um ângulo reto (90 graus);
  ● Triângulo obtusângulo: possui um ângulo obtuso (ângulo maior que 90 graus);
  ● Triângulo acutângulo: possui 3 ângulos agudos (ângulo menor que 90 graus).
*/

#include <stdio.h>

int main()
{
  int angulo1, angulo2, angulo3;
  printf("Insira o valor do primeiro ângulo do triângulo: ");
  scanf("%d", &angulo1);
  printf("Insira o valor do segundo ângulo do triângulo: ");
  scanf("%d", &angulo2);
  printf("Insira o valor do terceiro ângulo do triângulo: ");
  scanf("%d", &angulo3);

  if ((angulo1 == 90) && (angulo2 == 90) && (angulo3 == 90))
  {
    printf("Triângulo retângulo.");
  }
  else if ((angulo1 > 90) || (angulo2 > 90) || (angulo3 > 90))
  {
    printf("Triângulo obtusângulo.");
  }
  else if ((angulo1 < 90) && (angulo2 < 90) && (angulo3 < 90))
  {
    printf("Triângulo acutângulo.");
  }
  else
  {
    printf("Valor inválido.");
  }
  return 0;
}