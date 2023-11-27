# Utilizando o arquivo pokemons.json, vamos escrever um programa que sorteie
# um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária “Quem
# é esse pokemon?” até que ela o acerte. A cada erro, apresente um número de
# letras do nome daquele pokemon igual ao número de erros.

# Exemplo: O pokemon sorteado pelo programa é butterfree; a pessoa usuária
# chuta charizard; o programa deve exibir b. Em seguida, a pessoa chuta
# blastoise;
# o programa deve exibir bu;
# e assim por diante até a pessoa acertar.

# 🦜 Você pode utilizar o método choice do modulo random para sortear
# aleatoriamente um pokemon.
# Ex: random.choice(pokemon) -> {"name": "Pikachu" }.


import json
import random

with open("ex_071_bonus.json") as file:
    pokemons = json.load(file)['results']

pokemon = random.choice(pokemons)
name = pokemon['name']
# print(name)

guess = input("Quem é esse pokemon? ")

errors = 0

while guess != name:
    errors += 1
    print(name[:errors])
    guess = input("Quem é esse pokemon? ")

print("Acertou!")
