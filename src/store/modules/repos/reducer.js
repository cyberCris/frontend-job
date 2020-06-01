import produce from 'immer';

const INITIAL_STATE = {
  user: {},
  repos: [],
};

export default function repos(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SEARCH_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@repos/UPDATE_REPOS_SUCCESS': {
        draft.repos = action.payload.repos;
        break;
      }
      default:
    }
  });
}
