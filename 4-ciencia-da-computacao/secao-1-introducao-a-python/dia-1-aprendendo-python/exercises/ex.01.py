# 🚀 Exercício 1:
# Crie uma função que receba dois números e retorne o maior deles.


def biggest_number(num1: float, num2: float) -> float:
    return max([num1, num2])


print(biggest_number(10.5, 10.55))


# or


def other_biggest_number(num1: float, num2: float) -> float:
    if num1 > num2:
        return num1
    return num2


print(other_biggest_number(11.5, 11.55))
