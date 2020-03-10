#!/usr/bin/env node
import { engine } from '../src/index.js';
import { gameDescription, getGameData } from '../src/games/prg.js';

engine(gameDescription, getGameData);
