/**
 * var fn = kwuo.fn()
 * forEach([1,2], fn)
 * expect(fn.mock.calls.length).toBe(2)
 */

function fn() {
    this.calls = []

    function h(...args) {
        this.calls.push(args)
    }
    h.mock = {
        calls: this.calls
    }
    return h
}

function mock(args) {
    if (typeof args == 'string') {
        const mod = require(args)
    }
}

//const Client = require('./Client')

//console.log(Client.see())