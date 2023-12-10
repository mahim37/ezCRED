// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// Author: @Mahim

import { Plugin } from "@1inch/token-plugins/contracts/Plugin.sol";
import { IERC20Plugins } from "@1inch/token-plugins/contracts/interfaces/IERC20Plugins.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {USDC} from './USDC.sol';
import {WETH} from './WETH.sol';
import "./libs/AYPCalc.sol";
contract CredPlugin is Plugin{
    
    int256 private _totalSupply;

    constructor(IERC20Plugins _myAsset)
        Plugin(_myAsset)
    {}

       function _updateBalances(address from, address to, uint256 amount) internal override {
        if (from != address(0) && to != address(0)) {
            int256 fromAsset = (USDC(from).getTokenSupply()) - int256(amount);
            int256 toAsset = WETH(to).getTokenSupply() + int256(amount);
            int256 changeAYP = AYPCalc.calculateAYP(fromAsset,toAsset);
            
            USDC(from).updateTokenAYP(changeAYP);
            WETH(to).updateTokenAYP(-changeAYP);
        }
       }


}
