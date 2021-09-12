import { FC } from "react";

interface NFTItemProps {
    tokenId: string;
}

export const NFTItem: FC<NFTItemProps> = props => {
    try {
        var data = require(`../../../public/nft-metadata/${props.tokenId}.json`);
        console.log(data)
    } catch {
        // do nothing
    }

    const onError = () => {
        console.log("error")
    };

    return <div>
        <img src={`./nft-images/${props.tokenId}.svg`} onError={onError} alt="" />
        <pre>
            <code>{props.tokenId}</code>
        </pre>
    </div>;
}