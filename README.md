# Go Beyond Corebiz - Javascript

Projeto do curso Go Beyond. Como não era um desafio de React, mas sim de Javascript, usei React apenas pela interação de HTML com Javascript, mas não usei componentes.

## Objetivo do desafio

1. Monte um algoritmo: Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.
2. Monte um algoritmo adicionando mais funcionários e ao resultado final o nome da pessoa e formatado em tabela.
3. Transforme esse algoritmo em Javascript.

## Tempo utilizado

Usei cerca de duas horas para completar o desafio.

## Algoritmo criado incialmente

**Exercício 1:**

1. criar array de objetos vendedores
2. ler nome de vendedores[0]
3. ler salario fixo de vendedores[0]
4. ler total de vendas efetuadas de vendedores[0] em reais
5. calcular total de vendas efetuadas de vendedores[0] \* 0.15
6. limitar resultado do cálculo para duas casas decimais
7. armazenar cálculo em vendedores[0].totalAReceber

**Exercício 2:**

1. inserir nome de vendedores[i]
2. inserir salario fixo de vendedores[i]
3. inserir total de vendas efetuadas de vendedores[i] em reais
4. calcular total de vendas efetuadas de vendedores[i] \* 1.15
5. limitar resultado do cálculo para duas casas decimais
6. armazenar cálculo em vendedores[i].totalAReceber
7. mostrar array de objetos em tabela

## Print da aplicação

![Print da aplicação](demo.png)
