import { useLoaderData, Link } from 'react-router-dom'

function Disney() {

    const disneyCharacterData = useLoaderData()

    console.log(disneyCharacterData)

    return (
        <div>

            <h2>This is the Disney component</h2>

            { disneyCharacterData.data.map( char => <Link key={char._id} to={`/disney/${char._id}`}>{char.name}</Link> ) }

        </div>
    )

}

export default Disney