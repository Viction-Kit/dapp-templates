import { useState, useEffect } from 'react';
import { createWalletClient, custom } from 'viem';
import { networks } from '../../utils/viem';

const ConnectWalletButton = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const client = createWalletClient({
          account,
          chain: networks["MAINNET"],
          transport: custom(window.ethereum),
        });
        setWalletAddress(account);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <div className="flex items-center space-x-4">
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <p className="text-gray-300">Connected: {walletAddress}</p>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  );
};

export default ConnectWalletButton;