import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import styled from "@emotion/styled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #007fff",
  paddingLeft: "8px",
  borderRadius: "8px",
  margin: "32px 16px",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "32px 16px",

  img: {
    width: "100%",
    objectFit: "contain",
    borderRadius: "8px",
  },
}));

const GoBtn = styled(Button)(({ theme }) => ({}));

const SelectImage = ({ imageUrl, setImageUrl, setText }) => {
  const [inputText, setInputText] = useState(imageUrl);
  const [error, setError] = useState("");

  const fetchData = async (ImageUrl) => {
    let data = "";
    let url = `https://text-in-image.exponential.host/?image=${ImageUrl}`;

    try {
      const response = await fetch(url, {
        headers: {
            'Exponential-Api-Secret': 'dd04833b-7066-3cb3-bc73-cf08cbf5b4ab'
          }
      });
      data = await response.json();
    } catch (err) {
      setError(err);
      console.log("Error " + err);
    }

    return data;
  };

  let handleClick = async (e) => {
    e.preventDefault();
    setImageUrl(inputText);
    // let data = await fetchData(inputText);
    // console.log(data);
  };

  let handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  return (
    <Container>
      <SearchWrapper>
        <TextField
          variant="standard"
          size="small"
          fullWidth
          value={inputText}
          onChange={handleChange}
          placeholder="Enter Image URL"
          InputProps={{
            disableUnderline: true,
            style: { color: "white", backgroundColor:"transparent" },

          }}
        />
        <GoBtn onClick={handleClick}>
          Go
          <ArrowRightAltIcon />
        </GoBtn>
      </SearchWrapper>
      <ImageWrapper>
        {imageUrl ? (
          <img src={imageUrl} alt="Invalid Url" />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <p>Add an Image url and press GO</p>
        )}
      </ImageWrapper>
    </Container>
  );
};

export default SelectImage;

// sentences[0].Text
