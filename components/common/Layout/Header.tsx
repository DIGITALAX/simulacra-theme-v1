import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";

export const Header = (): JSX.Element => {
  return (
    <div className="flex w-full h-[24rem] sm:h-[13rem] bg-lightYellow relative border-t-4 border-b-4 border-offGray selection:bg-offBlue">
      <div className="absolute top-10 left-6 text-right">
        <p className="font-firaB text-sm">SIMULACRA</p>
        <p className="font-firaReg text-sm">
          AN NFT MARKET <br /> INTERFACE THEME <br /> for <br /> OPEN SOURCE{" "}
          <br /> COMMUNITY RESEARCH
        </p>
      </div>
      <div className="flex left-16 right-auto sm:left-auto sm:right-0 absolute">
        <div className="sm:top-12 top-60 relative cursor-pointer">
          <Link href="">
            <a>
              <Image width={110} height={60} src="/images/circle.svg" />
              <p className="absolute top-4 right-4 font-thunder text-lg">
                REALMS
              </p>
            </a>
          </Link>
        </div>
        <div className="relative top-[20.3rem] sm:top-[8.3rem] -left-6 right-auto sm:left-auto sm:right-40 scale-x-[-1] sm:scale-x-100">
        <Image width={40} height={20} src="/images/arrow.svg" />
        </div>
        <p className="font-firaReg absolute sm:left-auto -left-8 top-80 sm:top-32">TAKE A LOOK</p>
      </div>
      {/* <ConnectButton /> */}
    </div>
  );
};
