import { Effect } from 'react-dynamic-modal';

export const CATEGORY = {
    CATEGORY_FETCH_ONE_SUCCESS: 'categories.CATEGORY_FETCH_ONE_SUCCESS',
    CATEGORY_FETCH_SUCCESS: 'categories.CATEGORY_FETCH_SUCCESS',
    CATEGORY_FETCH_COLLECTION: 'categories.CATEGORY_FETCH_COLLECTION',
    CATEGORY_FETCH_COLLECTION_SUCCESS: 'categories.CATEGORY_FETCH_COLLECTION_SUCCESS',
    CATEGORY_CREATE_SUCCESS: 'categories.CATEGORY_CREATE_SUCCESS',
    CATEGORY_UPDATE_SUCCESS: 'categories.CATEGORY_UPDATE_SUCCESS',
    CATEGORY_DELETE_SUCCESS: 'categories.CATEGORY_DELETE_SUCCESS'
}

export const POST = {
    POST_FETCH_ONE: 'posts/POST_FETCH_ONE',
    POST_FETCH_ONE_SUCCESS: 'posts/POST_FETCH_ONE_SUCCESS',
    POST_FETCH_COLLECTION: 'posts/POST_FETCH_COLLECTION',
    POST_FETCH_COLLECTION_SUCCESS: 'posts/POST_FETCH_COLLECTION_SUCCESS',
    POST_CREATE: 'posts/CREATE_POST',
    POST_CREATE_SUCCESS: 'posts/CREATE_POST_SUCCESS',
    POST_UPDATE: 'posts/POST_UPDATE',
    POST_UPDATE_SUCCESS: 'posts/POST_UPDATE_SUCCESS',
    POST_DELETE: 'posts/POST_DELETE',
    POST_DELETE_SUCCESS: 'posts/POST_DELETE_SUCCESS',
    POST_VOTE: 'posts/POST_VOTE',
    POST_VOTE_SUCCESS: 'posts/POST_VOTE_SUCCESS',
    POST_SORT: 'posts/POST_SORT',
    POST_SORT_SUCESS: 'posts/POST_SORT_SUCESS',
    POST_CATEGORY: 'posts/POST_CATEGORY',
    POST_CATEGORY_SUCESS: 'posts/POST_CATEGORY_SUCESS'
}

export const COMMENT = {
    COMMENT_FETCH_ONE: 'comments/COMMENT_FETCH_ONE',
    COMMENT_FETCH_ONE_SUCCESS: 'comments/COMMENT_FETCH_ONE_SUCCESS',
    COMMENT_FETCH_COLLECTION: 'comments/COMMENT_FETCH_COLLECTION',
    COMMENT_FETCH_COLLECTION_SUCCESS: 'comments/COMMENT_FETCH_COLLECTION_SUCCESS',
    COMMENT_CREATE: 'comments/CREATE_POST',
    COMMENT_CREATE_SUCCESS: 'comments/CREATE_COMMENT_SUCCESS',
    COMMENT_UPDATE: 'comments/COMMENT_UPDATE',
    COMMENT_UPDATE_SUCCESS: 'comments/COMMENT_UPDATE_SUCCESS',
    COMMENT_DELETE: 'comments/COMMENT_DELETE',
    COMMENT_DELETE_SUCCESS: 'comments/COMMENT_DELETE_SUCCESS',
    COMMENT_VOTE: 'comments/COMMENT_VOTE',
    COMMENT_VOTE_SUCCESS: 'comments/COMMENT_VOTE_SUCCESS',
    COMMENT_SORT: 'comments/COMMENT_SORT',
    COMMENT_SORT_SUCESS: 'comments/COMMENT_SORT_SUCESS'
}

export const EFFECTS = {
    'FADE IN & SCALE': Effect.ScaleUp,
    'SLIDE IN (RIGHT)': Effect.SlideFromRight,
    'SLIDE IN (BOTTOM)': Effect.SlideFromBottom,
    'NEWSPAPER': Effect.Newspaper,
    'FALL': Effect.Fall,
    'SIDE FALL': Effect.SideFall,
    '3D FLIP (HORIZONTAL)': Effect.FlipHorizontal3D,
    '3D FLIP (VERTICAL)': Effect.FlipVertical3D,
    '3D SIGN': Effect.Sign3D,
    'SUPER SCALED': Effect.SuperScaled,
    '3D ROTATE BOTTOM': Effect.RotateFromBottom3D,
    '3D ROTATE LEFT': Effect.RotateFromLeft3D
}
