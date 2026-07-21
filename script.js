function atualizarContador() {

    const dataEvento = new Date("2026-08-16T16:00:00");

    const agora = new Date();

    const diferenca = dataEvento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("tempo").innerHTML =
        dias + " dias " +
        horas + " horas " +
        minutos + " minutos " +
        segundos + " segundos";

}

setInterval(atualizarContador, 1000);

atualizarContador();
