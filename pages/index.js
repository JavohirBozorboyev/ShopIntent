import HomeSlider from "../layouts/HomePage/HomeSlider";
import { Button, Container, Grid, Typography } from "@mui/material";

import OwlCarousel from "../components/Slider/OwlCarousel";
import { Box } from "@mui/system";
import Link from "next/link";

import Banner from "../img/banner.png";
import Cart from "../components/Cart/Cart";

function index({ data, data1 }) {
  return (
    <div>
      <main>
        <HomeSlider data={data.slice(2, 6)} />
        <Container sx={{ pt: 1, pb: 8 }} maxWidth="xl">
          <Box sx={{ mt: 4 }}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "8px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="body1">Popular</Typography>
              <Link href="/">
                <a>
                  <Button variant="contained">See More</Button>
                </a>
              </Link>
            </Box>
            {data.length == 0 ? (
              <h1>Loading...</h1>
            ) : (
              <OwlCarousel data={data.slice(1, 8)} />
            )}
          </Box>
        </Container>
        <div
          style={{
            background: `url(${Banner.src})`,
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="xl">
            <Typography variant="h4" sx={{ color: "#fff", textAlign: "left" }}>
              All Best Product Categories
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#fff", textAlign: "left", mt: 4 }}
            >
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eos quia, doloremque, quam doloremque. Quasi, quisquam. Quasi,
              quisquam.
            </Typography>
          </Container>
        </div>
        <Container maxWidth="xl" sx={{ mb: 8 }}>
          <Box
            sx={{
              background: "#fff",
              mb: 2,
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">Ommabop Tovarlar</Typography>
            <Link href="/product">
              <a>
                <Button variant="contained">See More</Button>
              </a>
            </Link>
          </Box>
          <Cart data={data1.slice(0, 10)} />
        </Container>
      </main>
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const res1 = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  const data1 = await res1.json();

  return {
    props: {
      data,
      data1,
    },
    revalidate: 1,
  };
}
