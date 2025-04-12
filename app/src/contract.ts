import { Program, AnchorProvider, web3, Idl } from "@project-serum/anchor";
import idl from "./idl.json";

const programID = new web3.PublicKey("BAcey82mcE8dZDbRuXFL7KKKnSyFSLb13DUSPQfp86gS");

export const helloWorld = async (wallet: any) => {
  const connection = wallet.connection;

  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "confirmed",
  });

  const program = new Program(idl as unknown as Idl, programID, provider);

  await program.methods.helloWorld().rpc(); // ✅ methods経由で呼び出すのが新しい書き方
};
