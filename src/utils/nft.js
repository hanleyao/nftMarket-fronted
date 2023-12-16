import { ethers } from "ethers";
import ABI from '../contracts/MyNFT.json';
import axios from "axios";

let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());

export async function balanceOf(address){
    const result = await contract.balanceOf(address);
    return Number(result);
}

export async function tokenOfOwnerByIndex(owner, index){
    const result = await contract.tokenOfOwnerByIndex(owner, index);
    return Number(result);
}

export async function tokenURI(tokenId){
    const result = await contract.tokenURI(tokenId);
    console.log(result);
}

export async function getMetadata(tokenId){
    const result = await contract.tokenURI(tokenId);
    const response = await axios.get(result);
    return {
        title: response.data.title,
        description: response.data.description,
        imageURL: response.data.image,

    }
}