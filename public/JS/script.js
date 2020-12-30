

const auth = firebase.auth();
db.collection('profileData');
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signOutButton = document.getElementById('signOutButton');
const userDetails = document.getElementById('userDetails');
const profileForm = document.getElementById('profileForm');
const submitButton = document.getElementById('submitButton');
signOutButton.onclick = () => auth.signOut();


// console.log(user.displayName);
// var userName = userDetails.innerHTML = `<h3>${user.displayName}'s Profile</h3>`;


const currentUser = localStorage.getItem("currentUser")
const currentUserObj = JSON.parse(currentUser);

console.log(JSON.parse(currentUser));

var docRef = db.collection("profileData").doc(currentUserObj.lastName);

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("User Profile:", doc.data());
//         var userInfo = doc.data();
//         var userIncome = userInfo.income;
//         console.log(userIncome);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("Profile does not exist!");
//     }
// }).catch(function(error) {
//     console.log("ERROR:", error);
// });




$(async() => {

    var zipCodesITP = [
        {zipCode: 30339, averagePrice: 0}, 
        {zipCode: 30327, averagePrice: 0}, 
        {zipCode: 30342, averagePrice: 0}, 
        {zipCode: 30319, averagePrice: 0}, 
        {zipCode: 30341, averagePrice: 0}, 
        {zipCode: 30345, averagePrice: 0}, 
        {zipCode: 30033, averagePrice: 0}, 
        {zipCode: 30329, averagePrice: 0}, 
        {zipCode: 30324, averagePrice: 0}, 
        {zipCode: 30326, averagePrice: 0}, 
        {zipCode: 30305, averagePrice: 0}, 
        {zipCode: 30318, averagePrice: 0}, 
        {zipCode: 30363, averagePrice: 0}, 
        {zipCode: 30309, averagePrice: 0}, 
        {zipCode: 30306, averagePrice: 0}, 
        {zipCode: 30307, averagePrice: 0}, 
        {zipCode: 30030, averagePrice: 0}, 
        {zipCode: 30079, averagePrice: 0}, 
        {zipCode: 30002, averagePrice: 0}, 
        {zipCode: 30032, averagePrice: 0}, 
        {zipCode: 30317, averagePrice: 0}, 
        {zipCode: 30316, averagePrice: 0}, 
        {zipCode: 30315, averagePrice: 0}, 
        {zipCode: 30354, averagePrice: 0}, 
        {zipCode: 30337, averagePrice: 0}, 
        {zipCode: 30344, averagePrice: 0}, 
        {zipCode: 30310, averagePrice: 0}, 
        {zipCode: 30311, averagePrice: 0}, 
        {zipCode: 30308, averagePrice: 0}, 
        {zipCode: 30313, averagePrice: 0}, 
        {zipCode: 30303, averagePrice: 0}, 
        {zipCode: 30314, averagePrice: 0}, 
        {zipCode: 30312, averagePrice: 0}
    ]

    var zipCodesOTP = [
        {zipCode: 30301, averagePrice: 0}, 
        {zipCode: 30302, averagePrice: 0}, 
        {zipCode: 30304, averagePrice: 0}, 
        {zipCode: 30322, averagePrice: 0}, 
        {zipCode: 30328, averagePrice: 0}, 
        {zipCode: 30330, averagePrice: 0}, 
        {zipCode: 30331, averagePrice: 0}, 
        {zipCode: 30334, averagePrice: 0}, 
        {zipCode: 30336, averagePrice: 0}, 
        {zipCode: 30320, averagePrice: 0}, 
        {zipCode: 30321, averagePrice: 0}, 
        {zipCode: 30325, averagePrice: 0}, 
        {zipCode: 30332, averagePrice: 0}, 
        {zipCode: 30333, averagePrice: 0}, 
        {zipCode: 30338, averagePrice: 0}, 
        {zipCode: 30340, averagePrice: 0}, 
        {zipCode: 30343, averagePrice: 0}, 
        {zipCode: 30346, averagePrice: 0}, 
        {zipCode: 30348, averagePrice: 0}, 
        {zipCode: 30353, averagePrice: 0}, 
        {zipCode: 30357, averagePrice: 0}, 
        {zipCode: 30360, averagePrice: 0}, 
        {zipCode: 30361, averagePrice: 0}, 
        {zipCode: 30362, averagePrice: 0}, 
        {zipCode: 30349, averagePrice: 0}, 
        {zipCode: 30350, averagePrice: 0}, 
        {zipCode: 30355, averagePrice: 0}, 
        {zipCode: 30356, averagePrice: 0}, 
        {zipCode: 30358, averagePrice: 0}, 
        {zipCode: 30359, averagePrice: 0}, 
        {zipCode: 30364, averagePrice: 0}, 
        {zipCode: 30369, averagePrice: 0}, 
        {zipCode: 30370, averagePrice: 0}, 
        {zipCode: 30375, averagePrice: 0}, 
        {zipCode: 30377, averagePrice: 0}, 
        {zipCode: 30384, averagePrice: 0}, 
        {zipCode: 30385, averagePrice: 0}, 
        {zipCode: 30394, averagePrice: 0}, 
        {zipCode: 30396, averagePrice: 0}, 
        {zipCode: 30366, averagePrice: 0}, 
        {zipCode: 30368, averagePrice: 0}, 
        {zipCode: 30371, averagePrice: 0}, 
        {zipCode: 30378, averagePrice: 0}, 
        {zipCode: 30380, averagePrice: 0}, 
        {zipCode: 30388, averagePrice: 0}, 
        {zipCode: 30392, averagePrice: 0}, 
        {zipCode: 30398, averagePrice: 0}, 
        {zipCode: 31106, averagePrice: 0}, 
        {zipCode: 31107, averagePrice: 0}, 
        {zipCode: 31131, averagePrice: 0}, 
        {zipCode: 31136, averagePrice: 0}, 
        {zipCode: 31119, averagePrice: 0}, 
        {zipCode: 31126, averagePrice: 0}, 
        {zipCode: 31139, averagePrice: 0}, 
        {zipCode: 31141, averagePrice: 0}, 
        {zipCode: 31146, averagePrice: 0}, 
        {zipCode: 31192, averagePrice: 0}, 
        {zipCode: 31196, averagePrice: 0}, 
        {zipCode: 31145, averagePrice: 0}, 
        {zipCode: 31150, averagePrice: 0}, 
        {zipCode: 31156, averagePrice: 0}, 
        {zipCode: 31193, averagePrice: 0}, 
        {zipCode: 31195, averagePrice: 0}, 
        {zipCode: 39901, averagePrice: 0}
    ]


    // Grabbing User Data from Firebase

    // var docRef = db.collection("profileData").doc("Snitker");

    // async function getProfileData() {
    //     try {
    //         const doc = await docRef.get();
    //         if (doc) {
    //         const userInfo = await doc.data();
    //         const userIncome = userInfo.income;
    //         console.log(userIncome);
    //         return userIncome
    //     }
    //     } catch (error) {
    //         console.log('ERROR:', error);
    //     }
    // }

    const doc = await docRef.get();
    let userPreference;
    let userZipArr;
    let userIncome;

    if (doc) {
        const userInfo = await doc.data(currentUserObj.lastName);
        userIncome = userInfo.income;
        if (userInfo.preference == "on"){
            userPreference = "Downtown Atlanta";
            userZipArr = zipCodesITP;
        } else {
            userPreference = "Atlanta Suburbs";
            userZipArr = zipCodesOTP;
        }
        console.log(userIncome);
    }
    

    console.log(userIncome);
    console.log(userZipArr);
    console.log(userPreference);

    // Inside or Outside Atlanta

    let zipArr;

    var inOrOutATL = ((locationPreference) => {
        if (locationPreference === "Downtown Atlanta"){
            zipArr = zipCodesITP;
        } else if (locationPreference === "Atlanta Suburbs"){
            zipArr = zipCodesOTP;
        }
        return zipArr
    })

    // Find Budget Amount

    var budget = (income) => {
        let housePrice = (((income * 12)-10000)/0.20);
        let lowEndBudget = housePrice - 100000;
        let highEndBudget = housePrice + 100000;
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
        console.log(zipCodeObjArr);
        for (i = 0 ; i < zipCodeObjArr.length ; i++){
            if (zipCodeObjArr[i].averagePrice > budgetArr[0] && zipCodeObjArr[i].averagePrice < budgetArr[1]){
                arrOfRecommendations.push(zipCodeObjArr[i].zipCode)
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
    
    const averageHomePrice = avgHomePrice(finalResponse, userZipArr);

    // console.log(userIncome);

    var budgetOfPerson = budget(userIncome); //change when we recieve data from user

    console.log(budgetOfPerson);

    var userZipCode = inOrOutATL(userPreference);

    var recommendations = recommendNeighborhood(userZipCode, budgetOfPerson);
    
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


    // Using Jquery to put Graphs for First Recommendation on the Page

    var $main = $('.cardContainer')

    var $canvasBar1 = $('<canvas id="myBarChart1" class="col">');
    var $canvasPie1 = $('<canvas id="myPieChart1" class="col">');
    var $canvasLine1 = $('<canvas id="myLineChart1" class="col">');
    var $divCanvas1 = $('<div class="row">');
    var $divCardBody1 = $('<div class="row card-body d-flex justify-content-center">');
    var $h3RecTitle1 = $('<h3 id="recTitle1">');
    var $hr = $('<hr>');
    var $divCardBody2 = $('<div class="row card-body d-flex justify-content-center">');
    var $divCard1 = $('<div class="card m-1">');
    var $divContainer1 = $('<div class="container-sm flex-sm-column col-lg-4">');

    $h3RecTitle1.html(`<h3>Neighborhood One:</h3> <h4>Zipcode - ${threeRecommendations[0]}</h4>`);
    
    $divCanvas1.append($canvasBar1);
    $divCanvas1.append($canvasPie1);
    $divCanvas1.append($canvasLine1);
    $divCardBody1.append($divCanvas1);
    $divCardBody2.append($h3RecTitle1);
    $divCardBody2.append($hr);
    $divCard1.append($divCardBody2);
    $divCard1.append($divCardBody1);
    $divContainer1.append($divCard1);

    $main.append($divContainer1);


    // Using Jquery to put Graphs for Second Recommendation on the Page

    var $canvasBar2 = $('<canvas id="myBarChart2" class="col">');
    var $canvasPie2 = $('<canvas id="myPieChart2" class="col">');
    var $canvasLine2 = $('<canvas id="myLineChart2" class="col">')
    var $divCanvas2 = $('<div class="row">');
    var $divCardBody3 = $('<div class="row card-body d-flex justify-content-center">');
    var $h3RecTitle2 = $('<h3 id="recTitle2">');
    var $hr = $('<hr>');
    var $divCardBody4 = $('<div class="row card-body d-flex justify-content-center">');
    var $divCard2 = $('<div class="card m-1">');
    var $divContainer2 = $('<div class="container-sm flex-sm-column col-lg-4">');

    $h3RecTitle2.html(`<h3>Neighborhood Two:</h3> <h4>Zipcode - ${threeRecommendations[1]}</h4>`);
    
    $divCanvas2.append($canvasBar2);
    $divCanvas2.append($canvasPie2);
    $divCanvas2.append($canvasLine2);
    $divCardBody3.append($divCanvas2);
    $divCardBody4.append($h3RecTitle2);
    $divCardBody4.append($hr);
    $divCard2.append($divCardBody4);
    $divCard2.append($divCardBody3);
    $divContainer2.append($divCard2);

    $main.append($divContainer2);


    // Using Jquery to put Graphs for Third Recommendation on the Page

    var $canvasBar3 = $('<canvas id="myBarChart3" class="col">');
    var $canvasPie3 = $('<canvas id="myPieChart3" class="col">');
    var $canvasLine3 = $('<canvas id="myLineChart3" class="col">')
    var $divCanvas3 = $('<div class="row">');
    var $divCardBody5 = $('<div class="row card-body d-flex justify-content-center">');
    var $h3RecTitle3 = $('<h3 id="recTitle3">');
    var $hr = $('<hr>');
    var $divCardBody6 = $('<div class="row card-body d-flex justify-content-center">');
    var $divCard3 = $('<div class="card m-1">');
    var $divContainer3 = $('<div class="container-sm flex-sm-column col-lg-4">');

    $h3RecTitle3.html(`<h3>Neighborhood Three:</h3> <h4>Zipcode - ${threeRecommendations[2]}</h4>`);
    
    $divCanvas3.append($canvasBar3);
    $divCanvas3.append($canvasPie3);
    $divCanvas3.append($canvasLine3);
    $divCardBody5.append($divCanvas3);
    $divCardBody6.append($h3RecTitle3);
    $divCardBody6.append($hr);
    $divCard3.append($divCardBody6);
    $divCard3.append($divCardBody5);
    $divContainer3.append($divCard3);

    $main.append($divContainer3);

    // Get Average Age Data

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
            labels: ['<5', '5-9', '10-14', '15-19', '20-24', '25-34', '35-44', '45-54', '55-59', '60-64', '65-74', '75-84', '85+'],
            datasets: [{
                label: "",
                backgroundColor: '#e07a5f',
                borderColor: '#e07a5f',
                borderWidth: 2,
                data: ageDataRec1,
                hoverBackgroundColor: 'purple',
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

    // Bar Graph for Average Age for Recommendation 2

    var ctx = document.getElementById('myBarChart2').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['<5', '5-9', '10-14', '15-19', '20-24', '25-34', '35-44', '45-54', '55-59', '60-64', '65-74', '75-84', '85+'],
            datasets: [{
                label: "",
                backgroundColor: '#e07a5f',
                borderColor: '#e07a5f',
                borderWidth: 2,
                data: ageDataRec2,
                hoverBackgroundColor: 'purple',
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
                }]
            }
        }
    });

    // Bar Graph for Average Age for Recommendation 3

    var ctx = document.getElementById('myBarChart3').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['<5', '5-9', '10-14', '15-19', '20-24', '25-34', '35-44', '45-54', '55-59', '60-64', '65-74', '75-84', '85+'],
            datasets: [{
                label: "",
                backgroundColor: '#e07a5f',
                borderColor: '#e07a5f',
                borderWidth: 2,
                data: ageDataRec3,
                hoverBackgroundColor: 'purple',
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
                backgroundColor: ['#81b29a', '#f2cc8f', '#3d405b'],
                borderColor: 'white',
                borderWidth: 2,
                data: housingDataRec1,
                hoverBackgroundColor: 'purple',
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


    // Pie Graph for Housing for Recommendation 2

    var ctx = document.getElementById('myPieChart2').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Owned', 'Rented', 'Vacant'],
            datasets: [{
                backgroundColor: ['#81b29a', '#f2cc8f', '#3d405b'],
                borderColor: 'white',
                borderWidth: 2,
                data: housingDataRec2,
                hoverBackgroundColor: 'purple',
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


    // Pie Graph for Housing for Recommendation 3

    var ctx = document.getElementById('myPieChart3').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Owned', 'Rented', 'Vacant'],
            datasets: [{
                backgroundColor: ['#81b29a', '#f2cc8f', '#3d405b'],
                borderColor: 'white',
                borderWidth: 2,
                data: housingDataRec3,
                hoverBackgroundColor: 'purple',
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

    // Get Income Data for Recommendations

    var incomeData = ((recommendation) => {
        let incomeDataArr = [];
        for (let i = 0 ; i < recommendation[0].length ; i++){
            if (i > 17){
                incomeDataArr.push(recommendation[0][i]);
            }
        }
        return incomeDataArr
    })

    var incomeDataRec1 = incomeData(recommendation1);
    var incomeDataRec2 = incomeData(recommendation2);
    var incomeDataRec3 = incomeData(recommendation3);

    // Line Graph of Income for Recommendation 1

    var ctx = document.getElementById('myLineChart1').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['<$10K', '$10K - $14K', '$15K - $24K', '$25K - $34K', '$35K - $49K', '$50K - $74K', '$75K - $99K', '$100K - $149K', '$150K - $199K', '>$200K'],
            datasets: [{
                pointBackgroundColor: 'purple',
                borderColor: '#3d405b',
                borderWidth: 2,
                data: incomeDataRec1,
                hoverBackgroundColor: 'orange',
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
                        max : 3000,    
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

    // Line Graph of Income for Recommendation 2

    var ctx = document.getElementById('myLineChart2').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['<$10K', '$10K - $14K', '$15K - $24K', '$25K - $34K', '$35K - $49K', '$50K - $74K', '$75K - $99K', '$100K - $149K', '$150K - $199K', '>$200K'],
            datasets: [{
                pointBackgroundColor: 'purple',
                borderColor: '#3d405b',
                borderWidth: 2,
                data: incomeDataRec1,
                hoverBackgroundColor: 'orange',
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
                        max : 3000,    
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
    // Line Graph of Income for Recommendation 3

    var ctx = document.getElementById('myLineChart3').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['<$10K', '$10K - $14K', '$15K - $24K', '$25K - $34K', '$35K - $49K', '$50K - $74K', '$75K - $99K', '$100K - $149K', '$150K - $199K', '>$200K'],
            datasets: [{
                pointBackgroundColor: 'purple',
                borderColor: '#3d405b',
                borderWidth: 2,
                data: incomeDataRec1,
                hoverBackgroundColor: 'orange',
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
                        max : 3000,    
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






})



// {/* <div class="container1 col-md-6 offset-md-3 my-5">
//             <div class="card">
//                 <div class="row card-body d-flex justify-content-center">
//                     <h3 id="recTitle1">Recommendation 1</h3>
//                     <hr>
//                 </div>
//                 <div class="row card-body d-flex justify-content-center">
//                     <p id="barTitle">Age Demographics</p>
//                     <div class="row">
//                         <canvas id="myBarChart1" class="col"></canvas>
//                         <canvas id="myPieChart1" class="col"></canvas>
//                     </div>
//                 </div>

//             </div>

//       </div>
//       <div class="col-md-6 offset-md-3 my-5">
//             <div class="card">
//                 <div class="row card-body d-flex justify-content-center">
//                     <h3>Recommendation 2</h3>
//                     <hr>
//                 </div>
//                 <div class="row card-body d-flex justify-content-center">
//                     <p>Age Demographics</p>
//                     <canvas id="myBarChart2" class="col"></canvas>
//                     <canvas id="myPieChart2" class="col"></canvas>
//                 </div>

//             </div>

//       </div>
//       <div class="col-md-6 offset-md-3 my-5">
//             <div class="card">
//                 <div class="row card-body d-flex justify-content-center">
//                     <h3>Recommendation 3</h3>
//                     <hr>
//                 </div>
//                 <div class="row card-body d-flex justify-content-center">
//                     <p>Age Demographics</p>
//                     <canvas id="myBarChart3" class="col"></canvas>
//                     <canvas id="myPieChart3" class="col"></canvas>
//                 </div>

//             </div>

//       </div> */}
