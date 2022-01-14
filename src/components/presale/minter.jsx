/* eslint-disable react-hooks/exhaustive-deps */
import { Button, IconButton } from "@mui/material";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./minter.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../../connectors/injected-connector";
import { toast } from "react-toastify";
import {NFTContract} from "../../config/contract";
import abi from "../../abi/nft.json";
import { Contract } from "@ethersproject/contracts";
import {  formatUnits, parseUnits } from "@ethersproject/units";
export const PresaleMinter = () => {
  const [mints, setMints] = useState(1);
  const [totalMints, setTotalMints] = useState(0);
  const [nftBalance, setNftBalance] = useState(0);

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
  const { activate, account, error, library } = useWeb3React();
  const handleConnect = () => {
    try {
     if(account){
        handleMint();
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

  const getTotalMinted = async () => {
    if (library) {
      try {
        const signer = await library.getSigner();
        const NFT = new Contract(NFTContract, abi.abi, signer);
        const totalMint = await NFT.totalMint();
        setTotalMints(Number(formatUnits(totalMint, 0)));
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getYourBalance = async () => {
    if(library && account){
      try{
        const signer = await library.getSigner();
        const NFT = new Contract(NFTContract, abi.abi, signer);
        const bal = await NFT.balanceOf(account);
        setNftBalance(Number(formatUnits(bal, 0 )));
      }catch(err){
        console.log(err);
      }
    }
  }
  useEffect(() => {
    getTotalMinted();
  }, [library]);

  useEffect(() => {
    getYourBalance();
  }, [library, account]);

  useEffect(() => {
    const runEventsTracking = async () => {
      const signer = await library.getSigner();
      const NFT = new Contract(NFTContract, abi.abi, signer);
      NFT.on("CreateHibernationBear" , async () => {
        getYourBalance();
        getTotalMinted();
      })
    }
    if(library && account){
      runEventsTracking()
    }
  }, [library, account]);

  const getPriceValue =() => {
    const value = mints*price;
    return value.toString();
  } 
  const handleMint = async () => {
    if (library && account) {
      try {
        let overRides = {
          value: parseUnits(getPriceValue(), "ether"),
        };
        const signer = await library.getSigner();
        const NFT = new Contract(NFTContract, abi.abi, signer);
        const txResult = await NFT.presaleMint( mints,overRides);
        await txResult.wait();
        toast.success(`{mints} Hibernation Bear NFT's minted successfully!`)
      } catch (err) {
        if (err.data) {
          if (err.data.message) {
            toast.error(err.data.message);
          }
        } else if (err.message) {
          toast.error(err.message);
        } else {
          toast.error("Enter a valid amount.");
        }
      }
    }
  };
  const price = 0.065;
  return (
    <div className="minter-container">
      <Container style={{ height: "100%" }}>
        <div className="minter">
          <div className="minter-row">
            <span className="mint-counter">
              <b>{totalMints}</b> / 7000 MINTED
            </span>
            
          </div>
          <div className="minter-row">
          <span className="mint-counter">
              You have: <b>{nftBalance}</b> Hibernation Bear NFT's
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
                {account? "Mint" : "Connect Wallet"}
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
