import { collectionAddresses } from "../lib/zora/constants";

export const loadTokens = async (dispatch: any): Promise<any> => {
  try {
    const response = await fetch("/api/getTokens", {
      method: "POST",
      body: JSON.stringify({
        pagination: { limit: 100 },
        where: collectionAddresses,
      }),
    });
    if (response.status !== 200) {
      console.log("ERROR", response);
    } else {
      const tokens = await response.json();
      console.log(tokens)
      dispatch({ type: "TOKENS_LOADED", tokens });
      return tokens;
    }
  } catch (err: any) {
    console.error(err.message);
  }
};

export const loadToken = async (context: any, dispatch: any) => {
  try {
    const address = context.params.collectionAddress;
    const response = await fetch("/api/getTokens", {
      method: "POST",
      body: JSON.stringify({
        pagination: { limit: 100 },
        where: address,
      }),
    });
    const token = await response.json();
    dispatch({ type: "TOKEN_LOADED", token });
    const param = token;

    return {
      props: { token: param },
    };
  } catch (err: any) {
    console.error(err.message);
  }
};
