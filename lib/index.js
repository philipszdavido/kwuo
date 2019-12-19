const chalk = require('chalk')
const log = console.log
var beforeEachs = []
var afterEachs = []
var afterAlls = []
var beforeAlls = []
var Totaltests = 0
var passedTests = 0
var failedTests = 0
var stats = []
var currDesc = {
    it: []
}

var currIt = {}

/**
 * var fn = kwuo.fn()
 * forEach([1,2], fn)
 * expect(fn.mock.calls.length).toBe(2)
 */
var kwuo = {
    fn: function(callback) {
        var calls = []
        var returnValues = []
        calls.push()
        if (callback) {
            callback()
        }
        return {
            mock: {
                calls: calls,
                returnValues: returnValues
            }
        }
    },
    mock: function(params) {

    }
}

function beforeEach(fn) {
    beforeEachs.push(fn)
}

function afterEach(fn) {
    afterEachs.push(fn)
}

function beforeAll(fn) {
    beforeAlls.push(fn)
}

function afterAll(fn) {
    afterAlls.push(fn)
}

function expect(value) {
    return {

        // Match or Asserts that expected and actual objects are same.
        toBe: function(expected) {
            if (value === expected) {
                currIt.expects.push({ name: `expect ${value} toBe ${expected}`, status: true })
                passedTests++
            } else {
                currIt.expects.push({ name: `expect ${value} toBe ${expected}`, status: false })
                failedTests++
            }
        },

        // Match the expected and actual result of the test.
        toEqual: function(expected) {
            if (value == expected) {
                currIt.expects.push({ name: `expect ${value} toEqual ${expected}`, status: true })
                passedTests++
            } else {
                currIt.expects.push({ name: `expect ${value} toEqual ${expected}`, status: false })
                failedTests++
            }
        },

        not: {
            toBe: function(expected) {
                if (value !== expected) {

                }
            }
        },

        toMatch: function(params) {

        },

        //Method is used to check expected result is defined or not.
        toBeDefined: function() {

        },

        toBeUndefined: function() {

        },

        //Method is used to check expected result is undefined or not.
        toBeNull: function() {

        },

        //Method is used to check expected result is null or not.
        toBeNull: function() {

        },

        //Method is used to check expected result is null or not.
        toBeTruthy: function() {

        },

        //Method is used to match the expected result is true or not i.e. means expected result is a Boolean value.
        toBeFalsy: function() {

        },

        //Method is used to match the expected result is false or not i.e. means expected result is a Boolean value.
        toContain: function(y) {

        },

        //Method is used to match the expected result contains the value of y.
        toBeGreaterThan: function(y) {

        },

        //Method is used to match the expected result is greater than y.
        toThrow: function(string) {

        },

        //Method is used to throw any message from expected result.
        toThrowError: function(string) {

        }
    }
}

function it(desc, fn) {
    Totaltests++
    if (beforeEachs) {
        for (var index = 0; index < beforeEachs.length; index++) {
            beforeEachs[index].apply(this)
        }
    }
    //var f = stats[stats.length - 1]
    currIt = {
            name: desc,
            expects: []
        }
        //f.push(desc)
    fn.apply(this)
    for (var index = 0; index < afterEachs.length; index++) {
        afterEachs[index].apply(this)
    }
    currDesc.it.push(currIt)
}

function describe(desc, fn) {
    currDesc = {
        it: []
    }
    for (var index = 0; index < beforeAlls.length; index++) {
        beforeAlls[index].apply(this)
    }
    currDesc.name = desc
    fn.apply(this)
    for (var index = 0; index < afterAlls.length; index++) {
        afterAlls[index].apply(this)
    }
    stats.push(currDesc)
}

exports.showTestsResults = function showTestsResults() {
    console.log(`Total Test: ${Totaltests}    
Test Suites: passed, total
Tests: ${passedTests} passed, ${Totaltests} total

`)
    const logTitle = failedTests > 0 ? chalk.bgRed : chalk.bgGreen
    log(logTitle('Test Suites'))
    for (var index = 0; index < stats.length; index++) {
        var e = stats[index];
        const descName = e.name
        const its = e.it
        log(descName)
        for (var i = 0; i < its.length; i++) {
            var _e = its[i];
            log(`   ${_e.name}`)
            for (var ii = 0; ii < _e.expects.length; ii++) {
                const expect = _e.expects[ii]
                log(`      ${expect.status === true ? chalk.green('√') : chalk.red('X') } ${expect.name}`)
            }
        }
        log()
    }

    /*console.log(`


PASS  test\createStore.spec.js (9.731s)
PASS  test\combineReducers.spec.js

Test Suites: 2 passed, 2 total
Tests:       19 passed, 19 total
Snapshots:   0 total
Time:        41.026s, estimated 62s
Ran all test suites.

Ran all test suites related to changed files.
 PASS  test\t.spec.js (6.757s)
    √  (7ms)
`)*/

}

global.describe = describe
global.it = it
global.expect = expect
global.afterEach = afterEach
global.beforeEach = beforeEach
global.beforeAll = beforeAll
global.afterAll = afterAll
global.kwuo = kwuo