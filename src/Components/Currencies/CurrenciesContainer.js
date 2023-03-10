import React, { useState, useEffect } from 'react'
import useFetch from "../../Hooks/useFetch"
import { BASE_URL, SMALL_DEVICE_WIDTH, ICONS } from '../../Constants/Constant';
import "./Currencies.css"
import { convert } from "../../utils/convert"
const { ArrowDropDownIcon } = ICONS;

const CurrenciesContainer = () => {
    const { data, loading, error } = useFetch(BASE_URL);
    const [start, setStart] = useState(0)
    const itemsPerPage = 50;
    const [currentItems, setcurrentItems] = useState([])

    useEffect(() => {
        setcurrentItems(data?.data?.slice(0, start + itemsPerPage))
    }, [loading, start, data])

    const handleClick = () => {
        setStart(start => start + itemsPerPage)
    }

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {!loading &&
                (<>
                    <UpperContainer />
                    <div className='table-container'>
                        <table cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th className='flex-none-in-small-devices' style={{ textAlign: "center" }} colSpan={1}><span>Rank</span></th>
                                    <th style={{ textAlign: "left" }} colSpan={2}><span>Name</span></th>
                                    <th colSpan={1}><span>Price</span></th>
                                    <th className='flex-none-in-small-devices' colSpan={1}><span>Market Cap</span></th>
                                    <th className='flex-none-in-small-devices' colSpan={1}><span>VWAP {'(24hr)'}</span></th>
                                    <th className='flex-none-in-small-devices' colSpan={1}><span>Supply</span></th>
                                    <th className='flex-none-in-small-devices' colSpan={1}><span>Volume {'(24hr)'}</span></th>
                                    <th colSpan={1}><span>Change {'(24hr)'}</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems?.map(({ id, rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr, symbol }) => {
                                    return (
                                        <tr key={id}>
                                            <td className='flex-none-in-small-devices' style={{ textAlign: "center" }} colSpan={1}><span>{rank}</span></td>
                                            <td style={{ textAlign: "left" }} colSpan={2}>
                                                <div className='name-coin-symbol-container'>
                                                    <img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={symbol} />
                                                    <div className='coin-symbol-holder'>
                                                        <span>{name}</span>
                                                        <span className='coin-symbol'>{symbol}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td colSpan={1}><span>${convert("", priceUsd)}</span></td>
                                            <td className='flex-none-in-small-devices' colSpan={1}><span>${convert("billion", marketCapUsd)}</span></td>
                                            <td className='flex-none-in-small-devices' colSpan={1}><span>${convert("", vwap24Hr)}</span></td>
                                            <td className='flex-none-in-small-devices' colSpan={1}><span>{convert("million", supply)}</span></td>
                                            <td className='flex-none-in-small-devices' colSpan={1}><span>${convert("billion", volumeUsd24Hr)}</span></td>
                                            <td style={{ color: `${changePercent24Hr <= 0 ? "red" : "green"}` }} colSpan={1}><span>{convert("", changePercent24Hr)}%</span></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    {start < 50 && <div className='load-more-btn'><button onClick={handleClick}>Load More</button></div>}
                </>)}
        </div>
    )
}

const UpperContainer = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [showOptions, setShowOptions] = useState(width > SMALL_DEVICE_WIDTH ? true : false);

    const handleClick = () => {
        setShowOptions(option => !option)
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])

    useEffect(() => {
        if (width < SMALL_DEVICE_WIDTH) return;
        setShowOptions(width > SMALL_DEVICE_WIDTH ? true : false)
    }, [width])


    const contents = [
        {
            name: "Market Cap:",
            price: "$1.10"
        },
        {
            name: "Exchange Vol:",
            price: "$47.43b"
        },
        {
            name: "Assets:",
            price: "2295"
        },
        {
            name: "Exchanges:",
            price: "73"
        },
        {
            name: "Markets:",
            price: "12563"
        },
        {
            name: "BTC Dom Index",
            price: "33.5%"
        },
    ]
    return (
        <div className='upper-container'>
            <div className='show-in-small-devices upper-container-heading'>
                <span>Market Snapshot</span>
                <div><ArrowDropDownIcon onClick={handleClick} className={`${!showOptions && "rotate-arrow"}`} /></div>
            </div>
            <div className='upper-container-content'>
                {showOptions && contents.map(({ name, price }) => {
                    return <UpperContainerItem key={name} name={name} price={price} />
                })}
            </div>
        </div>
    )
}

const UpperContainerItem = ({ name, price }) => {
    return (
        <div className='upper-container-item'>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export default CurrenciesContainer