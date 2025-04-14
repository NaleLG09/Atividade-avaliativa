let scoreA = 0;
let scoreB = 0;
let partidaFinalizada = false;
let tempo = 0;
let intervalo;
let tempoAtivo = false;

function incrementarScore(time) {
    if (partidaFinalizada) return; 
    if (time === 'A') {
        scoreA++;
        document.getElementById('score-timeA').textContent = scoreA;
    } else if (time === 'B') {
        scoreB++;
        document.getElementById('score-timeB').textContent = scoreB;
    }
}

function finalizarPartida() {
    partidaFinalizada = true;
    let vencedor = '';
    
    if (scoreA > scoreB) {
        vencedor = 'Time A é o vencedor!';
        document.getElementById('vencedor');
    } else if (scoreB > scoreA) {
        vencedor = 'Time B é o vencedor!';
        document.getElementById('vencedor');
    } else {
        vencedor = 'A partida terminou empatada!';
        document.getElementById('vencedor');
    }

    document.getElementById('vencedor').textContent = vencedor;

    tempo = 0;
    if (tempoAtivo) {
        clearInterval(intervalo); 
        iniciarTempo();
    }
}

function iniciarNovoJogo() {
    scoreA = 0;
    scoreB = 0;
    tempo = 0;
    partidaFinalizada = false;
    tempoAtivo = false;
    document.getElementById('score-timeA').textContent = scoreA;
    document.getElementById('score-timeB').textContent = scoreB;
    document.getElementById('vencedor').textContent = '';
    document.getElementById('vencedor');
    document.getElementById('tempo').textContent = '00:00'; 
    clearInterval(intervalo);

    if (tempoAtivo) return;

    tempoAtivo = true;
    intervalo = setInterval(function() {
        tempo++;
        document.getElementById('tempo').textContent = formatarTempo(tempo);
    }, 1000);
}
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosFormatados = segundos % 60;
    return `${minutos < 10 ? '0' + minutos : minutos}:${segundosFormatados < 10 ? '0' + segundosFormatados : segundosFormatados}`;
}
