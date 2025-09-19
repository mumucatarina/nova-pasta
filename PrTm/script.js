let chave = "ac6ab0a6c2d5a2b90e323eac751686fb";

function clique(){
   let cidade = document.querySelector(".input-cidade").value
    
   !cidade ? alert("inserir nome da cidade") :buscarCidade(cidade);
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function buscarCidade(cidade) {
    let dados = await fetch( "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric")
    .then(res => res.json())
    
    colocaNaTela(dados)
    console.log(dados);
}

function colocaNaTela (dados){

    document.querySelector(".nome-cidade").innerHTML = dados.name;
    document.querySelector(".graus").innerHTML = dados.main.temp;
    document.querySelector(".des").innerHTML = dados.weather[0].description;
    document.querySelector(".umi").innerHTML = dados.main.humidity + "%";
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";


}