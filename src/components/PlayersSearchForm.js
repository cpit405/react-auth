import { useState } from "react";
import PlayerDetails from "./PlayerDetails";
import "./PlayersSearchForm.css";

const PlayersSearchForm = () => {
    const [data, setData] = useState(null);
    return (
        <div className="container">
            <h2>Players Info Search</h2>
            <input type="text" className="inputText" placeholder="Search..." />
            <button className="searchButton">Search</button>
            {data && (<PlayerDetails data={data} />)}
        </div>
    );
}

export default PlayersSearchForm;