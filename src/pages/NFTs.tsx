import { BigNumber } from "@ethersproject/bignumber";
import { hexZeroPad } from "@ethersproject/bytes";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
// import { formatUnits } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import { NFTCollection } from "../components/nft/NFTCollection";
import Connect from "../components/wallet/Connect";

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

const addresses: { [id: number]: string; } = {
    1: "0x4f3b15e4421902c09895fB12c8e0B8821134eA39",
    4: "0xBF1172547b1058A1Bab585468bb7EeeD62935d4C"
};

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
    const [visible, setVisible] = useState(false)

    let address = addresses[4]

    if (chainId !== undefined) {
        address = addresses[chainId]
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
        }

        setVisible(true)
    }

    const onClaim = async () => {
        if (loaded) {
            const erc721 = new Contract(address, abi, library?.getSigner())

            let tx = await erc721.mint({ value: fee })

            console.log(tx)

            console.log(await tx.wait());
        }
    }

    if (!active) {
        return <div className="center">
            <Connect />
        </div>
    }

    if (chainId !== 1 && chainId !== 4) {
        return <div className="center">
            <p>Only Miannet and Rinkeby are supported</p>
        </div>
    }

    if (!visible) {
        return <div className="center">
            <Loader />
        </div>
    }

    const showHowToClaim = () => {
        return <div className="center">
            <p>
                {name} ({symbol}) currently has {total.toNumber()}/{limit.toNumber()} tokens minted (Batch {batch.toNumber()})
            </p>
            <button onClick={onClaim}>Claim</button>
        </div>
    }

    return (
        <div className="center">
            {showHowToClaim()}
            {<NFTCollection tokenIds={tokens} />}
        </div>
    )
}