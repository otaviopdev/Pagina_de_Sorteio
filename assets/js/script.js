// sorteio por numeros
function sortear() {
    let numPessoas = document.getElementById("inputNumero").value;
    let numSorteado = Math.round(Math.random() * numPessoas);
    document.getElementById("dispNum").innerHTML = numSorteado;

    let p = document.getElementById("hist");
    p.innerHTML += numSorteado + "; ";
    mudarCor();
}
// function mudarCor() {
//     let h = document.getElementById("dispNum");
//     h.style.color = "#ee8f58";
// }