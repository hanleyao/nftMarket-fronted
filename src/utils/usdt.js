import { ethers } from "ethers";
import ABI from '../contracts/cUSDT.json';

let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

export async function approve(spender, amount){
    const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
    const result = await contract.approve(spender,amount);
    console.log(result.hash);
}

export async function getAllowance(owner, spender){
    const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
    const result = await contract.allowance(owner, spender);
    console.Number(result);
}

