var button= document.getElementById("br");
var container10 =document.getElementById("container10");
var container11 =document.getElementById("container11");
var container12 =document.getElementById("container12");
var container13 =document.getElementById("container13");

button.addEventListener("click",function(){
    if(container10.style.display === "none") {
        container10.style.display = "block";
        container11.style.display = "none";
        container12.style.display = "none";
        container13.style.display = "none";
    } else{
        container10.style.display ="none";
    }
});

var button= document.getElementById("bb");

button.addEventListener("click",function(){
    if(container11.style.display === "none") {
        container11.style.display = "block";
        container10.style.display = "none";
        container12.style.display = "none";
        container13.style.display = "none";
    } else{
        container11.style.display ="none";
    }
});

var button= document.getElementById("bc");

button.addEventListener("click",function(){
    if(container12.style.display === "none") {
        container12.style.display = "block";
        container10.style.display = "none";
        container11.style.display = "none";
        container13.style.display = "none";
    } else{
        container12.style.display ="none";
    }
});

var button= document.getElementById("bf");

button.addEventListener("click",function(){
    if(container13.style.display === "none") {
        container13.style.display = "block";
        container10.style.display = "none";
        container11.style.display = "none";
        container12.style.display = "none";
    } else{
        container13.style.display ="none";
    }
});

const corpoTabela = document.getElementById("corpo-tabela")
function receberDadosUsuario(){
    //
    const url = 'http://192.168.10.111:2929/listar-usuarios'
    console.log(url);
    fetch(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: "GET",
        // body: JSON.stringify({a: 1, b:2})
    }).then (resultado => {
        return resultado.json();
    })
    .then((dados) => {
        corpoTabela.innerHTML = ''
        //Percorrer a lista que veio do server, e pegar os dados.
        //[1,2,5,6]
        for (var num = 0; num < dados.length; num++){
            const criaLinha = document.createElement("tr");
            criaLinha.innerHTML = `
            <tr>
            <th scope="row">${dados[num].idUsuario}</th>
            <td>${dados[num].nomeUsuario}</td>
            <td>${dados[num].emailUsuario}</td>
            <td>${dados[num].senhaUsuario}</td>
            <td>${dados[num].idInst}</td>
            <td>${dados[num].idCurso}</td>
            <td>${dados[num].idHorario}</td>
            </tr>
            `
            // <td><img src="${dados[num].avatar}" alt="Minha Figura"</img></td>
            corpoTabela.appendChild(criaLinha);
            console.log(dados[num]);
        }
    });
}