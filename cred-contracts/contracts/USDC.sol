// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20, ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { IERC20Metadata } from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import { Address } from "@openzeppelin/contracts/utils/Address.sol";
import { SafeERC20 } from "@1inch/solidity-utils/contracts/libraries/SafeERC20.sol";
import { IUSDC } from "./interfaces/IUSDC.sol";
import { ERC20Plugins } from "@1inch/token-plugins/contracts/ERC20Plugins.sol";


contract USDC is IUSDC, ERC20Plugins {
    
    int256 AYP;
    int256 _totalSupply;
    struct tokenInfo{
        address contractAddr;
        uint256 intialTokens;
        uint256 tokenAYP;
    }
    mapping(address => tokenInfo) public tokens;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 maxUserPlugins_,
        uint256 pluginCallGasLimit_
    ) ERC20(name_, symbol_) 
    ERC20Plugins(maxUserPlugins_, pluginCallGasLimit_) 
    {
        AYP = 10;
        _totalSupply = 1e4;
    }

    /// @notice Mint tokens.
    /// @dev Only callable by the owner plugin.
    /// @param account The address to mint tokens to.
    /// @param amount The amount of tokens to mint.
    function mint(address account, uint256 amount) external  {
        _mint(account, amount);
    }

    /// @notice Burn tokens.
    /// @dev Only callable by the owner plugin.
    /// @param account The address to burn tokens from.
    /// @param amount The amount of tokens to burn.
    function burn(address account, uint256 amount) external {
        _burn(account, amount);
    }

    
    function updateTokenAYP(int256 newAYP) external {
        // require(msg.sender == owner(), "Not authorized to update AYP");
        // tokens[assetAddress].tokenAYP = newAYP;
        AYP += newAYP;
    }
    function updateTokenSupply(int256 change) external {
        // require(msg.sender == owner(), "Not authorized to update AYP");
        // tokens[assetAddress].tokenAYP = newAYP;
        _totalSupply += change;
    }

    function getTokenAYP() external view returns(int256){
        // require(msg.sender == owner(), "Not authorized to update AYP");
        // tokens[assetAddress].tokenAYP = newAYP;
        return AYP;
    }
    function getTokenSupply() external view returns (int256){
        // require(msg.sender == owner(), "Not authorized to update AYP");
        // tokens[assetAddress].tokenAYP = newAYP;
        return _totalSupply;
    }

    function getTokenAPY(address assetAddress) public view returns (uint256) {
        return tokens[assetAddress].tokenAYP;
    }
}