require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth sister pulse hunt nature slot gauge'; 
let testAccounts = [
"0x0f345d5be1ca84b9a9b66dd2a6ad83df32f353e9d7f230ca35c89e8a5d95ba19",
"0x809c385fe358fb66e3bfb339299e8051b8473c735f37412595f385c1518a35a8",
"0xa350369483c1adf36487efd137789bac3ff716e9d469cd52870b9a8e49805d75",
"0x78d65a688889e4a87defa530d8f6e9b0e5ea736ad2e8466348f5a8763c73669d",
"0x213bcc87b7055952a65558245e13dfa8d042b7390300d8266e480dee7777c615",
"0xab1454988d06beda449f7d06e5206b2e40515de20e0d64ad4ef07ee22afcb265",
"0x6c2c59757636a268e6a994e409d30959d8bc22317e9d8f93c2800227d304cb9e",
"0xafc923cea659def6ea44cc76dc166a90643b868c560f4de961c90eafb3e5b253",
"0xc653a8668bf2d7ae5d5a34adc9d990f7882cb2f74e4ec03eb17f304c23316e93",
"0x044bc3afa7ee403387a8f28f69fee2fcd5097ad58760782edd45a9b6a98a63ae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

