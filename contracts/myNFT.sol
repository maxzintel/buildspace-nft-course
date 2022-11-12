// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

// A smart contract is similar to a class in other languages.
// Once we've initialized the contract, the contructor will run automatically and do whatever is inside,
// in this case, print out foo bar!
contract MyNFT {
  constructor() {
    console.log("foo bar");
  }
}
