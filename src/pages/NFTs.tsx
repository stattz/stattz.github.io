import { BigNumber } from "@ethersproject/bignumber";
import { hexZeroPad } from "@ethersproject/bytes";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import { NFTCollection } from "../components/nft/NFTCollection";
import Connect from "../components/wallet/Connect";
import { ContractAddresses } from "../services/contracts";
import './../assets/css/nftitem.css'

const abi = [
    // Read-Only Functions
    "function symbol() view returns (string)",
    "function name() view returns (string)",
    "function currentLimit() view returns (uint256)",
    "function mintFee() view returns (uint256)",
    "function currentBatch() view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address owner) view returns (uint256)",
    "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",

    // Authenticated Functions
    "function mint() payable",
];

export default function NFTs() {
    const { chainId, account, library, active } = useWeb3React<Web3Provider>()

    const [symbol, setSymbol] = useState("")
    const [name, setName] = useState("")
    const [fee, setFee] = useState(BigNumber.from("0"))
    const [limit, setLimit] = useState(BigNumber.from("0"))
    const [batch, setBatch] = useState(BigNumber.from("0"))
    const [total, setTotal] = useState(BigNumber.from("0"))
    const [tokens, setTokens] = useState<string[]>([])

    const [loaded, setLoaded] = useState(false)
    const [visible, setVisible] = useState(true)

    let address = ContractAddresses[4]

    if (chainId !== undefined) {
        address = ContractAddresses[chainId]
    }

    useEffect(() => {
        getDetails()
    });

    const getDetails = async () => {
        if (!loaded && active && !!library) {
            setLoaded(true)
            setVisible(false)

            const erc721 = new Contract(address, abi, library.getSigner())

            setSymbol(await erc721.symbol())
            setName(await erc721.name())
            setLimit(await erc721.currentLimit())
            setFee(await erc721.mintFee())
            setBatch(await erc721.currentBatch())
            setTotal(await erc721.totalSupply())

            let balance = await erc721.balanceOf(account)
            let localTokens = []

            for (let n = 0; n < balance.toNumber(); n++) {
                let tokenId = await erc721.tokenOfOwnerByIndex(account, n)
                localTokens.push(hexZeroPad(tokenId.toHexString(), 32))
            }

            setTokens(localTokens)
            setVisible(true)
        }
    }

    const onClaim = async () => {
        if (loaded) {
            const erc721 = new Contract(address, abi, library?.getSigner())

            let tx = await erc721.mint({ value: fee })

            setVisible(false)

            await tx.wait()
            await getDetails()

            setVisible(true)
        }
    }

    if (!active) {
        return <div className="center">
            <h2>Come On In</h2>
            <br />
            <br />
            <small className="center-text"><b>Note:</b> We recommend using MetaMask <br />or similar injected wallet.</small>
            <br />
            <br />
            <p className="connect-button-p">
                <Connect />
            </p>
        </div>
    }

    if (chainId !== 1 && chainId !== 4) {
        return <div className="center">
            <h2>Only Miannet and Rinkeby are supported</h2>
        </div>
    }

    if (!visible) {
        return <div className="center">
            <h3>One Moment Please</h3>
            <Loader />
        </div>
    }

    const showHowToClaim = () => {
        return <div className="center">
            <h2>
                {name} ({symbol}) currently {total.toNumber()} out of {limit.toNumber()} tokens minted
            </h2>
            <h3>
                Current on Batch {batch.toNumber()}
            </h3>
            <br />
            <small className="center-text"><b>Note:</b> In case you do not see your token after minting,<br /> please allow the Ethereum network to catch up and refresh the page.</small>
            <br />
            <button onClick={onClaim} disabled={limit.toNumber() <= total.toNumber()} className="claim-button">Mint NFT Token</button>
            <br />
        </div>
    }

    return (
        <div className="center">
            {showHowToClaim()}
            {<NFTCollection tokenIds={tokens} />}
        </div>
    )
}