
const requestUrl = "https://dragonball-api.com/api/planets?limit=20"


async function fetchApiPlanets() {
    const response = await fetch(requestUrl);       
    const items = response.json();
    return items;
    
}

fetchApiPlanets().then(planet => {  
    for(let index = 0; index < planet.items.length; index++) {
        let id = planet.items[index]["id"];
        let name = planet.items[index]["name"];      
        
        let image = planet.items[index]["image"];
        let description = planet.items[index]["description"];
        

        console.log(id,image,name,description);

        planetdragon.innerHTML += ` <div class="card design card-width">
                <img src="${image}" class="planet-cards card-img-top-planet" alt="Image">
                <div class="card-body-planet">
                    <h1 class="card-name-planet"> ${name}</h1>
                    <p class="card-title-planet"> ${description}</p>
                                     
                </div>                
                <div class="card-body-planet">
                    <a href="#" class="card-link"></a>
                </div>
        </div>
        `
    }
  
});

