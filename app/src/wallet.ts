import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const getBalance = async (walletAddress: string) => {
    const balance = await connection.getBalance(new PublicKey(walletAddress));
    return balance / 1e9; // SOLに変換
};
