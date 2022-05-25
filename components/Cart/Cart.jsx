import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

function Cart({ data }) {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12, lg: 25 }}
        direction="row"
        alignItems="stretch"
      >
        {data.map((item, index) => (
          <Grid item xs={2} sm={4} md={3} lg={5} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    blurDataURL={item.image}
                    placeholder="blur"
                    decoding="async"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    {item.price} $
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.title.slice(0, 35)}...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconButton size="small" color="primary">
                  <FavoriteBorderIcon />
                </IconButton>
                <Link href={`/product/${item.id}`}>
                  <a>
                    <Button color="primary" variant="contained">
                      More
                    </Button>
                  </a>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Cart;
