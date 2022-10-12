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
    <div className="bg-gradient-to-b from-lightYellow via-white to-lightPurple min-h-fit h-[140rem] sm:h-[100rem] selection:bg-offBlue relative min-w-full w-full">
      <div className="absolute top-10 max-w-full">
        <p className="font-jacklane max-w-full text-4xl sm:text-7xl mb-4 left-12 absolute">
          {token[0].token.metadata.properties.name.toUpperCase()}
        </p>
        <div className="mt-10 sm:mt-28 sm:mt-8 mb-24 relative h-[38rem] top-16 w-full block bg-offWhite justify-start border-t-8 border-b-8 border-lightWhite">
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
        <div className="w-[95%] relative h-[83rem] sm:h-[39rem] l:h-[34rem] xl:h-[27rem] border-4 border-offBlack bg-lightYellow flex left-2 sm:left-4 md:left-6 lg:left-7 xl:left-10 overflow-hidden justify-end">
          <div className="flex relative w-96 h-[75rem] sm:h-[39rem] l:h-[34rem] xl:h-[27rem] z-10 top-6 left-8">
            <p className="text-black -left-3 sm:left-auto font-firaL text-5xl absolute">
              0.32Ξ
            </p>
            <p className="absolute left-10 top-14 font-firaM sm:left-16 text-base text-offBlack/75">
              ($420.22)
            </p>
            <Link
              href={`https://market.zora.co/collections/${token[0].token.collectionAddress}`}
            >
              <a className="absolute left-44 top-auto sm:left-auto sm:top-28 lg:top-auto lg:left-44 cursor-pointer">
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
              <div className="relative m-0 top-28 sm:top-44 lg:top-14 w-fit h-fit">
                <div className="rounded-full border-2 border-offBlack bg-brightGreen w-4 h-4 mr-2 relative left-auto lg:left-44"></div>
                <p className="font-firaReg relative left-6 lg:left-[12.4rem] -top-[1.2rem]">
                  metadata
                </p>
              </div>
              <div className="relative m-0 top-24 sm:top-40 lg:top-11 w-fit h-fit opacity-20">
                <div className="rounded-full border-2 border-offBlack bg-offWhite w-4 h-4 mr-2 relative left-auto lg:left-44"></div>
                <p className="font-firaReg relative left-6 lg:left-[12.4rem] -top-[1.2rem]">
                  stream
                </p>
              </div>
            </div>
            <div className="absolute -left-2 top-44 sm:top-60 lg:top-28 lg:left-auto font-firaM whitespace-nowrap">
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
            <div className="absolute top-96 sm:top-[27rem] lg:top-72">
              <p className="text-offBlack text-lg font-firaB relative">
                SYNTHESIST
              </p>
              <hr className="bg-offBlack h-1 w-36 lg:w-72 absolute" />
              <div className="absolute h-10 w-16 top-12 border-r-4 border-t-2 border-b-2 border-l-2 border-offBlack rounded-md">
                <Image
                  src="/images/profileimage.png"
                  objectFit="fill"
                  layout="fill"
                  alt="Profile Image"
                  priority
                />
              </div>
              <div className="absolute text-sm whitespace-nowrap left-auto lg:left-20 top-24 lg:top-12">
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
          <div className="relative inline-flex sm:flex z-0 border-offBlack sm:border-l-2 sm:w-9/12 sm:flex-col sm:top-auto top-[36rem] mr-16 sm:mr-0 h-fit sm:h-auto">
            <div className="font-firaReg inline-block text-sm w-full sm:text-xs md:text-sm lg:text-base top-2 mt-6 mb-2 sm:text-right sm:left-auto sm:w-[95%] mr-0 break-words absolute sm:items-end sm:pl-10">
              {token[0].token.metadata.description.split("Synth Graph:")[0]}
            </div>
            <hr className="bg-offBlack top-72 l:top-52 xl:top-44 h-0.5 sm:w-[84%] md:w-[88%] lg:w-[90%] inline-block absolute mr-0 break-words absolute sm:items-end ml-10 sm:visible invisible" />
            <div className="relative top-12">
              <div className="font-firaB text-sm sm:text-xs md:text-base mt-6 absolute top-80 l:top-56 xl:top-48 sm:items-end sm:text-right w-full sm:w-[95%] break-words inline-block items-center sm:left-auto">
                SYNTH GRAPH
              </div>
              <div className="font-firaReg text-offBlack/75 text-sm sm:text-xs md:text-sm sm:text-right top-[23.1rem] l:top-72 xl:top-64 relative sm:items-end w-full sm:w-[95%] break-words inline-block sm:pl-10 sm:left-auto h-fit">
                {token[0].token.metadata.description.split("Synth Graph:")[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
