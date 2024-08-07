//SPDX-License-Identifier: Unlicense
pragma solidity ^0.5.4;

contract Functions {
    string name = "default name";

    function setName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns (string memory){
        return name;
        
    }

    function reset() public {
        name = "default name";
    }
}