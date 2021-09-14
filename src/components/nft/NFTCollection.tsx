import { FC } from 'react';
import { Link } from 'react-router-dom';
import './../../assets/css/nftitem.css'
import { NFTPreview } from './NFTPreview';

interface NFTItemProps {
    tokenIds: string[];
}

export const NFTCollection: FC<NFTItemProps> = props => {
    return <div className="nft-collection">
        {props.tokenIds.map((token, index) => {
            return <Link key={index} to={`/nfts/${token}`}>
                <NFTPreview tokenId={token} />
            </Link>
        })}
    </div>;
}