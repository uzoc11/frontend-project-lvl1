#!/usr/bin/env node
import { engine } from '../src/index.js';
import { gameDescription, getGameData} from '../src/games/calc.js'
engine(gameDescription, getGameData);