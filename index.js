#!/usr/bin/env node
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // 'who-to-greet' input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
  {
      const childfork = require('child_process');
      return childfork.exec(cmd, handler);
  }
  exec('echo test', function(err, stdout){console.log(stdout)});
} catch (error) {
  core.setFailed(error.message)
}
