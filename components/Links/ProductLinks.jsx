import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Router from "next/router";

export default function ProductLinks() {
  const [value, setValue] = React.useState(0);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    Router.push(`/product`);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="scrollable auto tabs example"
        >
          {links.map((item, index) => {
            return <Tab key={index} label={item} />;
          })}
        </Tabs>
      </Container>
    </Box>
  );
}
