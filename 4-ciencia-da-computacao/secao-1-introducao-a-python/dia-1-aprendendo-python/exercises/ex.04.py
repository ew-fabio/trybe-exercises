# 🚀 Exercício 4:
# Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".


def biggest_name(name_list: [str]) -> str:
    result_name = ""

    for name in name_list:
        if len(result_name) < len(name):
            result_name = name

    return result_name


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
