// Sprite and animation constants
export const SPRITE_WIDTH = 80; // Keep original sprite size
export const SPRITE_HEIGHT = 170; // Keep original sprite size
export const ANIMATION_FRAMES = 4;
export const FRAME_DURATION = 200;

// WebSocket constants
export const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WSS_URL;

// Map constants
export const MAP_WIDTH = 2912;
export const MAP_HEIGHT = 1632;
export const DEBUG_WALKABLE_AREAS = false;
export const DEBUG_CHARACTER_SELECT_BOXES = false;
// export const WALKABLE_AREAS = [
//     { x: -1500, y: 160, width: 3950, height: 440 },
//     { x: -50, y: 650, width: 1200, height: 1730 },
// ];

// Canvas and scaling constants
export const MAX_CANVAS_WIDTH = window.innerWidth * 0.8;
export const MAX_CANVAS_HEIGHT = window.innerHeight  * 0.75;

export const SCALE_FACTOR = Math.min(MAX_CANVAS_WIDTH / MAP_WIDTH, MAX_CANVAS_HEIGHT / MAP_HEIGHT);

export const CANVAS_WIDTH = MAP_WIDTH * SCALE_FACTOR;
export const CANVAS_HEIGHT = MAP_HEIGHT * SCALE_FACTOR;
// const ratio = CANVAS_HEIGHT / MAP_HEIGHT // Math.min(CANVAS_WIDTH / map.width, CANVAS_HEIGHT / map.height)

// export const SCALE_FACTOR = CANVAS_HEIGHT / MAP_HEIGHT
// typeof window !== 'undefined' ? Math.min(
//     window.innerWidth * 0.6 / CANVAS_WIDTH,
//     (window.innerHeight - 32) / CANVAS_HEIGHT
// ) : 1;

// Additional scaling factor just for characters
export const CHARACTER_SCALE = 2.5; // 1.8 * 2 = 3.6

export const SCALED_MAP_WIDTH = MAP_WIDTH * SCALE_FACTOR;
export const SCALED_MAP_HEIGHT = MAP_HEIGHT * SCALE_FACTOR;
export const MAP_OFFSET_X = (CANVAS_WIDTH - (SCALED_MAP_WIDTH)) / 2;
export const MAP_OFFSET_Y = (CANVAS_HEIGHT - (SCALED_MAP_HEIGHT)) / 2;

// Movement speeds adjusted for larger characters
export const PLAYER_MOVE_SPEED = 14;
export const AI_MOVE_SPEED = 4.4;

// AI action durations in milliseconds
export const AI_MOVE_DURATION_MIN = 2000;
export const AI_MOVE_DURATION_MAX = 6000;
export const AI_PAUSE_DURATION_MIN = 3000;
export const AI_PAUSE_DURATION_MAX = 8000;

// List of possible directions
export const DIRECTIONS = ['up', 'down', 'left', 'right'] as const;

// Direction order for sprite sheet
export const DIRECTION_ORDER = ['down', 'left', 'up', 'right'] as const;

console.log("config", {
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    ANIMATION_FRAMES,
    FRAME_DURATION,
    WEBSOCKET_URL,
    MAP_WIDTH,
    MAP_HEIGHT,
    DEBUG_WALKABLE_AREAS,
    DEBUG_CHARACTER_SELECT_BOXES,
    MAX_CANVAS_WIDTH,
    MAX_CANVAS_HEIGHT,
    SCALE_FACTOR,
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    CHARACTER_SCALE,
    SCALED_MAP_WIDTH,
    SCALED_MAP_HEIGHT,
    MAP_OFFSET_X,
    MAP_OFFSET_Y,
    PLAYER_MOVE_SPEED,
    AI_MOVE_SPEED,
    AI_MOVE_DURATION_MIN,
    AI_MOVE_DURATION_MAX,
    AI_PAUSE_DURATION_MIN,
    AI_PAUSE_DURATION_MAX,
    DIRECTIONS,
    DIRECTION_ORDER
})
