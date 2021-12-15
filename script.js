
function adicionaTarefa(){
    let valor=document.getElementById("texto-tarefa").value;
    let lista=document.getElementById('lista-tarefas')
    let item=document.createElement('li')
    item.innerText=valor;
    item.classList.add('cor')
    lista.appendChild(item)
    document.getElementById('texto-tarefa').value=''
}

// seleciona elemento da lista ao clicar
    const lista=document.getElementById('lista-tarefas')  
    lista.addEventListener('click',function(event){
        let selec=document.getElementsByClassName('cor')
        let back=document.getElementsByClassName('selecao')
        console.log(back)
        if(back.length==0){
            event.target.classList.add('selecao')
        } else{
            document.querySelector('.selecao').classList.remove('selecao')
            event.target.classList.add('selecao')
        }
    })

