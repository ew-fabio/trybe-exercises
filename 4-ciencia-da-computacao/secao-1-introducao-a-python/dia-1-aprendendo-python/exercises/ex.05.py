# Exercício 5:
# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie
# uma função que retorne dois valores em uma tupla contendo a quantidade de
# latas de tinta a serem compradas e o preço total a partir do tamanho de
# uma parede (em m²).


import math


def paint_wall(dimension: int) -> (int, float):
    paint_tin = 18  # lata comercial fechada
    price = 80  # preço de cada lata
    result = math.ceil((dimension / 3) / paint_tin)

    return (result, result * price)


print(paint_wall(55))
