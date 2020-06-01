export function updateReposRequest(login, page) {
  return {
    type: '@repos/UPDATE_REPOS_REQUEST',
    payload: { login, page },
  };
}

export function updateReposSuccess(repos) {
  return {
    type: '@repos/UPDATE_REPOS_SUCCESS',
    payload: { repos },
  };
}
