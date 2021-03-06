import React from 'react';
import PropTypes from 'prop-types'
import { CommentsListRow } from './CommentsListRow';

const CommentsList = ({ comments, category, onDelete, onVoteComment }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th colSpan={2}>{comments.length} comments:</th>
        </tr>
      </thead>
      <tbody>
        {comments && comments.map(comment => CommentsListRow({ comment, category, onDelete, onVoteComment }))}
      </tbody>
    </table>
  )
};

CommentsList.prototype = {
  comments: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onVoteComment: PropTypes.func.isRequired
}

export { CommentsList }