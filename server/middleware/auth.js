const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    
    if (!token) return res.status(401).send( { message: 'Brak tokena. Odmowa dostępu'});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(400).send({message: 'Token jest nieważny.'});
    }
}

module.exports = auth;