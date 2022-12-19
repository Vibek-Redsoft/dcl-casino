import { getProvider } from "@decentraland/web3-provider";
import { getUserAccount } from "@decentraland/EthereumController";
import * as EthConnect from "eth-connect";
import { abi } from "./abi/abi";
import { VIPFloor } from "./game";

// Mana Pay Function to access 2nd Floor....................
export let elevatorStart: boolean = false;
export function accessSecondFloor() {
  executeTask(async () => {
    try {
      const provider = await getProvider();
      const requestManager = new EthConnect.RequestManager(provider);
      const factory = new EthConnect.ContractFactory(requestManager, abi);
      const contract = (await factory.at(
        "0x37a2794cE23d09932eC73D92B751828397D71CAF" //Ropsten's MANAToken address// Change with creator wallet address.
      )) as any;
      const address = await getUserAccount();
      log(address);
      const res = await contract.setBalance(
        address,
        2, //Vip Access Fee defaulted to (0) change it here.....
        {
          from: address,
        }
      );
      log(res);
      elevatorStart = true;
      
      //Stair Left Door
      // transform152.position= new Vector3(24, -2.3, 24)
      // //Stair Right Door
      // transform162.position= new Vector3(24, -2.3, 24)
      VIPFloor();
      
    } catch (error) {
      log(error.toString());
    }
  }).catch((error) => log(error));
}