# 🚀 Exercício 2:
# Calcule a média aritmética dos valores contidos em uma lista.


def list_average(list_of_value: list) -> float:
    total_sum = sum(list_of_value)

    total_items = len(list_of_value)

    return total_sum / total_items


print(list_average([5, 10]))


# or


def other_list_average(list_of_value: list) -> float:
    total_sum = 0
    [number + total_sum for number in list_of_value]

    total_items = len(list_of_value)

    return total_sum / total_items


print(list_average([5, 10]))
