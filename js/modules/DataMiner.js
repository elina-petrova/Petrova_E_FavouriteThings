let errorCodes = {
    404: "URL is wrong, go and check the spelling.",
    500: "Server denies to work today :(",
    403: "Do you have credits?",
    503: "Dude, the service is unavailable"
}

async function fetchData(sourceURL) {
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Oh no, we faced a problem. Error ${response.status}: ${errorCodes[response.status]}`);
        } 
        return response;           
    });
    let dataset = await resource.json();
    return dataset[0];
}

export { fetchData };