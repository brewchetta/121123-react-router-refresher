import { useParams } from 'react-router-dom'

function SandwichesById() {

    const params = useParams()

    console.log("params:", params)

    return (
        <div>

            <h2>Sandwich Ordering</h2>

            <p>You ordered {params.orders} sandwiches with baconeggandcheese</p>

        </div>

    )

}

export default SandwichesById