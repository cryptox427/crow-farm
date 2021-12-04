var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = 'sponsor tragic rhythm runway buddy task explain scan twice industry orange unit';

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  //}
  //
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://evm-cronos.crypto.org`),
      network_id: 25,
      confirmations: 2,
      timeoutBlocks: 2000000,
      skipDryRun: true,
      // gas: 4500000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 90000000000000,  // 20 gwei (in wei) (default: 100 gwei)
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://cronos-testnet-3.crypto.org:8545`),
      network_id: 338,
      confirmations: 1,
      timeoutBlocks: 2000000,
      skipDryRun: true,
      gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 90000000000000,  // 20 gwei (in wei) (default: 100 gwei)
    }
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};