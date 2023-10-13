AOS.init();

// Recupera a data e hora do evento //
const dataEvento = new Date("dec 12, 2023 20:00:00");
const timestampDoEvento = dataEvento.getTime();

// Recupera a data e hora atual //
const contaHoras = setInterval(function() {
    const dataAtual = new Date();
    const timestampAtual = dataAtual.getTime();

    // para os calculos
    const diaEmMs = (1000 * 60 * 60 * 24);
    const horaEmMS = (1000 * 60 * 60);
    const minutosEmMs = (1000 * 60);

    // calcula o tempo ate o evento
    const tempoAteEvento = timestampDoEvento - timestampAtual;
    const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMS); // sinal % pega o resto da divisao
    const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMS) / minutosEmMs);
    const segundosAteEvento = Math.floor((tempoAteEvento % minutosEmMs) / 1000);

    // coloca o tempo para o evento na pagina
    const recuperaContador = document.getElementById('contador');
    recuperaContador.innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (tempoAteEvento < 0) {
        clearInterval(contaHoras);
        recuperaContador.innerHTML = 'Evento expirado';
    }

}, 1000) // intervalo em milisegundos, 1 segundo