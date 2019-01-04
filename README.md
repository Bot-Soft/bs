BotSoft
==

Command Line Interface for managing BotSoft chatbots

[![Version](https://img.shields.io/npm/v/botsoft.svg)](https://npmjs.org/package/bs)
[![Downloads/week](https://img.shields.io/npm/dw/botsoft.svg)](https://npmjs.org/package/botsoft)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g botsoft
$ bs COMMAND
running command...
$ bs (-v|--version|version)
botsoft/0.0.2 darwin-x64 node-v8.11.3
$ bs --help [COMMAND]
USAGE
  $ bs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bs connect [SECRET] [ID] [NAME]`](#bs-connect-secret-id-name)
* [`bs deploy`](#bs-deploy)
* [`bs help [COMMAND]`](#bs-help-command)

## `bs connect [SECRET] [ID] [NAME]`

Connect chatbot

```
USAGE
  $ bs connect [SECRET] [ID] [NAME]

EXAMPLE
  $ bs connect
```

_See code: [src/commands/connect.ts](https://github.com/Bot-Soft/bs/blob/v0.0.2/src/commands/connect.ts)_

## `bs deploy`

Deploy BotSoft chatbot

```
USAGE
  $ bs deploy

EXAMPLE
  $ bs deploy
```

_See code: [src/commands/deploy.ts](https://github.com/Bot-Soft/bs/blob/v0.0.2/src/commands/deploy.ts)_

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
