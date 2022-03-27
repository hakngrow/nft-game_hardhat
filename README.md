# Create a turn-based NFT browser game

In this tutorial, we will hack together a Web3 game using crypto and NFTs.  Players can mint NFTs, make them playable characters, and earn crypto as they win games.

# 1. Setup local tooling and sample project

# 2. How to use playable NFTs 

The goal of our game will be to destroy a boss. The boss has say 1,000,000 HP. At the start of the game, each player can mint a character NFT that has a certain amount of Attack Damage and HP. Players can order their character NFT to attack the boss and deal damage to it. Kind of like a Pokemon!

Players need to work together to attack the boss and bring its HP down to 0. Every time a player hit the boss, the boss hits the player back! If the NFT's HP goes below 0, the player's NFT dies and they can't hit the boss anymore. Players can only have one character NFT in their wallet. Once the character's NFT dies, it's game over. That means many players need to join forces to attack the boss and kill it.

When a player plays the game:
1. They'll connect their wallet.
2. The game will detect they don't have a character NFT in their wallet.
3. The game will let them choose a character and mint their own character NFT to play the game. Each character NFT has its own attributes stored on the NFT directly like: HP, Attack Damage, the image of the character, etc. When the character's HP hits 0, it would say hp: 0 on the NFT itself.

## 3. Setup data for NFTs



