import React from 'react'
import useFetch from "../../Hooks/useFetch"
import { BASE_URL } from '../../Constants/Constant';
import "./Currencies.css"

function convert(type, num) {
    switch (type) {
        case "billion":
            return (parseFloat(num) / 1000000000).toFixed(2) + 'b'
        case "million":
            return (parseFloat(num) / 1000000).toFixed(2) + 'm'
        default:
            return parseFloat(num).toFixed(2)
    }
}

const CurrenciesContainer = () => {
    const { data, loading, error } = useFetch(BASE_URL);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {console.log(data?.data)}

            {!loading &&

                (<>
                    <UpperContainer />
                    <div className='table-container flex-center'>
                        <table cellSpacing={0}>
                            <tr>
                                <th style={{ textAlign: "center" }} colSpan={1}><span>Rank</span></th>
                                <th style={{ textAlign: "left" }} colSpan={2}><span>Name</span></th>
                                <th colSpan={1}><span>Price</span></th>
                                <th colSpan={1}><span>Market Cap</span></th>
                                <th colSpan={1}><span>VWAP 24hr</span></th>
                                <th colSpan={1}><span>Supply</span></th>
                                <th colSpan={1}><span>Volume 24hr</span></th>
                                <th colSpan={1}><span>Change 24hr</span></th>
                            </tr>

                            {data?.data?.map(({ id, rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr, symbol }) => {
                                return (
                                    <tr key={id}>
                                        <td style={{ textAlign: "center" }} colSpan={1}><span>{rank}</span></td>
                                        <td style={{ textAlign: "left" }} colSpan={2}><div className='flex-start'><img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} /><div className='flex-start flex-column'><span>{name}</span><span className='coin-symbol'>{symbol}</span></div></div></td>
                                        <td colSpan={1}><span>${convert("", priceUsd)}</span></td>
                                        <td colSpan={1}><span>${convert("billion", marketCapUsd)}</span></td>
                                        <td colSpan={1}><span>${convert("", vwap24Hr)}</span></td>
                                        <td colSpan={1}><span>{convert("million", supply)}</span></td>
                                        <td colSpan={1}><span>${convert("billion", volumeUsd24Hr)}</span></td>
                                        <td style={{color: `${changePercent24Hr <=0 ? "red" : "green"}`}} colSpan={1}><span>{convert("", changePercent24Hr)}%</span></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </>)}
        </div>
    )
}

const UpperContainer = () => {
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
        <div className='upper-container flex-center'>
            {contents.map(({ name, price }) => {
                return <UpperContainerItem name={name} price={price} />
            })}
        </div>
    )
}

const UpperContainerItem = ({ name, price }) => {
    return (
        <div className='upper-container-item flex-center'>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export default CurrenciesContainer