import { gql } from "@apollo/client";
import { apolloClient } from "./../../lib/zora/client";

const PREVIEW_TOKENS = `query($pagination: PaginationInput, $where: TokensQueryInput) {
    tokens(networks: [{network: ETHEREUM, chain: MAINNET}], 
      pagination: $pagination, 
      sort: {sortKey: MINTED, sortDirection: ASC}, 
      where: $where) 
    {
      nodes {
        token {
          collectionAddress
          tokenId
          name
          tokenUrl
          metadata
        }
      }
    }
  }
  `;

const previewTokens = (request: any) => {
  return apolloClient.query({
    query: gql(PREVIEW_TOKENS),
    variables: {
      pagination: request.pagination,
      where: request.where,
    },
  });
};

export default previewTokens;
