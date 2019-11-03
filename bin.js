#!/usr/bin/env node

'use strict'

const decode = require('.')

console.log(decode(...process.argv.slice(2)))
