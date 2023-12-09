import { FusionSDK } from "@1inch/fusion-sdk";
import { ActiveOrdersResponse, OrdersByMakerResponse } from "@1inch/fusion-sdk/api/orders";

export async function orders(sdk: FusionSDK): Promise<ActiveOrdersResponse> {
    // Introduce a 2-second delay
    await delay(2000);

    return await sdk.getActiveOrders({ page: 1, limit: 2 });
}

export async function ordersByMaker(sdk: FusionSDK, address: string): Promise<OrdersByMakerResponse> {
    // Introduce a 2-second delay
    await delay(2000);

    return await sdk.getOrdersByMaker({
        page: 1,
        limit: 5,
        address,
    });
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
