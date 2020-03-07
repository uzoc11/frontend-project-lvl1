#!/usr/bin/env node
import { engine } from '../src/index.js';
import { gameDescription, getGameData} from '../src/games/even.js'
engine(gameDescription, getGameData);
