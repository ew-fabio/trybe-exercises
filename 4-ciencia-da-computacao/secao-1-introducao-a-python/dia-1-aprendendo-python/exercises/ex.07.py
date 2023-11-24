# Exercício 7:
# Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2


def smallest_number(list_number: [float]) -> float:
    return min(list_number)


LIST = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


print(smallest_number(LIST))


# or


def other_smallest_number(list_number: [float]) -> float:
    smallest = list_number[0]

    for number in list_number:
        if number < smallest:
            smallest = number

    return smallest


LIST = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


print(other_smallest_number(LIST))
