class UserController {
    index(req, res, next) {
        res.json({ users: [] });
    }
}

module.exports = new UserController()