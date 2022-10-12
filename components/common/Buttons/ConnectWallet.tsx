import React, { FunctionComponent } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWallet: FunctionComponent = (): JSX.Element => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return <p onClick={openConnectModal}>CONNECT WALLET</p>;
              }

              if (chain.unsupported) {
                return (
                  <p onClick={openChainModal}>
                    SWITCH NETWORK
                    <div className="relative h-3 w-3">
                      <div className="animate-ping absolute -right-32 -top-6 h-3 w-3 rounded-full opacity-75 bg-red-600"></div>
                      <div className="absolute -right-32 -top-6 inline-flex rounded-full h-3 w-3 bg-red-500"></div>
                    </div>
                  </p>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <p onClick={openAccountModal}>{account.displayName}</p>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
