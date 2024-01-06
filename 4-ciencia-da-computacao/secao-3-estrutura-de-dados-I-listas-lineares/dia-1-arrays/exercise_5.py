# servidores =  [[1,0],[0,1]]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [[1,0],[1,1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

# servidores = [[1, 0, 0],
#               [1, 0, 0],
#               [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.


def contar_servidores_comunicantes(servidores):
    linhas = len(servidores)
    colunas = len(servidores[0])

    def se_comunicam(i, j):
        for k in range(linhas):
            if k != i and servidores[k][j] == 1:
                return True
        for k in range(colunas):
            if k != j and servidores[i][k] == 1:
                return True
        return False

    contador_comunicantes = 0

    for i in range(linhas):
        for j in range(colunas):
            if servidores[i][j] == 1 and se_comunicam(i, j):
                contador_comunicantes += 1

    return contador_comunicantes


# Exemplos de uso:
servidores1 = [[1, 0], [0, 1]]
resultado1 = contar_servidores_comunicantes(servidores1)
print(f"Resultado 1: {resultado1}")

servidores2 = [[1, 0], [1, 1]]
resultado2 = contar_servidores_comunicantes(servidores2)
print(f"Resultado 2: {resultado2}")

servidores3 = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
resultado3 = contar_servidores_comunicantes(servidores3)
print(f"Resultado 3: {resultado3}")

servidores4 = [[1, 1, 1], [1, 0, 0], [0, 1, 1]]
resultado4 = contar_servidores_comunicantes(servidores4)
print(f"Resultado 4: {resultado4}")
