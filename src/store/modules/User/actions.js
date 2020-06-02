export function searchRequest(login) {
  return {
    type: '@githubsearch/SEARCH_REQUEST',
    payload: { login },
  };
}

export function searchSuccess(user, repos) {
  return {
    type: '@githubsearch/SEARCH_SUCCESS',
    payload: { user, repos },
  };
}

export function searchFailure() {
  return {
    type: '@githubsearch/SEARCH_FAILURE',
  };
}

export function searchRepo(repos) {
  return {
    type: '@githubsearch/SEARCH_REPOS',
    payload: { repos },
  };
}

export function updatePage(page) {
  return {
    type: '@githubsearch/UPDATE_PAGE',
    payload: { page },
  };
}
