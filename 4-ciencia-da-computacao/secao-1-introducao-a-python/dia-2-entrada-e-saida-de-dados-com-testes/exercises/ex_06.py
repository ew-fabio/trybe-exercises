# Realize o exercício utilizando TDD: implemente os testes e depois a função 🧪

# Faça uma função que valide um e-mail, lançando uma exceção quando o valor
# for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

# Devem seguir o formato nomeusuario@nomewebsite.extensao;

# O nome de usuário deve conter somente letras, dígitos, traços e
# underscores (_);

# O nome de usuário deve iniciar com uma letra;

# O nome do website deve conter somente letras e dígitos;

# O tamanho máximo da extensão é de 3 caracteres.

# 🦜 As funções isalpha, isdigit e isnumeric podem ser utilizadas para verificar
# se uma letra ou palavra são compostas de somente caracteres ou dígitos.

# Exemplo:
# "1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True.


def validate_email(email):
    if not email[0].isalpha():
        raise ValueError("O nome de usuário deve iniciar com uma letra")

    username = email.split("@")[0].replace("-", "").replace("_", "")
    if not username.isalnum():
        raise ValueError(
            "O nome de usuário deve conter somente letras, "
            "dígitos, traços e underscores (_)"
        )

    website_name = email.split("@")[1].split(".")[0]
    if not website_name.isalnum():
        raise ValueError(
            "O nome do website deve conter somente letras e dígitos"
        )

    if len(email.split(".")[-1]) > 3:
        raise ValueError("O tamanho máximo da extensão é de 3 caracteres")

    return None
