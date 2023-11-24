# Exercício 10:
# Um posto está vendendo combustíveis com a seguinte tabela de descontos:

#  Álcool:
#    - Até 20 litros, desconto de 3% por litro;
#    - Acima de 20 litros, desconto de 5% por litro.
#  Gasolina:
#    - Até 20 litros, desconto de 4% por litro;
#    - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina), e
# retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro
# da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def total_cost(quantity: float, fuel_type: str) -> float:
    if fuel_type == "A":
        price = 1.9
        discount_up_to_20 = 0.97
        discount_above_20 = 0.95

    if fuel_type == "G":
        price = 2.5
        discount_up_to_20 = 0.96
        discount_above_20 = 0.94

    if quantity <= 20:
        return quantity * price * discount_up_to_20
    else:
        return quantity * price * discount_above_20


print(total_cost(25, "G"))
