
const livros = [{
    vendedor: 'Bruno Henrique',
    cidade: 'Recife',
    estado: 'PE',
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ano: 2013,
    idioma: 'Português',
    preco: '30,00',
    capa: 'imagens/capa1.jpg',
    id: 'produto1'
},{
    vendedor: 'Luzonaldo Augusto',
    cidade: 'Recife',
    estado: 'PE',
    titulo: 'A Incendiária',
    autor: 'Stephen King',
    ano: 2018,
    idioma: 'Português',
    preco: '50,00',
    capa: 'imagens/capa2.jpg',
    id: 'produto2'
}]

const templateLivro = (livro) => {
    return `                
    <div class="card carrinho__produto" id="${livro.id}">
        <div class="card-header">
            <span><strong>${livro.vendedor} - </strong>${livro.cidade}/${livro.estado}</span>
        </div>
        <div class="card-body">
            <div class="carrinho__body">
                <div class="carrinho__produto--imagem">
                    <img src="${livro.capa}" alt="" srcset="">
                </div>
                <div class="carrinho__produto--infos">
                    <div class="carrinho__produto--info">
                        <p>${livro.titulo}</p>
                        <p class="text-muted">${livro.autor}</p>
                        <p>Ano: <span>${livro.ano}</span></p>
                        <p>Idioma: <span>${livro.idioma}</span></p>
                    </div>
                    <div class="carrinho__produto--info">
                        <div>
                            <p>R$${livro.preco}</p>
                        </div>
                        <div>
                            <button class="btn btn-outline-danger" onclick="deleteLivro(event)">
                                <i class="material-icons">delete</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="carrinho__footer">
                <form action="" onsubmit="submitFrete(event)">
                    <span>Calcular frete:</span>
                    <input type="text" class="form-control" placeholder="CEP">
                    <button class="btn btn-secondary">OK</button>
                </form>
                <div>
                    <span id="fretePrazo">Prazo: 15 dias</span>
                    <span> | </span>
                    <span id="freteValor">Valor: R$14,63</span>
                </div>
            </div>
        </div>
    </div>
    `
}

document.querySelector('#produtos').innerHTML = livros.map(livro => templateLivro(livro)).join('')