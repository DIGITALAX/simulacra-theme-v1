import previewTokens from "../graphql/queries/previewTokens";
import { collectionAddresses } from "../lib/zora/constants";

export const loadTokens = async (dispatch: any): Promise<any> => {
  try {
    const response: any = await previewTokens({
      pagination: { limit: 100 },
      where: collectionAddresses,
    });
    const tokens: any = response.data.tokens.nodes;
    dispatch({ type: "TOKENS_LOADED", tokens });
    return tokens;
  } catch (err: any) {
    console.error(err.message);
  }
};