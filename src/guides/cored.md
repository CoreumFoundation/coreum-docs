# Running `cored` node

This guide contains a basic overview of the steps required to run a Coreum node locally. In order to do this, we use the `cored` binary.

## Prerequisites

This guide assumes that you are using a Linux operating system.

Besides the operating system constraints, the only prerequisite for working with the `cored` is to have [golang](https://go.dev) installed on your machine. The `go` binary location must also be included in your `PATH`.

Note: If you are using Apple Silicon (M1) based hardware, please ensure that you have installed the `darwin/arm64` version of go. You can check which version of go you have installed by running

```
$ go version
```

## Getting Started

### Clone the Repository

The first step is to clone the `crust` repository. For the purposes of this guide, we recommend that you clone this repository in your home directory `~`. This can be achieved by running

```
$ cd ~
$ git clone https://github.com/CoreumFoundation/crust.git
```

Once the repo is cloned, we recommend you to add the `bin` folder of the repo to your `PATH` by modifying your shell configuration files.

### Setup Cored

Now that the repository is cloned and the binaries are added to `PATH`, `cored` binary must be built. This can be done by running:

```
$ crust build
```

Once this has concluded, `znet` is ready to be started.

## Starting `znet`

Now that `znet` has been built, we can enter the environment by running:

```
$ crust znet
```

If all has gone according to the plan, your shell prompt will have changed, and should now look like

```
(znet) [znet] $
```

From here, we can start a `cored` blockchain by simply running

```
(znet) [znet] $ start
```

## Inspecting `znet`

Once running, `znet` environment might be inspected by using simple commands which print information about the state of the deployment.

### Specification

The `spec` command gives us information about `znet` environment and any applications running inside. Example outputs are as follows.

#### Before `znet` has been started

```
(znet) [znet]$ spec
{
  "mode": "dev",
  "env": "znet",
  "apps": {}
}
```

#### While `znet` is running

```
(znet) [znet]$ spec
{
  "mode": "dev",
  "env": "znet",
  "apps": {
    "coredev-00": {
      "type": "cored",
      "info": {
        "container": "znet-coredev-00",
        "hostFromHost": "localhost",
        "hostFromContainer": "znet-coredev-00",
        "status": "running",
        "ports": {
          "grpc": 9090,
          "grpcWeb": 9091,
          "p2p": 26656,
          "pprof": 6060,
          "prometheus": 26660,
          "rpc": 26657
        }
      }
    },
    "explorer-bdjuno": {
      "type": "bdjuno",
      "info": {
        "container": "znet-explorer-bdjuno",
        "hostFromHost": "localhost",
        "hostFromContainer": "znet-explorer-bdjuno",
        "status": "running",
        "dependsOn": [
          "coredev-00",
          "explorer-postgres"
        ],
        "ports": {
          "actions": 3030
        }
      }
    },
    "explorer-hasura": {
      "type": "hasura",
      "info": {
        "container": "znet-explorer-hasura",
        "hostFromHost": "localhost",
        "hostFromContainer": "znet-explorer-hasura",
        "status": "running",
        "dependsOn": [
          "explorer-postgres"
        ],
        "ports": {
          "server": 8080
        }
      }
    },
    "explorer-postgres": {
      "type": "postgres",
      "info": {
        "container": "znet-explorer-postgres",
        "hostFromHost": "localhost",
        "hostFromContainer": "znet-explorer-postgres",
        "status": "running",
        "ports": {
          "sql": 5432
        }
      }
    }
  }
}
```

### Client

Inside `znet` environment, preconfigured client application is created for each running `cored` node. The name of the client is the same as name of `cored` application reported by `spec` command. In default environment there is only one `cored` node called `coredev-00`. You may use it to get status information reported by that node: 

```
(znet) [znet] $ coredev-00 status
```

### Keyring

Each `cored` instance is started, with three keys; `alice`, `bob`, and `charlie`. To view additional information such as the addresses, you may run

```
(znet) [znet] $ coredev-00 keys list
```

## Stopping `znet`

Once `znet` is no longer required, there are three avenues to exiting the process.

The first is to simply exit the `znet` environment, allowing the underlying infrastructure to continue running. In order to do so, you may run

```
(znet) [znet] $ exit
exit
$
```

Running this command will end the current `znet` shell session, and return you to the outer one. It is important to note, however, that exiting the session does not stop or reset it. Once exited, running `znet` again will return us to the same environment we exited before.

In order to stop the running `znet` environment, you may run

```
(znet) [znet] $ stop
```

This will stop all the running applications, preventing the consensus protocol from running and stopping the blockchain from growing. However, the `znet` session will remain alive, allowing for the applications to be restarted, or other commands to be run. For instance, if you run the `spec` command, the `status` property of the `coreddev-00` application object should have the value `stopped`.

At this point you may decide to start all the applications again by running

```
(znet) [znet] $ start
```

## Removing `znet`

To stop all the applications, delete their docker containers and all the created files run

```
(znet) [znet] $ remove
```

After doing this the `znet` shell session will terminate automatically.
