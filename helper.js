const user = function(data){
    return `${data} is logged in`
}

const id = function(id){
    return `${id} is logged in`
}

const email = function(email){
    return `${email} is logged in`
}

module.exports = {
    user,
    id, 
    email
};