/*
Escreva um programa em C que leia as notas das 2 avaliações normais e a nota da
avaliação optativa. Caso o aluno não tenha feito a optativa deve ser fornecido um valor
negativo. Calcular a média do semestre considerando que a prova optativa substitui a
nota mais baixa entre as 2 primeiras avaliações. Escrever a média e uma mensagem
que indique se o aluno foi aprovado, reprovado ou está em exame.
*/

#include <stdio.h>

int main()
{
  int avaliacao1, avaliacao2, optativa, media;
  printf("Digite o valor da avaliação 1: ");
  scanf("%d", &avaliacao1);
  printf("Digite o valor da avaliação 2: ");
  scanf("%d", &avaliacao2);
  printf("Digite o valor da avaliação optativa: ");
  scanf("%d", &optativa);

  if (optativa == 0)
  {
    optativa = -1;
  }
  else if ((avaliacao1 < avaliacao2) || (avaliacao1 < optativa))
  {
    avaliacao1 = optativa;
  }
  else if ((avaliacao2 < avaliacao1) || (avaliacao2 < optativa))
  {
    avaliacao2 = optativa;
  }

  media = (avaliacao1 + avaliacao2) / 2;

  if (media > 5)
  {
    printf("Média: %d.\nSituação: aprovado.", media);
  }
  else if (media < 5)
  {
    printf("Média: %d.\nSituação: reprovado.", media);
  }
  else
  {
    printf("Média: %d.\nSituação: em exame.", media);
  }

  return 0;
}