/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/solana_wallet.json`.
 */
export type SolanaWallet = {
  "address": "BAcey82mcE8dZDbRuXFL7KKKnSyFSLb13DUSPQfp86gS",
  "metadata": {
    "name": "solanaWallet",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "helloWorld",
      "discriminator": [
        11,
        235,
        52,
        244,
        76,
        66,
        25,
        71
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    }
  ]
};
