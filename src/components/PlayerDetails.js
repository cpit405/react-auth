const PlayerDetails = ({ data }) => {
    return (
        <div>
            <h2>Player Info</h2>
            <p>{data.name}</p>
        </div>
    );
}

export default PlayerDetails;