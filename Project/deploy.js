const hre = require("hardhat");

async function main() {
  const Lock = await ethers.getContractFactory("Lock");
  const unlockTime = 1643723400
  const contract = await Lock.deploy(unlockTime);
  console.log("Contract deployed at:", contract.address);
}

main();