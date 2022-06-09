# Overview

Akin to most modern blockchains, Coreum will be able to store and execute smart contracts. In essence, smart contracts are computer programs stored on a blockchain, which may be instantiated and executed to perform custom functions. That is to say, these functions are not included in the code of the blochchain itself, but are defined in a manner which enables the blockchain to execute them.

Coreum leverages WebAssembly (WASM) as the engine for smart contracts. WASM overcomes many of the shortcomings of other smart contract engines such as the Ethereum Virtual Machine, such as security flaws, data oversizing, and the necessary coupling with Solidity, the language in which smart contracts are written. Beyond WASM having noteworthy features such as its portability, efficiency, and turing completeness, it can also be accessed through other programming languages including C/C++, JavaScript/Typescript, Rust, Kotlin, and Go.

## CosmWasm

[CosmWasm](https://cosmwasm.com/) is the platform Coreum uses to handle WASM smart contracts. It forms an important pillar of the Cosmos SDK, and has a number of advantages such as the ability to interact with smart contracts on different blockchains using the Inter-Blockchain Communication (IBC) protocol. This enables smart contracts stored on Coreum to enhance not only the functionality of Coreum itself, but all other blockchains in the Cosmos ecosystem that are compatible with CosmWasm smart contracts.

## Architecture

CosmWasm smart contracts produce and consume messages. These messages follow what is commonly referred to as the [actor model](https://dspace.mit.edu/handle/1721.1/6952), which means that they behave in a 'fire and foreget' manner. In effect, these messages are designed to be synchronous in nature, this avoiding race-contitions and pitfalls of awaiting promises. Other advantages of this model are:

- Increased Security - Since smart contracts are unable to call each other, it avoids re-entrancy attacks. Messages may be pased between contracts, but they cannot directly call one another.
- Inter-Blockchcain Messaging - Messages can be sent across blockchains through the IBC.
- Ease of Serialisation - Messages can be easily serialized to a number of different formats for easy integration with off-chain systems.

## Contract Flow

The lifecycle of a smart contract can be split into three distinct phases:

### Contract Creation / Upload

Once the code for a smart contract is compiled into WASM binaries, they are optimised and uploaded to the blockchain. However, neither state nor a contract addresses exist at this stage.

### Contract Instantiation

The contract may then be instantiated with through a code reference as well as some initial state. This creates the address which identifies the contract. For reference, if this were an ERC20 Token Contract on an Ethereum Virtual Machine (EVM) blockchain, this is the stage at which information like the token name, symbol, etc. can be set.

### Execute Contract

Each actor has exclusive access to its own internal state. This may support many different calls, but they are all unprivelidged; usage of previously instantiated contracts depends on the contract design.

## Cosmos SDK WASM Module

Coreum makes use of a custom module for the purpose of processing WASM related messages in order to upload, instantiate, and execute smart contracts.

//TODO -> include chart or image 

## Rust Langauge

Although smart contracts may be written in a number of different languages as stated above, Rust remains the language of choice. This is due to Rust's characteristic memory model, which promotes the creation of memory-safe, fast, and lightweight byte code that is ideal for on-chain storage.
