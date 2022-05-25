import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function HomeSlider({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div
        className="navigation-wrapper"
        style={{ background: "#000", padding: "30px 10px" }}
      >
        <div ref={sliderRef} className="keen-slider">
          {data.map((item, index) => {
            return (
              <div className="keen-slider__slide " key={index}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 12, sm: 12, md: 12 }}
                  display="flex"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        position: "relative",
                        height: "450px",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                        loading="eager"
                        sx={{
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography variant="h6" color={"white"}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color={"white"}
                        sx={{ mt: 2, mb: 2 }}
                      >
                        {item.price} $
                      </Typography>

                      <Typography variant="body1" color="gray" sx={{ mt: 2 }}>
                        {item.description}
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                      <Link href={`/product/${item.id}`}>
                        <a>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                          >
                            See More{" "}
                          </Button>
                        </a>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default HomeSlider;
