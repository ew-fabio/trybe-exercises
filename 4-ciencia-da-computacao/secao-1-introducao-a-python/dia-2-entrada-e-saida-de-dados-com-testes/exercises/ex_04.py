# Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule
# a porcentagem de livros em cada categoria em relação ao número total
# de livros. O resultado deve ser escrito em um arquivo no formato
# CSV como o exemplo abaixo.

# Saída:

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878


import csv
import json


def percentage_of_book_categories():
    with open("ex_041.json") as file:
        books_list = json.load(file)

    all_categories_counted = {}

    for book in books_list:
        categories_list = book["categories"]
        for categorie in categories_list:
            if categorie not in all_categories_counted:
                all_categories_counted[categorie] = 0
            all_categories_counted[categorie] += 1

    with open("ex_042.csv", "w", encoding="utf-8") as file:
        writer = csv.writer(file)

        headers = ["categoria", "porcentagem"]
        writer.writerow(headers)

        for categorie, counter in all_categories_counted.items():
            row = [categorie, (counter / len(books_list))]
            writer.writerow(row)


if __name__ == "__main__":
    percentage_of_book_categories()
