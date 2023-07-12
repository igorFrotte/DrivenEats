function selecionar(elemento, tipo){
    const selecionadoAntes = document.querySelector("."+ tipo +" .escolhido");
    if(selecionadoAntes != null){
        selecionadoAntes.classList.remove("escolhido");
        selecionadoAntes.style.border = "solid 5px #FFFFFF";
    }

    elemento.classList.add("escolhido");
    elemento.style.border = "solid 5px #32B72F";
    ativar();
}

function ativar(){
    const prato = document.querySelector(".prato .escolhido");
    const bebida = document.querySelector(".bebida .escolhido");
    const sobremesa = document.querySelector(".sobremesa .escolhido");

    if((prato != null) && (bebida != null) && (sobremesa != null) ){
        document.querySelector(".comItens").style.display = "flex";
        document.querySelector(".semItens").style.display = "none";
    }
}

function valor(preco){
    return Number(preco.slice(3,-3)) + Number(preco.slice(-2))/100;
}

function pedir() {
    const prato = document.querySelector(".prato .escolhido");
    const bebida = document.querySelector(".bebida .escolhido");
    const sobremesa = document.querySelector(".sobremesa .escolhido");
    const total = valor(prato.querySelector(".preco").textContent) + valor(bebida.querySelector(".preco").textContent) + valor(sobremesa.querySelector(".preco").textContent);
    const msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato.querySelector("h3").textContent}
    - Bebida: ${bebida.querySelector("h3").textContent}
    - Sobremesa: ${sobremesa.querySelector("h3").textContent}
    Total: R$ ${total.toFixed(2)}`;
    
    window.open(`https://wa.me/5522998004816?text=${encodeURIComponent(msg)}`); 
}