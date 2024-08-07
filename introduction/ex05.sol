//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Mycontract {
    address private owner;
    string public name = "default name";

    // a function that runs once when the contract is initialize or put on the blockchain
    constructor(string memory _name) {
        name = _name;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "caller must be owner");
        _;
    }

    function setName(string memory _name) public onlyOwner {
        name = _name;
    }
}
