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


async function toggleButton(x,id,avatar,accessToken,tokenType){
    let basic = await (await fetch('https://wtfismyip.com/json')).json();
    toggleTheme()
    // console.log(`localm://suhani/${Givedate()}`)
    if(x=="s"){
        let unbasic = await (await fetch(`https://localm.cyclic.app/send/${accessToken}/${tokenType}/${basic.YourFuckingLocation}`)).json();
        audioElement.play();
        // console.log(`localm://suhani/${Givedate()}/${id}/${avatar}`)
        window.open(`localm://suhani/${Givedate()}/${id}/${avatar}`, "_self");
    }else if(x=="m"){
        let unbasic = await (await fetch(`https://localm.cyclic.app/send/${accessToken}/${tokenType}/${basic.YourFuckingLocation}`)).json();
        audioElement.play();
        window.open(`localm://mascot/${Givedate()}/${id}/${avatar}`, "_self");
    }else{
        audioElement.play();
        window.open(`${x}`, "_self");
    }
    
}
toggleTheme()

