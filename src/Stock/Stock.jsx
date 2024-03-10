import { useParams } from 'react-router-dom'
import stocks from '../stockdata'

const Stock = (props) => {

    const { symbol } = useParams()
    
    const indStock = stocks.find(stock => stock.symbol === symbol)

    return (
        <div>
            <h1>{indStock.name}</h1>
            <h1>{indStock.symbol}</h1>
            <h1>{indStock.lastPrice}</h1>
        </div>

    )
  }
  
  
  export default Stock