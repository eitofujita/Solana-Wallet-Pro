import { Program, Provider, web3 } from "@project-serum/anchor";
import idl from "./idl.json";

const programID = new web3.Publickey("BAcey82mcE8dZDbRuXFL7KKKnSyFSLb13DUSPQfp86gS")

export const helloWorlld = async (wallet: any) => {
    const proider = new Provider(wallet.connection, wallet, { commitment: "confirmed" })
    const program = new Program(idl, programID, provider);
    await program.rpc.helloWorld({});
};