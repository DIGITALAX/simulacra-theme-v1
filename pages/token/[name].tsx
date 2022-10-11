import Image from "next/image";
import Link from "next/link";
import React from "react";
import { collectionAddresses } from "../../lib/zora/constants";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/getTokens", {
    method: "POST",
    body: JSON.stringify({
      pagination: { limit: 100 },
      where: collectionAddresses,
    }),
  });

  const tokens = await response.json();
  const paths = tokens.map((token: any) => {
    return {
      params: {
        name: token.token.collectionAddress,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const address = { collectionAddresses: [context.params.name] };
  const response = await fetch("http://localhost:3000/api/getTokens", {
    method: "POST",
    body: JSON.stringify({
      pagination: { limit: 100 },
      where: address,
    }),
  });
  const token = await response.json();
  return {
    props: { token },
  };
};

const TokenDetails = ({ token }: any): JSX.Element => {
  const metadataImage = token[0].token.metadata?.image.split("//");
  const imageURL = metadataImage[1].split("?");
  return (
    <div className="bg-gradient-to-b from-lightYellow via-white to-lightPurple min-h-fit h-[100rem]">
      <div className="absolute top-10">
        <p className="font-jacklane text-7xl mb-4 left-12 absolute">
          {token[0].token.metadata.properties.name.toUpperCase()}
        </p>
        <div className="mt-28 sm:mt-8 mb-24 relative h-[36rem] top-16 w-full block bg-offWhite justify-start border-t-8 border-b-8 border-lightWhite">
          <div className="relative min-w-full min-h-full inline-block">
            <div className="absolute min-w-full min-h-[90%] top-7">
              <Image
                priority
                layout="fill"
                objectFit="contain"
                unoptimized
                loader={() => `https://${imageURL[0]}.ipfs.dweb.link`}
                src={`https://${imageURL[0]}.ipfs.dweb.link`}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end relative right-20 w-full h-full top-2 sm:top-6">
          <p className="text-black font-firaL text-4xl absolute">0.32 Ξ</p>
          <Link
            target="_blank"
            rel="noreferer"
            href={`https://market.zora.co/collections/${token[0].token.collectionAddress}`}
          >
            <a className="absolute -right-10 top-1.5">
              <Image
                src="/images/expand2.png"
                width={25}
                height={25}
                alt="Expand"
                priority
              />
            </a>
          </Link>
          <p className="absolute font-firaM text-tagBlue top-10 -right-10">
            1/1
          </p>
          <p className="absolute font-firaM text-tagPink top-16 -right-10">
            Single Edition
          </p>
        </div>
        <p className="font-firaReg text-sm mt-6 mb-2 w-5/6 sm:w-1/3 relative left-8 sm:left-12 top-28 sm:top-auto">
          {token[0].token.metadata.description.split("Synth Graph:")[0]}
        </p>
        <p className="font-firaB text-sm mt-6 relative left-8 sm:left-12 w-fit top-32 sm:top-auto">
          Synth Graph:{" "}
        </p>
        <p className="font-firaReg text-sm w-5/6 sm:w-1/3 relative left-8 sm:left-12 top-36 sm:top-auto">
          {token[0].token.metadata.description.split("Synth Graph:")[1]}
        </p>
      </div>
    </div>
  );
};

export default TokenDetails;
