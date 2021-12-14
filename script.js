
function adicionaTarefa(){
    let valor=document.getElementById("texto-tarefa").value;
    let lista=document.getElementById('lista-tarefas')
    let item=document.createElement('li')
    item.innerText=valor;
    item.style.backgroundColor='none'
    lista.appendChild(item)
    document.getElementById('texto-tarefa').value=''
}

function pintaFundo(event){
    let lista=document.getElementById('lista-tarefas')
    lista.addEventListener('click',function(event){
        event.target.style.backgroundColor='rgb(128, 128, 128)'
    })
}
pintaFundo()