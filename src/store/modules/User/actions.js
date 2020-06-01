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

export function updateReposRequest(login, page) {
  return {
    type: '@user/UPDATE_REPOS_REQUEST',
    payload: { login, page },
  };
}

export function updateReposSuccess(repos) {
  return {
    type: '@user/UPDATE_REPOS_SUCCESS',
    payload: { repos },
  };
}
