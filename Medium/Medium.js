var userResponse = window.prompt("Do you LOVE or dislike coffee?")
console.log(userResponse)

function yellResp(userResponse){
    //first check if user has a valid response
    if (!userResponse) {
        return console.log("Must insert a valid response")  
    }
    //second check if user inserted all caps
    if (userResponse === userResponse.toUpperCase()){
        return console.log("Why are you screaming?")
    }
    //third check if user inserted all lowercase
    if (userResponse === userResponse.toLowerCase()){
        return console.log("Why are you whispering?")
    }
}

function yellResp2(userResponse){
    //Simplified Function w/ mentor assistance
    if (!userResponse) {
        return console.log("Must insert a valid response")  
    } else if (userResponse === userResponse.toUpperCase()) { 
        return console.log("Why are you screaming?")
    } else if (userResponse === userResponse.toLowerCase()){
        return console.log("Why are you whispering?")
    }
}

yellResp(userResponse)