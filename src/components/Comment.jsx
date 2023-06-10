/* eslint-disable react/prop-types */
import image1 from "../assets/profilepic/profile01.jpg";
import { FiMessageSquare, FiEdit2, FiTrash2 } from "react-icons/fi";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  loggedInUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateContent,
  deleteComment,
  replies,
}) => {
  const isUserLoggedIn = Boolean(loggedInUserId);
  const commentBelongsToUser = loggedInUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;

  const repliedCommentId = parentId ? parentId : comment._id;

  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#f2f4f5] p-3 rounded-lg font-sans">
      <img
        src={image1}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />

      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-text">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="font-opensans mt-[10px] text-dark-text">
            {comment.desc}
          </p>
        )}
        {isEditing && (
          <CommentForm
            btnLabel="Updated"
            submitHandler={(value) => updateContent(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-dark-text font-roboto text-sm mt-3 mb-3">
          {isUserLoggedIn && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
                className="flex items-center space-x-2"
              >
                <FiEdit2 className="w-4 h-auto" />
                <span>Edit</span>
              </button>

              <button
                onClick={() => deleteComment(comment._id)}
                className="flex items-center space-x-2"
              >
                <FiTrash2 className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            submitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteComment={deleteComment}
                loggedInUserId={loggedInUserId}
                replies={[]}
                parentId={comment._id}
                updateContent={updateContent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
