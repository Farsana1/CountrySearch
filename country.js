const search=async()=>{
   const response = await fetch(`https://restcountries.com/v3.1/name/${result.value}?fullText=true`)

    response.json().then(data=>{
    console.log(data);

    let x=data[0]
    let flag=x.name.common
    console.log( flag);

    let official=x.name.official
    console.log(official);

    let capital=x.capital
    
    let border=x.borders
   
    let area=x.area
    let maps=x.maps['googleMaps']
    let pop=x.population
    let time=x.timezones
    let continent=x.continents
    
    let flags=x.flags['png']
    console.log(flags);


    for(var curr in x.currencies){
        var currencyName=x.currencies[curr].name
        
        var currencySymbol=x.currencies[curr].symbol
        console.log(`${currencyName}  ${currencySymbol}`);
        
    }

    let languages=[]
    for(var lang in x.languages){
        languages.push(x.languages[lang])
    }
    console.log(languages);




    res.innerHTML=`
     
                  <div class="card mb-3" style="max-width: 100%;">
                    <div class="row g-0">
                      <div class="col-md-4 mt-3 ps-3 lg:p-1" id="res">
                        <img src=${flags} class="img-fluid rounded-start w-100" alt="...">
                        <h5 class="card-title text-center mt-3">${official}</h5>
                        <ul class="list-group list-group-flush border">
                       
                          <li class="list-group-item">Capital: ${capital}</li>
                         
                          </ul>
                       
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">                        
                          <ul class="list-group list-group-flush border">
                           <li class="list-group-item"> ${flag}</li>
                            <li class="list-group-item">Continent: ${continent}</li>
                            <li class="list-group-item">Population: ${pop}</li>
                            <li class="list-group-item">Area: ${area}</li>
                            <li class="list-group-item">Timezone: ${time}</li>
                            <li class="list-group-item">Border: ${border}</li>
                             <li class="list-group-item">Languages: ${languages}</li>
                             <li class="list-group-item">Currency: ${currencySymbol} ${currencyName}</li>
                            <li class="list-group-item">Google Map: <a href="${maps}" target="_blank">${maps}</a></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                
  
    `

    });
   
}
// common, official ,currency ->name,symbol, capital , languages, borders, area, maps->google maps, populatoion, timezones, continent, flags->png 