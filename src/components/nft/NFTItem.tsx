import { useEffect, useState, FC, useRef } from "react";

import './../../assets/css/nftitem.css'

interface NFTItemProps {
    tokenId: string;
}

type Attribute = {
    trait_type: string;
    value: Number | string;
    max_value: undefined | Number,
    display_type: undefined | string;
}

export const NFTItem: FC<NFTItemProps> = props => {
    const [image, setImage] = useState("")
    const [attributes, setAttributes] = useState<Attribute[]>([])

    const unmounted = useRef(false);

    useEffect(() => {
        if (!props?.tokenId) {
            return
        }

        fetch(`https://us-central1-universal-stats-326006.cloudfunctions.net/metadata?tokenId=${props.tokenId}`)
            .then(results => results.json())
            .then(data => {
                if (!unmounted.current) {
                    setImage(data.image)
                    setAttributes(data.attributes as Attribute[])
                }
            })

        return () => {
            unmounted.current = true
        }
    });

    const renderAttributes = () => {
        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {attributes.map((attribute, index) => {
                    return <tr key={index}>
                        <td>{attribute.trait_type}</td>
                        <td><code>{attribute.value}{!!attribute.max_value ? `/${attribute.max_value}` : ""}</code></td>
                    </tr>
                })}
            </tbody>
        </table>
    }

    return <div className="nft">
        <div>
            <code>Batch {props.tokenId.substring(65)} | Type {props.tokenId.substring(0, 8).toUpperCase()}</code>
        </div>
        <div>
            <img src={image} alt="" width="100%" />
        </div>
        <div>
            <p>Token state: <code className="word-breaker">{props.tokenId}</code></p>
        </div>
        <p>Showcase stats for this NFT:</p>
        {renderAttributes()}
    </div>
}