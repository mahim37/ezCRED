import {FusionSDK} from "@1inch/fusion-sdk";
import {Quote} from "@1inch/fusion-sdk/api";


export async function getQuote(sdk: FusionSDK, fromTokenAddress: string, toTokenAddress: string, amount: string): Promise<Quote> {
    const params = {
        fromTokenAddress,
        toTokenAddress, // 
        amount, // 
    }

    return await sdk.getQuote(params)
}