// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import { FarmAccounting } from "../accounting/FarmAccounting.sol";
// interface IStabilanToken is IERC20 {
//     error NotCore();

//     // function endEpoch() external view returns (uint256);

//     // function underlying() external view returns (IERC20);

//     function mint(address account, uint256 amount) external;

//     function burn(address account, uint256 amount) external;
// }



interface IUSDC is IERC20 {

    function mint(address account, uint256 amount) external; // onlyOwner
    function burn(address account, uint256 amount) external; // onlyOwner

    // event RewardUpdated(uint256 reward, uint256 duration);

    // View functions
    // function farmInfo() external view returns(FarmAccounting.Info memory);
    // function farmed(address account) external view returns(uint256);

    // User functions
    // function deposit(uint256 amount) external;
    // function withdraw(uint256 amount) external;
    // function claim() external;
    // function exit() external;

    // Distributor functions
    // function startFarming(uint256 amount, uint256 period) external;
    // function stopFarming() external;
    // function rescueFunds(IERC20 token, uint256 amount) external;
}

