import React from 'react'
import useFetch from "../../Hooks/useFetch"
import { BASE_URL } from '../../Constants/Constant';
import "./Currencies.css"

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
                        <table className=''>
                            <tr>
                                <th><span>Rank</span></th>
                                <th><span>Name</span></th>
                                <th><span>Price</span></th>
                                <th><span>Market Cap</span></th>
                                <th><span>Volume 24hr</span></th>
                                <th><span>Change 24hr</span></th>
                            </tr>

                            {data?.data?.map(({ id, rank, name, priceUsd, marketCapUsd, volumeUsd24Hr, changePercent24Hr }) => {
                                return (
                                    <tr key={id}>
                                        <td><span>{rank}</span></td>
                                        <td><span>{name}</span></td>
                                        <td><span>{parseFloat(priceUsd).toFixed(2)}</span></td>
                                        <td><span>{parseFloat(marketCapUsd).toFixed(2)}</span></td>
                                        <td><span>{parseFloat(volumeUsd24Hr).toFixed(2)}</span></td>
                                        <td><span>{parseFloat(changePercent24Hr).toFixed(2)}</span></td>
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