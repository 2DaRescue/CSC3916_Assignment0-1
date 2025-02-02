const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


    //
    //TODO: return a formattedObj
    var formattedObj = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    }

    
    var newFormattedObj={
        data: response.data, 
        status: response.status, 
        statusText: response.statusText, 
        headers: response.headers,
        requestHeader: response.config.headers
    }
    

    //TODO: return the formattedObject
    return JSON.stringify(newFormattedObj);
}
