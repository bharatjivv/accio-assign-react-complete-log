import React, { useReducer } from "react";

function Sample() {
  const initialState = {
    email: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "VALUE_CHANGE":
        return {
          ...state,
          [action.field]: action.value,
        };

      case "RESET_VALUES":
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        type="email"
        placeholder="email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "VALUE_CHANGE",
            field: "email",
            value: e.target.value,
          })
        }
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "VALUE_CHANGE",
            field: "password",
            value: e.target.value,
          })
        }
      />
      <br />

      <button
        onClick={() => {
          console.log(state);
          dispatch({
            type: "RESET_VALUES",
          });
        }}
      >
        Submit
      </button>
    </>
  );
}

export default Sample;
