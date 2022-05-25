import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductId = ({ data }) => {
  const [value, setValue] = useState(2);

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 2 }}>
        <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={12} md={5}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                pt: 2,
                pb: 2,
              }}
            >
              <Image
                src={data.image}
                alt={data.title}
                width={"400px"}
                height={"400px"}
                blurDataURL={data.image}
                placeholder="blur"
                decoding="async"
                loading="eager"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ background: "#fff", p: 2, borderRadius: "8px" }}>
              <Typography variant="h6">{data.title}</Typography>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                {data.price} $
              </Typography>
              <Rating
                name="simple-controlled"
                defaultValue={data.rating.rate}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />

              <Typography
                variant="body1"
                color="gray"
                sx={{ mt: 2, textAlign: "justify" }}
              >
                {data.description}
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  mb: 2,
                  background: "#fff",
                  borderRadius: "8px",

                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  startIcon={<FavoriteIcon />}
                  sx={{ mt: 1, mb: 1 }}
                >
                  Add To Favorite
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{ mt: 1, mb: 1 }}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  // const res2 = await fetch(
  //   `https://fakestoreapi.com/products/category/${data.category}`
  // );
  // const data2 = await res2.json();

  // for (let i = 0; i < data2.length; i++) {
  //   if (data2[i].id == data.id) {
  //     data2.splice(i, 1);
  //     i--;
  //   }
  // }

  return { props: { data } };
}

export default ProductId;
