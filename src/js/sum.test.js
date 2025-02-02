import { describe, expect, test } from 'vitest'
import { sum, generarNumeroAleatorio } from './sum.js'

describe('Sumas', () => { 
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test ('sumar 5 + 10 no es 10', () => {
    expect(sum(5, 10)).not.toBe(10)
  })

  test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toBe(-2)
  })

  test('adds 0.1 + 0.2 to approximately equal 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5)
  })

  test ('Math ramdom return a number between 0 and 1', () => {
    expect(generarNumeroAleatorio()).toBeGreaterThanOrEqual(0)
  })

})