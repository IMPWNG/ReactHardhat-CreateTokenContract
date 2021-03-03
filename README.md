## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/IMPWONG/hardhat-symfoni-create-token-contract.git
cd hardhat-symfoni-create-token-contract
npm install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

> Note: There's [an issue in `ganache-core`](https://github.com/trufflesuite/ganache-core/issues/650) that can make the `npm install` step fail. 
>
> If you see `npm ERR! code ENOLOCAL`, try running `npm ci` instead of `npm install`.

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Metamask](https://metamask.io) installed and listening to
`localhost 8545`.


## Setup new project

```sh
mkdir mySymfoniProject && cd mySymfoniProject && npm init -y
```

```sh
npx @nomiclabs/buidler
```

```sh
npm add --save-dev chai @types/node @types/mocha @types/chai
```

```sh
mkdir deploy
```

```sh
npm add @nomiclabs/buidler @symfoni/buidler-react @symfoni/buidler-typechain @typechain/ethers-v5 buidler-deploy@next buidler-ethers-v5 ethers ts-generator ts-node typechain typescript
```

Convert to a builder typescript

```sh
rm buidler.config.js
cp node_modules/@symfoni/buidler-react/defaults/buidler.config.default.ts buidler.config.ts
cp node_modules/@symfoni/buidler-react/defaults/tsconfig.default.json tsconfig.json
```


## User Guide

You can find detailed instructions on using this repository and many tips in [its documentation](https://hardhat.org/tutorial).

- [Project description (Token.sol)](https://hardhat.org/tutorial/4-contracts/)
- [Setting up the environment](https://hardhat.org/tutorial/1-setup/)
- [Testing with Hardhat, Mocha and Waffle](https://hardhat.org/tutorial/5-test/)
- [Setting up Metamask](https://hardhat.org/tutorial/8-frontend/#setting-up-metamask)
- [Hardhat's full documentation](https://hardhat.org/getting-started/)

For a complete introduction to Hardhat, refer to [this guide](https://hardhat.org/getting-started/#overview).

## What’s Included?

Your environment will have everything you need to build a Dapp powered by Hardhat and React.

- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/ethers.js/html/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.
- [A sample frontend/Dapp](./frontend): A Dapp which uses [Create React App](https://github.com/facebook/create-react-app).

## Troubleshooting

- `Invalid nonce` errors: if you are seeing this error on the `npx hardhat node`
  console, try resetting your Metamask account. This will reset the account's
  transaction history and also the nonce. Open Metamask, click on your account
  followed by `Settings > Advanced > Reset Account`.

**Happy _buidling_!**