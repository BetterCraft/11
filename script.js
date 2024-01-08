function toggleTheme() {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}

const audioElement = new Audio("open.wav");

function Givedate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate() + 2; // added 2 days
  
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
  
    const formattedToday = yyyy + '-' + mm + '-' + dd;
  
    return formattedToday;
}
function toggleButton(){
    audioElement.play();
    toggleTheme()
    // console.log(`localm://suhani/${Givedate()}`)
    document.getElementById("bbt").style.opacity = 0
    document.getElementById("local").innerText = "Made by"
    document.getElementById("miner").innerText = "Healer-op"
    window.open(`localm://suhani/${Givedate()}`, "_self");
}
toggleTheme()

