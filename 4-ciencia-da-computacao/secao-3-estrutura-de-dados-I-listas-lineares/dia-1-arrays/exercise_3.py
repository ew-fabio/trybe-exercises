# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.

def products_combinations(products):
    combinations = 0

    for i in range(len(products)):
        for j in range(i + 1, len(products)):
            if products[i] == products[j]:
                combinations += 1

    return combinations


if __name__ == '__main__':
    products = [1, 3, 1, 1, 2, 3]
    print(products_combinations(products))

    products = [1, 1, 2, 3]
    print(products_combinations(products))
