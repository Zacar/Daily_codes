function getUpperCase(str){
return str.toUpperCase();
}

function getLowerCase(str){
    return str.toLowerCase();
}

function getSentenceCase(str){
    return str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase();
}

function getProperCase(str){
    const new_strings=str.split(" ")
    const properCases=[]
    for (const each of new_strings){
        properCases.push(each.slice(0,1).toUpperCase() + each.slice(1).toLowerCase())
    }
 
    return properCases.join(" ")
}

module.exports={
getUpperCase,
getLowerCase,
getSentenceCase,
getProperCase
}