function pesquisar() {
  /**
   * Função responsável por realizar uma pesquisa e exibir os resultados na página.
   * 
   * **Como funciona:**
   * 1. **Obtém os elementos HTML:** Captura as referências para a seção de resultados e o campo de pesquisa, para manipular seus conteúdos.
   * 2. **Valida a entrada:** Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem de erro e interrompe a função.
   * 3. **Normaliza a pesquisa:** Converte a string de pesquisa para minúsculas, para realizar uma comparação case-insensitive com os dados.
   * 4. **Itera sobre os dados:** Para cada item no array de dados, verifica se o título, descrição ou tags contêm a palavra-chave pesquisada.
   * 5. **Constrói o HTML:** Se houver correspondência, cria um elemento HTML `<div>` com as informações do resultado, formatado para exibição.
   * 6. **Concatena os resultados:** Adiciona o HTML gerado para o resultado atual à string `resultados`.
   * 7. **Exibe os resultados:** Atualiza o conteúdo HTML da seção de resultados com a string completa.
   * 8. **Gerencia resultados vazios:** Se nenhum resultado for encontrado, exibe uma mensagem informativa.
   */

  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção para exibir os resultados
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // **Validação da entrada:** Verifica se o campo de pesquisa está preenchido
  if (!campoPesquisa) {
      section.innerHTML = '<p>O campo não deve está vazio!</p>';
      return; // Interrompe a função se o campo estiver vazio
  }

  // **Normalização da pesquisa:** Converte para minúsculas para comparação case-insensitive
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = ""; // String para armazenar o HTML dos resultados

  // **Iteração sobre os dados e construção dos resultados:**
  for (let dado of dados) {
      // **Normalização dos dados:** Converte título, descrição e tags para minúsculas para comparação
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      // **Verifica se há correspondência com a pesquisa:**
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // **Cria o HTML para cada resultado:**
          resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">
                      ${dado.descricao}
                  </p>
                  <a href=${dado.link} target="_blank">Mais informações</a>
              </div>
          `;
      }
  }

  // **Gerencia resultados vazios:**
  if (!resultados) {
      resultados = "<p>Nada foi encontrado!</p>";
  }

  // **Exibe os resultados na página:**
  section.innerHTML = resultados;
}