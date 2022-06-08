# Introduction

Tokens are a foundational part of the operation of any blockchain. $CORE is the native token of Coreum, and is the 'currency' with which one may interact with the network. It is the currency in which fees are paid, as well as the currency that is staked as a part of the consensus mechanism, and ensures the security of the network. Despite its significance to the network, $CORE merely forms the basis of an entire ecosystem of tokens. Indeed, Coreum natively supports a wide range of functionality associated with tokens, including issuance, minting, and behavioural interactions, which will be discussed below. 

## Token Symbols

In Coreum, tokens are indentifiable by ther Symbol, which itself is a combination of a currency code, and an issuer. This code is dervied by taking the address of the issuer, decoding it from the bech32 encoding back into bytes, and then re-encoding to bech32 with the currency dode as the prefix. For instance, a token XYZ would have a symbol akin to **XYZabcf360al7er8flap94qnl7xghq40d8zez9xlef3j**.

## Token Functions

### Minting and Burning

**Minting** is the process of creating new tokens. When a token is issued, the total number of tokens that will be minted, and whether or not further minting will be possible. On the other hand, **Burning** is the process of destroying tokens already in existence. The rules for token burning are configured when it is issued. The issuer of the token may define the parameters by which a token is burned, or may chose to have the token be entirely non-burnable instead. 

### Whitelisting

Whitelisting is the process of authorizing addresses to be able to use a certain token. Through whitelisting, the issuer of a token is able to restrict the number of accounts that are able to use this token, and can use this feature to impose certain restrictions on the distribution and use of this token. For instance, if an application that issues tokens wishes to comply with KYC/AML regulations, they may do so by whitelisting the accounts whose owners have passed the KYC/AML processes.

### Fungibility

Tokens issued in Coreum can either be fungible, or non-fungible. Non-Fungible Tokens, more commonly referred to as NFTS, are often used to represent full ownership of a digital asset, since the tokens themselves are not divisble into smaller parts. $CORE, for instance, is a fungible token, since 'half' of a $CORE token is a meaningful quantity, and can be combined with another 'half' of a $CORE to make 'one' $CORE token. However, if we are to consider a non fungible asset $NFT, the notion of 'half' of an $NFT token is a meaningless proposition. Indeed, there is only 'one' whole $NFT, which can neither be separated into smaller parts, or conjoined with other tokens to form a larger quantity.

### Freezing

Freezing is the process of restricting usage of a token. Such a Freeze may either occur globally, preventing any and all accounts from using this token, or on a per-account basis, preventing only one or some accounts from using this token. Furthermore, it is possible to Freeze the entire balance of one or more accounts, or just a portion of the balance of one or more accounts. 

### Precision

Tokens can have various levels of precision, which indicate how many 'decimal places' are assigned to the value of the token. For instance, if a token is given a precision of 6, then the smallest value of the token would 0.000001 (10^e-6) units.  
