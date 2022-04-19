/*
Escreva um programa em C para ler o número de lados de um polígono regular, e a
medida do lado. Calcular e imprimir o seguinte:
  ● Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor do seu
  perímetro;
  ● Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área;
  ● Se o número de lados for igual a 5 escrever PENTÁGONO;
  ● Em qualquer outra situação escrever Polígono não identificado.
*/

#include <stdio.h>

int main()
{
  int numlados, medlados;
  printf("Insira o número de lados: ");
  scanf("%d", &numlados);
  printf("Insira a medida de cada lado: ");
  scanf("%d", &medlados);

  if (numlados == 3)
  {
    printf("Triângulo com valor de perímetro igual a %d.", medlados * 3);
  }
  else if (numlados == 4)
  {
    printf("Quadrado com valor de área igual a %d.", medlados * medlados);
  }
  else if (numlados == 5)
  {
    printf("Pentágono.");
  }
  else
  {
    printf(" Polígono não identificado.");
  }
  return 0;
}