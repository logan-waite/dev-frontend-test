import {Component} from 'react'
import Head from 'next/head'
import StockPrice from './components/stock-price';
import OwnedStocks from "./components/owned-stocks";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stock Tracker</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Heading/>
      <div className="container">
        <CurrentStocks/>
        <MyStocks/>
      </div>
    </div>
  )
}

function Heading() {
  return (
    <div>
      <h1>Welcome to Stock Tracker!</h1>
      <style jsx>{` div { text-align: center; }`}</style>
    </div>
  );
}

class CurrentStocks extends Component {

  state = {
    stocks: []
  };

  componentDidMount() {
    fetch('http://localhost:4000/api/stocks')
      .then(res => res.json())
      .then((data) => {
        this.setState({stocks: data})
      })
      .catch(console.log)
  }

  render() {
    return (
      <section>
        <h2 className="h3">Current Stock Prices</h2>
        <StockPrice stocks={this.state.stocks}/>
      </section>
    );
  }
}

class MyStocks extends Component {

  state = {
    purchasedStocks: []
  };

  componentDidMount() {
    this.setState({purchasedStocks: []});
  }

  render() {
    return (
      <section>
        <h2 className="h3">Stocks I own:</h2>
        <OwnedStocks stocks={this.state.purchasedStocks}/>
      </section>
    );
  }
}
