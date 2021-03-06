var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "plate mix any adult deal sand brand about window will casual grit";

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/BymPe6F1XQoQ3ZwlEzme")
      },
      network_id: 3
    }   
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  } 
};
