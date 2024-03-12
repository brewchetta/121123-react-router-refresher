import { Outlet } from 'react-router-dom'

function Sandwiches() {

    return (
        <div>

            <h2>Sandwich Recipe</h2>

            <ol>

                <li>Find bread</li>
                <li>Find Patty</li>
                <li>Find other stuff</li>
                <li>Put everything between bread</li>
                <li>(Some additional assembly might be required)</li>
                <li>Eat</li>
                <li>In case of emergency call 911</li>
                <li>???</li>
                <li>Profit</li>

            </ol>

            <Outlet />

        </div>

    )

}

export default Sandwiches