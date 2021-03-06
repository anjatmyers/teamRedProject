// $(window).on('load', function(){
//     $('loader-box').fadeOut('slow');
// });




db.collection('profileDataPROD');

const signOutButton1 = document.getElementById('signOutButton1');
const profileForm = document.getElementById('profileForm');
const submitButton = document.getElementById('submitButton');

signOutButton.onclick = () => auth.signOut();



const currentUser = localStorage.getItem("currentUser")
const currentUserObj = JSON.parse(currentUser);

var docRef = db.collection("profileDataPROD").doc(currentUserObj.lastName);

$(async() => {

    var zipCodesATL = [
        {zipCode: 30339, averagePrice: 0, town: "Vinings"}, 
        {zipCode: 30327, averagePrice: 0, town: "Buckhead"}, 
        {zipCode: 30342, averagePrice: 0, town: "Buckhead"}, 
        {zipCode: 30319, averagePrice: 0, town: "Buckhead"}, 
        {zipCode: 30341, averagePrice: 0, town: "Chamblee"}, 
        {zipCode: 30345, averagePrice: 0, town: "Tucker"}, 
        {zipCode: 30033, averagePrice: 0, town: "Decatur"}, 
        {zipCode: 30329, averagePrice: 0, town: "North Druid Hills"}, 
        {zipCode: 30324, averagePrice: 0, town: "Intown Atlanta"}, 
        {zipCode: 30326, averagePrice: 0, town: "Lenox"}, 
        {zipCode: 30305, averagePrice: 0, town: "Buckhead"}, 
        {zipCode: 30318, averagePrice: 0, town: "West Side Atlanta"}, 
        {zipCode: 30363, averagePrice: 0, town: "Atlantic Station"}, 
        {zipCode: 30309, averagePrice: 0, town: "Midtown"}, 
        {zipCode: 30306, averagePrice: 0, town: "Virginia Highlands"}, 
        {zipCode: 30307, averagePrice: 0, town: "Little Fives"}, 
        {zipCode: 30030, averagePrice: 0, town: "Decatur"}, 
        {zipCode: 30079, averagePrice: 0, town: "Scottdale"}, 
        {zipCode: 30002, averagePrice: 0, town: "Avondale Estates"}, 
        {zipCode: 30032, averagePrice: 0, town: "South Decatur"}, 
        {zipCode: 30317, averagePrice: 0, town: "East Lake"}, 
        {zipCode: 30316, averagePrice: 0, town: "Cabbagetown"}, 
        {zipCode: 30315, averagePrice: 0, town: "Lakewood Heights"}, 
        {zipCode: 30354, averagePrice: 0, town: "Hapeville"}, 
        {zipCode: 30337, averagePrice: 0, town: "College Park"}, 
        {zipCode: 30344, averagePrice: 0, town: "East Point"}, 
        {zipCode: 30310, averagePrice: 0, town: "West End"}, 
        {zipCode: 30311, averagePrice: 0, town: "Cascade Heights"}, 
        {zipCode: 30308, averagePrice: 0, town: "Old Forth Ward"}, 
        {zipCode: 30313, averagePrice: 0, town: "Grant Park"}, 
        {zipCode: 30303, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30314, averagePrice: 0, town: "Hunter Hills"}, 
        {zipCode: 30312, averagePrice: 0, town: "Grant Park"},
        {zipCode: 30301, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30302, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30304, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30322, averagePrice: 0, town: "North Decatur"}, 
        {zipCode: 30328, averagePrice: 0, town: "Sandy Springs"}, 
        {zipCode: 30330, averagePrice: 0, town: "Adams Park"}, 
        {zipCode: 30331, averagePrice: 0, town: "Sandtown"}, 
        {zipCode: 30334, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30336, averagePrice: 0, town: "South West Atlanta"}, 
        {zipCode: 30320, averagePrice: 0, town: "College Park"}, 
        {zipCode: 30321, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30325, averagePrice: 0, town: "Vinings"}, 
        {zipCode: 30332, averagePrice: 0, town: "Midtown"}, 
        {zipCode: 30333, averagePrice: 0, town: "North Druid Hills"}, 
        {zipCode: 30338, averagePrice: 0, town: "Dunwoody"}, 
        {zipCode: 30340, averagePrice: 0, town: "Doraville"}, 
        {zipCode: 30343, averagePrice: 0, town: "Downtowm"}, 
        {zipCode: 30346, averagePrice: 0, town: "Dunwoody"}, 
        {zipCode: 30348, averagePrice: 0, town: "Buckhead"}, 
        {zipCode: 30353, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30357, averagePrice: 0, town: "Midtown"}, 
        {zipCode: 30360, averagePrice: 0, town: "Dunwoody"}, 
        {zipCode: 30361, averagePrice: 0, town: "Piedmont Park"}, 
        {zipCode: 30362, averagePrice: 0, town: "Embry Hills"}, 
        {zipCode: 30349, averagePrice: 0, town: "South Atlanta"}, 
        {zipCode: 30350, averagePrice: 0, town: "Dunwoody"}, 
        {zipCode: 30355, averagePrice: 0, town: "Peachtree Park"}, 
        {zipCode: 30356, averagePrice: 0, town: "Dunwoody"}, 
        {zipCode: 30358, averagePrice: 0, town: "Sandy Springs"}, 
        {zipCode: 30359, averagePrice: 0, town: "North Druid Hills"}, 
        {zipCode: 30364, averagePrice: 0, town: "East Point"}, 
        {zipCode: 30369, averagePrice: 0, town: "West Atlanta"}, 
        {zipCode: 30370, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30375, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30377, averagePrice: 0, town: "West Atlanta"}, 
        {zipCode: 30384, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30385, averagePrice: 0, town: "Hapeville"}, 
        {zipCode: 30394, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30396, averagePrice: 0, town: "Mountain View"}, 
        {zipCode: 30366, averagePrice: 0, town: "Chamblee"}, 
        {zipCode: 30368, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30371, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30378, averagePrice: 0, town: "West Atlanta"}, 
        {zipCode: 30380, averagePrice: 0, town: "South Atlanta"}, 
        {zipCode: 30388, averagePrice: 0, town: "Mountain View"}, 
        {zipCode: 30392, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 30398, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 31106, averagePrice: 0, town: "City Hall"}, 
        {zipCode: 31107, averagePrice: 0, town: "City Hall"}, 
        {zipCode: 31131, averagePrice: 0, town: "Greenbriar"}, 
        {zipCode: 31136, averagePrice: 0, town: "West Atlanta"}, 
        {zipCode: 31119, averagePrice: 0, town: "North Buckhead"}, 
        {zipCode: 31126, averagePrice: 0, town: "Buckhead Heights"}, 
        {zipCode: 31139, averagePrice: 0, town: "Vinings"}, 
        {zipCode: 31141, averagePrice: 0, town: "Chamblee"}, 
        {zipCode: 31146, averagePrice: 0, town: "Dunwoody"}, 
        {zipCode: 31192, averagePrice: 0, town: "Union City"}, 
        {zipCode: 31196, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 31145, averagePrice: 0, town: "Brookhaven"}, 
        {zipCode: 31150, averagePrice: 0, town: "Roswell"}, 
        {zipCode: 31156, averagePrice: 0, town: "Sandy Springs"}, 
        {zipCode: 31193, averagePrice: 0, town: "Hapeville"}, 
        {zipCode: 31195, averagePrice: 0, town: "Downtown"}, 
        {zipCode: 39901, averagePrice: 0, town: "Chamblee"}
    ]

    // Grabbing User Data from Firebase


    const doc = await docRef.get();
    let userPreference;
    let userZipArr;
    let userIncome;

    if (doc) {
        const userInfo = await doc.data(currentUserObj.lastName);
        userIncome = userInfo.income;
    }


    // Find Budget Amount

    var budget = (income) => {
        let housePrice;
        let lowEndBudget;
        let highEndBudget;
        if (income < 10000){
            housePrice = (((income * 12)-10000)/0.20);
            lowEndBudget = housePrice - 100000;
            highEndBudget = housePrice + 100000;
        } else {
            housePrice = (((120000)-10000)/0.20);
            lowEndBudget = housePrice - 100000;
            highEndBudget = housePrice + 100000;
        }
        return [lowEndBudget, highEndBudget]
    }

    // Average house for sale price for each zip code

    var avgHomePrice = (listingObj, zipCodeObjArr) => {
        let properties = listingObj.properties;
        // for(zipCode in zipCodeObj){
        for(let i = 0 ; i < zipCodeObjArr.length ; i++){
            let numOfListings = 0;
            for(let listing of properties){
                if (listing.address.postal_code == zipCodeObjArr[i].zipCode){
                    zipCodeObjArr[i].averagePrice += listing.price;
                    numOfListings += 1;
                }
            }
            if (numOfListings > 0){
                zipCodeObjArr[i].averagePrice = Math.floor(parseInt(zipCodeObjArr[i].averagePrice) / numOfListings)
            }
            

        }
        return zipCodeObjArr
    }


    // Find Zip Code Recommendation based on Budget and Average Price of House

    var recommendNeighborhood = ((zipCodeObjArr, budgetArr) => {
        let arrOfRecommendations = []
        zipCodeObjArr.sort((a,b) => (a.averagePrice > b.averagePrice) ? 1 : -1)
        for (i = 0 ; i < zipCodeObjArr.length ; i++){
            if (zipCodeObjArr[i].averagePrice > budgetArr[0] && zipCodeObjArr[i].averagePrice < budgetArr[1]){
                arrOfRecommendations.push(zipCodeObjArr[i].zipCode)
            }
            if (zipCodeObjArr[i].averagePrice == 0){
                arrOfRecommendations = [];
            }
        }
        
        return arrOfRecommendations
    })



    // Shortening Recommendations Down to Three

    var sortedRecommendations = (arrRec) => {
        let arrOfThreeRec = [];
        if (arrRec.length === 1){
            arrOfThreeRec.push(arrRec[0]);
            // Error msg for only 1 result
        } else if (arrRec.length === 2 ){
            arrOfThreeRec.push(arrRec[0]);
            arrOfThreeRec.push(arrRec[arrRec.length - 1]);
            // Error msg for only 2 results
        } else if (arrRec.length > 3){
            arrOfThreeRec.push(arrRec[0]);
            arrOfThreeRec.push(arrRec[Math.floor(arrRec.length / 2)]);
            arrOfThreeRec.push(arrRec[arrRec.length - 1]);
            // Error msg for only 3 results
        } 
        return arrOfThreeRec
    };

    

    // Calling the Realtor API


    const settings = {
        url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?city=Atlanta&limit=200&offset=0&state_code=GA&sort=relevance",
        data: {
            method: "GET",
            mode: 'cors',
            headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "realtor.p.rapidapi.com",
            }
        }  
    };

    const responseRealtor = await fetch(settings.url, settings.data); // raw Response
    const finalResponse = await responseRealtor.json(); // Json reponse / formatted response 
    
    const averageHomePrice = avgHomePrice(finalResponse, zipCodesATL);


    var budgetOfPerson = budget(userIncome); //change when we recieve data from user


    var recommendations = recommendNeighborhood(zipCodesATL, budgetOfPerson);

    if (recommendations.length < 1){

        let $modal = $('#exampleModal');
        $modal.modal('show');

        let $recMsg = $('#recommendationsMsg');
        $recMsg.hide();

        let $editButton = $('#editButton');
        $editButton.click(function(){
            window.location = "profile.html";
        })

    } else {
    
        var threeRecommendations = sortedRecommendations(recommendations);

        // Calling the Census API

        let censusURLs = [];

        for (let i = 0 ; i < threeRecommendations.length ; i++){

            let url = await fetch(`https://api.census.gov/data/2019/acs/acs5/profile?get=NAME,DP02_0001E,DP04_0046PE,DP04_0047PE,DP04_0003PE,DP05_0005E,DP05_0006E,DP05_0007E,DP05_0008E,DP05_0009E,DP05_0010E,DP05_0011E,DP05_0012E,DP05_0013E,DP05_0014E,DP05_0015E,DP05_0016E,DP05_0017E,DP03_0052E,DP03_0053E,DP03_0054E,DP03_0055E,DP03_0056E,DP03_0057E,DP03_0058E,DP03_0059E,DP03_0060E,DP03_0061E&for=zip%20code%20tabulation%20area:${threeRecommendations[i]}&in=state:13`);
            censusURLs.push(url);

        }

        let arrRecommendations = [];

        for (let i = 0 ; i < censusURLs.length ; i++){

            let urlFinalResponse = await censusURLs[i].json();
            arrRecommendations.push(urlFinalResponse);
        }


        // Remove Index 0 of all internal arrays in arrRecommendations (index 0 = example of variables)

        for (let i = 0 ; i < arrRecommendations.length ; i++){
            arrRecommendations[i].splice(0,1);
        }

        // Retrieve data set for Age Bar Graphs

        var ageData = ((recommendation) => {
            let ageDataArr = [];
            for (let i = 0 ; i < recommendation[0].length ; i++){
                if (i > 4){
                    ageDataArr.push(recommendation[0][i]);
                }
            }
            return ageDataArr
        })

        // Retrieve data set for Housing Dougnut Graphs

        var housingData = ((recommendation) => {
            let housingDataArr = [];
            for (let i = 0 ; i < recommendation[0].length ; i++){
                if (i > 1 && i < 5){
                    housingDataArr.push(recommendation[0][i]);
                }
            }
            return housingDataArr
        })

        // Retrieve data set for Income Line Graphs

        var incomeData = ((recommendation) => {
            let incomeDataArr = [];
            for (let i = 0 ; i < recommendation[0].length ; i++){
                if (i > 17){
                    incomeDataArr.push(recommendation[0][i]);
                }
            }
            return incomeDataArr
        })

        // Accessing Neighborhood Name for each Recommendation

        var neighborhoodName = (recommendation, zipArray) => {
            let neighborhood = "";
            for (let i = 0 ; i < zipArray.length ; i++){
                if (zipArray[i].zipCode == recommendation){
                    neighborhood = zipArray[i].town;
                }
            }return neighborhood
        }



        // Making the graphs and appending them to the HTML

        var $main = $('.cardContainer')
    
        for(let i = 0; i < arrRecommendations.length; i++) {
            var recommendation = arrRecommendations[i];
            var townName = neighborhoodName(threeRecommendations[i], zipCodesATL);
            var id = i + 1;
            var integersToWordsArray = ["One", "Two", "Three"]
        
            var $canvasBar = $(`<canvas id="myBarChart${id}" class="col">`);
            var $canvasPie = $(`<canvas id="myPieChart${id}" class="col">`);
            var $canvasLine = $(`<canvas id="myLineChart${id}" class="col">`);
            var $divCanvas = $('<div class="row">');
            var $divCardBody1 = $('<div class="row card-body d-flex justify-content-center">');
            var $h3RecTitle = $('<h3 id="recTitle1">');
            var $hr = $('<hr>');
            var $divCardBody2 = $('<div class="row card-body d-flex justify-content-center">');
            var $divCard = $('<div class="card m-1">');
            var $divContainer = $('<div class="container-sm flex-sm-column col-lg-4">');

            $h3RecTitle.html(`<h3 class="navyFont">${townName}:</h3> <h4 class="navyFont">Zipcode - <a href="https://www.realtor.com/realestateandhomes-search/${threeRecommendations[i]}" target="_blank" class="navyFont">${threeRecommendations[i]}</a></h4>`);
        
            $divCanvas.append($canvasBar);
            $divCanvas.append($canvasPie);
            $divCanvas.append($canvasLine);
            $divCardBody1.append($divCanvas);
            $divCardBody2.append($h3RecTitle);
            $divCardBody2.append($hr);
            $divCard.append($divCardBody2);
            $divCard.append($divCardBody1);
            $divContainer.append($divCard);

            $main.append($divContainer);

            var ageDataRec = ageData(recommendation);

            var ctx = document.getElementById(`myBarChart${id}`).getContext('2d');
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['<5', '5-9', '10-14', '15-19', '20-24', '25-34', '35-44', '45-54', '55-59', '60-64', '65-74', '75-84', '85+'],
                    datasets: [{
                        label: "",
                        backgroundColor: '#e07a5f',
                        borderColor: '#e07a5f',
                        borderWidth: 2,
                        data: ageDataRec,
                        hoverBackgroundColor: '#f4f1de',
                    }]
                    
                },
                options: {
                    title: {
                        display: true,
                        text: 'Age Demographics'
                    },
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

            var housingDataRec = housingData(recommendation);

            var ctx = document.getElementById(`myPieChart${id}`).getContext('2d');
            var myPieChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Owned', 'Rented', 'Vacant'],
                    datasets: [{
                        backgroundColor: ['#81b29a', '#f2cc8f', '#3d405b'],
                        borderColor: 'white',
                        borderWidth: 2,
                        data: housingDataRec,
                        hoverBackgroundColor: '#f4f1de',
                    }]
                
                },
                options: {
                    title: {
                        display: true,
                        text: 'Housing Inventory'
                    },
                    cutoutPercentage: 50,
                }
            });

            var incomeDataRec = incomeData(recommendation);

            var ctx = document.getElementById(`myLineChart${id}`).getContext('2d');
            var myPieChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['<$10K', '$10K - $14K', '$15K - $24K', '$25K - $34K', '$35K - $49K', '$50K - $74K', '$75K - $99K', '$100K - $149K', '$150K - $199K', '>$200K'],
                    datasets: [{
                        pointBackgroundColor: '#f4f1de',
                        borderColor: '#3d405b',
                        borderWidth: 2,
                        data: incomeDataRec,
                        hoverBackgroundColor: 'orange',
                        label: "",
                    }]
                    
                },
                options: {
                    title: {
                        display: true,
                        text: 'Income By Household'
                    },
                    scales: {
                        yAxes : [{
                            ticks : {
                                max : 4000,    
                                min : 0
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Number of Households'
                            }
                        }],
                        xAxes : [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Annual Income'
                            }
                        }]
                    }
                }
            });
        } 
    }

})
