
const seletorElemento = document.getElementById("seletor-elemento");
const infoElemento = document.getElementById("info-elemento");
const nomeElemento = document.getElementById("nome-elemento");
const simboloElemento = document.getElementById("simbolo-elemento");
const numeroAtomico = document.getElementById("numero-atomico");
const configuracaoEletronica = document.getElementById("configuracao-eletronica");

seletorElemento.addEventListener("change", () => {
    const elementoSelecionado = seletorElemento.value;

    if (elementoSelecionado === "H") {
        nomeElemento.textContent = "Hidrogênio";
        simboloElemento.textContent = "H";
        numeroAtomico.textContent = "1";
        configuracaoEletronica.innerHTML = "1s<sup>1</sup>";
    } else if (elementoSelecionado ==="Li"){
        nomeElemento.textContent = "Lítio";
        simboloElemento.textContent = "Li";
        numeroAtomico.textContent = "3";
        configuracaoEletronica.innerHTML = "1s<sup>2</sup>2s<sup>1</sup>";
    } else if (elementoSelecionado ==="Na"){
        nomeElemento.textContent = "Sódio";
        simboloElemento.textContent = "Na";
        numeroAtomico.textContent = "11";
        configuracaoEletronica.innerHTML = "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>";
    } else if(elementoSelecionado==="K"){
        nomeElemento.textContent = "Potássio";
        simboloElemento.textContent = "K";
        numeroAtomico.textContent = "19";
        configuracaoEletronica.innerHTML = "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup>";

    } else if(elementoSelecionado ==="Rb"){
        nomeElemento.textContent = "Rubídio";
        simboloElemento.textContent = "Rb";
        numeroAtomico.textContent = "37";
        configuracaoEletronica.innerHTML = "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>1</sup>";
    } else if (elementoSelecionado ==="Cs"){
        nomeElemento.textContent = "Césio";
        simboloElemento.textContent = "Rb";
        numeroAtomico.textContent = "55";
        configuracaoEletronica.innerHTML ="1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup>"
    } else if (elementoSelecionado ==="Be"){
        nomeElemento.textContent = "Berílio";
        simboloElemento.textContent = "Be";
        numeroAtomico.textContent = "4";
        configuracaoEletronica.innerHTML = "1s<sup>2</sup> 2s<sup>2</sup>"
    } else if (elementoSelecionado==="Mg"){
        nomeElemento.textContent = "Magnésio";
        simboloElemento.textContent = "Mg";
        numeroAtomico.textContent = "12";
        configuracaoEletronica.innerHTML ="1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>"
    } else if (elementoSelecionado ==="Ca"){
        nomeElemento.textContent = "Cálcio";
        simboloElemento.textContent = "Ca";
        numeroAtomico.textContent = "20";
        configuracaoEletronica.innerHTML = "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>"
    } else if (elementoSelecionado ==="Sr"){
        nomeElemento.textContent = "Estrôncio";
        simboloElemento.textContent = "Sr";
        numeroAtomico.textContent = "38";
        configuracaoEletronica.innerHTML ="1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup>"
    } else if (elementoSelecionado==="Ba"){
        nomeElemento.textContent = "Bário";
        simboloElemento.textContent = "Ba";
        numeroAtomico.textContent = "56";
        configuracaoEletronica.innerHTML ="1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup>"
    } else if (elementoSelecionado==="Ra"){
        nomeElemento.textContent = "Rádio";
        simboloElemento.textContent = "Ra";
        numeroAtomico.textContent = "88";
        configuracaoEletronica.innerHTML = "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>2</sup> 6d<sup>2</sup>"
    } else if (elementoSelecionado==="Sc"){
        nomeElemento.textContent = "Escândio";
        simboloElemento.textContent = "Sc";
        numeroAtomico.textContent = "21";
        configuracaoEletronica.innerHTML ="1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>1</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>1</sup>"
    } else if (elementoSelecionado==="Y"){
        nomeElemento.textContent = "Ítrio";
        simboloElemento.textContent = "Y";
        numeroAtomico.textContent = "39";
        configuracaoEletronica.innerHTML ="1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>1</sup> 5p<sup>1</sup>"
    } else if (elementoSelecionado ==="Ti"){
        nomeElemento.textContent = "Titânio";
        simboloElemento.textContent = "Ti";
        numeroAtomico.textContent = "22";
        configuracaoEletronica.innerHTML =" 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>2</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>2</sup>"
    } else if (elementoSelecionado==="Zr"){
        nomeElemento.textContent = "Zircônio";
        simboloElemento.textContent = "Zr";
        numeroAtomico.textContent = "40";
        configuracaoEletronica.innerHTML ="1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>2</sup>"
    }

});
