
function adicionaTarefa(){
    let valor=document.getElementById("texto-tarefa").value;
    let lista=document.getElementById('lista-tarefas')
    let item=document.createElement('li')
    item.innerText=valor;
    item.classList.add('cor')
    lista.appendChild(item)
    document.getElementById('texto-tarefa').value=''
}

function pintaFundo(event){
    let lista=document.getElementById('lista-tarefas')  
    lista.addEventListener('click',function(event){
        let selec=document.getElementsByClassName('cor')
        console.log(selec)
        for(let i=0;i<selec.length;i+=1){
            selec[i].style.backgroundColor='none'
        }
        event.target.style.backgroundColor='rgb(128, 128, 128)'
    })
}
pintaFundo()

