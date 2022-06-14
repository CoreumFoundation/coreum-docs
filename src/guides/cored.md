# Running A Node
ig
This guide contains a basic overview of the steps required to running a Coreum node locally. In order to do this, we will be making use of the `cored` CLI.

## Pre-Requisites

This guide assumes that you are using a UNIX compliant operating system.

Besides the Operating System constraints, the only pre-requisite for working with the `cored` CLI is to have [golang](https://go.dev) installed on your machine. The `go` binary must also be included in your `$PATH`.

Note: If you are using Apple Silicon (M1) based hardware, please ensure that you have installed the `darwin/arm64` version of go. You can check which version of go you have installed by running

```
$ go version
```

## Getting Started

### Clone the Repository

The first step, of course, is to clone the cored repository. For the purposes of this guide, we recommend that you clone this repository in your home directory `~`. This can be achieved by running

```
$ cd ~
$ git clone git@github.com:CoreumFoundation/coreum.git
```

Once the repo is cloned, we recommend you add the `bin` folder of the repo to your `$PATH` by modifying your shell configuration files.

### Setup Cored

Now that the repository is cloned and the binaries are added to `$PATH`, `coreznet` must be setup and built in order to function. This can be done by running

```
$ core setup
$ core build
```

Once these have concluded, `coreznet` should be ready to start.

## Starting Coreznet

Now that `coreznet` has been setup and built, we can enter the environment by running

```
$ coreznet --target=direct
```

Note: Since the `--target=direct` is commonly used, we recommend declaring this as the default mode through exporting the environment variable as shown below

```
$ export COREZNET_TARGET=direct
```

If all has gone to plan, your shell prompt will have changed, and should now look like

```
(coreznet) [logs] $
```

From here, we can start a `cored` instance by simply running

```
(coreznet) [logs] $ start
```

## Inspecting Coreznet

Once running, coreznet can be be inspected by using some simple commands which print information about the state of the deployment

### Specifications

The `spec` command gives us some information about `coreznet` itself, as well as any applications that are running in the current environment. Example outputs are as follows:

#### Before `coreznet` has been started

```
(coreznet) [karamvirsingh@Karamvirs-MBP logs]$ spec
{
  "pgid": 1097,
  "target": "direct",
  "mode": "dev",
  "env": "coreznet",
  "apps": {}
}
```

#### While `coreznet` is running

```
(coreznet) [karamvirsingh@Karamvirs-MBP logs]$ spec
{
  "pgid": 1958,
  "target": "direct",
  "mode": "dev",
  "env": "coreznet",
  "apps": {
    "cored-node": {
      "type": "cored",
      "ip": "127.0.0.1",
      "status": "running",
      "ports": {
        "grpc": 9090,
        "grpcWeb": 9091,
        "p2p": 26656,
        "pprof": 6060,
        "rpc": 26657
      }
    }
  }
}
```

### Status

The `cored status` command gives information about the current state of the blockchain, such as the block height of the chain, the hash of the last block, and so forth. This information can be accessed by running

```
(coreznet) [logs] $ cored status
```

Note that this command will throw an error if no `cored` instances have been started by `coreznet`.

### Keyring

Each `cored` instance starts, by default, with three keys; `alice`, `bob`, and `charlie`. To view additional information such as the public addresses, you can run

```
(coreznet) [logs] $ cored-node keys list
```

## Stopping Coreznet

Once `coreznet` is no longer required, there are three avenues to exiting the process.

The first is to simply exit the `coreznet` environment, allowing the underlying `cored` instance to continue running. In order to do so, you may run

```
(coreznet) [logs] $ exit
exit
$
```

Running this command will end the current `coreznet` process, and return you to the outer shell session. It is important to note, however, that exiting the process does not stop or reset it. Once exited, running coreznet again will return us to the same environment we exited before.

In order to stop the running `cored` instance, you may run

```
(coreznet) [logs] $ stop
(coreznet) [logs] $
```

This will stop the running `cored` instance, preventing the consensus protocol from running and stopping the blockchain from growing. However, the `coreznet` session will remain alive, allowing for the `cored` instance to be restarted, or other commands to be run. For instance, if you run the `spec` command, the "status" property of the "cored-node" application object should have the value "stopped".

At this
