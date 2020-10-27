/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPlayers } from "../../redux/actions/Players Actions";
import "./LandingPage.css";

const LandingPage = () => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(player1, player2);
        dispatch(setPlayers(player1, player2, history));
    };

    return (
        <div className="landing">
            <div className="landing__heading">IEEE-VIT&apos;s Tic Tac Toe!</div>
            {/* use two input boxes to enter player names */}
            {/* add styling */}
            <img
                className="image"
                src="/my-app/src/assets/circle.svg"
                alt=""
                height="100px"
                width="100px"
            />
            <img
                className="image"
                src="/my-app/src/assets/cross.svg"
                alt=""
                height="100px"
                width="100px"
            />
            <div>
                <input className="player_1" type="text" />
                <input className="player_2" type="text" />
            </div>
            <button
                type="button"
                className="landing__btn"
                onClick={() => history.push("/game")}
            >
                Let&apos;s Play!
            </button>
        </div>
    );
};

export default LandingPage;
