const main = async () => {
  // compiles the contract and generates necessary files to work with the contract under artifacts dir.
  const nftContractFactory = await hre.ethers.getContractFactory('MyNFT');

  // Hardhat creates a local ETH network for us, but just for this contract.
  // After this script completes it would destroy that network.
  // You'll always have a clean slate and clean blockchain to test/debug.
  const nftContract = await nftContractFactory.deploy();
  
  // Hardhat mines and deploys as needed to create our contract.
  // Constructor will run (from contracts/myNFT.sol) when we are fully deployed.
  await nftContract.deployed();
  console.log("Contract deployed to: ", nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
};

runMain();