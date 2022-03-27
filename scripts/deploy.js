const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("EpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["Leo", "Aang", "Pikachu", "Bumble Bee", "Hulk", "Austin Powers"], // Names
      [
        "QmVx79jpJTCvh9B8M6ZNucB4ehxLJyZVNsVqSfrwLwSKCG", // Images (IPFS CID)
        "QmetNRFG8t55zndy9WDBZfLcW37FGSQYELYAt3poiRWTbL",
        "QmRippRQfe5zwRwudtwEy1YjXYpnQ1pt7dKXNcfu66moUS",
        "QmcwwAZHRwqNuqNbQLCtJhy4zTBNGJBZ7tgyRMTz7kUrPi", 
        "QmVhPFmgv4wvguKbgW9PsfeyBjRXB6KrESww8awLrMNwbC",
        "QmRdAEPXLFEEAWzyx38Eu2WaqVpY1iMDPhKQ3wcyfAUUoe",
      ],
      [100, 200, 300, 600, 1000, 150], // HP values
      [100, 50, 25, 300, 800, 150], // Attack damage values
      "Vladimir Putin", // Boss name
      "QmZtGC55HP3TYwFcP3GJzMXENEgB3Rhaajwpceb2MDqb5v", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  