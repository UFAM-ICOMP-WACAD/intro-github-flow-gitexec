# Conjunto de REGEX para validação de entradas.
import re

regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

def validar_email(email):
    if re.fullmatch(regex, email):
      print("Valid email")
    else:
      print("Invalid email")
  
def validar_cep(cep):
  # escreva seu código aqui
  
def validar_cpf(cpf):
  # escreva seu código aqui
  
def validar_telefone(telefone):
  # escreve seu código aqui