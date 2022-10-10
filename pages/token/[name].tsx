import Image from "next/image";
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
    <div className="bg-offPink h-screen">
      {tokens?.map((token: any, key: number) => {
        if (
          name?.includes(token.token.metadata.properties.name.split(" ")[0])
        ) {
          const metadataImage = token.token.metadata?.image.split("//");
          const imageURL = metadataImage[1].split("?");
          return (
            <div key={key}>
              <p>{token.token.metadata.properties.name}</p>
              <div className="mt-2 mb-2 relative cursor-pointer">
                <Image
                  width={500}
                  height={500}
                  priority
                  unoptimized={true}
                  className="object-cover rounded-lg"
                  loader={() => `https://${imageURL[0]}.ipfs.dweb.link`}
                  src={`https://${imageURL[0]}.ipfs.dweb.link`}
                />
              </div>
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
