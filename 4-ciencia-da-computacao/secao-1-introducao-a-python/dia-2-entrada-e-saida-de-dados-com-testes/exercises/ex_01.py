# Faça um programa que receba um nome e imprima o mesmo
# na vertical em escada invertida. Exemplo:
# PEDRO
# PEDR
# PED
# PE
# P


def print_vertical_name(name: str) -> str:
    result = ""

    for _ in name:
        result += name + "\n"

        *new_string, _ = name
        name = "".join(new_string)

    return print(result)


if __name__ == "__main__":
    name = input("Digite seu nome: ")
    print_vertical_name(name)
