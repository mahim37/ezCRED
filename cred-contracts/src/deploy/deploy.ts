import { ethers } from "hardhat";


const MAX_PLUGIN_GAS_LIMIT = 1e8;
const MAX_USER_FARMS = 1e2;
async function main() {

  const [deployer, address1, address2] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy WETH contract
  // const WETH = await ethers.getContractFactory("WETH");
  // const weth = await WETH.deploy("WETH", "WETH", MAX_USER_FARMS, MAX_PLUGIN_GAS_LIMIT);

  // await weth.waitForDeployment();

  // console.log("WETH deployed to:", await weth.getAddress());


  // Deploy USDC contract
  // const USDC = await ethers.getContractFactory("USDC");
  // const usdc = await USDC.deploy('USDC', 'USDC', MAX_USER_FARMS, MAX_PLUGIN_GAS_LIMIT);

  // await usdc.waitForDeployment();

  // console.log("USDC deployed to:", await usdc.getAddress());
  const APYCal = await ethers.getContractFactory('AYPCalc');
  const apycal = await APYCal.deploy();
  await apycal.waitForDeployment();
  console.log(await apycal.getAddress());
  const WETHPlugin = await ethers.getContractFactory("CredPlugin", 
  {
    libraries: {
      AYPCalc: await apycal.getAddress()
  }});
  const wethPlugin = await WETHPlugin.deploy('0x328E3969712F29686FF8F275dc5738Df88423593');

  await wethPlugin.waitForDeployment();

  console.log("WETHPlugin deployed to:", await wethPlugin.getAddress());
  console
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
