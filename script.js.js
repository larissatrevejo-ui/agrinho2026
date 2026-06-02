function iniciarScanner(){

    let umidade = Math.floor(Math.random() * 100);

    let ph = (Math.random() * 14).toFixed(1);

    let status = "";

    if(umidade < 30){

        status = "Solo seco";

    }
    else if(umidade < 70){

        status = "Solo saudável";

    }
    else{

        status = "Solo muito úmido";

    }

    document.getElementById("umidade").innerHTML =
    umidade + "%";

    document.getElementById("ph").innerHTML =
    ph;

    document.getElementById("status").innerHTML =
    status;

}