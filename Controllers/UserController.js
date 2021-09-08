class UserController {
    index(req, res, next) {
        res.json({ users: [] });
    }

    register(req, res, next) {
        res.json({
            success: true,
            data: [],
            message: "User successfully registered"
        })
    }
}

module.exports = new UserController()