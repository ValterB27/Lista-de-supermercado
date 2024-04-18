var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector("input[name=nome_produto]");
    var precoproduto = document.querySelector("input[name=valor_produto]");

    itens.push({
        nome: nomeProduto.value,
        valor: precoproduto.value
    })
           /*<div class="lista-produtos-single">
                <h3>Redbull</h3>
                <h3 class="price-produtos"><span>$20,00</span></h3>
            </div>*/
    
    let listaprodutos = document.querySelector(".lista-produtos")
    let soma = 0;
    listaprodutos.innerHTML = "";
    itens.map(function(val){
          soma+=parseFloat(val.valor);
          listaprodutos.innerHTML+=`
          <div class="lista-produtos-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produtos"><span>`+val.valor+`</span></h3>
        </div>`
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoproduto.value = "";

    let elementosoma = document.querySelector(".soma-produto h1")

    elementosoma.innerHTML = 'R$'+soma;
})

document.querySelector("button[name=limpar]")
.addEventListener('click',()=>{
    itens = [];
    document.querySelector(".lista-produtos").innerHTML ='';
    document.querySelector(".soma-produto h1").innerHTML = "R$00,00";
})
