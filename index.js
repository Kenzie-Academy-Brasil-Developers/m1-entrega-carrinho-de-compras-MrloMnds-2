let productsCart = []

//funcao para add itens ao carrinho
function addProduto(id, nome, preco) {
    let obj = { id: id, name: nome, price: preco }
    productsCart.push(obj)
}
addProduto(0, 'Bananas', 8.25)
addProduto(1, 'Peito de frango', 39.99)
addProduto(2, 'Sabonete', 5.99)
addProduto(3, 'Shampoo', 25.80)
addProduto(4, 'Arroz', 14.99)
addProduto(5, 'Alface', 5.50)


// Criando/selecionado/adicionando classes nas Tags
let body = document.querySelector('body')

let main = document.createElement('main')
main.classList.add('box')

let div = document.createElement('div')
div.classList.add('x')

let div2 = document.createElement('div')
div2.classList.add('dados')

let itm = document.createElement('p')
itm.classList.add('item-valor')
itm.innerText = 'Item'

let vlr = document.createElement('p')
vlr.innerText = 'Valor'
vlr.classList.add('item-valor')

let lista = document.createElement('ul')
lista.classList.add('carrinho')

let finalizar = document.createElement('section')

let div3 = document.createElement('div')
div3.classList.add('finalizar')

let total = document.createElement('p')
total.classList.add('total')
total.innerText = 'Total'

let somatoria = document.createElement('p')
somatoria.classList.add('somatoria')

let botaoFinalizar = document.createElement('button')
botaoFinalizar.classList.add('botao')
botaoFinalizar.innerText = 'Finalizar compra'

let imagemCarrinho = document.createElement('div')
imagemCarrinho.classList.add('imagem')

// Identificando as tags filhas
div3.append(total, somatoria)
finalizar.append(div3, botaoFinalizar, imagemCarrinho)
div2.append(itm, vlr)
div.append(div2)
main.append(div, lista, finalizar)
body.append(main)

// Criando e atribuindo valores nas li's para cada item na lista
document.getElementsByClassName('carrinho')[0]

for (let item of productsCart) {
    let li = document.createElement('li')
    let produto = document.createElement('p')
    let valor = document.createElement('p')
    produto.classList.add('produto')
    valor.classList.add('valor')
    produto.innerText = item.name
    valor.innerText = `R$ ${(item.price.toFixed(2))}`
    li.append(produto, valor)
    lista.append(li)
}

function somaPrecos(array) {
    let soma = 0
    for (let item of array) {
        soma += item.price
    }
    return soma
}
somatoria.innerText = `R$ ${somaPrecos(productsCart)}`