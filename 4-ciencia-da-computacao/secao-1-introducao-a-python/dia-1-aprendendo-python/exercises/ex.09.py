# Exercício 9:
# Crie uma função que receba um número inteiro N e
# retorne o somatório de todos os números de 1 até N.
# Por exemplo, para N = 5, o valor esperado será 15.


def sum_numbers(num: int) -> int:
    return sum(range(1, num + 1))


print(sum_numbers(3))


# or


def other_sum_numbers(num: int) -> int:
    if num == 1:
        return 1

    return num + other_sum_numbers(num - 1)


print(other_sum_numbers(5))
