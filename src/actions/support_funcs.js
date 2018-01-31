const {API_BASE_URL} = require('../config');

export function search(searchFields) {
    //input is an object of search fields, obtained from checkbox selections (eg: {gunControl: 0, proLife: 1})
    // searchFields = {gunControl: 100, proLife: 0};
    let searchString = '';
    for (let field in searchFields) {
        searchString += `${field}=${searchFields[field] * 50}&`;//x50 because the slider is only 0,1,2 and the schema is 0,50,100
        // searchString = `${field}<0&`
    }
    // console.log(`Sending API request to \n/senators/standsFor?${searchString}`);
    return fetch(`${API_BASE_URL}/senators/standsFor?${searchString}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    //next we convert the object's fields into an array, to be used for the senator cards component.
    .then(data => data.senators
        .map(lawmaker => [lawmaker.name, 
                        lawmaker.image,
                        `${lawmaker.party}-${lawmaker.state}`, 
                        lawmaker.gunControl, 
                        lawmaker.proLife, 
                        lawmaker.gayMarriage, 
                        lawmaker.cleanEnergy, 
                        lawmaker.smallGovernment,
                        lawmaker.impact]
        )
    );
}