import { Button, IconButton } from "@mui/material";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import "./minter.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
              <Button className="connect-btn" variant="contained">
                Connect Wallet
              </Button>
              <span>
                YOU'RE ABOUT TO MINT {mints} HIBERNATION SOCIETY BEAR NFT FOR {mints * price} MATIC + GAS FEE
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
