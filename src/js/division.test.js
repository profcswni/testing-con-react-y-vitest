import {expect, test} from 'vitest'
import {division} from './division.js'

test('divide 10 /2 to equal 5', () => {
    expect (division(10, 2)).toBe(5)
})