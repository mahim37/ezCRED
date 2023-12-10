import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();


const INFURA_API_KEY = process.env.INFURA_SEPOLIA_KEY!;
const PRIVATE_KEY = process.env.PK!;


const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
        // mainnet: process.env.MAINNET_ETHERSCAN_KEY,
        // avalanche: process.env.AVAX_ETHERSCAN_KEY,
        mainnet: process.env.API_KEY!
    },
},
solidity: {
    version: '0.8.20',
    settings: {
        optimizer: {
            enabled: true,
            runs: 1000000,
        },
        viaIR: true,
    },
},
networks:{
  scrollSepolia: {
        url: 'https://sepolia-rpc.scroll.io' || "",
        accounts: PRIVATE_KEY !== undefined ? [`0x${PRIVATE_KEY}`] : [],
      },
    }
    // scroll:{

    // }
  
},

};

export default config;
