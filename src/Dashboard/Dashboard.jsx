import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import stocks from '../stockdata'

export default function Dashboard() {

    const activeStocks = 'https://financialmodelingprep.com/api/v3/stock/actives?apikey=YOUR KEY'
    console.log('stocks-Dashboard file', stocks)
    //console.log('stockDashboard:', stockDashboard)
    return (
      <>
        <h1>Most Active Stocks</h1>
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock, idx) => {
                    return (
                        <tr key={idx}>
                            <td><Link to="/stock/:symbol" element={<Stock />}>{stock.name}</Link>({stock.symbol})</td>
                            <td>${stock.lastPrice}</td>
                            <td>{parseFloat(stock.change.toFixed(2))}</td>
                        </tr>
                    )
                })}
            </tbody>


        </table>
    </>
    );
  }
