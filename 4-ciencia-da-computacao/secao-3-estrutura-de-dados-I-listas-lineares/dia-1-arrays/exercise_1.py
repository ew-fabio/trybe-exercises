# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

def max_time(list_nums):
    calculated_time = 0
    total_time = 0

    for i in range(len(list_nums)):
        if list_nums[i] == 1:
            calculated_time += 1
        else:
            if calculated_time > total_time:
                total_time = calculated_time

            calculated_time = 0

    return total_time


if __name__ == '__main__':
    list_nums = [0, 1, 1, 1, 0, 0, 1, 1]
    print(max_time(list_nums))

    list_nums = [1, 1, 1, 1, 0, 0, 1, 1]
    print(max_time(list_nums))
