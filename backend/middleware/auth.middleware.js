import JWT from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please first login the page",
            });
        }

        const decode = JWT.verify(token, process.env.SECRET_KEY);

        console.log(decode);

        req.user = decode;

        next();
    } catch (error) {
        console.log(error);
    }
};
