## Hello there

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

**Happy _buidling_!**