require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/l6Lx30jh42_4NH8d6UHLXOWuH51S3-VC',
      accounts: ['c874fd732bc48e9ba0be0b78b3f1c940a3d1e5ad8ba9a7589bf32b42a85b023a'],
    },
  },
};