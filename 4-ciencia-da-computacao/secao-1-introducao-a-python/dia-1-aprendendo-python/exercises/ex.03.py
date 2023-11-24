# Exercício 3:
# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def printing_square(num: int) -> [str]:
    if num <= 1:
        return print("O número deve ser maior que 1.")

    for n in range(0, num):
        print("x" * num)


printing_square(3)
