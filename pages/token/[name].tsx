import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTokens } from "../../store/interactions";

const TokenDetails = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadTokens(dispatch);
  }, []);
  const router = useRouter();
  const tokens: any = useSelector((state: any) => state.tokens.tokens);
  const { name } = router.query;
  return (
    <div>
      {tokens?.map((token: any, key: number) => {
        if (
          name?.includes(token.token.metadata.properties.name.split(" ")[0])
        ) {
          return (
            <div key={key}>
              <p>{token.token.metadata.properties.name}</p>
              <Link
                target="_blank"
                rel="noreferer"
                href={`https://market.zora.co/collections/${token.token.collectionAddress}`}
              >
                <button>Collect</button>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TokenDetails;
