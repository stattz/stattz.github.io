import { Link } from "react-router-dom";
import { NFTCollection } from "../components/nft/NFTCollection";
import './../assets/css/nftitem.css'

const exampleNfts = [
    "0xb9ef5bf760b707b31dd44b7bc312e87404c96ebc2e7ff9bb38601faacc65cde0", "0xca643a81877592fe6931e3c8ec0a507203c710573f458bae16b69b8b640c40d0", "0x9a390d7a5aef2f5f7f3302bfcdc721bc1f9c4c2c1a752b9677eb7ad2c5e5a340"
]

export default function Home() {
    return <div>
        <div className="center center-text">
            <h4><a href="https://discord.gg/u89tDPVXHx" target="_blank" rel="noreferrer">Discord</a> | <a href="https://twitter.com/HansKeebler" target="_blank" rel="noreferrer">Twitter</a> | <a href="https://opensea.io/collection/universal-stats" target="_blank" rel="noreferrer">OpenSea</a> | <a href="https://t.me/universalstats" target="_blank" rel="noreferrer">Telegram</a></h4>
            <h2>Scalable and Useful Multi-Purpose NFT</h2>
            <br />
            <br />
            <h4>
                A unique NFT that uses pseudo-random token ID as its metadata value. This token does not assume or enforce any particular usage scenarios. We facilitate countless integration opportunities.
            </h4>
            <br />
            <h4>For more information, read the <a href="/#/docs">docs</a>.</h4>
            <h1><Link to="/nfts" className="mint-link">Mint a New One</Link></h1>
            <h3>Usage Examples</h3>
            {<NFTCollection tokenIds={exampleNfts} />}
        </div>
    </div>;
}