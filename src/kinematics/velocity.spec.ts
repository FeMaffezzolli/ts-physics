import { describe, expect, it } from 'vitest'
import { averageVelocity, currentVelocity } from './velocity'

describe('velocity', async () => {
  it('should calculate the average velocity.', () => {
    const velocity = averageVelocity({
      init: {
        position: 0,
        time: new Date('2020-01-01T00:00:00.000Z')
      },
      final: {
        position: 100,
        time: new Date('2020-01-01T01:00:00.000Z')
      }
    })
    expect(velocity).equal(100)
  })

  it('should calculate the current velocity.', () => {
    const velocity = currentVelocity({
      initialVelocity: 0,
      averageAcceleration: 10,
      timeElapsedInHours: 1
    })
    expect(velocity).equal(10)
  })
})