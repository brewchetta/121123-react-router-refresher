import { useLoaderData } from 'react-router-dom'

function DisneyCharacter() {

    const loadedData = useLoaderData()

    console.log(loadedData)

    return (
        <h2>Welcome to {loadedData.data.name}'s Fan Page</h2>
    )
    
}

export default DisneyCharacter