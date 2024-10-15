const options = {
    method: 'GET',
    Headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_DRAGONBALL_API_KEY',
        'Accept': 'application/json',
        
    }
}

const requestUrl = "https://web.dragonball-api.com"
console.log(requestUrl)

async function fetchApiDragon(requestUrl){
    const response = await fetch(requestUrl)
    const dragon = response.json();
    return dragon;
}

fetchApiDragon().then(dragon => {
    console.log(dragon);
});