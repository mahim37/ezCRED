     // SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/math/Math.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";


library Mathlib {
     
        uint256 internal constant WETH = 1e18;
        uint256 internal constant HALF_WETH = 0.5e18;


        uint256 internal constant USD = 1e8;
        uint256 internal constant HALF_USD = 0.5e8;

        uint256 internal constant USD_WETH_RATIO = 1e10;

     
        function wethMul(uint256 a, uint256 b) internal pure returns (uint256 c) {
            assembly {
                if iszero(or(iszero(b), iszero(gt(a, div(sub(not(0), HALF_WETH), b))))) { revert(0, 0) }

                c := div(add(mul(a, b), HALF_WETH), WETH)
            }
        }

        function usdDiv(uint256 a, uint256 b) internal pure returns (uint256 c) {
            // to avoid overflow, a <= (type(uint256).max - halfB) / USD
            assembly {
                if or(iszero(b), iszero(iszero(gt(a, div(sub(not(0), div(b, 2)), USD))))) { revert(0, 0) }

                c := div(add(mul(a, USD), div(b, 2)), b)
            }
        }

      
        function usdMul(uint256 a, uint256 b) internal pure returns (uint256 c) {
            // to avoid overflow, a <= (type(uint256).max - HALF_USD) / b
            assembly {
                if iszero(or(iszero(b), iszero(gt(a, div(sub(not(0), HALF_USD), b))))) { revert(0, 0) }

                c := div(add(mul(a, b), HALF_USD), USD)
            }
        }

       
        function wethDiv(uint256 a, uint256 b) internal pure returns (uint256 c) {
            assembly {
                if or(iszero(b), iszero(iszero(gt(a, div(sub(not(0), div(b, 2)), WETH))))) { revert(0, 0) }

                c := div(add(mul(a, WETH), div(b, 2)), b)
            }
        }
        function wethToUSD(uint256 a) internal pure returns (uint256 b) {
            assembly {
                b := div(a, USD_WETH_RATIO)
                let remainder := mod(a, USD_WETH_RATIO)
                if iszero(lt(remainder, div(USD_WETH_RATIO, 2))) { b := add(b, 1) }
            }
        }

        /// @dev Converts USD up to Wad
        /// @dev assembly optimized for improved gas savings, see https://twitter.com/transmissions11/status/1451131036377571328
        /// @param a USD
        /// @return b = a converted in wad
        function usdToWETH(uint256 a) internal pure returns (uint256 b) {
            // to avoid overflow, b/USD_WAD_RATIO == a
            assembly {
                b := mul(a, USD_WETH_RATIO)

                if iszero(eq(div(b, USD_WETH_RATIO), a)) { revert(0, 0) }
            }
        }

}