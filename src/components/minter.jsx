import { Button, IconButton } from "@mui/material";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./minter.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../connectors/injected-connector";
import { toast } from "react-toastify";

export const Minter = () => {
  const [mints, setMints] = useState(1);
  const handleAddMint = () => {
    if (mints < 5) {
      setMints(mints + 1);
    }
  };
  const handleSubMints = () => {
    if (mints > 1) {
      setMints(mints - 1);
    }
  };

  const { activate, account, error } = useWeb3React();
  const handleConnect = () => {
    try {
     if(account){
        console.log("Already connected")
     }else{
      activate(injectedConnector);
     }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (error) {
      switch (error.name) {
        case "UnsupportedChainIdError":
          toast.error(
            "Selected network is not supported. Please switch your network to Polygon Mainnet"
          );
          break;
        case "NoEthereumProviderError":
          toast.error(
            "You do not have metamask installed. Please install metamask to connect to the application."
          );
          break;
        default:
          toast.error(error);
          break;
      }
    }
  }, [error]);
  const price = 80;
  return (
    <div className="minter-container">
      <Container style={{ height: "100%" }}>
        <div className="minter">
          <div className="minter-row">
            <span className="mint-counter">
              <b>0</b> / 7000 MINTED
            </span>
          </div>
          <div className="minter-row">
            <div className="mint-select-container">
              <div className="mint-selector">
                <IconButton onClick={handleAddMint} className="icon">
                  <AddCircleIcon />
                </IconButton>
                <span className="mint-number">{mints}</span>
                <IconButton onClick={handleSubMints} className="icon">
                  <RemoveCircleIcon />
                </IconButton>
              </div>
              <span>
                MAX YOU CAN MINT ON SALE IS <b>5</b>
              </span>
            </div>
            <div className="mint-button-container">
              <Button onClick={handleConnect} className="connect-btn" variant="contained">
                {account ? "Mint" : "Connect Wallet"}
              </Button>
              <span>
                YOU'RE ABOUT TO MINT {mints} HIBERNATION BEAR NFT FOR {mints * price} MATIC + GAS FEE
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
