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
