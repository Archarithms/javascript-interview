This boilerplate is boiled down to the bare essentials. You will need to pick your
own web server, state management, etc.

## Features

- Write modern JavaScript, supports `ES2017`
- Write tests in `ES2017` and run them using [`ava`][ava] without needing to compile
- Generate coverage reports without needing to compile
- Uses [`.editorconfig`][editorconfig] for maintaining consistent coding styles
- Ignores `./build` folder from `git`

## Usage

Install project dependencies
```bash
$ yarn
```
Run the following commands with:

```bash
$ yarn <command>
```

### Primary Commands

Command    | Description
---------- | -----------------------------------------------------------------
`setup`           | Instantiate new git repo
`start`           | Bundles and starts node server
`debug`           | Bundles and starts node server in debug mode
`compile`         | Bundles code for deployment on embedded device
`generate`        | Runs the generator
`test`            | Runs [`ava`][ava] for unit tests
`test:watch`      | Runs unit tests and watches for changes (TDD)
`coverage`        | Displays code coverage results using [`nyc`][nyc]
`coverage:report` | Opens code coverage report in the browser
`lint`            | Runs eslint

### Generator
This repo uses [`plop`][plop] to make scaffolding certain components easier. Running
the generate command will prompt you to select what you want to generate. If you
already know what you want to generate, simply run:

```bash
$ yarn generate <command>
```
You can create your own generators to speed up development, there is an example
generator that should be deleted when you feel comfortable enough to write your own.

Component  | Description
---------- | -----------------------------------------------------------------
`plugin` | Use this as an example to write your own generators

[editorconfig]: http://editorconfig.org
[babel]: https://github.com/babel/babel
[travis]: https://travis-ci.org/
[ava]: https://github.com/avajs/ava
[nyc]: https://github.com/istanbuljs/nyc
[sox]: http://sox.sourceforge.net/
[homebrew]: http://brew.sh/
[plop]: https://github.com/amwmedia/plop
