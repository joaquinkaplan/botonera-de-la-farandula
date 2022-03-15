//Init Speech Synth
const message = new SpeechSynthesisUtterance();


//get voices
speechSynthesis.addEventListener("voiceschanged", () => {
    const voices = speechSynthesis.getVoices();
    loadVoices(voices);
})

//Load select with voices
function loadVoices(voices) {
    voices.forEach(voice => {
        const { name, lang } = voice;
        const optionElement = document.createElement("option");
        optionElement.value = `${name} - ${lang}`;
        selectElement.appendChild[optionElement];
    })
}



//DOM elements
const selectElement = document.querySelector(".select");
const moria = document.getElementById("moria");
const mirtha = document.getElementById("mirtha");
const carmen = document.getElementById("carmen");
const marcela = document.getElementById("marcela");

//App data
const moria_frase = new SpeechSynthesisUtterance ("unos sandwichitos inmundos, donde el jamón no era jamón, era japaleta, todo berreta, todo berreta, y la dueña desesperada porque comiéramos, yo no como esto! cómo vas a comer harinas después de una función, qué sos una vaca, no puede ser");
const mirtha_frase = new SpeechSynthesisUtterance ("si te ven mal te maltratan, y si te ven bien te contratan");
const carmen_frase = new SpeechSynthesisUtterance ("somos tan hipócritas en este ambiente");
const marcela_frase = new SpeechSynthesisUtterance ("andate a cagar, te lo digo la verdad!");


moria.addEventListener("click", (event) => {
    speechSynthesis.speak(moria_frase);
})

mirtha.addEventListener("click", (event) => {
    speechSynthesis.speak(mirtha_frase);
})

carmen.addEventListener("click", (event) => {
    speechSynthesis.speak(carmen_frase);
})


marcela.addEventListener("click", (event) => {
    speechSynthesis.speak(marcela_frase);
})

