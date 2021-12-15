// adiciona a tarefa ao clicar no botão
function adicionaTarefa(){
    let valor=document.getElementById("texto-tarefa").value;
    let lista=document.getElementById('lista-tarefas')
    let item=document.createElement('li')
    item.innerText=valor;
    if (valor==''){
        alert('Não há nada na lista a ser adicionado.')
    } else{
    // item.classList.add('cor')
    lista.appendChild(item)
    document.getElementById('texto-tarefa').value=''
}
}

// seleciona elemento da lista ao clicar
    const lista=document.getElementById('lista-tarefas')  
    lista.addEventListener('click',function(event){
        let back=document.getElementsByClassName('selecao')
        console.log(back)
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
    console.log(risco)
    console.log(event.target.className)
    if(event.target.classList.contains('completed')===true){
        event.target.classList.remove('completed')
    } else{
        event.target.classList.add('completed')
    }
})
