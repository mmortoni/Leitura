export function getParams(state) {
  return state.posts.params;
}

export function getCategory(state) {
  return state.posts.category;
}

export function getSort(state) {
  return state.posts.sort;
}

export function getPost(state, id) {
  if(state.posts.byId.length  === undefined) return {}
  
  return state.posts.byId.find(post => post.id === id);
}

export function getPosts(state) {
  return Object.values(state.posts.byId);
}
