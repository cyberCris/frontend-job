import produce from 'immer';

const INITIAL_STATE = {
  user: {},
  repos: [],
  loading: false,
  page: 1,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@githubsearch/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@githubsearch/SEARCH_SUCCESS': {
        draft.user = action.payload.user;
        draft.repos = action.payload.repos;
        draft.loading = false;
        break;
      }
      case '@githubsearch/SEARCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@githubsearch/SEARCH_REPOS': {
        draft.repos = action.payload.repos;
        break;
      }
      case '@githubsearch/UPDATE_PAGE': {
        draft.page = action.payload.page;
        break;
      }
      default:
    }
  });
}
