require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember honey inflict arctic tail skirt'; 
let testAccounts = [
"0xfbbd73c0fc689b1aad97dda0bbd2c19a01ced8c7fe395399536f9bb0c8f16e63",
"0xc2d3f247683cc2abdb68878acb7b217cb46af7da23eb88b8b7f7cfcb075a355e",
"0x259dabe556a66d505c15cdceff476a913e67e22cf2e9e08feb7c86f9c0432ba6",
"0xd40e95ed8f3efbc6017a39dc3d404c7ff5c059212b9701922c0dd663298338e2",
"0x464b59038070bbba15374c5708a3a698c51b032fedc388e9e58c3e6aa8a4df13",
"0xfc3e97a38087cd7d8b3750d3f8805ff1e8f4c21018850f684c2ad3c03c586da8",
"0x69e0b2e8ba48903c46febfc8bded0bbd31591f3e4477a74f12860ec02f34b3eb",
"0xc39377b12d661b3379577c0cb96895f242eab01a7c8d35a8214b78352ba7f93d",
"0xffa6cd65d23b25b91a2f98d2b1f62de2e26877ae8d2892ab1d2a8ef80a5a63d1",
"0x5aaf67c6752ccdc28dd220baa6be308391260fbb9680ff9a5586f789e1b83757"
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

