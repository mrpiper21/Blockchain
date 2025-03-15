// Calling Contract Addresses
// Okay, so we have taken a look at sending ether to externally owned accounts through the call method. What's next?

// Now it's time to send data to smart contracts using the call method. Let's take a look at what this looks like:

import "hardhat/console.sol";

contract A {
    function setValueOnB(address b) external {
        (bool s, ) = b.call(abi.encodeWithSignature("storeValue(uint256)", 22));
        require(s);
    }
}

contract B {
    uint x;

    function storeValue(uint256 _x) external {
        x = _x;
        console.log(x); // 22
    }
}




// Ok here's the last example, and then we'll get to coding! What if you didn't have access to the contract
//  B definition in the previous example? In that case you could use something called an interface. 
//  Let's see what that would look like:

interface O {
    function storeValue(uint256) external;
}

contract P {
    function setValueOnB(address b) external {
        O(b).storeValue(22);
    }
}
// From contract A's perspective, this code functions the exact same way as before. For the 
// definition of an interface, we only need to give Solidity enough information to figure out
//  how to encode the calldata to call the address b. From contract A's perspective, we don't 
//  need the full method definition of storeValue, we simply need to describe how we'd like to 
//  interface with contract B. Make sense? 