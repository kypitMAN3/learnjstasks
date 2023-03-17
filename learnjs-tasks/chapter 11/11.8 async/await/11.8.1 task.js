async function loadJson(url) {
    let response = await fetch(url);
    
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }

    return new Error(response.status);
}