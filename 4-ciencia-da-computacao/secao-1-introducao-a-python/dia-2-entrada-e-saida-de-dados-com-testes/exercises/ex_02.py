# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
# tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra
# deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.


import random
import time


def word_game(name):
    random_word = random.choice(["cadeira", "árvore", "caixa", "ônibus"])
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
