export const validateEmail = email => {
    if (!email) return "Email is required";
    if (!String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
        return "Email is invalid"
    }
    return ""
};

export const validatePassword = password => {
    if(!password) return "Password is required";
    if(password.length < 6) return "At least 6 characters";
    return ""
}

export const validateNumberPhone = numberPhone => {
    if (!numberPhone) return "NumberPhone is required";
    if (!numberPhone.match(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)) {
        return "NumberPhone is invalid"
    }
    return ""
}
export const validateUsername = username => {
    if(!username) return "Username is required";
    if(username.length < 5) return "At least 5 characters";
    return ""
}

export const validateNotNull = notnull => {
    if (!notnull) return "This field is required";
    return ""
}
export const validateID = id => {
    if (!id) return "ID is required";
    if (!id.match(/^[0-9]+$/)) {
        return "ID is invalid"
    }
    return ""
}