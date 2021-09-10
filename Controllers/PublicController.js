class PublicController {
    index(req, res) {
        res.json({ welcome: 'Welcome to the OpenSwap Community API' })
    }
    help(res,req,next){
        res.json({message:'How can we Help?'})
    }
}

module.exports = new PublicController()
