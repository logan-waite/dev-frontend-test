import React from 'react'

const StockPrice = ({stocks}) => {
    return (
        <div className="stock-list row">
            {stocks.map((stock) => (
                <div className="card col-sm m-2" key={stock.symbol}>
                    <h3 className="h5 card-title">{stock.symbol}</h3>
                    <div className="card-body">{stock.price}</div>
                    <div className="card-footer">
                        <button>Buy</button>
                    </div>
                </div>
            ))}

            <style jsx>{`
                .stock-list {
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-top: 0;
                    margin-bottom: 1rem;
                    padding-inline-start: 40px;
                }
            `}</style>
        </div>
    )
};

export default StockPrice
