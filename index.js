const sayac = document.getElementById("sayac");
const div = document.querySelector("div");

function arttir(){
    sayac.textContent = ++sayac.textContent;
}

function reset(){
    sayac.textContent = Number(0);
    alert("Sıfırlandı!");
}

function azalt(){
    sayac.textContent = --sayac.textContent;
}

function baslat(){
    alert("Zamanlama Başladı!");
    const durdurButton = document.createElement("button");
    div.appendChild(durdurButton);
    durdurButton.classList.add("btn-5");
    durdurButton.textContent = "DURDUR";
    

    let kalanSure = Number(sayac.textContent);
    let sure = setInterval(() => {
        sayac.textContent = --sayac.textContent;
        if (kalanSure <= 0){
        clearInterval(sure);
        sayac.textContent = 0;
        alert("SÜRE DOLDU!");
    }
    },60000);

    durdurButton.addEventListener("click", () => {
        clearInterval(sure);
        sayac.textContent = 0;
        alert("DURDURULDU!")
        durdurButton.remove();
    })


}