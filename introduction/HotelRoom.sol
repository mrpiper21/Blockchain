// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract HotelRoom {
    // vacant
    // occupied
    enum Statuses { Vacant, Occupied}
    Statuses public currenStatus;

    // event emitter
    event Occupy(address _occupant, uint _value);

    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
        currenStatus = Statuses.Vacant;
    }

    modifier onlyWhilVacant {
        require(currenStatus == Statuses.Vacant, "Currently Occupied");
        _;
    }

    modifier costs(uint _amount) {
        require(msg.value >= _amount, "Not enough ether provided.");
        _;
    }

    function book() public payable onlyWhilVacant costs(2 ether) {
        currenStatus = Statuses.Occupied;
        // owner.transfer(msg.value);
        (bool sent, bytes memory data) = owner.call{value: msg.value}("");
        require(sent);
        emit Occupy(msg.sender, msg.value);
    }
}