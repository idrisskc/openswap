class CryptoCurrencyController {
    index(req, res, next) {
        res.json({ cryptos: [], data: [] })
    }
    
}

module.exports = new CryptoCurrencyController()
