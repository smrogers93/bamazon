var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "seahorse?1B",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                type: "rawlist",
                name: "itemSelect",
                choices: function() {
                    var choiceArr = []
                    for (var i = 0; i < results.length; i++) {
                        choiceArr.push(results[i].product_name)
                    }
                    return choiceArr
                },
                message: "What is the ID of the product you would like to purchase?"
            }
        ]).then(function(answer) {
            var chosenItem
            for (var i = 0; i < results.length; i++) {
                if (results[i] === answer.choice) {
                    chosenItem = results[i]
                }
            }
            if (chosenItem.stock_quantity > 0) {
                console.log("You're a genius!")
            }
        })
    })
}