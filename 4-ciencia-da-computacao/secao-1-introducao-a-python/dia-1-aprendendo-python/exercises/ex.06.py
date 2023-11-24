# Exercício 6:
# Crie uma função que receba os três lado de um
# triângulo e informe qual o tipo de triângulo formado
# ou "não é triangulo", caso não seja possível formar um triângulo.


def verify_triangle(side_1: float, side_2: float, side_3: float) -> str:
    case_1 = side_1 > side_2 + side_3
    case_2 = side_2 > side_1 + side_3
    case_3 = side_3 > side_1 + side_2

    not_triangle = case_1 or case_2 or case_3

    if not_triangle:
        return "Não é um triângulo!"

    if side_1 == side_2 == side_3:
        return "Equilátero"

    if side_1 == side_2 or side_1 == side_3 or side_2 == side_3:
        return "Isósceles"

    if side_1 != side_2 != side_3:
        return "Escaleno"


print(verify_triangle(8, 9, 10))
