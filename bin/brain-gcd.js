#!/usr/bin/env node
import { engine } from '../src/index.js';
import { gameDescription, getGameData} from '../src/games/gcd.js'
engine(gameDescription, getGameData);