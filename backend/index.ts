import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {FusionSDK, PrivateKeyProviderConnector} from "@1inch/fusion-sdk";
import {PresetEnum} from "@1inch/fusion-sdk/api";
import Web3 from "web3";
import {
  authKey,
  ethNetworkRPC,
  NativeToken,
  network,
  OneInchRouter,
  OneInchToken,
  OneInchTokenAmount,
  pk,
  USDCCoinBSC,
  WETH_Token, WethAmount
} from "./config/config";
import { getQuote } from './1inch-fusion/getQuote';
import { ordersByMaker} from './1inch-fusion/getOrder';
import {createOrder, getAddressFromPrivateKey} from "./1inch-fusion/createOrder";
import { approveERC20Token } from './1inch-fusion/approveResult';
import sgMail from '@sendgrid/mail';

dotenv.config();

const app: Application = express();
app.use(cors<Request>());

const port = process.env.PORT || 5000;

const web3 = new Web3(new Web3.providers.HttpProvider(ethNetworkRPC));

  const blockchainProvider = new PrivateKeyProviderConnector(
      pk,
      // @ts-ignore
      web3,
  )
  const address = process.env.PUBLIC_ADDR;
  // console.log(await web3.eth.getBalance(address))
    

  const sdk = new FusionSDK({
      url: "https://api.1inch.dev/fusion",
      network: network,
      blockchainProvider,
      authKey: authKey,
  })
  const sendGridAPI =  process.env.SENDGRID_API_KEY!;
  sgMail.setApiKey(sendGridAPI);
  const TO_EMAIL = process.env.TO_EMAIL ?? 'deadlyhunter888@gmail.com';
  const FROM_EMAIL = process.env.FROM_EMAIL ?? 'rajputanuj041@gmail.com';
  
  app.get('/send-mail', async (req: Request, res: Response) => {
      // const { email, message } = req.body;
      const msg = {
          to: TO_EMAIL,
          from: FROM_EMAIL,
          subject: 'Mail from ',
          text: 'Hi',
          html: 'Hi',
      };
      try {
          await sgMail.send(msg);
          res.status(200).send('Email sent successfully');
      } catch (error) {
          console.error(error);
          res.status(500).send('Error sending email');
      }
  });


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.get('/approve-order',async (req:Request, res: Response) => {
  try{
    await delay(2000);
    // console.log(getAddressFromPrivateKey(pk));
    const approveResult = await approveERC20Token(web3, WETH_Token, pk, OneInchRouter, OneInchTokenAmount)
    console.log(approveResult);
    
    if(approveResult){
      res.send(JSON.stringify(approveResult));
    }
    else{
      res.send(JSON.stringify('Error!'));
    }
  }
  catch(e){
    console.log('Swap Falied,ERR! ', e);
  }
});


app.get('/create-order', async (req: Request, res: Response) =>{
  try{
    await delay(2000);
    console.log(getAddressFromPrivateKey(pk));
    const info = await createOrder(sdk,
            WETH_Token,
            OneInchToken,
            WethAmount,
            getAddressFromPrivateKey(pk),
            PresetEnum.fast);

    console.log(info);
    
    if(info){
      res.send(JSON.stringify(info));
    }
    else{
      res.send(JSON.stringify('Error!'));
    }
  }
  catch(e){
    console.log('Swap Falied,ERR! ', e);
  }
});


app.get('/get-quote', async (req: Request, res: Response) =>{
  try{
    
    const quote = await getQuote(sdk, WETH_Token, OneInchToken, WethAmount)
    // console.log(quote)
    if(quote){
      res.send(JSON.stringify(quote));
    }
    else{
      res.send(JSON.stringify('Error!'));
    }
  }
  catch(e){
    console.log('Quote Falied,ERR! ', e);
  }
});


app.get('/get-order', async (req: Request, res: Response) =>{
  try{
    
    const orders = await ordersByMaker(sdk, getAddressFromPrivateKey(pk));
    console.log(orders)
    if(orders){
      res.send(JSON.stringify(orders));
    }
    else{
      res.send(JSON.stringify('Error!'));
    }
  }
  catch(e){
    console.log('Quote Falied,ERR! ', e);
  }
});




function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
