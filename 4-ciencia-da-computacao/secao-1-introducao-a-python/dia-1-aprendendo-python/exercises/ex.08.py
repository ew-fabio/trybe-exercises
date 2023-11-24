# Exercício 8:
# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def triangle(num: int) -> list[str]:
    if num <= 1:
        return "O número deve ser maior que 1..."

    for item in range(1, num + 1):
        print(item * "*")


triangle(5)
