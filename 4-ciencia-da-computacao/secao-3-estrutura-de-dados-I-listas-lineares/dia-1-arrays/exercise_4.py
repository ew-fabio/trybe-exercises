# entradas = [1, 2, 3]
# saidas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.

def find_student_in_a_moment(students_in, students_out, instant):
    result = 0

    for i in range(len(students_in)):
        if students_out[i] >= instant >= students_in[i]:
            result += 1

    return result


if __name__ == '__main__':
    entradas = [1, 2, 3]
    saidas = [3, 2, 7]
    instante_buscado = 4
    print(find_student_in_a_moment(entradas, saidas, instante_buscado))
