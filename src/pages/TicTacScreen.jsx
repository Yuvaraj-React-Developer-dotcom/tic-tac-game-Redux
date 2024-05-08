import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMiddleware, ticTacMiddleware } from "./store/TicTacMiddleware";
import "./index.css";
const TicTacScreen = () => {
  const { loading, arrData, playerState, winnerState, winnerStage } =
    useSelector(({ tictacReducer }) => {
      return {
        loading: tictacReducer?.loading,
        arrData: tictacReducer?.arrData,
        playerState: tictacReducer?.playerState,
        winnerState: tictacReducer?.winnerState,
        winnerStage: tictacReducer?.winnerStage,
      };
    });

  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      if (winnerState) {
        alert(`Winner ${playerState === "O" ? "X" : "O"} Player`);
        dispatch(resetMiddleware([]));
      }
    }, 200);
  }, [winnerState]);
  useEffect(() => {
    if (winnerStage === "Draw" && winnerState === false) {
      setTimeout(() => {
        alert("Draw");
        dispatch(resetMiddleware([]));
      }, 300);
    }
  }, [winnerStage]);

  const handleSelectColumn = (data) => {
    console.log(data % 2, "find data value");

    if (typeof data === "number") {
      const bodyData = {
        index: data - 1,
        value: playerState,
      };
      dispatch(ticTacMiddleware(bodyData));
    }
  };

  return (
    <div className="parent__container">
      <div class="wrapper">
        {arrData?.map((item) => {
          return (
            <button
              className={item === "X" ? "odd__color" : "even__color"}
              disabled={typeof item === "string"}
              onClick={() => handleSelectColumn(item)}
            >
              <div className="game__container">
                {typeof item === "string" ? item : ""}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacScreen;
