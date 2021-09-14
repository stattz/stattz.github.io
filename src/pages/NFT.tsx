import { useParams } from "react-router-dom";
import { NFTItem } from "../components/nft/NFTItem"

type NFTParams = {
    tokenId: string;
}

export default function NFT() {
    const { tokenId } = useParams<NFTParams>();
    
    return <NFTItem tokenId={tokenId} />
}