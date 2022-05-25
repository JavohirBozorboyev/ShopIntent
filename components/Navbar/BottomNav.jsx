import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";
import Badge from "@mui/material/Badge";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

function BottomNav() {
  const [value, setValue] = React.useState("/");
  const Router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);

    Router.push(newValue);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={darkTheme}>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          zIndex: "1000",
          bottom: "0",
          display: `${matches == true ? "none" : null}`,
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          label="Products"
          value="/product"
          icon={<GridViewRoundedIcon />}
        />
        <BottomNavigationAction
          label="Favorite"
          value="favorite"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Shop Cart"
          value="/pbox"
          icon={
            <Badge badgeContent={0} color="primary">
              <ShoppingCartRoundedIcon />
            </Badge>
          }
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default BottomNav;
