import jwt from "jsonwebtoken";
import { secretKey } from "../Config/Toekn.js"; // Import the secretKey from Token.js

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, secretKey, (user, err) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }
        req.user = user;
        next();
    });
};

export default authenticateToken;
