import React from 'react';

const CommentComponent = ({comment}) => {
  console.log('comment', comment, 'c.u.n.', comment.User.name);
  return (
    <div>
      <div >{comment.text}</div>
      <div>by  {comment.User.name}</div>
    </div>
  );
};

export default CommentComponent;
