# Coreznet

Coreznet is a tool which simplifies interacting with Coreum, designed to aid the development process of applications on Coreum.

## Pre-Requisites

Coreznet depends on three tools that must be installed manually before proceeding:

- [tmux ](https://github.com/tmux/tmux/wiki)
- [docker ](https://www.docker.com)
- [golang](https://www.go.dev)

If you already have these tools installed, you are good to go. If not, we advise that you follow the official guides for installing these tools on your operating system.

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

### `--env`

Defines the name of the environment, visible in brackets on the left. Each environment is atomic and independent, thus allowing you to work with more than one in paralell.

### `--mode`

Defines the list of applications to run. You may see their definitions here.

### `--target`

Defines where applications are deployed. Possible values are:

- `tmux` - Applications are started as OS proceses and their logs are presented in the tmux console.
- `docker` - Applications are started as docker containers
- `direct` - Applications are started as OS processes.

## Logs

After entering the environment, the urrent directory in the console is set to the one containing the logs produced by all applications. Its absolute path resolves to `~/.cache/coreznet/<env-name>/logs`.

Regardless of which `--target` is used, logs are always dumped to this locations, allowing for analysis using any method of your preference (`grep`, `cut`, `tail`, etc.)

Once started, logs from the application can be talied by making use of the `logs` wrapper:

```
(coreznet) [logs] $ logs cored-node
```

## Commands

In the environement some wrapper scripts for `coreznet` are generated automatically to make your life easier. Each such `<command>` is effectively aliased to `coreznet <command>`.

Available commands are:

- `start` - starts applications
- `stop` - stops applications
- `remove` - stops applications, and removes all resources used by the environment
- `spec` - prints the specification of the environment
- `ping-pong` - sends transactions to generate traffic on the blockchain
- `stress` - tests the benchmarking logic of `corezstress`

## Example

An simple start-stop workflow using coreznet may look something like

```
# Enter the environment:
$ coreznet --env=coreznet --mode=dev --target=tmux
(coreznet) [logs] $

# Start applications
(coreznet) [logs] $ start

# Print spec
(coreznet) [logs] $ spec

# Stop applications
(coreznet) [logs] $ stop

# Start applications again
(coreznet) [logs] $ start

# Stop everything and clean resources
(coreznet) [logs] $ remove
(coreznet) [logs] $ exit
```

## Manually Interacting with the Blockchain

Each `cored` instance started by `coreznet` is accessible through a wrapper script which shares the name of the node. This enables manual interactions with the client. There are also three standard keys, `alice`, `bob`, and `charlie`, which are added to the keystore of each instance.

If you start `coreznet` with `--mode=dev`, there is only one `cored` application called `cored-node`. To access this client, you may use the cored-node warpper as follows:

```
(coreznet) [logs] $ cored-node keys list
(coreznet) [logs] $ cored-node query bank balances cosmos1rd8wynz2987ey6pwmkuwfg9q8hf04xdyjqy2f4
(coreznet) [logs] $ cored-node tx bank send bob cosmos1rd8wynz2987ey6pwmkuwfg9q8hf04xdyjqy2f4 10core
(coreznet) [logs] $ cored-node query bank balances cosmos1rd8wynz2987ey6pwmkuwfg9q8hf04xdyjqy2f
```

Different insances of `cored` may be accessbile in another `--mode`. Running the `spec` command will list them.

## Integration Tests

Integration tests are defined in 'test/index.go'

You may run tests directly

```
$ coreznet test
```

By default, tests use the enviroment `--target=tmux`, and run on top `--mode=test`.

It is also possible to enter the environment first, and run tests from there:

```
$ coreznet --env=coreznet --mode=test --target=tmux
(coreznet) [logs] $ tests

# Remember to clean everything
(coreznet) [logs] $ remove
```

Tests may also be run using any environemnt defined by `--target`, so running it on top of applications deployed using `docker` is also possible.

```
$ coreznet --env=coreznet --mode=test --target=docker
(coreznet) [logs] $ tests

# Remember to clean everything
(coreznet) [logs] $ remove
```

After tests conclude, the environment remains active. This is to ensure that in the event something goes wrong, it is still possible to conduct manual investigation and analysis. This becomes even more apparent when running coreznet in the `tmux` environment, since the tmux console remains active after tests are completed, allowing for logs to be easily accessed.

```
$ coreznet --env=coreznet --mode=test --target=tmux
(coreznet) [logs] $ tests
(coreznet) [logs] $ start
```

Following from above, the logs are available in the current directory.

## Ping-Pong

The `ping-pong` command in `coreznet` continually sends transactions on the blockchain until stopped. This is useful for generating some background traffic on the blockchain, and can be started as follows:

```
$ coreznet --target=direct
(coreznet) [logs] $ start
(coreznet) [logs] $ ping-pong
```

Upon running the above, logs will be printed indicated the tokens being transferred.

## Hard Reset

All data created by `coreznet` can be manually removed, if the need arises. This can be achieved as follows

- run `ps aux` to find all related running processes, and kill them using `kill -9 <pid>`.
- use `docker ps -a`, then `docker stop <container-id>`, and finally `docker rm <container-id>` to remove any containers related to `coreznet` (this only applies when `coreznet` is started using `--target=docker`).
- use `docker images` and `docker rmi <image-id>` to remove related docker images
- run `rm -rf ~/.cache/coreznet` to remove all files created by `coreznet`
