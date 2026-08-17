# 🔍 Buscador de CEP Simples

Um projeto web minimalista e funcional desenvolvido em HTML5 e JavaScript assíncrono (`async/await`) que consome dados da API pública do **ViaCEP** para buscar endereços em tempo real.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação da página com campos de entrada e botões.
* **JavaScript (ES6):** Manipulação do DOM, tratamento de strings e requisições HTTP.
* **API ViaCEP:** Serviço gratuito de alto desempenho para localização de CEPs brasileiros.

---

## 🛠️ Como Executar o Projeto

Como o projeto é feito puramente com tecnologias front-end nativas, você não precisa instalar nenhuma dependência.

1. Baixe ou clone este repositório na sua máquina.
2. Abra a pasta do projeto.
3. Dê dois cliques no arquivo `index.html` para abri-lo diretamente no seu navegador.
4. Digite um CEP válido (com ou sem hífen) e clique no botão **Enviar**.
5. Abra o console do desenvolvedor (`F12` ou `Ctrl + Shift + I`) para visualizar o objeto de dados retornado.

---

## ⚙️ Funcionalidades Implementadas

* [x] **Tratamento de Entrada:** Limpa automaticamente hífens e espaços digitados pelo usuário.
* [x] **Validação de Tamanho:** Impede requisições inválidas caso o texto não possua exatamente 8 dígitos.
* [x] **Tratamento de Erros:** Exibe alertas amigáveis caso o CEP não exista na base de dados ou ocorra falha de conexão.
* [x] **Consumo de API Assíncrono:** Uso do método moderno `fetch` acoplado com estruturas de `try/catch`.

---

## 📂 Estrutura de Arquivos

```text
├── index.html     # Interface visual com o input e botão
├── script.js      # Lógica de consumo da API ViaCEP
└── README.md      # Documentação do projeto
```

---

## 👤 Autor

Desenvolvido por **mlehsilva**. Sinta-se à vontade para clonar, estudar ou aplicar melhorias!

