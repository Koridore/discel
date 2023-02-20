import {logger} from "simple-node-logger"
import {cacheDir} from "cachedir"
import {cache} from "cache"
import {fs} from "fs-extra"

const fs = require ("fs-extra")

if (fs)() => {

fs.readFile('some-file-or-whatever', (err, data) => {
  // Do stuff here.
})}

const cacheDir = require('cacheDir')

cachedir ()

console.log(cacheDir('.discel'))
// e.g.
//=> '/Users/linus/Library/Caches/myapp'
//=> '/home/linus/.cache/myapp'
//=> 'C:\Users\linus\AppData\Local\myapp\Cache'

export default cache
