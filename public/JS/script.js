$(() => {

    var ZipCodesITP = {30339:0, 30327:0, 30342:0, 30319: 0, 30341:0, 30345:0, 30033:0, 30329:0, 30324:0, 30326:0, 30305:0, 30318:0, 30363:0, 30309:0, 30306:0, 30307:0, 30030:0, 30079:0, 30002:0, 30032:0, 30317:0, 30316:0, 30315:0, 30354:0, 30337:0, 30344:0, 30310:0, 30311:0, 30308:0, 30313:0, 30303:0, 30314:0, 30312:0}

    var ZipCodesOTP = {30301:0, 30302:0, 30304:0, 30322:0, 30328:0, 30330:0, 30331:0, 30334:0, 30336:0, 30320:0, 30321:0, 30325:0, 30332:0, 30333:0, 30338:0, 30340:0, 30343:0, 30346:0, 30348:0, 30353:0, 30357:0, 30360:0, 30361:0, 30362:0, 30349:0, 30350:0, 30355:0, 30356:0, 30358:0, 30359:0, 30364:0, 30369:0, 30370:0, 30375:0, 30377:0, 30384:0, 30385:0, 30394:0, 30396:0, 30366:0, 30368:0, 30371:0, 30378:0, 30380:0, 30388:0, 30392:0, 30398:0, 31106:0, 31107:0, 31131:0, 31136:0, 31119:0, 31126:0, 31139:0, 31141:0, 31146:0, 31192:0, 31196:0, 31145:0, 31150:0, 31156:0, 31193:0, 31195:0, 39901:0}


    // Inside or Outside Atlanta

    var inOrOutATL = ((locationPreference) => {
        if (locationPreference === "Downtown Atlanta"){
            let zipArr = ZipCodesITP;
        } else if (locationPreference === "Atlanta Suburbs"){
            let zipArr = ZipCodesOTP;
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
            zipCodeObj[zipCode] = Math.floor(parseInt(zipCodeObj[zipCode]) / numOfListings)

        }
        
        console.log(zipCodeObj);
        return zipCodeObj
    }

    // Find Zip Code Recommendation based on Budget and Average Price of House

    var recommendNeighborhood = ((zipCodeObj, budgetArr) => {
        let arrOfRecommendations = []
        for(zipCode in zipCodeObj){
            if (zipCodeObj[zipCode] > budgetArr[0] && zipCodeObj[zipCode] < budgetArr[1]){
                arrOfRecommendations.push(zipCode)
            }
        }
        return arrOfRecommendations
    })



    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?city=Atlanta&limit=200&offset=0&state_code=GA&sort=relevance",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "20cdaadf39mshd73dd859c5dd37ep1391b4jsn869c03e656d7",
            "x-rapidapi-host": "realtor.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        return response
    })

    .done(data => {
        console.log(avgHomePrice(data, ZipCodesITP))
    })


})