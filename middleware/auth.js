const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization || "";

        // Accept "Bearer <token>" or raw token
        if (token.startsWith("Bearer ")) {
            token = token.slice(7);
        }

        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: "Unauthorized" });
    }
};