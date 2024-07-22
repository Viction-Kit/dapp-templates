"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { client } from '@/utils/viem';

export default function Home() {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);

  useEffect(() => {
    async function fetchBlockNumber() {
      try {
        const blockNumber = await client.getBlockNumber();
        console.log('blockNumber', blockNumber);
        setBlockNumber(Number(blockNumber));
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchBlockNumber();
  }, []);

  return (
    <div>
      <Head>
        <title>Basic Viction Kit Dapp</title>
        <meta name="description" content="A simple web3 dapp using Next.js and Viem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Viction Kit</h1>
        <p className="mt-4 text-center">Current Block Number: {blockNumber !== null ? blockNumber : 'Loading...'}</p>
      </main>
    </div>
  );
}