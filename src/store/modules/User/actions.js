export function searchRequest(login) {
  return {
    type: '@user/SEARCH_REQUEST',
    payload: { login },
  };
}

export function searchSuccess(user, repos) {
  return {
    type: '@user/SEARCH_SUCCESS',
    payload: { user, repos },
  };
}

export function searchFailure() {
  return {
    type: '@user/SEARCH_FAILURE',
  };
}

export function searchRepo(repos) {
  return {
    type: '@user/SEARCH_REPOS',
    payload: { repos },
  };
}

export function updatePage(page) {
  return {
    type: '@user/UPDATE_PAGE',
    payload: { page },
  };
}
