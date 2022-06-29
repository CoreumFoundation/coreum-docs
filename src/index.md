---
home: true
heroImage: /hero.png
tagline: Documentation for Coreum, a third-generation, layer-one blockchain based on the Cosmos SDK.
actions:
  - text: Get Started
    link: /guides/cored.html
    type: primary
---

# Introduction

[Coreum](https://coreum.com) is a third-generation, layer one blockcahin built atop the Cosmos SDK. The ecosystem natively supports the issuance and minting of tokens, a Decentralised Exchange (DEX) to enable trading these tokens, and an interoperability bridge to foreign chains such as Ethereum, Bitcoin, and the XRP Ledger.

Coreum is fast, low cost, and environmentally friendly. By leveraging a Bonded Proof of Stake (BPoS) consensus mechanism, Coreum is not subject to the high energy costs that other blockchains are criticised for. Furthermore, Coreum's scalability and throughput ensure that that the operation of the network does not incur the exorbitant fees that hinder other blockchains. Indeed, an established usecase for a network like Coreum is the [Sologenic Ecosystem](https://sologenic.com), which currently resides on the XRP Ledger.

## $CORE

$CORE is the native token for Coreum, and is used for interacting with the blockchain's various features, from the consensus protocol, to the decentralised exchange, and so on. You can learn more about $CORE and the relevant tokenomics [here](explorer/index.md).

## Decentralised Exchange (DEX)

The DEX is native to the blockchain, enabling low-fee, secure, and fast trading activities. The DEX supports the trading of $CORE, as well as any issued assets found on Coreum. Moreover, the market is able to create trading pairs between any two assets, allowing for limitless trading opportunities.

## Bridges

The system of bridges creates gateways which allow for foreign assets from other blockchains to interoperate with, and be wrapepd within Coreum.

## Cored and Coreznet

As with all blockchains, Coreum depends on a number of nodes participating in the consensus protocol for the continuation of the blockchain. Coreum nodes are run using the `cored` application binaries, and associated cli. Though in principle the `cored` binary is sufficient for running a Coreum node, in practice, keeping these binaries as lean as possible means sacrificing some developer tooling and ergonomics. To account for this, the `coreznet` environment can be used as a wrapper around `cored`, which reintroduces all the quality of life features witheld from the `cored` binary.

The [guide](/guide/index.md) section up next contains an overview of how to run an instance of `cored`, both in isolation, as well as with the use of `coreznet`.
