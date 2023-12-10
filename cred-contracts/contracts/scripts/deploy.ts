import { ethers } from "hardhat";


const MAX_PLUGIN_GAS_LIMIT = 1e18;
const MAX_USER_FARMS = 1e8;
async function main() {

  const [deployer, address1, address2] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy WETH contract
  const WETH = await ethers.getContractFactory("WETH");
  const weth = await WETH.deploy("WETH", "WETH", MAX_USER_FARMS, MAX_PLUGIN_GAS_LIMIT);

  await weth.waitForDeployment();

  console.log("WETH deployed to:", weth.getAddress);


  // Deploy WETH contract
  const USDC = await ethers.getContractFactory("USDC");
  const usdc = await USDC.deploy('USDC', 'USDC', MAX_USER_FARMS, MAX_PLUGIN_GAS_LIMIT);

  await weth.waitForDeployment();

  console.log("USDC deployed to:", weth.getAddress);
  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
