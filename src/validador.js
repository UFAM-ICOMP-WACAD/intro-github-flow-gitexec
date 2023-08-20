// Conjunto de REGEX para validação de entradas.

  function validar_email(email) {
    // Expressão regular para validar o formato do e-mail
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Testar o e-mail usando a expressão regular
    if (regex.test(email)) {
      return true; // O e-mail é válido
    } else {
      return false; // O e-mail é inválido
    }
  }  
  // Exemplos de uso
  console.log(validar_email("usuario@example.com")); // true
  console.log(validar_email("invalido@.com"));      // false
  console.log(validar_email("outr@exemplo"));       // false
  
}
  
function validar_cep(cep){
  // escreva seu código aqui

    // Expressão regular para validar o formato do CEP (formato XXXXX-XXX)
    const regex = /^[0-9]{5}-[0-9]{3}$/;

    // Testar o CEP usando a expressão regular
    if (regex.test(cep)) {
      return true; // O CEP é válido
    } else {
      return false; // O CEP é inválido
    }
  }  
  // Exemplos de uso
  console.log(validar_cep("12345-678")); // true
  console.log(validar_cep("98765"));     // false
  console.log(validar_cep("ABCD-123"));  // false
}

function validar_cpf(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remover caracteres não numéricos do CPF
  
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false; // CPF inválido se não tiver 11 dígitos ou todos os dígitos forem iguais
    }
  
    let soma = 0;
    let resto;
  
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf[i - 1]) * (11 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf[9])) {
      return false; // Primeiro dígito verificador inválido
    }
  
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf[i - 1]) * (12 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf[10])) {
      return false; // Segundo dígito verificador inválido
    }  
    return true; // CPF válido
  }  
  // Exemplos de uso
  console.log(validar_cpf("123.456.789-09")); // true
  console.log(validar_cpf("111.222.333-44")); // false
  console.log(validar_cpf("000.000.000-00")); // false
  }
  function validar_telefone(telefone) {
    // Remover caracteres não numéricos do telefone
    telefone = telefone.replace(/\D/g, '');
  
    // Verificar se o telefone tem o comprimento correto
    if (telefone.length !== 10 && telefone.length !== 11) {
      return false; // Telefone inválido se não tiver 10 ou 11 dígitos
    }
  
    // Verificar se o telefone começa com os dígitos corretos
    if (telefone.length === 11 && telefone[2] !== '9') {
      return false; // Números de celular devem começar com '9'
    }
  
    return true; // Telefone válido
  }
    // Exemplos de uso
  console.log(validar_telefone("1234567890"));   // true (telefone fixo)
  console.log(validar_telefone("91234567890")); // true (celular)
  console.log(validar_telefone("987654321"));   // false (tamanho inválido)
  console.log(validar_telefone("9123456789"));  // false (celular sem '9' no início)
  
  
  

}
