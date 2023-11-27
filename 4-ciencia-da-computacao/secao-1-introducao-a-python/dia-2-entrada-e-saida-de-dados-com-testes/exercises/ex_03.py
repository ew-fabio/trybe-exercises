# Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random
import time


def word_game(name):
    with open("ex_031.txt", "r") as file:
        words_list = file.readlines()

        words_list_sanitized = []
        for word in words_list:
            if "\n" in word:
                word = word[:-1]
                words_list_sanitized.append(word)

        random_word = random.choice(words_list_sanitized)
        scrambled_word = "".join(random.sample(random_word, len(random_word)))

    print(f"{name}, você terá 3 chances para acertar a palavra embaralhada.")
    print("Vamos começar?")
    time.sleep(2)

    start = input('Digite "y" para iniciar ou qualquer tecla para abortar. ')

    if start.lower() != "y":
        return print("Obrigado por participar!")

    lifes = 1

    while lifes <= 3:
        print(f"Tentativa {lifes}.")
        time.sleep(2)

        print(f"Palavra: {scrambled_word}")

        print(f"Qual é a palavra {name}?")
        user_word = input("Resposta: ")

        if user_word == random_word:
            time.sleep(2)
            return print("Parabéns...Você acertou!!!")
        else:
            time.sleep(2)
            print(f"{user_word} está errado...")
            lifes += 1

    time.sleep(1)
    print("Suas vidas acabaram, e o jogo também...")


if __name__ == "__main__":
    name = input("Digite seu nome jogador(a): ")
    word_game(name)
