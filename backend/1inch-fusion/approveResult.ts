import Web3 from 'web3';
import {ERC20_ABI} from '../abi/erc20';

export async function approveERC20Token(
    web3: Web3,
    contractAddress: string,
    privateKey: string,
    spenderAddress: string,
    amount: string,
): Promise<boolean> {
    try {
        const tokenContract = new web3.eth.Contract(ERC20_ABI, contractAddress);
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        web3.eth.defaultAccount = account.address;
        // console.log(await tokenContract.(account.address))

        // @ts-ignore
        // console.log()
        const approvalData = tokenContract.methods.approve(spenderAddress, amount).encodeABI();
        console.log("data: ",approvalData)
        const signedTransaction = await web3.eth.accounts.signTransaction(
            {
                from: account.address,
                to: contractAddress,
                data: approvalData,
                gas: 5000000, // Adjust the gas limit as needed
                gasPrice: await web3.eth.getGasPrice()

            },
            privateKey
        );
        

        if (!signedTransaction.rawTransaction) throw new Error('Failed to sign transaction');

        // Send the signed transaction
        const transactionReceipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        console.log('Transaction successful:', transactionReceipt);
        return true;
    } catch (error) {
        console.error('Failed to approve ERC20 token:', error);
        return false;
    }
}
