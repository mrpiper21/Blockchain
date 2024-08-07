//SPDX-License-Identifier: Unlicense
pragma solidity ^0.5.4;

contract Visibility {
    // Different types of variable visibility
    string name = "default Name";
    string public name2 = "defaultName2";
    string private name3 = "defaultName3";
    string internal name4 = "defaultName4";
}