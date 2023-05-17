import { ethers } from "ethers";
import XDCPayABI from "./XDCPay.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x85b2FD5f1e413168f131A41EB0c8b858642314c2",
      XDCPayABI.abi,
      signer
    );

    return contractReader;
  }
};
