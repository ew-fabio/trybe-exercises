# Crie um algoritmo não recursivo para contar quantos
# números pares existem em uma sequência numérica (1 a n).

def count_even_numbers(n):
    counter = 0
    for number in range(1, n+1):
        if number % 2 == 0:
            counter += 1

    return counter


if __name__ == '__main__':
    n = int(input('Digite um número: '))
    print(f'Existem {count_even_numbers(n)} números pares entre 1 e {n}.')
