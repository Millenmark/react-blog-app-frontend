import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../redux/actions/countActions";

const ReduxCount = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.xxx);

  return (
    <div className="mt-2 flex items-center gap-x-5">
      <button onClick={() => dispatch(changeCount("DECREASE"))}>
        decrease
      </button>
      {count.number}
      <button onClick={() => dispatch(changeCount("INCREASE"))}>
        increase
      </button>
    </div>
  );
};

export default ReduxCount;
