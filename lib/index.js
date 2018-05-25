var beforeEachs = []
var afterEachs = []

function beforeEach(fn) {
    beforeEachs.push(fn)
}

function afterEach(fn) {
    afterEachs.push(fn)
}

function expect(value) {
    return {
        toBe: function(expected) {
            if (beforeEachs) {
                for (var index = 0; index < beforeEachs.length; index++) {
                    beforeEachs[index].apply(this)
                }
            }
            if (value == expected) {
                console.log(`${value} toBe ${expected}: Test passed`)
            }
            for (var index = 0; index < afterEachs.length; index++) {
                afterEachs[index].apply(this)
            }
            console.log(`
                Test Suites: X passed, X total
                Tests:       X passed, X total
            `)
        },
        toEqual: function(expected) {
            console.log('value:', value, ' : Expected:', expected, ': beforeE:', beforeEachs)
            if (beforeEachs) {
                for (var index = 0; index < beforeEachs.length; index++) {
                    beforeEachs[index].apply(this)
                }
            }
            console.log('value:', value, ' : Expected:', expected, ': beforeE:', beforeEachs)
            if (value == expected) {
                console.log(`${value} toBe ${expected}: Test passed`)
            }
            for (var index = 0; index < afterEachs.length; index++) {
                afterEachs[index].apply(this)
            }
            /*console.log(`
                Test Suites: X passed, X total
                Tests:       X passed, X total
            `)*/
        }
    }
}

function it(desc, fn) {
    fn.apply(this)
}

function describe(desc, fn) {
    fn.apply(this)
}

global.describe = describe
global.it = it
global.expect = expect
global.afterEach = afterEach
global.beforeEach = beforeEach

require('./test')