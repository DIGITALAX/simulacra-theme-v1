export const tokens = (state: any = [{}], action: any) => {
  switch (action.type) {
    case "TOKENS_LOADED":
      return {
        ...state,
        tokens: action.tokens,
      };

    default:
      return state;
  }
};
