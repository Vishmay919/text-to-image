import CopyableText from "./Components/CopyText";
import React, { useState } from "react";
import SelectImage from "./Components/SelectImage";
import Header from "./Components/Header";
import { Container } from "@mui/material";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  return (
    <Container>
      <Header />
      <SelectImage imageUrl={imageUrl} setImageUrl={setImageUrl} setText={setText} />
      <CopyableText text={text} setText={setText} />;
    </Container>
  );
};

export default App;
