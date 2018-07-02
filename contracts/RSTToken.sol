pragma solidity ^0.4.17;

import "./ERC20Token.sol";

contract RSTToken is ERC20Token {
    uint public INITIAL_SUPPLY = 1500000000000000;
    
    constructor() ERC20Token("TEST REGA Risk Sharing Token", "RST-T", uint8(10)) public {
        balanceOf[msg.sender] = INITIAL_SUPPLY;
        totalSupply = INITIAL_SUPPLY;
    }
}