# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]

def shuffle_deck(deck):
    shuffled_deck = []

    mid = len(deck) // 2

    deck_A = deck[:mid]
    deck_B = deck[mid:]
    index = 0

    while len(shuffled_deck) < len(deck):
        shuffled_deck.append(deck_A[index])
        shuffled_deck.append(deck_B[index])

        index += 1

    return shuffled_deck


if __name__ == '__main__':
    deck = [2, 6, 4, 5]
    print(shuffle_deck(deck))

    deck = [1, 4, 4, 7, 6, 6]
    print(shuffle_deck(deck))
