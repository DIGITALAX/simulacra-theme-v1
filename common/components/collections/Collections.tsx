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
            className="relative mt-16 mb-16 ml-4 mr-4 break-inside-avoid-column h-[35rem] inline-block text-offBlack"
          >
            <Link href={`/token/${url}`}>
              <a>
                <div className="mt-2 mb-2 border-t-4 border-l-4 border-r-2 border-b-2 border-offBlack rounded-xl cursor-pointer h-[29rem] relative">
                  <Image
                    priority
                    unoptimized={true}
                    className="object-cover rounded-lg"
                    objectFit="cover"
                    layout="fill"
                    loader={() => `https://${imageURL[0]}.ipfs.dweb.link`}
                    src={`https://${imageURL[0]}.ipfs.dweb.link`}
                  />
                </div>
              </a>
            </Link>
            <p className="mt-2 absolute text-lg font-firaB">{name}</p>
            <div className="flex justify-end mt-3 cursor-pointer">
              <Link href={`/token/${url}`}>
                <a>
                  <Image
                    src="/images/expand.png"
                    width={25}
                    height={25}
                    alt="Expand"
                    priority
                  />
                </a>
              </Link>
            </div>
            <p className="relative top-5 float-left text-5xl mr-4 font-firaReg">
              0.32 Ξ
            </p>
            <p className="relative top-6 flex justify-end text-3xl font-firaReg">
              1/1
            </p>

            <div className="relative mt-4 top-10 mb-16 truncate-2-lines font-firaM text-xs">
              {token.token.metadata.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
