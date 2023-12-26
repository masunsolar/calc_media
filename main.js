const form = document.getElementById('form_atv');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgreprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';
const atv = [];
const nota =[];
const spanAproved = '<span class="resultado aproved">Aprovado</span>';
const spanReproved = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addline();
    atualizaTab();
    atualizaMF ();
});

function addline(){
    const inputNomeAtv = document.getElementById('Nome_atv');
    const inputNotaAtv = document.getElementById('nota_atv');

    if (atv.includes(inputNomeAtv.value)){
        alert(`A atividade: ${inputNomeAtv.value} ja foi inserida!`)
    } else {

    atv.push(inputNomeAtv.value);
    nota.push(parseFloat(inputNotaAtv.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtv.value}</td>`;
    linha += `<td>${inputNotaAtv.value}</td>`;
    linha += `<td>${inputNotaAtv.value >= notaMinima ? imgAprovado : imgreprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeAtv.value = '';
    inputNotaAtv.value = '';
}

function atualizaTab(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function formatarNumero(numero) {
    if (numero % 1 === 0 || numero.toFixed(1) % 1 === 0) {
        return numero.toLocaleString(); 
    } else {
        return numero.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
}

function atualizaMF() {
    const mediaF = calcMedia();
    const mediaExibicao = formatarNumero(mediaF);

    document.getElementById('value-media').innerHTML = mediaExibicao;
    document.getElementById('resultado-media').innerHTML = mediaF >= notaMinima ? spanAproved : spanReproved;

    console.log(mediaExibicao);
}


function calcMedia(){
    let somaNotas = 0;

    for (let i = 0; i < nota.length; i++) {
        somaNotas += nota[i];
    }

    return somaNotas / nota.length
}