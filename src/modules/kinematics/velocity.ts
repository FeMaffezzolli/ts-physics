import { calculateDiffInHours } from "../../helpers/time";

export function averageVelocity(params: {
  init: {
    position: number;
    time: Date;
  },
  final: {
    position: number;
    time: Date;
  }
}) {
  const timeElapsedInHours = calculateDiffInHours(params.init.time, params.final.time)
  const distanceTraveled = params.final.position - params.init.position
  return distanceTraveled / timeElapsedInHours
}

export function currentVelocity(params: {
  initialVelocity: number;
  averageAcceleration: number;
  timeElapsedInHours: number;
}) {
  const { initialVelocity, averageAcceleration, timeElapsedInHours } = params
  return initialVelocity + averageAcceleration * timeElapsedInHours
}