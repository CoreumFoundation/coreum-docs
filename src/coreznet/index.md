# Coreznet

Coreznet is a tool which simplifies interacting with Coreum, designed to aid the development process of applications on Coreum.

## Pre-Requisites

Coreznet depends on two pre-requisite tools that must be installed manually before proceeding:

- [tmux ](https://github.com/tmux/tmux/wiki)
- [docker ](https://www.docker.com)

We advise that you follow the official guides for installing these tools on your operating system.

## Building

Coreznet can be built using our [building system]. To build coreznet, simply run

```
$ core build/coreznet
```

This command requires the `cored` binary. If you haven't already build the cored binary, you can do so by running

```
$ core build/cored
```

All binaries can be built together by running

```
$ core build
```

Upon completion, the `coreznet` binary should be available in bin.

## Executing Coreznet

`coreznet` may be executed using two methods; 'direct' and 'environment'

To execute coreznet in direct mode, run

```
$ coreznet <command> [flags]
```

To execute coreznet in environment mode, run

```
coreznet [flags]
(<environment name>) [logs] $ <command>
```
Using the environment method makes it easier to run multiple commands, and tends to save time by avoiding the need for extra inputs. 

## Flags

Coreznet can be used with a number of flags, all of which are optional. These flags (and their default values) can be listed by running 

```
$coreznet <command> --help
```

You may then enter the enviroment by running

```
$ coreznet --env=coreznet --mode=dev --target=tmux
(coreznet) [logs] $
```

--env 
Defines the name of the environment, visible in brackets on the left. Each environment is atomic and independent, thus allowing you to work with more than one in paralell. 

--mode 
Defines the list of applications ot run. You may see their defin