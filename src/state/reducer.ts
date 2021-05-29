import { ActionType } from "./actions";

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case ActionType.INITCOUNTER:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
