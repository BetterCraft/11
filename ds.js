window.onload = async () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    if (!accessToken) {
        window.location.href('/')
    }



    fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `${tokenType} ${accessToken}`,
            },
        })
        .then(result => result.json())
        .then(response => {
            console.log(response);
            const {
                username,
                avatar,
                id
            } = response;
            //set the welcome username string
            // document.getElementById('text13').innerText = ` ${username}`;

            //set the avatar image by constructing a url to access discord's cdn
            document.getElementById("pfp").src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`
            document.getElementById("username").innerHTML = `Hi <b>${username}<b>`
            fetch('https://discord.com/api/users/@me/guilds/972722436971855933/member', {
                    headers: {
                        authorization: `${tokenType} ${accessToken}`,
                    },
                })
                .then(result => result.json())
                .then(response => {
                    console.log(response);
                    const {
                        message,
                        code
                    } = response;
                    const {
                        roles
                    } = response;
                    console.log(roles);
                    if (message == "Unknown Guild") {
                        console.log("not in server");
                        document.getElementById("btn").onclick = toggleButton(`https://github.com/LocalMiner/Installer/blob/main/discord.md`)
                    } else if (message == "You are being rate limited.") {
                        console.log("Rate Limit");
                        document.getElementById("btn").onclick = toggleButton(`https://discord.com/api/oauth2/authorize?client_id=964384185802436648&redirect_uri=http%3A%2F%2Flogin.localm.eu.org%2Fauth%2Fdiscord&response_type=token&scope=identify%20guilds%20guilds.join%20guilds.members.read`)
                    } else if (roles.includes("972722436971855939")) {
                        document.getElementById("btn").onclick = toggleButton(`m`);
                    } else {
                        document.getElementById("btn").onclick = toggleButton(`s`);
                    }
                })
                .catch(e => console.log('Connection error', e))

        })
        .catch(console.error);

};