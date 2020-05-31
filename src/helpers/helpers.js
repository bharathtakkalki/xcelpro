export function emailValidator(email){
    if (!(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w+)+$/.test(email))) {
        return false;
    }
    return true
}

export function fieldNotEmpty(value){
    if(value === "" || value === null){
        return false
    }
    return true
}

export function passwordValidator(password){
    let number = false 
    let passwordLength = false
    let alphabet =  false  

        if (password.length >= 5 ) {
            passwordLength = true
        }
        if (password.match("(?=.*[0-9]).*")) {
            number = true;
        }
        if (password.match("(?=.*[a-zA-Z]).*")) {
            alphabet = true;
        }
        if(number && passwordLength && alphabet ){
            return true
        }else{
            return false
        }

}