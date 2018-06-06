const path = require('path')
const fs = require('fs')
const { showTestsResults } = require('./../')

/** 
 * search for test folder 
 */
function searchTestFolder() {
    if (!fs.existsSync('test/')) {
        return false
    }
    return true
}

/**
 * get all test files in the test/ folder
 */
function getTestFiles() {
    let f = null
    if (f = fs.readdirSync('test/')) {
        return f.length == 0 ? null : f
    }
}

/**
 * run the test files
 * @param {*} f 
 */
function runTestFiles(f = []) {
    f.forEach((g) => {
        require(fs.realpathSync(`test/${g}`))
    })
    showTestsResults()
}

function run() {
    if (searchTestFolder()) {
        let files;
        if (files = getTestFiles()) {
            runTestFiles(files)
        } else {
            console.error('No test files found.')
        }
    } else {
        console.error(`'test/' folder doesn't exits`)
    }
}
run()