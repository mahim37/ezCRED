'use client';
import { useEffect, useState } from "react";
import { SafeAuthPack, SafeAuthInitOptions, AuthKitSignInData } from "@safe-global/auth-kit";
import ReferButton from "../Refer";
import { ethers, BrowserProvider, Eip1193Provider } from "ethers";
import { MetaTransactionData, MetaTransactionOptions } from '@safe-global/safe-core-sdk-types'
import chains from "../../chain"
import verifierabi from "../../verifier";
import Safe, { EthersAdapter } from "@safe-global/protocol-kit";
import { GelatoRelayPack } from "@safe-global/relay-kit";
const currentChainObj = chains.goerli;

function App() {
    const [showCreateDepositFields, setShowCreateDepositFields] = useState(false);
    const [showClaimDepositFields, setShowClaimDepositFields] = useState(false);
    const [showCancelDepositFields, setShowCancelDepositFields] = useState(false);
    const [showIsVerifiedFields, setShowIsVerifiedFields] = useState(false);
    const [showMintTokenFields, setShowMintTokenFields] = useState(false);

    const [tokens, settokens] = useState('');

    const [safeAuth, setSafeAuth] = useState<SafeAuthPack>();
    const [userInfo, setUserInfo] = useState<any>();
    const [provider, setProvider] = useState<Eip1193Provider | null>(null);
    const [eoa, setEOA] = useState('');
    const [latestsafe, setlatestsafe] = useState('');
    const [safeAuthSignInResponse, setSafeAuthSignInResponse] = useState<AuthKitSignInData | null>(null);

    useEffect(() => {
        const init = async () => {
            try {
                const safeAuthInitOptions: SafeAuthInitOptions = {
                    showWidgetButton: false,
                    chainConfig: {
                        blockExplorerUrl: "https://goerli.etherscan.io",
                        chainId: "0x5",
                        displayName: "Ethereum Goerli",
                        rpcTarget: "https://rpc.ankr.com/eth_goerli",
                        ticker: "ETH",
                        tickerName: "Ethereum",
                    },
                };

                const safeAuthPack = new SafeAuthPack();
                await safeAuthPack.init(safeAuthInitOptions);

                setSafeAuth(safeAuthPack);
                if (safeAuthPack.isAuthenticated) {
                    const signInInfo = await safeAuthPack?.signIn();
                    setSafeAuthSignInResponse(signInInfo);
                    setProvider(safeAuthPack.getProvider() as Eip1193Provider);
                }
            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);

    const login = async () => {
        if (!safeAuth) {
            return;
        }
        const signInInfo = await safeAuth.signIn();
        console.log("SIGN IN RESPONSE: ", signInInfo);

        const userInfo = await safeAuth.getUserInfo();
        console.log("USER INFO: ", userInfo);
        setEOA(signInInfo.eoa);
        const length = signInInfo.safes?.length || 0;
        const rand = signInInfo?.safes;
        if (length != 0) {
            setlatestsafe(rand![length - 1]);
        }
        setSafeAuthSignInResponse(signInInfo);
        setUserInfo(userInfo || undefined);
        setProvider(safeAuth.getProvider() as Eip1193Provider);
    };

    const handleToggleCreateDepositFields = () => {
        setShowCreateDepositFields((prevShowFields) => !prevShowFields);
    };

    const handleToggleClaimDepositFields = () => {
        setShowClaimDepositFields((prevShowFields) => !prevShowFields);
    };

    const handleToggleCancelDepositFields = () => {
        setShowCancelDepositFields((prevShowFields) => !prevShowFields);
    };

    const handleToggleIsVerifiedFields = () => {
        setShowIsVerifiedFields((prevShowFields) => !prevShowFields);
    };

    const handleToggleMintTokenFields = () => {
        setShowMintTokenFields((prevShowFields) => !prevShowFields);
    };

    async function createDeposit() {

        let passwords = [
            "ashutosh",
            "anuj",
            "mahim"
        ]

        const provider = new BrowserProvider(safeAuth?.getProvider() as Eip1193Provider);
        const signer = await provider.getSigner();

        let iface = new ethers.Interface(verifierabi);
        const encodedData = iface
            .encodeFunctionData(
                "createDeposit",
                [
                    passwords[0],
                    latestsafe,
                ]
            );
        
            console.log(encodedData);

        const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer,
        });

        const protocolKit = await Safe.create({
            safeAddress: latestsafe,
            ethAdapter: ethAdapter,
        });

        const transactions: MetaTransactionData = {
            to: currentChainObj.verifier,
            value: ethers.parseUnits('0.00001', 'ether').toString(),
            data: encodedData,
        }
        const verifier = new ethers.Contract(chains.goerli.verifier, verifierabi, signer);
        // const options = {
        //     gas:
        // }

        const create = await protocolKit.createTransaction({
            transactions: [transactions]
        });

        const safeTxHash = await protocolKit.getTransactionHash(create)
        console.log(safeTxHash)
        const signedSafeTransaction = await protocolKit.signTransaction(create)
        console.log('SIGNED', signedSafeTransaction);
        const response = await protocolKit.executeTransaction(signedSafeTransaction)
        console.log(response)
    }

    async function claimDeposit() {
        let passwords = [
            "ashutosh",
            "anuj",
            "mahim"
        ]

        const provider = new BrowserProvider(safeAuth?.getProvider() as Eip1193Provider);
        const signer = await provider.getSigner();

        let iface = new ethers.Interface(verifierabi);
        const encodedData = iface
            .encodeFunctionData(
                "claimDeposit",
                [
                    passwords[0],
                    latestsafe,
                ]
            );
        
            console.log(encodedData);

        const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer,
        });

        const protocolKit = await Safe.create({
            safeAddress: latestsafe,
            ethAdapter: ethAdapter,
        });

        const transactions: MetaTransactionData = {
            to: currentChainObj.verifier,
            value: '0',
            data: encodedData,
        }
        const verifier = new ethers.Contract(chains.goerli.verifier, verifierabi, signer);
        // const options = {
        //     gas:
        // }

        const create = await protocolKit.createTransaction({
            transactions: [transactions]
        });

        const safeTxHash = await protocolKit.getTransactionHash(create)
        console.log(safeTxHash)
        const signedSafeTransaction = await protocolKit.signTransaction(create)
        console.log('SIGNED', signedSafeTransaction);
        const response = await protocolKit.executeTransaction(signedSafeTransaction)
        console.log(response)
    }

    return (
        <div className="app-container">
            {
                latestsafe != '' ?
                    <>
                        <p>
                            Safe Account: {latestsafe.substring(0, 8)} . . . {latestsafe.substring(latestsafe.length - 5)}
                        </p>
                        <p>
                            EOA Account: {eoa.substring(0, 8)} . . . {eoa.substring(eoa.length - 5)}
                        </p>

                        {eoa.substring(0, 9)} . . .{eoa.substring(eoa.length - 5)}
                        <ReferButton />
                        <button
                            onClick={handleToggleCreateDepositFields}
                            className="toggle-button"
                        >
                            {showCreateDepositFields ? 'Hide Create Deposit Fields' : 'Create Deposit'}
                        </button>

                        {showCreateDepositFields && (
                            <div className="fields-container">
                                {/* Create Deposit Fields */}
                                <div className="field">
                                    <label>Referal Code </label>
                                    <input
                                        type="text"
                                        name="text"
                                        className="input-field"
                                    />
                                </div>

                                <div className="field">
                                    <label>Tokens:</label>
                                    <input
                                        type="text"
                                        name="tokens"
                                        className="input-field"
                                        onChange={(e) => {
                                            settokens(e.target.value)
                                        }}
                                    />
                                </div>
                                <button className="submit-button" onClick={createDeposit}>Submit</button>
                            </div>
                        )}
                    </>
                    :
                    <div className="notloginwrapper">
                        <div className="notlogin">
                            <img src="Safe.png" />
                            <h1 className="notloginh1">
                                No connected accounts found!
                            </h1>
                        </div>
                        <button onClick={login} className="submit-button">
                            Login!
                        </button>
                    </div>
            }




            <button
                onClick={handleToggleClaimDepositFields}
                className="toggle-button"
            >
                {showClaimDepositFields ? 'Hide Claim Deposit Fields' : 'Claim Deposit'}
            </button>

            {showClaimDepositFields && (
                <div className="fields-container">
                    {/* Claim Deposit Fields */}
                    <div className="field">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="claimPassword"
                            className="input-field"
                        />
                    </div>

                    <div className="field">
                        <label>Receiver:</label>
                        <input
                            type="text"
                            name="receiver"
                            className="input-field"
                        />
                    </div>

                    <div className="field">
                        <label>Token Address:</label>
                        <input
                            type="text"
                            name="claimTokenAddress"
                            className="input-field"
                        />
                    </div>

                    <button className="submit-button" onClick={claimDeposit}>Submit</button>
                </div>
            )}

            <button
                onClick={handleToggleCancelDepositFields}
                className="toggle-button"
            >
                {showCancelDepositFields ? 'Hide Cancel Deposit Fields' : 'Cancel Deposit'}
            </button>

            {showCancelDepositFields && (
                <div className="fields-container">
                    {/* Cancel Deposit Fields */}
                    <div className="field">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="cancelPassword"
                            className="input-field"
                        />
                    </div>

                    <div className="field">
                        <label>Caller:</label>
                        <input
                            type="text"
                            name="cancelCaller"
                            className="input-field"
                        />
                    </div>

                    <div className="field">
                        <label>Token Address:</label>
                        <input
                            type="text"
                            name="cancelTokenAddress"
                            className="input-field"
                        />
                    </div>

                    <button className="submit-button">Submit</button>
                </div>
            )}

            <button
                onClick={handleToggleIsVerifiedFields}
                className="toggle-button"
            >
                {showIsVerifiedFields ? 'Hide Is Verified Fields' : 'Is Verified'}
            </button>

            {showIsVerifiedFields && (
                <div className="fields-container">
                    {/* Is Verified Fields */}
                    <div className="field">
                        <label>Sender:</label>
                        <input
                            type="text"
                            name="sender"
                            className="input-field"
                        />
                    </div>

                    <button className="submit-button">Submit</button>
                </div>
            )}

            <button
                onClick={handleToggleMintTokenFields}
                className="toggle-button"
            >
                {showMintTokenFields ? 'Hide Mint Token Fields' : 'Mint Token'}
            </button>

            {showMintTokenFields && (
                <div className="fields-container">
                    {/* Mint Token Fields */}
                    <div className="field">
                        <label>Amount:</label>
                        <input
                            type="text"
                            name="mintAmount"
                            className="input-field"
                        />
                    </div>

                    <div className="field">
                        <label>Caller:</label>
                        <input
                            type="text"
                            name="mintCaller"
                            className="input-field"
                        />
                    </div>

                    <div className="field">
                        <label>Token Address:</label>
                        <input
                            type="text"
                            name="mintTokenAddress"
                            className="input-field"
                        />
                    </div>

                    <button className="submit-button">Submit</button>
                </div>
            )}
        </div>
    );
}

export default App;
