import { describe, expect, it } from 'vitest'
import { calculateDiffInHours } from './time'

describe('time', async () => {
  it('should calculate the difference in hours.', () => {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-01-01T01:00:00.000Z')
    expect(calculateDiffInHours(date1, date2)).equal(1)
  })

  it('should calculate the difference in hours.', () => {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-01-01T02:00:00.000Z')
    expect(calculateDiffInHours(date1, date2)).equal(2)
  })

  it('should calculate the difference in hours.', () => {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-01-01T02:30:00.000Z')
    expect(calculateDiffInHours(date1, date2)).equal(2.5)
  })

  it('should calculate the difference in hours.', () => {
    const date1 = new Date('2020-01-01T04:00:00.000Z')
    const date2 = new Date('2020-01-01T02:00:00.000Z')
    expect(calculateDiffInHours(date1, date2)).equal(2)
  })

  it('should calculate the difference in hours.', () => {
    const date1 = new Date('2020-01-01T04:00:00.000Z')
    const date2 = new Date('2020-01-01T04:00:00.000Z')
    expect(calculateDiffInHours(date1, date2)).equal(0)
  })
})