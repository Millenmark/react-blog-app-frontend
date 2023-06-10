/* eslint-disable react/prop-types */
import { useState } from "react";

const CommentForm = ({
  btnLabel,
  submitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          rows="5"
          className="w-full focus:outline-none bg-transparent"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>

        <div className="flex items-center gap-x-2 pt-2">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 mt-2 rounded-lg border text-red-500"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
