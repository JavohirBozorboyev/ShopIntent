import React from "react";
import { Box, Container } from "@mui/system";
import { Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DiamondIcon from "@mui/icons-material/Diamond";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

function Footer() {
  return (
    <>
      <div style={{ background: "#212121" }}>
        <Container maxWidth="xl">
          <Grid
            container
            columns={{ xs: 12, sm: 12, md: 12 }}
            display="flex"
            alignItems={"center"}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ py: 2 }}>
                <Typography variant="h6" color={"white"}>
                  Get connected with us on social networks!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ py: 2, display: "flex", justifyContent: "flex-end" }}>
                <IconButton href="">
                  <FacebookIcon
                    sx={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                </IconButton>
                <IconButton href="">
                  <InstagramIcon
                    sx={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                </IconButton>
                <IconButton href="">
                  <WhatsAppIcon
                    sx={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                </IconButton>
                <IconButton href="https://www.facebook.com/">
                  <TelegramIcon
                    sx={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                </IconButton>
                <IconButton href="https://www.facebook.com/">
                  <TwitterIcon
                    sx={{ width: "30px", height: "30px", color: "#fff" }}
                  />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ background: "#000" }}>
        <Container maxWidth="xl">
          <Grid
            container
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            alignItems={"flex-start"}
            sx={{ pb: 8 }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ px: 1, mt: 4 }}>
              <Box
                sx={{
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #fff",
                }}
              >
                <DiamondIcon sx={{ color: "#fff", mr: 1 }} />
                <Typography variant="h6" color={"white"}>
                  I-Shop
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" color={"gray"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  eos, mollitia unde dolore
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ px: 1, mt: 4 }}>
              <Box
                sx={{
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #fff",
                }}
              >
                <Typography variant="h6" color={"white"}>
                  Pages
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  Product
                </Typography>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  About
                </Typography>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  Blog
                </Typography>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  Contact
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ px: 1, mt: 4 }}>
              <Box
                sx={{
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #fff",
                }}
              >
                <Typography variant="h6" color={"white"}>
                  Useful Links
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  Your Account
                </Typography>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  Become an Affiliate
                </Typography>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  Shipping Rates
                </Typography>
                <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                  Help
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ px: 1, mt: 4 }}>
              <Box
                sx={{
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #fff",
                }}
              >
                <Typography variant="h6" color={"white"}>
                  Contact
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <HomeWorkIcon sx={{ color: "#fff", mr: 2 }} />
                  <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                    Uzbekistan, Namangan
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon sx={{ color: "#fff", mr: 2 }} />
                  <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                    abs@gamil.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalPhoneIcon sx={{ color: "#fff", mr: 2 }} />
                  <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                    +998 (99) 391-25-05
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalPrintshopIcon sx={{ color: "#fff", mr: 2 }} />
                  <Typography variant="body1" color={"gray"} sx={{ mt: 1 }}>
                    +998 (99) 391-25-05
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Footer;
