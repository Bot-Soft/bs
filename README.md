bs
==

Command Line Interface for Managing BotSoft chatbots

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bs.svg)](https://npmjs.org/package/bs)
[![CircleCI](https://circleci.com/gh/Bot-Soft/bs/tree/master.svg?style=shield)](https://circleci.com/gh/Bot-Soft/bs/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/Bot-Soft/bs?branch=master&svg=true)](https://ci.appveyor.com/project/Bot-Soft/bs/branch/master)
[![Codecov](https://codecov.io/gh/Bot-Soft/bs/branch/master/graph/badge.svg)](https://codecov.io/gh/Bot-Soft/bs)
[![Downloads/week](https://img.shields.io/npm/dw/bs.svg)](https://npmjs.org/package/bs)
[![License](https://img.shields.io/npm/l/bs.svg)](https://github.com/Bot-Soft/bs/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bs
$ bs COMMAND
running command...
$ bs (-v|--version|version)
bs/0.0.0 darwin-x64 node-v8.11.3
$ bs --help [COMMAND]
USAGE
  $ bs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bs hello [FILE]`](#bs-hello-file)
* [`bs help [COMMAND]`](#bs-help-command)

## `bs hello [FILE]`

describe the command here

```
USAGE
  $ bs hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ bs hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Bot-Soft/bs/blob/v0.0.0/src/commands/hello.ts)_

## `bs help [COMMAND]`

display help for bs

```
USAGE
  $ bs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src/commands/help.ts)_
<!-- commandsstop -->
