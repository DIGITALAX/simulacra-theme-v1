import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTokens } from "../../../store/interactions";

export const Collections = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadTokens(dispatch);
  }, []);
  const tokens = useSelector((state: any) => state.tokens.tokens);
  console.log(tokens);
  return (
    <div className="relative columns-1 sm:columns-2 md:columns-3 bg-offPink">
      {tokens?.map((token: any, key: number) => {
        const metadataImage = token.token.metadata?.image.split("//");
        const imageURL = metadataImage[1].split("?");
        const name = token.token.metadata.properties.name;
        const url = name.replace(/\s+/g, "");
        return (
          <div
            key={key}
            className="relative mt-10 mb-10 ml-4 mr-4 break-inside-avoid-column h-[65rem] inline-block cursor-pointer"
          >
            <Link href={`/token/${url}`}>
              <div className="mt-2 mb-2 relative">
                <Image
                  width={500}
                  height={500}
                  unoptimized={true}
                  className="object-cover rounded-lg"
                  loader={() => `https://${imageURL[0]}.ipfs.dweb.link`}
                  src={`https://${imageURL[0]}.ipfs.dweb.link`}
                />
              </div>
            </Link>
            <p className="mt-2 absolute text-olive text-lg">{name}</p>
            <hr className="mt-2 relative top-10 border-0 bg-olive h-0.5" />
            <p className="relative top-12 float-left mr-4">0.32 Ξ</p>
            <p className="relative top-12">1/1</p>
            <p className="relative mt-4 top-10 mb-16">
              {token.token.metadata.description}
            </p>
            <hr className="relative border-0 bg-olive h-px" />
            <Link href={`/token/${url}`}>
              <button className="mt-4">Expand</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
