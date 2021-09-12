import Mint from "../components/wallet/Mint";

export default function Home() {
    return <div>
        <div style={{ textAlign: 'center' }}>
            <h2>Actually scalable multi-purpose NFT</h2>
            <br/>
            <br/>
            <p>Unique token that uses ... as it's metadata value. Users mint tokens pseudo-randomly. This token does not assume or enforce certain usage, but facilitate countless integration opportunities.</p>
            <br/>
            <p>For more information read the <a href="/docs">docs</a>.</p>
        </div>
        <Mint />
    </div>;
}