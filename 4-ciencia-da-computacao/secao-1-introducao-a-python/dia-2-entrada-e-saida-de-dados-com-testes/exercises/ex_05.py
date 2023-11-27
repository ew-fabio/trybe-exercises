# Realize o exercício utilizando TDD: implemente os testes e depois a função 🧪

# Escreva um programa que retorne uma lista com os valores numéricos de 1 a N,
# mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz”
# ao invés do número.

# Exemplo: 3 -> [1, 2, "Fizz"].


def fizzbuzz(number):
    numbers_list = []

    for number in range(1, number + 1):
        if number % 15 == 0:
            number = "FizzBuzz"
            numbers_list.append(number)
        elif number % 3 == 0:
            number = "Fizz"
            numbers_list.append(number)
        elif number % 5 == 0:
            number = "Buzz"
            numbers_list.append(number)
        else:
            numbers_list.append(number)

    return numbers_list


print(fizzbuzz(15))
