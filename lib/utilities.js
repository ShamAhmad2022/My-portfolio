export const validateString = (value, maxLength) => {
    if(!value || typeof value !== "string" || value.length > maxLength){
        return false;
    }

    return true;
}

export const getErrorMessage = (err)=> {
    
    let message;
    
    if(err instanceof Error){
        message = err.message;
    }else if(err && typeof err === "object" && "message" in err){
        message = String(err.message);
    }else if(typeof err === "string"){
        message = err;
    }else{
        message = "something went wrong";
    }

    return message;

}