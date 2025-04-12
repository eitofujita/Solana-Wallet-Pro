import { useEffect, useState } from "react";
import { PublicKey, Connection } from "@solana/web3.js";
import { AnchorProvider, Program,  } from "@project-serum/anchor";
import rawIdl from "./idl.json";
import type { Idl } from "@project-serum/anchor";

const programID = new PublicKey("BAcey82mcE8dZDbRuXFL7KKKnSyFSLb13DUSPQfp86gS");
const network = "https://api.devnet.solana.com";

function App() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [program, setProgram] = useState<Program | null>(null);  // 型は任意でOK

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      try {
        const { solana } = window as any;

        if (solana && solana.isPhantom) {
          const response = await solana.connect({ onlyIfTrusted: true });
          setWalletAddress(response.publicKey.toString());

          const provider = new AnchorProvider(
            new Connection(network, "confirmed"),
            solana,
            { preflightCommitment: "processed" }
          );
          const idl = rawIdl as unknown as Idl;
          const programInstance = new Program(idl, programID, provider);
          setProgram(programInstance);

        }
      } catch (error) {
        console.error("wallet connect error", error);
      }
    };

    checkIfWalletIsConnected();
  }, []);
}
