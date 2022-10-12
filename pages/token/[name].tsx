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
    <div className="bg-gradient-to-b from-lightYellow via-white to-lightPurple min-h-fit h-[100rem] selection:bg-offBlue relative">
      <div className="absolute top-10">
        <p className="font-jacklane text-7xl mb-4 left-12 absolute">
          {token[0].token.metadata.properties.name.toUpperCase()}
        </p>
        <div className="mt-28 sm:mt-8 mb-24 relative h-[38rem] top-16 w-full block bg-offWhite justify-start border-t-8 border-b-8 border-lightWhite">
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
        <div className="w-[95%] relative h-[27rem] border-4 border-offBlack bg-lightYellow flex left-11 overflow-hidden">
          <div className="flex justify-start absolute w-full h-fit left-10 top-6 z-10">
            <p className="text-black font-firaL text-5xl absolute">0.32Ξ</p>
            <p className="absolute top-14 font-firaM left-16 text-base text-offBlack/75">
              ($420.22)
            </p>
            <Link
              href={`https://market.zora.co/collections/${token[0].token.collectionAddress}`}
              className=""
            >
              <a className="absolute left-44 cursor-pointer">
                <button className="border-2 font-firaReg border-offBlack relative p-1 w-32 hover:opacity-70">
                  COLLECT{" "}
                  <Image
                    src="/images/expand2.png"
                    width={20}
                    height={20}
                    alt="Expand"
                    priority
                  />
                </button>
              </a>
            </Link>
            <div className="absolute">
              <div className="relative m-0 top-14 w-fit h-fit">
                <div className="rounded-full border-2 border-offBlack bg-brightGreen w-4 h-4 mr-2 relative left-44"></div>
                <p className="font-firaReg relative left-[12.4rem] -top-[1.2rem]">
                  metadata
                </p>
              </div>
              <div className="relative m-0 top-11 w-fit h-fit opacity-20">
                <div className="rounded-full border-2 border-offBlack bg-offWhite w-4 h-4 mr-2 relative left-44"></div>
                <p className="font-firaReg relative left-[12.4rem] -top-[1.2rem]">
                  stream
                </p>
              </div>
            </div>
            <div className="absolute top-28 font-firaM">
              <div className="m-3 relative">
                <div className="relative float-left top-1.5">
                  <Image
                    src="/images/greenarrows.png"
                    width={10}
                    height={20}
                    alt="Arrow"
                    priority
                  />
                </div>
                <div className="relative text-center border-2 rounded-md text-bronze border-offBlack pl-3 pr-3 pt-0.5 pb-0.5 w-fit text-base left-4">
                  1/1
                </div>
              </div>
              <div className="m-3 relative">
                <div className="relative float-left top-1.5">
                  <Image
                    src="/images/greenarrows.png"
                    width={10}
                    height={20}
                    alt="Arrow"
                    priority
                  />
                </div>
                <div className="relative text-center border-2 rounded-md text-midBlue border-offBlack pl-3 pr-3 pt-0.5 pb-0.5 w-fit text-base left-4">
                  Single Edition
                </div>
              </div>
              <div className="m-3 relative">
                <div className="relative float-left top-1.5">
                  <Image
                    src="/images/greenarrows.png"
                    width={10}
                    height={20}
                    alt="Arrow"
                    priority
                  />
                </div>
                <div className="relative text-center border-2 rounded-md text-offBlack border-offBlack pl-3 pr-3 pt-0.5 pb-0.5 w-fit text-base left-4">
                  Fashion
                </div>
              </div>
            </div>
            <div className="absolute top-72">
              <p className="text-offBlack text-lg font-firaB relative">
                SYNTHESIST
              </p>
              <hr className="bg-offBlack h-1 w-72 absolute" />
              <div className="absolute h-10 w-16 top-12 border-r-4 border-t-2 border-b-2 border-l-2 border-offBlack rounded-md">
                <Image
                  src="/images/profileimage.png"
                  objectFit="fill"
                  layout="fill"
                  alt="Profile Image"
                  priority
                />
              </div>
              <div className="absolute text-sm whitespace-nowrap left-20 top-12">
                <p className="font-firaB">Emma-Jane MacKinnon-Lee</p>
                <Link href={"https://lenster.xyz/u/emmajane1313.lens"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <p className="font-firaReg text-xs cursor-pointer hover:opacity-70">
                      @emmajane1313.lens
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex w-4/6 z-0 border-offBlack border-l-2 left-96">
            <p className="font-firaReg text-base top-2 mt-6 mb-2 w-full text-right absolute left-16">
              {token[0].token.metadata.description.split("Synth Graph:")[0]}
            </p>
            <hr className="bg-offBlack top-52 h-0.5 w-5/6 absolute left-56" />
            <p className="font-firaB text-base mt-6 w-full text-right absolute top-56 left-16">
              SYNTH GRAPH
            </p>
            <p className="font-firaReg text-offBlack/75 text-sm w-full text-right top-72 relative left-16">
              {token[0].token.metadata.description.split("Synth Graph:")[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
