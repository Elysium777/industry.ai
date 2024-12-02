import {getRandomInt, PlayerState} from "@/components/Game";
import {AI_PAUSE_DURATION_MAX, AI_PAUSE_DURATION_MIN} from "@/utils/properties";

export const Characters = [

]

export const InitialPlayerStates: PlayerState[] = [
  {
    x: 832,
    y: 788,
    direction: 'down',
    isMoving: false,
    message: null,
    ai: {
      action: 'paused',
      actionEndTime:
        Date.now() +
        getRandomInt(AI_PAUSE_DURATION_MIN, AI_PAUSE_DURATION_MAX),
    },
  },
  {
    x: 1152,
    y: 1052,
    direction: 'down',
    isMoving: false,
    message: null,
    ai: {
      action: 'paused',
      actionEndTime:
        Date.now() +
        getRandomInt(AI_PAUSE_DURATION_MIN, AI_PAUSE_DURATION_MAX),
    },
  },
  {
    x: 1456,
    y: 1052,
    direction: 'down',
    isMoving: false,
    message: null,
    ai: {
      action: 'paused',
      actionEndTime:
        Date.now() +
        getRandomInt(AI_PAUSE_DURATION_MIN, AI_PAUSE_DURATION_MAX),
    },
  },
  {
    x: 1760,
    y: 1052,
    direction: 'down',
    isMoving: false,
    message: null,
    ai: {
      action: 'paused',
      actionEndTime:
        Date.now() +
        getRandomInt(AI_PAUSE_DURATION_MIN, AI_PAUSE_DURATION_MAX),
    },
  },
  {
    x: 2080,
    y: 788,
    direction: 'down',
    isMoving: false,
    message: null,
    ai: {
      action: 'paused',
      actionEndTime:
        Date.now() +
        getRandomInt(AI_PAUSE_DURATION_MIN, AI_PAUSE_DURATION_MAX),
    },
  }
]
