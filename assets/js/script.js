function search() {
    let section = document.getElementById("results");
    let campoPesquisa = document.getElementById("mysearch").value;

    // **Validação da entrada:** Verifica se o campo de pesquisa está preenchido
    if (!campoPesquisa) {
        section.innerHTML = "<p>O campo não deve está vazio!</p>";
        return; // Interrompe a função se o campo estiver vazio
    }

    // **Normalização da pesquisa:** Converte para minúsculas para comparação case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = ""; // String para armazenar o HTML dos resultados

    // **Iteração sobre os dados e construção dos resultados:**
    for (let dado of dados) {
        // **Normalização dos dados:** Converte título, descrição e tags para minúsculas para comparação
        titulo = dado.titulo.toLowerCase();
        img = dado.img;
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // **Verifica se há correspondência com a pesquisa:**
        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // **Cria o HTML para cada resultado:**
            resultados += `
                <div class="item-result">
                    <img src="${dado.img}">
                    <div class="description">
                        <h2>${dado.titulo}</h2>
                        <p>${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank" class="roboto-bold">Ver Propostas</a>
                    </div>
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