function adicionaTarefa(){
    let valor=document.getElementById("texto-tarefa").value;
    console.log(valor);
    let lista=document.getElementById('lista-tarefas')
    let item=document.createElement('li')
    item.innerText=valor;
    lista.appendChild(item)
    document.getElementById('texto-tarefa').value=''
}