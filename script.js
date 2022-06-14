function loadTarefas(){
    // apagaTudo()
    let itens=JSON.parse(localStorage.getItem('itens'))
    if (itens == null){
    } else{
        let quantidade=itens.length
        let lista=document.getElementById('lista-tarefas')
        for (let i=0;i<quantidade;i+=1){    
            let it=document.createElement('li')
            it.innerText = itens[i].item;
            it.classList.add('item-da-lista')
            if (itens[i].classe=='1'){
                it.classList.add('completed')
            }
            lista.appendChild(it)
       }            
    }
}
loadTarefas()


// adiciona a tarefa ao clicar no botão
function adicionaTarefa(){
    let valor=document.getElementById("texto-tarefa").value;
    let lista=document.getElementById('lista-tarefas')
    let item=document.createElement('li')

    if (valor==''){
        alert('Não há nada na lista a ser adicionado.')
    } else{
        item.innerText=valor;
        item.classList.add('item-da-lista')
        lista.appendChild(item)
    document.getElementById('texto-tarefa').value=''
}
}

// seleciona elemento da lista ao clicar
    const lista=document.getElementById('lista-tarefas')  
    lista.addEventListener('click',function(event){
        let back=document.getElementsByClassName('selecao')
        if(back.length==0){
            event.target.classList.add('selecao')
        } else{
            document.querySelector('.selecao').classList.remove('selecao')
            event.target.classList.add('selecao')
        }
    })

// risca o elemento ao ser clicado duas vezes
lista.addEventListener('dblclick',function(event){
    let risco=document.getElementsByClassName('completed')
    if(event.target.classList.contains('completed')===true){
        event.target.classList.remove('completed')
    } else{
        event.target.classList.add('completed')
    }
})

function apagaTudo(){
    // let listaTarefas=document.getElementById('lista-tarefas')
    // listaTarefas.parentNode.removeChild(listaTarefas)
    let itensDaLista=document.querySelectorAll('.item-da-lista')
    for (let i=itensDaLista.length-1;i>=0;i-=1){
        itensDaLista[i].parentNode.removeChild(itensDaLista[i])
    }
}

function removerFinalizados(){
    let feito=document.getElementsByClassName('completed')
    for (let i=feito.length-1;i>=0;i-=1){
        feito[i].parentNode.removeChild(feito[i])
    }
}

function removerSelecionado(){
    let feito=document.querySelector('.selecao')
    feito.parentNode.removeChild(feito)
}

function salvarTarefas(){
    // localStorage.remove('itens')
    let listaDeItens=document.getElementsByClassName('item-da-lista')
    let quantidadeDeItens=document.getElementsByClassName('item-da-lista').length
if (quantidadeDeItens>0){
    let itens= new Array(quantidadeDeItens)
    for (i=0;i<quantidadeDeItens;i+=1){
        let texto=listaDeItens[i].innerText
        let cl=listaDeItens[i].classList.contains('completed')
        if (cl==true){
            itens[i]={item: texto, classe: '1'}
        } else {
            itens[i]={item: texto, classe: '0'}
        }
        localStorage.setItem('itens',JSON.stringify(itens))
    }
} else{
    alert('Inclua pelo menos um item na lista para ser salvo.')
}
}


function moverCima(){
    let item=document.querySelector('.selecao')
    if (item==null){

    } else {
    let anterior=item.previousElementSibling
    if (anterior==null){

    } else {
    item.parentNode.removeChild(item)
    anterior.insertAdjacentElement('beforebegin',item)
}
}
}

function moverBaixo(){
    let item=document.querySelector('.selecao')
    
    if (item==null){

    } else {
        let proximo=item.nextElementSibling
    if (proximo==null){

    } else {
    item.parentNode.removeChild(item)
    proximo.insertAdjacentElement('afterend',item)
}
}
}