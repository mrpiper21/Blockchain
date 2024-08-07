// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Mycontract {
    // mapping
    // mapping(key => value) names;
    mapping(uint => string) public names;
    mapping(uint => Books) public books;
    // nested mappings
    mapping(address => mapping(uint => Books)) public myBooks;

    struct Books {
        string title;
        string author;
    }

    constructor() {
        names[1] = "Atom";
        names[2] = "Ion";
        names[3] = "Silicon";
    }

    function addBook(
        uint _id,
        string memory _title,
        string memory _author
    ) public {
        books[_id] = Books(_title, _author);
    }

    function addMyBook(
        uint _id,
        string memory _title,
        string memory _author
    ) public {
        myBooks[msg.sender][_id] = Books(_title, _author);
    }
}
