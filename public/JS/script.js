$(async() => {

    var zipCodesITP = {30339:0, 30327:0, 30342:0, 30319: 0, 30341:0, 30345:0, 30033:0, 30329:0, 30324:0, 30326:0, 30305:0, 30318:0, 30363:0, 30309:0, 30306:0, 30307:0, 30030:0, 30079:0, 30002:0, 30032:0, 30317:0, 30316:0, 30315:0, 30354:0, 30337:0, 30344:0, 30310:0, 30311:0, 30308:0, 30313:0, 30303:0, 30314:0, 30312:0}

    var zipCodesOTP = {30301:0, 30302:0, 30304:0, 30322:0, 30328:0, 30330:0, 30331:0, 30334:0, 30336:0, 30320:0, 30321:0, 30325:0, 30332:0, 30333:0, 30338:0, 30340:0, 30343:0, 30346:0, 30348:0, 30353:0, 30357:0, 30360:0, 30361:0, 30362:0, 30349:0, 30350:0, 30355:0, 30356:0, 30358:0, 30359:0, 30364:0, 30369:0, 30370:0, 30375:0, 30377:0, 30384:0, 30385:0, 30394:0, 30396:0, 30366:0, 30368:0, 30371:0, 30378:0, 30380:0, 30388:0, 30392:0, 30398:0, 31106:0, 31107:0, 31131:0, 31136:0, 31119:0, 31126:0, 31139:0, 31141:0, 31146:0, 31192:0, 31196:0, 31145:0, 31150:0, 31156:0, 31193:0, 31195:0, 39901:0}


    // Inside or Outside Atlanta

    var inOrOutATL = ((locationPreference) => {
        if (locationPreference === "Downtown Atlanta"){
            let zipArr = zipCodesITP;
        } else if (locationPreference === "Atlanta Suburbs"){
            let zipArr = zipCodesOTP;
        }
        return zipCodeObj
    })

    // Find Budget Amount

    var budget = (income) => {
        let housePrice = (((income * 12)-10000)/0.20);
        let lowEndBudget = housePrice - 100000;
        let highEndBudget = housePrice + 100000;
        return [lowEndBudget, highEndBudget]
    }

    // Average house for sale price for each zip code

    var avgHomePrice = (listingObj, zipCodeObj) => {
        let properties = listingObj.properties;
        for(zipCode in zipCodeObj){
            let numOfListings = 0;
            for(let listing of properties){
                if (listing.address.postal_code === zipCode){
                    zipCodeObj[zipCode] += listing.price;
                    numOfListings += 1;
                }
            }
            if (numOfListings > 0){
                zipCodeObj[zipCode] = Math.floor(parseInt(zipCodeObj[zipCode]) / numOfListings)
            }
            

        }
        return zipCodeObj
    }

    // Find Zip Code Recommendation based on Budget and Average Price of House

    var recommendNeighborhood = ((zipCodeObj, budgetArr) => {
        let arrOfRecommendations = []
        // zipCodeObj.sort((a,b) => (a.zipCode > b.zipCode) ? 1 : -1)
        for(zipCode in zipCodeObj){
            if (zipCodeObj[zipCode] > budgetArr[0] && zipCodeObj[zipCode] < budgetArr[1]){
                arrOfRecommendations.push(zipCode)
            }
        }
        
        return arrOfRecommendations
    })

    // Calling the Realtor API


    const settings = {
        url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?city=Atlanta&limit=200&offset=0&state_code=GA&sort=relevance",
        data: {
            method: "GET",
            mode: 'cors',
            headers: {
                "x-rapidapi-key": "20cdaadf39mshd73dd859c5dd37ep1391b4jsn869c03e656d7",
                "x-rapidapi-host": "realtor.p.rapidapi.com",
            }
        }  
    };

    const responseRealtor = await fetch(settings.url, settings.data); // raw Response
    const finalResponse = await responseRealtor.json(); // Json reponse / formatted response 
    
    const averageHomePrice = avgHomePrice(finalResponse, zipCodesITP);
    // console.log(averageHomePrice)

    var budgetOfPerson = budget(6000);

    var recommendations = recommendNeighborhood(zipCodesITP, budgetOfPerson);

    console.log(recommendations);


    // Calling the Census API

    let censusURLs = [];

    for (let i = 0 ; i < recommendations.length ; i++){

        let url = await fetch(`https://api.census.gov/data/2019/acs/acs5/profile?get=NAME,DP02_0001E,DP04_0046PE,DP04_0047PE,DP04_0003PE,DP05_0005E,DP05_0006E,DP05_0007E,DP05_0008E,DP05_0009E,DP05_0010E,DP05_0011E,DP05_0012E,DP05_0013E,DP05_0014E,DP05_0015E,DP05_0016E,DP05_0017E&for=zip%20code%20tabulation%20area:${recommendations[i]}&in=state:13`);
        censusURLs.push(url);

    }

    let arrRecommendations = [];

    for (let i = 0 ; i < censusURLs.length ; i++){

        let urlFinalResponse = await censusURLs[i].json();
        arrRecommendations.push(urlFinalResponse);
    }

    // Shortening Recommendations Down to 3 Options (If options are more than 3)

    console.log(arrRecommendations.length);
    if (arrRecommendations.length > 3){
        arrRecommendations

        arrRecommendations.splice(3, arrRecommendations.length)
    }

    // Remove Index 0 of all internal arrays in arrRecommendations (index 0 = example of variables)

    for (let i = 0 ; i < arrRecommendations.length ; i++){
        arrRecommendations[i].splice(0,1);
    }

    console.log(arrRecommendations);

    // Setting each recommendation to a variable

    let recommendation1;
    let recommendation2;
    let recommendation3;

    if (arrRecommendations.length === 1){
        recommendation1 = arrRecommendations[0];
        // Error msg for only 1 result
    } else if (arrRecommendations.length === 2 ){
        recommendation1 = arrRecommendations[0];
        recommendation2 = arrRecommendations[1];
        // Error msg for only 2 results
    } else if (arrRecommendations.length === 3){
        recommendation1 = arrRecommendations[0];
        recommendation2 = arrRecommendations[1];
        recommendation3 = arrRecommendations[2];
        // Error msg for only 3 results
    } 
    console.log(recommendation1);
    console.log(recommendation2);
    console.log(recommendation3);

    // // Get Average Age Data

    var ageData = ((recommendation) => {
        let ageDataArr = [];
        for (let i = 0 ; i < recommendation[0].length ; i++){
            if (i > 4){
                ageDataArr.push(recommendation[0][i]);
            }
        }
        return ageDataArr
    })

    var ageDataRec1 = ageData(recommendation1);
    var ageDataRec2 = ageData(recommendation2);
    var ageDataRec3 = ageData(recommendation3);



    // Bar Graph for Average Age for Recommendation 1

    var ctx = document.getElementById('myBarChart1').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['>5', '5-9', '10-14', '15-19', '20-24', '25-34', '35-44', '45-54', '55-59', '60-64', '65-74', '75-84', '85+'],
            datasets: [{
                label: "",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                data: ageDataRec1,
                hoverBackgroundColor: 'purple',
            }]
            
        },
        options: {
            scales: {
                yAxes : [{
                    ticks : {
                        max : 10000,    
                        min : 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Population'
                    }
                }],
                xAxes : [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Age'
                    }
                }],
                title: {
                    display: true,
                    text: 'Age Demographics'
                }
            }
        }
    });

    // Bar Graph for Average Age for Recommendation 2

    var ctx = document.getElementById('myBarChart2').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['>5', '5-9', '10-14', '15-19', '20-24', '25-34', '35-44', '45-54', '55-59', '60-64', '65-74', '75-84', '85+'],
            datasets: [{
                label: "",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                data: ageDataRec2,
                hoverBackgroundColor: 'purple',
            }]
            
        },
        options: {
            scales: {
                yAxes : [{
                    ticks : {
                        max : 10000,    
                        min : 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Population'
                    }
                }],
                xAxes : [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Age'
                    }
                }]
            }
        }
    });

    // Bar Graph for Average Age for Recommendation 3

    var ctx = document.getElementById('myBarChart3').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['>5', '5-9', '10-14', '15-19', '20-24', '25-34', '35-44', '45-54', '55-59', '60-64', '65-74', '75-84', '85+'],
            datasets: [{
                label: "",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                data: ageDataRec3,
                hoverBackgroundColor: 'purple',
            }]
            
        },
        options: {
            scales: {
                yAxes : [{
                    ticks : {
                        max : 10000,    
                        min : 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Population'
                    }
                }],
                xAxes : [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Age'
                    }
                }]
            }
        }
    });

    // Get Housing Occupany Data for Recommendations

    var housingData = ((recommendation) => {
        let housingDataArr = [];
        for (let i = 0 ; i < recommendation[0].length ; i++){
            if (i > 1 && i < 5){
                housingDataArr.push(recommendation[0][i]);
            }
        }
        return housingDataArr
    })

    var housingDataRec1 = housingData(recommendation1);
    var housingDataRec2 = housingData(recommendation2);
    var housingDataRec3 = housingData(recommendation3);

    // Pie Graph for Housing for Recommendation 1

    var ctx = document.getElementById('myPieChart1').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Owned', 'Rented', 'Vacant'],
            datasets: [{
                backgroundColor: ['green', 'yellow', 'blue'],
                borderColor: 'white',
                borderWidth: 2,
                data: housingDataRec1,
                hoverBackgroundColor: 'purple',
            }]
            
        },
        options: {
            cutoutPercentage: 50,
        }
    });


    // Pie Graph for Housing for Recommendation 2

    var ctx = document.getElementById('myPieChart2').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Owned', 'Rented', 'Vacant'],
            datasets: [{
                backgroundColor: ['green', 'yellow', 'blue'],
                borderColor: 'white',
                borderWidth: 2,
                data: housingDataRec2,
                hoverBackgroundColor: 'purple',
            }]
            
        },
        options: {
            cutoutPercentage: 50,
        }
    });


    // Pie Graph for Housing for Recommendation 3

    var ctx = document.getElementById('myPieChart3').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Owned', 'Rented', 'Vacant'],
            datasets: [{
                backgroundColor: ['green', 'yellow', 'blue'],
                borderColor: 'white',
                borderWidth: 2,
                data: housingDataRec3,
                hoverBackgroundColor: 'purple',
            }]
            
        },
        options: {
            cutoutPercentage: 50,
        }
    });
    




})



