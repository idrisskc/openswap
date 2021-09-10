class PublicController {
    index(req, res) {
        res.json({ welcome: 'Welcome to the OpenSwap Community API' })
    }
    goodbye(res,req,next){
        res.json({ goodbye: "See you soon"})
    }
    help(res,req,next){
        res.json({message:'How can we Help?'})
    }
}

module.exports = new PublicController()