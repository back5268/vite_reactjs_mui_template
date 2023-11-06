const fetchData = async (url, configs) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/' + url, configs);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export default fetchData;
