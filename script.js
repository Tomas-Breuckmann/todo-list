// adiciona a tarefa ao clicar no botão
function adicionaTarefa(){
    let valor=document.getElementById("texto-tarefa").value;
    let lista=document.getElementById('lista-tarefas')
    let item=document.createElement('li')
    item.innerText=valor;
    if (valor==''){
        alert('Não há nada na lista a ser adicionado.')
    } else{
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
    let listaTarefas=document.getElementById('lista-tarefas')
    listaTarefas.parentNode.removeChild(listaTarefas)
}