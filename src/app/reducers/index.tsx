import { GET_REQUESTS_LIST, GET_SCORING_PENDING, GET_SCORING_SUCCESS } from '../actions/types';
import { IStore } from '../interfaces/store';

const initState:IStore = {
  requestsList: [],
  loadingScoring: false,
  scoringData: null,
};

export default (state = initState, action: any) => {

  switch (action.type) {

    case GET_REQUESTS_LIST:
      return {
        ...state,
        requestsList: action.payload,
      };

    case GET_SCORING_PENDING:
      return {
        ...state,
        loadingScoring: true,
        scoringData: null,
      };

    case GET_SCORING_SUCCESS:
      return {
        ...state,
        loadingScoring: false,
        scoringData: action.payload,
      };

    default :
      return state;
  }
};
