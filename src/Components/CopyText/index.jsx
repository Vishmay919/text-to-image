import React, { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  TextField,
  Tooltip,
  styled,
} from "@mui/material";
import { FileCopy } from "@mui/icons-material";

const CopyTextBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  margin: "32px 16px",
  border: "1px solid #007fff",
  padding:"1px"
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  borderRadius: "8px 8px 0 0",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: "#132f4c",
  padding:"0 8px"
}));

const CopyableText = ({ text }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsTooltipOpen(true);
  };

  const handleTooltipClose = () => {
    setIsTooltipOpen(false);
  };

  return (
    <Container>
      <CopyTextBox>
        <Header>
          <Tooltip
            sx={{ color: "#007fff" }}
            open={isTooltipOpen}
            onClose={handleTooltipClose}
            title="Copied to clipboard!"
          >
            <IconButton
              size="small"
              onClick={handleCopyClick}
              onMouseLeave={handleTooltipClose}
            >
              <FileCopy />
            </IconButton>
          </Tooltip>
        </Header>

        <TextField
          sx={{ backgroundColor: "#001e3c" , padding:1}}
          value={"Text generated from the Image"}
          fullWidth
          multiline
          rows={10}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            style: { color: "white" },
          }}
        />
      </CopyTextBox>
    </Container>
  );
};

export default CopyableText;
