
const requestUrl = "https://dragonball-api.com/api/characters?limit=58"


async function fetchApiDragon() {
    const response = await fetch(requestUrl);       
    const items = response.json();
    return items;
    
}

fetchApiDragon().then(dragon => {  
    for(let index = 0; index < dragon.items.length; index++) {
        let id = dragon.items[index]["id"];
        let image = dragon.items[index]["image"];
        let name = dragon.items[index]["name"];
        let race = dragon.items[index]["race"];
        let gender = dragon.items[index]["gender"];
        let ki = dragon.items[index]["ki"];
        let maxki = dragon.items[index]["maxKi"];
        let affiliation = dragon.items[index]["affiliation"];

        console.log(id,image,name);

        cardsdragon.innerHTML += ` <div class="card design card-width">
                <img src="${image}" class="card-img-top" alt="Image">
                <div class="card-body">
                    <h1 class="card-name"> ${name}</h1>
                    <p class="card-title"> ${race} - ${gender}</p>
                    <p class="card-text">Base KI:</p>
                    <p class="card-title"> ${ki}</p>
                    <p class="card-text">Total KI:</p> 
                    <p class="card-title"> ${maxki}</p>
                    <p class="card-text">Afiliation </p>
                    <p class="card-title">${affiliation}</p>                   
                </div>                
                <div class="card-body">
                    <a href="#" class="card-link"></a>
                </div>
        </div>
        `
    }
  
});

