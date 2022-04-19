/*
Escreva um programa em C que peça para o usuário fornecer seu peso em quilogramas
e sua altura em metros, ambos números reais. O programa deve calcular o IMC (Índice
de Massa Corpórea) do usuário e no final deve exibir, além do índice, qual a situação do
usuário na forma de uma mensagem, baseando-se nas seguintes regras:
  ● Abaixo de 18,5: Você está abaixo do peso ideal.
  ● Entre 18,5 e 24,9: Parabéns! Você está em seu peso normal!
  ● Entre 25,0 e 29,9: Você está acima de seu peso (sobrepeso).
  ● Entre 30,0 e 34,9: Obesidade grau I.
  ● Entre 35,0 e 39,9: Obesidade grau II.
  ● 40,0 e acima: Obesidade grau III.
  ● O cálculo do IMC é feito usando a seguinte fórmula: 𝑝/ℎ^2, onde “p” é o peso (em quilogramas)
  e “h” é o valor da altura (em metros).
*/

#include <stdio.h>

float main()
{
  float peso, altura, imc;
  printf("Digite seu peso em quilogramas: ");
  scanf("%f", &peso);
  printf("Digite sua altura em metros: ");
  scanf("%f", &altura);

  imc = peso / (altura * altura);

  if (imc < 18.5)
  {
    printf("Seu IMC é %f. Você está abaixo do peso ideal.", imc);
  }
  else if ((18.5 <= imc) && (imc <= 24.9))
  {
    printf("Seu IMC é %f. Parabéns! Você está em seu peso normal!", imc);
  }
  else if ((25.0 <= imc) && (imc <= 29.9))
  {
    printf("Seu IMC é %f. Você está acima de seu peso (sobrepeso).", imc);
  }
  else if ((30.0 <= imc) && (imc <= 34.9))
  {
    printf("Seu IMC é %f. Obesidade grau I.", imc);
  }
  else if ((35.0 <= imc) && (imc <= 39.9))
  {
    printf("Seu IMC é %f. Obesidade grau II.", imc);
  }
  else if (imc > 40)
  {
    printf("Seu IMC é %f. Obesidade grau III.", imc);
  }
  else
  {
    printf("Valor inválido.");
  }

  return 0;
}