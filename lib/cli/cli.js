const path = require('path')
const fs = require('fs')
const { showTestsResults } = require('./../')

// search for test folder
function searchTestFolder() {
    if (!fs.existsSync('test/')) {
        console.log(`'test/' folder doesn't exits`)
        return
    }
    let f = null
    if (f = fs.readdirSync('test/')) {
        //console.log(f)
        if (f.length == 0) {
            console.log('No test files found.')
            return
        }
        f.forEach((g) => {
            //console.log(fs.realpathSync(`test/${g}`))
            require(fs.realpathSync(`test/${g}`))
        })
        showTestsResults()
    }
}

function run() {
    //console.log('running kwuo')
    searchTestFolder()
}
run()