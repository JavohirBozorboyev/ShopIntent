import { Container } from "@mui/material";
import React from "react";
import Cart from "../../components/Cart/Cart";

function index({ data }) {
  return (
    <>
      <main>
        <Container maxWidth="xl" sx={{ mt: 2, mb: 8 }}>
          <Cart data={data} />
        </Container>
      </main>
    </>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
