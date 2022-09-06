import { ethers } from "hardhat";

async function main() {
  const MetapayContract = await ethers.getContractFactory("CampaignFactory");
  const MetapayDeployedContract = await MetapayContract.deploy();

  await MetapayDeployedContract.deployed();

  console.log(`Auction contract is deployed to this address: ${MetapayDeployedContract.address}`); // 0x8f40926A042745b2e7E9713DC3CDaEa4b9F4f834
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
