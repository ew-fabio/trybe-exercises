# Transforme o algoritmo criado acima(anterior) em recursivo.

def count_even_numbers(n):
    if n == 0:
        return 0

    if n % 2 == 0:
        return 1 + count_even_numbers(n - 1)
    else:
        return count_even_numbers(n - 1)


if __name__ == '__main__':
    n = int(input('Digite um número: '))
    print(f'Existem {count_even_numbers(n)} números pares entre 1 e {n}.')
