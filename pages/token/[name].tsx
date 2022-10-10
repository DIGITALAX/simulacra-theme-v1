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
    <div className="bg-offPink min-h-fit h-[100rem]">
      {tokens?.map((token: any, key: number) => {
        if (
          name?.includes(token.token.metadata.properties.name.split(" ")[0])
        ) {
          const metadataImage = token.token.metadata?.image.split("//");
          const imageURL = metadataImage[1].split("?");
          return (
            <div key={key} className="relative top-10 left-12">
              <p className="font-firaM text-5xl mb-4">
                {token.token.metadata.properties.name.toUpperCase()}
              </p>
              <div className="mt-2 mb-2 relative cursor-pointer">
                <img
                  className="rounded-lg h-[50rem]"
                  src={`https://${imageURL[0]}.ipfs.dweb.link`}
                />
              </div>
              <p className="font-firaReg text-sm mt-6 mb-2 w-1/3">
                {token.token.metadata.description.split("Synth Graph:")[0]}
              </p>
              <p className="font-firaB text-sm mt-6">Synth Graph:{" "}</p>
              <p className="font-firaReg text-sm w-1/3">
                {token.token.metadata.description.split("Synth Graph:")[1]}
              </p>
              <Link
                target="_blank"
                rel="noreferer"
                href={`https://market.zora.co/collections/${token.token.collectionAddress}`}
              >
                <a>
                <button>Collect</button>
                </a>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TokenDetails;
