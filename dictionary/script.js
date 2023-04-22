const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search")

btn.addEventListener("click",()=>{
    let inp = document.getElementById("word").value;
    console.log(inp);
    fetch(`${url}${inp}`)
    .then((response) => response.json())
    .then((data) => {
     console.log(data);
     result.innerHTML=`
     <div class="searchedword" id="searchedword">
         <h3>${inp}</h3>
         <button onclick="playSound()">
             <i class="fas fa-volume-up"></i>
         </button>
     </div>
     <div class="details">
         <p>${data[0].meanings[0].partOfSpeech}</p>
         <p>/ ${data[0].phonatic}/</div>

     </div>
     <P class="meaning">
     ${data[0].meanings[0].definitions[0].definition}
     </P>
     <p class="example">
     ${data[0].meanings[0].definitions[0].example || " "}
     </p> `;
     sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});
function playSound() {
sound.play();
}
