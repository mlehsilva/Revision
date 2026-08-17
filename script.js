async function consultar() {
    // 1. Pega o elemento do input
    const inputCep = document.getElementById('meuInput');
    
    // 2. Pega o valor digitado e limpa espaços ou traços extras
    const cep = inputCep.value.trim().replace('-', '');

    // 3. Valida se o CEP tem o tamanho correto antes de enviar
    if (cep.length !== 8) {
        console.error("Por favor, digite um CEP válido com 8 dígitos.");
        alert("CEP inválido! Digite apenas os 8 números.");
        return;
    }

    try {
        // 4. Faz a requisição usando o CEP digitado dinamicamente
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
        // 5. Converte a resposta para JSON
        const endereco = await response.json();

        // 6. Verifica se o ViaCEP retornou um CEP inexistente
        if (endereco.erro) {
            console.warn("CEP não encontrado na base de dados.");
            alert("CEP não encontrado.");
            return;
        }

        // 7. Mostra as informações completas no console (F12)
        console.log("Informações do endereço:", endereco);

    } catch (erro) {
        console.error("Erro ao conectar na API do ViaCEP:", erro);
    }
}
