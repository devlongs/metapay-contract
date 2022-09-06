import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

const MUMBAI_API_KEY_URL = process.env.MUMBAI_API_KEY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

//const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: "",
      },
    },
    polygon_mumbai: {
      url: MUMBAI_API_KEY_URL,
      //@ts-ignore
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    //apiKey: ETHERSCAN_API_KEY,
    apiKey: POLYGONSCAN_API_KEY,
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};

export default config;
