'use client';

import { ethers } from 'ethers'
import { GelatoRelayPack } from '@safe-global/relay-kit'
import Safe, { EthersAdapter } from '@safe-global/protocol-kit'
import { MetaTransactionData, MetaTransactionOptions } from '@safe-global/safe-core-sdk-types'

function App() {

    async function pay() {
        // https://chainlist.org
        const RPC_URL = 'https://polygon-mumbai.g.alchemy.com/v2/ntvCXkWMYyJuKRAtzx2Ym7eOiDD8S7dh'
        const provider = new ethers.JsonRpcProvider(RPC_URL)
        const signer = new ethers.Wallet('', provider)
        const safeAddress = '0xa5C44F8c2245B83C9f5a38adf20c1beA48743614' // Safe from which the transaction will be sent

        // Any address can be used for destination. In this example, we use vitalik.eth
        const destinationAddress = '0xa5C44F8c2245B83C9f5a38adf20c1beA48743614'
        const withdrawAmount = ethers.parseUnits('0', 'ether').toString()

        // Create a transactions array with one transaction object
        const transactions: MetaTransactionData[] = [{
            to: destinationAddress,
            data: '0x',
            value: withdrawAmount
        }]
        const options: MetaTransactionOptions = {
            isSponsored: true
        }

        const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer
        })

        const protocolKit = await Safe.create({
            ethAdapter,
            safeAddress
        })

        const relayKit = new GelatoRelayPack({ apiKey: '', protocolKit })
        const safeTransaction = await relayKit.createRelayedTransaction({
            transactions,
            options
        })

        const signedSafeTransaction = await protocolKit.signTransaction(safeTransaction)
        const response = await relayKit.executeRelayTransaction(signedSafeTransaction, options)

        console.log(`Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`)

    }


    return (
        <div>
            <button onClick={pay}>check kr</button>
            hello
        </div>
    );
}

export default App;