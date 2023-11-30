import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/blockheight.css';

const BitcoinBlockHeight = () => {
    const [blockHeight, setBlockHeight] = useState(null);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        // Fetch block height
        axios.get('https://blockchain.info/q/getblockcount')
            .then(response => {
                setBlockHeight(response.data);
            })
            .catch(error => {
                console.error("Error fetching block height:", error);
                setError(error);
            });

        // Fetch Bitcoin price
        axios.get('https://blockchain.info/ticker')
            .then(response => {
                setBitcoinPrice(response.data.USD.last);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Bitcoin price:", error);
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000); // Fetch every minute

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error loading data!</p>;

    return (
        <div className='blockHeight'>
            <h2 className='title'>Zap Rad.io</h2>
            <div className="bitcoin">
                <p className='height'>&#x25A2; {blockHeight}</p>
                <p className='price'>${bitcoinPrice}</p>
            </div>
        </div>
    );
};

export default BitcoinBlockHeight;
