import { useEffect, useState, FC } from "react";

import './../../assets/css/nftitem.css'

interface NFTItemProps {
    tokenId: string;
}

export const NFTPreview: FC<NFTItemProps> = props => {
    const [image, setImage] = useState("")

    useEffect(() => {
        if (!props?.tokenId) {
            return
        }

        fetch(`https://us-central1-universal-stats-326006.cloudfunctions.net/metadata?tokenId=${props.tokenId}`)
            .then(results => results.json())
            .then(data => {
                setImage(data.image)
            })
    });

    return <div className="nft">
        <div>
            <code>Batch {props.tokenId.substring(65)} | Type {props.tokenId.substring(0, 8).toUpperCase()}</code>
        </div>
        <div>
            <img src={image} alt="" width="200px" />
        </div>
    </div>

}