async function httpGet(url) {
    try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('GET request failed:', error);
    }
}

function httpPost(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        return data
    })
    .catch(error => {
        console.error('POST request failed:', error);
    });
}


function add_data(){
    
    var result_list = []
    // var flattenedBrandy = Object.values(BrandyData).flat();
    for (const [key, value] of Object.entries(BrandyData)) {
        for(var i = 0; i < value.length; i ++){
            const newPost = {
                name: value[i].title,
                cafe: "Brandywine",
                station: key
            };
            result_list.push(newPost)
        }
    }
    for (const [key, value] of Object.entries(AnteateryData)) {
        for(var i = 0; i < value.length; i ++){
            const newPost = {
                name: value[i].title,
                cafe: "Anteatery",
                station: key
            };
            result_list.push(newPost)
        }
    }
    return result_list
}

// Example usage:
const FoodData = httpGet("http://localhost/db/foods");
console.log(FoodData)