{/* <div class="col-md-6 offset-md-3 my-5">
            <div class="card">
                <div class="row card-body d-flex justify-content-center">
                    <h3>Recommendation 1</h3>
                    <hr>
                </div>
                <div class="row card-body d-flex justify-content-center">
                    <p>Age Demographics</p>
                    <div class="row">
                        <canvas id="myBarChart1" class="col"></canvas>
                        <canvas id="myPieChart1" class="col"></canvas>
                    </div>
                </div>

            </div>

      </div>
      <div class="col-md-6 offset-md-3 my-5">
            <div class="card">
                <div class="row card-body d-flex justify-content-center">
                    <h3>Recommendation 2</h3>
                    <hr>
                </div>
                <div class="row card-body d-flex justify-content-center">
                    <p>Age Demographics</p>
                    <canvas id="myBarChart2" class="col"></canvas>
                    <canvas id="myPieChart2" class="col"></canvas>
                </div>

            </div>

      </div>
      <div class="col-md-6 offset-md-3 my-5">
            <div class="card">
                <div class="row card-body d-flex justify-content-center">
                    <h3>Recommendation 3</h3>
                    <hr>
                </div>
                <div class="row card-body d-flex justify-content-center">
                    <p>Age Demographics</p>
                    <canvas id="myBarChart3" class="col"></canvas>
                    <canvas id="myPieChart3" class="col"></canvas>
                </div>

            </div>

      </div> */}