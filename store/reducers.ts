export const tokens = (state: any = [{}], action: any) => {
  switch (action.type) {
    case "TOKENS_LOADED":
      return {
        ...state,
        tokens: action.tokens,
      };

    case "TOKEN_LOADED":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};
