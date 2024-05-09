import { Program, AnchorProvider } from "@coral-xyz/anchor";
import idl from "../idl/idl.json";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";

const idlJson = JSON.parse(JSON.stringify(idl))

const Homepage = () => {
    const wallet = useAnchorWallet()
    const network = clusterApiUrl("devnet")

    const onClickHandler = async () => {
        const programID = new PublicKey("EkNadFWh467Loqf24ewHaqPjvrGXyAHf6iVb97HkqNGX")
        const connection = new Connection(network, "processed")
        const provider = new AnchorProvider(connection, wallet, {
            preflightCommitment: "processed"
        })
        const program = new Program(idlJson, programID, provider)
        console.log(program)
    }
    
    return(
        <div>
            <button onClick={onClickHandler}>Click</button>
            Hello
        </div>
    )
}
export default Homepage