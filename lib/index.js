var beforeEachs = []
var afterEachs = []
var afterAlls = []
var beforeAlls = []
var Totaltests = 0

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
                console.log(`'${value}' => toBe => '${expected}': Test passed`)
            }
            /*console.log(`
                Test Suites: X passed, X total
                Tests:       X passed, X total
            `)*/
        },
        // Match the expected and actual result of the test.
        toEqual: function(expected) {
            if (value == expected) {
                console.log(`'${value}' => toEqual => '${expected}': Test passed`)
            }
            /*console.log(`
                Test Suites: X passed, X total
                Tests:       X passed, X total
            `)*/
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
    fn.apply(this)
    for (var index = 0; index < afterEachs.length; index++) {
        afterEachs[index].apply(this)
    }
}

function describe(desc, fn) {
    for (var index = 0; index < beforeAlls.length; index++) {
        beforeAlls[index].apply(this)
    }
    fn.apply(this)
    for (var index = 0; index < afterAlls.length; index++) {
        afterAlls[index].apply(this)
    }
}

exports.showTestsResults = function showTestsResults() {
    console.log(`Total Test: ${Totaltests}    `)

    console.log(`
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
`)

}

global.describe = describe
global.it = it
global.expect = expect
global.afterEach = afterEach
global.beforeEach = beforeEach
global.beforeAll = beforeAll
global.afterAll = afterAll
global.kwuo = kwuo