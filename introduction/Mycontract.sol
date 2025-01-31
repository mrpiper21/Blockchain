// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ownerble {
    address owner;

      modifier onlyOwner() {
        require(msg.sender == owner, "must be owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }
}

//secret vault contract
contract SecretVault {
    string secret;

    constructor(string memory _secret) {
        secret = _secret;
    }

    function getScret() public view returns (string memory) {
        return secret;
    }
}

// factory contract
contract Mycontract is Ownerble {
    address secretVault;

    constructor(string memory _secret) {
        //deploying a new contract
        SecretVault _secretVault = new SecretVault(_secret);
        secretVault = address(_secretVault);
        // calling the contructor from the parent contract
        super;
    }

    function getScret() public view onlyOwner returns (string memory) {
        return SecretVault(secretVault).getScret();
    }
}