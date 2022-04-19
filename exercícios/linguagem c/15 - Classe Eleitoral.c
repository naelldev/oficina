/*
Escreva um programa em C que peça para o usuário fornecer sua idade em anos e que
exiba a classe eleitoral desse usuário, baseando-se nas seguintes regras:
  ● Abaixo de 16: Não eleitor;
  ● Entre 18 e 65: Eleitor obrigatório;
  ● Entre 16 e 18 e maior de 65 anos: Eleitor facultativo.
*/

#include <stdio.h>

int main()
{
  int idade;
  printf("Insira a sua idade: ");
  scanf("%d", &idade);

  if (idade < 16)
  {
    printf("Não eleitor");
  }
  else if ((idade >= 18) && (idade <= 65))
  {
    printf("Eleitor obrigatório");
  }
  else if ((idade >= 16 && idade < 18) || (idade > 65))
  {
    printf("Eleitor facultativo");
  }
  return 0;
}