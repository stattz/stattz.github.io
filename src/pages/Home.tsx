import { NFTCollection } from "../components/nft/NFTCollection";

const exampleNfts = [
    "0xb9ef5bf760b707b31dd44b7bc312e87404c96ebc2e7ff9bb38601faacc65cde0", "0xca643a81877592fe6931e3c8ec0a507203c710573f458bae16b69b8b640c40d0", "0x9a390d7a5aef2f5f7f3302bfcdc721bc1f9c4c2c1a752b9677eb7ad2c5e5a340"
]

export default function Home() {
    return <div>
        <div className="center center-text">
            <h2>Actually scalable multi-purpose NFT</h2>
            <br />
            <br />
            <p>Unique token that uses ... as it's metadata value. Users mint tokens pseudo-randomly. This token does not assume or enforce certain usage, but facilitate countless integration opportunities.</p>
            <br />
            <p>For more information read the <a href="/docs">docs</a>.</p>
            {<NFTCollection tokenIds={exampleNfts} />}
        </div>
    </div>;
}