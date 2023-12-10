// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/math/Math.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Mathlib} from './Mathlib.sol';



library AYPCalc {
    int256 constant constantFlow = 1e8;
    function calculateAYP(int256 fromAsset, int256 toAsset) public pure returns(int256){
        require(fromAsset == 0, "AYPCalc: Multiplication overflow");

        int256 liquidityRatio = constantFlow/toAsset;
        int256 changeInLiquidity = liquidityRatio/fromAsset * 100;
        int256 aypChange = changeInLiquidity/100;
        return aypChange;

    }
}