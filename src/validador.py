# Conjunto de REGEX para validação de entradas.
import re

def validar_email(email):
  padrao = r'^[\w\.-]+@[\w\.-]+\.\w+$'

  if re.match(padrao, email):
    return True
  else:
    return False
  
def validar_cep(cep):
  # escreva seu código aqui
  
def validar_cpf(cpf):
  # escreva seu código aqui
  
def validar_telefone(telefone):
  # escreve seu código aqui
  
 
  
