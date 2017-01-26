#!/usr/bin/env node
'use strict'

const shell = require('shelljs')
const exec = require('child_process').exec
const animateProgress = require('./helpers/progress')
const addCheckMark = require('./helpers/checkmark')
const readline = require('readline')
const manifest = require('../../package.json')

const moduleName = manifest.name.split('/').slice(-1)

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdout.write('\n')
let interval = animateProgress('Removing old bundles')
process.stdout.write('Removing old bundles')

removeBundles(function () {
  clearInterval(interval)
  process.stdout.write('\nBuilding application... (This may take a while)')
  setTimeout(function () {
    readline.cursorTo(process.stdout, 0)
    interval = animateProgress('Building application')
  }, 500)

  buildApplication()
})

/**
 * Deletes the .git folder in dir
 */
function removeBundles (callback) {
  shell.rm('-rf', 'bundles/')
  addCheckMark(callback)
}

/**
 * Makes a new bundle
 */
function makeBundle (callback) {
  exec(`mkdir bundles && tar -zcvf bundles/${moduleName}.tar.gz lib`, addCheckMark.bind(null, callback))
}

/**
 * Installs dependencies
 */
function buildApplication () {
  exec('yarn --version', function (err, stdout, stderr) {
    if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
      exec('npm run build:prod', addCheckMark.bind(null, buildApplicationCallback))
    } else {
      exec('yarn build:prod', addCheckMark.bind(null, buildApplicationCallback))
    }
  })
}

/**
 * Callback function after installing dependencies
 */
function buildApplicationCallback (error) {
  clearInterval(interval)
  if (error) {
    process.stdout.write(error)
  }

  process.stdout.write('\n')
  interval = animateProgress('Making new bundle')
  process.stdout.write('Making new bundle')

  makeBundle(function () {
    clearInterval(interval)
    process.stdout.write('\nDone!')
    process.exit(0)
  })
}
