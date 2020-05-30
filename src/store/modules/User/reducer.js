import produce from 'immer';

const INITIAL_STATE = {
  user: {},
  repos: [],
  loading: false,
};

export default function search(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/SEARCH_SUCCESS': {
        draft.user = action.payload.user;
        draft.repos = action.payload.repos;
        break;
      }
      case '@user/SEARCH_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
