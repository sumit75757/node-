const jwt = require('jsonwebtoken')

module.exports= (req, res, next)=>{
    try {
        const token =  req.headers.authorization.split(" ")[1];
        console.log(token);
        const decode = jwt.verify(token,"fasfguh9h$%@EWRGW$^YQ#Q#$TGv0");
        req.userData = decode;
        next();
    } catch (error) { 
        res.status(404).json(
            {
                
                message:'auth fail'
            }
          );
        console.log(error);
    }

}