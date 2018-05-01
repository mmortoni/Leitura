import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Modal, ModalManager, Effect } from 'react-dynamic-modal'
import _ from 'lodash';
import { PostsListRow } from '../components/posts/PostsListRow';

import { CommentsList } from '../components/comments/CommentsList'
import { postsActions, postsSelectors } from '../store/posts/index'
import { commentsActions, commentsSelectors } from '../store/comments/index'

import AppModal from '../components/shared/AppModal'
import { EFFECTS } from '../constants/constants'

import { formatTimestamp } from '../utils/Utils'

@connect(
  (state, props) => {
    return {
      post: postsSelectors.getPost(state, props.params.postId),
      comments: commentsSelectors.getComments(state),
    };
  }
)

export class PostsComment extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object,
  };

  static propTypes = {
    params: PropTypes.object,
    post: PropTypes.object
  };

  constructor(props, context) {
    super(props, context)

    if (!_.isEmpty(props.post)) {
      document.getElementById('navItemComments').parentNode.classList.remove('disabled')
    }

    pathCallback = this.props.location.pathname

    this.deletePost = this.deletePost.bind(this)
    this.deletePostModal = this.deletePostModal.bind(this)
    this.votePost = this.votePost.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.deleteCommentModal = this.deleteCommentModal.bind(this)
    this.voteComment = this.voteComment.bind(this)
  }

  componentDidMount() {
    this.context.store.dispatch(commentsActions.fetchComments({ id: this.props.routeParams.postId }))

    setTimeout(() => {
      if (_.isEmpty(this.props.post)) {
        browserHistory.push('/notFound')
        return
      }
    }, 1000)
  }

  componentWillMount() {
    this.context.store.dispatch(postsActions.fetchPost({ id: this.props.routeParams.postId, props: { sort: { sortDesc: false, sortKey: 'voteScore', sortOrder: ['asc'] } } }))

    if (_.isEmpty(this.props.post)) {
      browserHistory.push(this.props.location.pathname)
      return
    }
  }

  deletePost(item, buttonValue) {
    if (buttonValue === 'ok') {
      this.context.store.dispatch(postsActions.deletePost(item))
      browserHistory.push('/')
    }
  }

  deletePostModal(post) {
    ModalManager.open(<AppModal
      title={'Delete Post'}
      content={'Tem certeza de que deseja excluir?'}
      detail={post.title}
      callBackFunction={this.deletePost}
      item={post}
      effect={EFFECTS['3D ROTATE LEFT']} />);
  }

  votePost(id, option) {
    this.context.store.dispatch(postsActions.votePost({ id: id, option: option }))
  }

  deleteComment(item, buttonValue) {
    if (buttonValue === 'ok') {
      this.context.store.dispatch(commentsActions.deleteComment(item))
      this.context.store.dispatch(postsActions.fetchPost({ id: this.props.routeParams.postId, props: { sort: { sortDesc: false, sortKey: 'voteScore', sortOrder: ['asc'] } } }))
    }
  }

  deleteCommentModal(comment) {
    ModalManager.open(<AppModal
      title={'Delete Comment'}
      content={'Tem certeza de que deseja excluir?'}
      detail={comment.body}
      callBackFunction={this.deleteComment}
      item={comment}
      effect={EFFECTS['3D ROTATE LEFT']} />);
  }

  voteComment(id, option) {
    this.context.store.dispatch(commentsActions.voteComment({ id: id, option: option }))
  }

  render() {
    const { comments, post } = this.props
    
    if (post) {
      return (
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th colSpan={2}>POSTS</th>
              </tr>
            </thead>
            <tbody>
              {<PostsListRow post={post} onDelete={this.deletePostModal} onVotePost={this.votePost} />}
            </tbody>
          </table>

          <div className="col-md-10">
            {comments.length > 0 && <CommentsList comments={comments} category={post.category} onDelete={this.deleteCommentModal} onVoteComment={this.voteComment} />}
          </div>

          <div className="col-md-2 text-right">
            <Link to={`/${post.category}/${post.id}/comment/new`} className="btn btn-primary a-btn-slide-text">
              <span style={{ class: this.classNames }} aria-hidden="true"></span>
              <span><strong>Novo Comment</strong></span>
            </Link>
          </div>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}
