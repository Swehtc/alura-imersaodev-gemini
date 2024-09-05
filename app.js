function pesquisar() {
    /**
     * Função responsável por realizar uma pesquisa e exibir os resultados na página.
     * 
     * **Como funciona:**
     * 1. Obtém a seção HTML onde os resultados serão inseridos.
     * 2. Itera sobre um array de dados (assumido como um array de objetos).
     * 3. Para cada dado, cria um elemento HTML `<div>` com as informações do resultado.
     * 4. Concatena o HTML gerado em uma string.
     * 5. Atualiza o conteúdo HTML da seção de resultados com a string concatenada.
     */
  
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção para exibir os resultados

    let resultados = ""; // String que armazenará o HTML dos resultados

    for (let dado of dados) { // Itera sobre cada dado da pesquisa
      // Cria o HTML para cada resultado
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
    };

    section.innerHTML = resultados; // Insere os resultados na página
}