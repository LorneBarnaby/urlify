interface queryString{
    text? : string;
    paramCount? : number;
    original? : object;
}


export const GenerateQuery = function(parameters : object) : queryString {
    let query : queryString = {}
    query.original = parameters;
    let keys = Object.keys(parameters);
    query.paramCount = keys.length;
    query.text = '';
    let values = Object.values(parameters);

    for(let i = 0; i < keys.length; i++){
        if(i > 0){
            query.text += "&";
        }
        query.text += `${keys[i]}=${values[i]}`;
    }

    return query;
}


