class PublicController {
    index(req, res) {
        res.json({ welcome: 'Welcome to the OpenSwap Community API' })
    }
}

module.exports = new PublicController()