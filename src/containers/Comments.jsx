import { useEffect, useState } from "react";
import CommentForm from "../components/CommentForm";
import { getCommentsData } from "../constants/comments";
import Comment from "../components/Comment";

/* eslint-disable react/prop-types */
const Comments = ({ className, loggedInUserId }) => {
  const [comments, setComments] = useState([]);

  const mainComments = comments.filter((comment) => comment.parent === null);

  const [affectedComment, setAffectedComment] = useState(null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentsData = await getCommentsData();
      setComments(commentsData);
    })();
  }, []);

  const addComment = (desc, parent = null, replyingTo = null) => {
    const newComment = {
      _id: Math.ceil(Math.random() * 100),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc,
      post: "1",
      parent,
      replyingTo,
      createdAt: new Date().toISOString(),
    };

    setComments((prev) => {
      return [newComment, ...prev];
    });
    setAffectedComment(null);
  };

  const updateContent = (value, commentId) => {
    const updateComment = comments.map((comment) => {
      if (comment._id === commentId) {
        return { ...comment, desc: value };
      }

      return comment;
    });
    setComments(updateComment);
    setAffectedComment(null);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });

    setComments(updatedComments);
  };

  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        submitHandler={(value) => addComment(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            loggedInUserId={loggedInUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addComment}
            updateContent={updateContent}
            deleteComment={deleteComment}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
