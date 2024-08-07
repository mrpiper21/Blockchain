//SPDX-License-Identifier: Unlicense
pragma solidity ^0.5.4;

contract ModifiersContract {
    string public name = "default Name";
    uint public balance;

    //view - readOnly
    function getName() public view returns (string memory) {
        return name;
    }

    //pure - cannot read or modify the state
    function addNumbers(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    //payable -> allows to recieve crypto currencies whenever transactions are submitted
    function pay() public payable {
        balance = msg.value;
    }
}
