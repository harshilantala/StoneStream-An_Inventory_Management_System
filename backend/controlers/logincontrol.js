const User = require('../model/modellog');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = password === user.password;
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                email: user.email,
            }
        });
    } catch (error) {
        console.log("Error: " + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = login;