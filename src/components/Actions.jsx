import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Actions() {
  const valueElement = useRef(0);
  const dispatch = useDispatch();
  const privacy = useSelector((store) => store.privacy);

  const handalIncrement = () => dispatch({ type: "INCREMENT" });
  const handalDecrement = () => dispatch({ type: "DECREMENT" });
  const handalAdd = () =>
    dispatch({ type: "ADD", payload: Number(valueElement.current.value) });
  const handalSubstract = () =>
    dispatch({
      type: "SUBSTRACT",
      payload: Number(valueElement.current.value),
    });
  const handalPrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          style={{ margin: "0 38%" }}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={privacy}
          onClick={handalPrivacy}
        />
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handalIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handalDecrement}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center action-row">
        <input type="number" ref={valueElement} />
        <button type="button" className="btn btn-info" onClick={handalAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handalSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
}
