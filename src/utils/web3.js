import { ethers } from 'ethers';
import MyNFTABI from '../contracts/MyNFT.json';

async function main(){
    let provider = new ethers.BrowserProvider(window.ethereum)
    const contractAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
    let account = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, MyNFTABI, account);
    const result = await contract.totalSupply();
    await contract.safeMint('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    console.log(result.toString());
}

export default main;