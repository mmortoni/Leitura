import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';

import { POST } from '../../constants/constants'
import * as postsActions from './actionCreators';

export function fetchPost(action$) {
  return action$.ofType(POST.POST_FETCH_ONE)
    .map(action => action.payload)
    .switchMap(payload => {
      return Observable.fromPromise(
        instanceAxios.get(`/posts/${payload.id}`)
      ).map(res => postsActions.fetchPostSuccess({data:res.data, p: payload}))
    })
}

export function fetchPosts(action$) {
  return action$.ofType(POST.POST_FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(payload => {
      return Observable.fromPromise(
        instanceAxios.get(`/posts?${querystring.stringify(payload.params)}`)
      ).map(res => postsActions.fetchPostsSuccess({data: res.data, p: payload}))
    })
}

export function sortPosts(action$) {
  return action$.ofType(POST.POST_SORT)
    .map(action => postsActions.sortSuccess(action.payload));
}

export function createPost(action$) {
  return action$.ofType(POST.POST_CREATE)
    .map(action => action.payload)
    .switchMap(post => {
      return Observable.merge(
        Observable.fromPromise(
          instanceAxios.post(`/posts`, { title: post.title, author: post.author, category: post.category, body: post.body })
        ).map(res => postsActions.createPostSuccess(res.data))
      );
    });
}

export function updatePost(action$) {
  return action$.ofType(POST.POST_UPDATE)
    .map(action => action.payload)
    .switchMap(post => {
      return Observable.merge(
        Observable.fromPromise(
          instanceAxios.put(`/posts/${post.id}`, { title: post.title, body: post.body })
        ).map(res => postsActions.updatePostSuccess(res.data))
      );
    });
}

export function deletePost(action$) {
  return action$.ofType(POST.POST_DELETE)
    .map(action => action.payload)
    .switchMap(post => {
      return Observable.fromPromise(
        instanceAxios.delete(`/posts/${post.id}`)
      ).map(res => postsActions.deletePostSuccess(post));
    });
}

export function votePost(action$) {
  return action$.ofType(POST.POST_VOTE)
    .map(action => action.payload)
    .switchMap(payload => {
      return Observable.merge(
        Observable.fromPromise(
          instanceAxios.post(`/posts/${payload.id}`, { option: payload.option })
        ).map(res => postsActions.votePostSuccess(res.data))
      );
    });
}

export function categoryPosts(action$) {
  return action$.ofType(POST.POST_CATEGORY)
    .map(action => action.payload)
    .switchMap(payload => {
      return Observable.merge(
        Observable.fromPromise(
          instanceAxios.get(`/${payload.category}/posts`)
        ).map(res => postsActions.categorySuccess({data: res.data, p: payload}))
      );
    });
}
