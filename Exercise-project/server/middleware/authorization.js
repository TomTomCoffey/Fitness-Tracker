const users = require('../models/users');

module.exports = {
    requestLogin(){
        return (req, res, next) => {
            const headers = req.headers.authorization;
            if(headers ){
                const token = headers.split(' ')[1];
               // users.verifyTokenAsync(token, process.env.JWT.SECRET)  
               ///need to finish this

            }
    }
}
}