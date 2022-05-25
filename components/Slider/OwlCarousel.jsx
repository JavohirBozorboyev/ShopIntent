import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import Link from "next/link";

export default function OwlCarousel({ data }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",

    breakpoints: {
      "(min-width: 200px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 300px)": {
        slides: { perView: 1.2, spacing: 5 },
      },
      "(min-width: 360px)": {
        slides: { perView: 1.4, spacing: 5 },
      },
      "(min-width: 400px)": {
        slides: { perView: 1.6, spacing: 5 },
      },
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 600px)": {
        slides: { perView: 2.4, spacing: 5 },
      },
      "(min-width: 800px)": {
        slides: { perView: 3, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {data.map((item, index) => {
        return (
          <div className="keen-slider__slide" key={index}>
            <Card>
              <CardActionArea>
                <Box
                  sx={{
                    overflow: "hidden",
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
                    decoding="async" />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
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
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderIcon sx={{ width: "30px", height: "30px" }} />
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
          </div>
        );
      })}
    </div>
  );
};
