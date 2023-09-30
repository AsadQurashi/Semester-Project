import crypto from "crypto";
import jwt from "jsonwebtoken";

export const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
    return secretKey;
};

export const secretKey = generateSecretKey();

// Generate a JWT token
export const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        return null;
    }
};
