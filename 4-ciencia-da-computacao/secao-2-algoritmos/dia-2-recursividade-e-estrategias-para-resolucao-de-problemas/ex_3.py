# Crie um algoritmo recursivo que encontre,
# em uma lista, o maior número inteiro.

def big_int(numbers):
    if len(numbers) == 1:
        return numbers[0]

    if numbers[0] > numbers[1]:
        numbers[0], numbers[1] = numbers[1], numbers[0]
        numbers = numbers[1:]
        return big_int(numbers)

    if numbers[0] < numbers[1]:
        numbers = numbers[1:]
        return big_int(numbers)


if __name__ == '__main__':
    print(big_int([1, 12, 3, 9, 44, 1000000]))
