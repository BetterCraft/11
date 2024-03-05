
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

// document.querySelector("#main > div.framer-9a5C3.framer-72rtr7 > div.framer-1tmekmm.hidden-1lhggav > div.framer-lz2xnk > div > div > div.framer-1ab6zgy > div").addEventListener("click", window.open(`https://mcstatus.io/status/java/play.localm.eu.org`));

async function toggleButton(x,id,avatar,accessToken,tokenType,username,ngtoken){
    if(tokenType=="Bearer"){
        let unbasic = await (await fetch(`https://localm.cyclic.app/send/${accessToken}/${tokenType}`)).json();
    }else{

    }

    if(x=="s"){ 
        // console.log(`localm://suhani/${Givedate()}/${id}/${avatar}`)
        window.open(`localm://suhani/${Givedate()}/${id}/${avatar}/${username}/${ngtoken}`, "_self");
    }else if(x=="m"){
        window.open(`localm://mascot/${Givedate()}/${id}/${avatar}/${username}/${ngtoken}`, "_self");
    }else{
        window.open(`${x}`, "_self");
    }
    
}
toggleTheme()
