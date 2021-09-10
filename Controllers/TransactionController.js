class TransactionController {
    index(req, res) {
        res.json({ message: "Total transactions", total: Number, transactions: [] })
    }
    details(req, res,next) {
        res.json({
            date: Date,
            amount: Number,
            transactionID: Number,
            description: String,
            category:[{id: String, group: String }], //Group could be Deposits, Withdrawals or Trades 
            data: []
        })
    }
    deposit(req, res, next){
        res.json({
            id: String,
            data: [],
            success: true,
            message: "amount successfully deposited in account"
        })
    }
    withdraw(req,res,next){
        res.json({
            
        })
    }

}