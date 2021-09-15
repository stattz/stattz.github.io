import { NFTCollection } from "../components/nft/NFTCollection";
import { ContractAddresses } from "../services/contracts";

const exampleNfts = [
    "0x9a390d7a5aef2f5f7f3302bfcdc721bc1f9c4c2c1a752b9677eb7ad2c5e5a340"
]

export default function Docs() {
    return <div>
        <h2>Introduction</h2>
        <p><b>Universal Stats NFT</b> is a project that aims to solve a fundamental issue in how to integrate NFTs into different applications and make them more useful.</p>
        <p>Universal Stats is not an art project. It is a framework that allows developers to build new experiences and enrich existing ones for users that hold this token.</p>

        <h4>Contract can be inspected <a href={`https://etherscan.io/address/${ContractAddresses[1]}`} target="_blank" rel="noreferrer">here</a>.</h4>

        <h2>How Does It Work</h2>
        <h4><b>Universal Stats</b> separates the token state from state representation.</h4>

        <p>With most NFTs when you call mint function, <b>token ID</b> is incremented by one, and the state representation gets stored in the token URI field. Token URI ends up being something specific, either a URL to a 3rd party resource or some implementation-specific bag-of-words-like magic string.</p>
        <p>That is where Universal Stats differ. When a new token gets minted, <b>token ID</b> gets generated pseudo-randomly. We end up with a unique <code>256-bit</code> representation of the NFT. This <b>token ID</b> can then be represented by a hexadecimal string:</p>

        <pre>
            <code>0x9a390d7a5aef2f5f7f3302bfcdc721bc1f9c4c2c1a752b9677eb7ad2c5e5a340</code>
        </pre>

        <p>Each string starts with <code>0x</code>, followed by <code>64 nibbles (or characters)</code> representing <b>4 bits each</b>. </p>

        <p><b>Note</b> that we do not encode any random words or require anyone to visit some URI. Each token holder has this unique <code>256-bit</code> <b>token ID</b> that is theirs and can be easily retrieved.</p>

        <h2>Use Cases</h2>

        <p><b>Universal Stats</b> framework allows participants to build new, never-before-seen experiences.</p>

        <h4>Here is an example token representation:</h4>

        {<NFTCollection tokenIds={exampleNfts} />}

        <p>In the example above, we just took chunks of the <b>token ID</b>, for example, the first 6 nibbles, represent a type property, nibbles 7-8 represent the base strength of the character so on and so forth. If you are interested to see the whole calculation have a look <a href="https://github.com/stattz/generator/blob/master/json_generator.py" target="_blank" rel="noreferrer">here</a>. Note that these rules on how to divide <b>token ID</b> are arbitrary and we could have gone with a completely different theme e.g. space robots or medieval pets.</p>

        <h3>Random Ideas</h3>

        <p>Are you building a <code>MMORPG</code>, and want to let users have unique traits, items, inventory, or what have you? Just do it!</p>

        <p>Are you building a <code>FPS</code> game and want to add unique attack modifiers so users can feel appreciated and unique in your game? That is a great idea!</p>

        <p>Are you an artist that wants to build a contract on top of Universal Stats and generate some outer space character for each token based on some predefined traits encoded? Absolutely possible!</p>

        <p>Are you a chess game developer and want to give users unique 8x8 board color schemes based on their Universal Stats NFT where each of the 64 squares maps to each nibble in their <b>token ID</b> to customize their unique board colors? Go for it!</p>

        <p><b>Universal Stats</b> can be leveraged in numerous gaming, arts, or other entertainment applications. The possibilities are endless, and we want to hear more about your unique idea or project.</p>

        <h3>Please join the community on our <a href="https://discord.gg/u89tDPVXHx" target="_blank" rel="noreferrer">Discord</a> or <a href="https://twitter.com/HansKeebler" target="_blank" rel="noreferrer">Twitter</a>.</h3>

        <h2>Distribution of Tokens</h2>

        <p>Universal Stats tokens are unique, however, it would be unfair if they were too scarce for the majority of people to enjoy them. That is why we introduced a special token creation flow. We will be releasing tokens in batches starting from <code>Batch 0</code> and will go all the way up to <code>Batch 15</code>. The last nibble in your <b>token ID</b> represents which batch the token is from. So for the first <code>20000 tokens</code>, the last nibble will always be <code>0</code>, when <code>Batch 1</code> is released the last nibble will be <code>1</code>, and so on.</p>

        <h4>Each batch will have a limited quantity that can not be increased!</h4>

        <p>We want to work with our community to decide when to release new batches and are excited about the possibilities this functionality brings. For example, you could only allow users from <code>Batch 0</code> to early access your game, or give them some legendary item, etc.</p>

        <h2>How is This Different from Other NFTs</h2>
        <p>Most NFTs take one of the following routes:</p>

        <p>
            By pointing Token URI to a 3rd party storage solution like <b>IPFS</b> and having all the NFT data stored there. The problem with this approach is that for a game creator or application developer to integrate with this token, they need to do one of the following:
        </p>
        <ul>
            <li>
                store some internal mapping and encode predefined knowledge about all possible minted tokens in their game or application;
            </li>
            <li>
                or make additional network calls. In the case of <b>IPFS</b>, different communication protocols need to be recognized or implemented, thus increasing the application bloat;
            </li>
        </ul>
        <p>
            By encoding metadata string in Token URI directly. The real problem here is that there is no standard on how this data should be formatted. That is why it is error-prone to interact with such NFTs where data could be encoded using arbitrary <code>magic strings</code>, some messy <code>SVG files</code>, or random <code>base64 encoded byte blobs</code>.
        </p>

        <h2>Get Involved</h2>

        <p>All of the code for this project is free and open source, feel free to joint our community. We welcome new members to our <a href="https://discord.gg/u89tDPVXHx" target="_blank" rel="noreferrer">Discord</a> channel also <a href="https://github.com/stattz" target="_blank" rel="noreferrer">GitHub</a> issues or pull requests are always welcome!</p>
    </div>;
}