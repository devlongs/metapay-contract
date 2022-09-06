import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO POLYGON MUMBAI TESTNET: 0x8f40926A042745b2e7E9713DC3CDaEa4b9F4f834

async function main() {
  const Auction = await ethers.getContractFactory("Lottery");
  const auction = Auction.attach(
    "0x510Aad698Fb69502715A69f593f1754F4eD9C7FB"
  );

  
//   const contractBal = await auction.getBalance();
//   console.log("Contract Balance: ", contractBal);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});