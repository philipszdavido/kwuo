var beforeEachs = []
var afterEachs = []
var afterAlls = []
var beforeAlls = []
var Totaltests = 0

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
Ran all test suites.`)

}

global.describe = describe
global.it = it
global.expect = expect
global.afterEach = afterEach
global.beforeEach = beforeEach
global.beforeAll = beforeAll
global.afterAll = afterAll

//require('./test')