import { Container, Typography, styled } from '@mui/material'
import React from 'react'

const PageHeading = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    textAlign: "center",
    fontSize:"32px",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }));

const Header = () => {
  return (
    <Container>
        <PageHeading>Extract Text from Image</PageHeading>
    </Container>
  )
}

export default Header