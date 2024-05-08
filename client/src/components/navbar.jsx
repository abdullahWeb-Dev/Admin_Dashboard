import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  SettingsOutlined,
  ArrowDownwardOutlined,
  Search,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import profileImage from "../assets/FolderIMG.png";
import {
  AppBar,
  IconButton,
  Button,
  Box,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Toolbar,
  useTheme,
} from "@mui/material";
import UnstyledInputBasic from "./input";
// import { Button } from "antd";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  // Redux dispatch function to change mode
  const dispatch = useDispatch();
  // Material UI theme object
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    // Material UI AppBar component
    <AppBar
      // Remove position, background, and boxShadow props to style as desired
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      {/* Material UI Toolbar component */}
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          {/* Material UI IconButton component to open/close sidebar */}
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {/* Material UI MenuIcon component */}
            <MenuIcon />
          </IconButton>
          {/* FlexBetween component with search bar and search icon */}
          <FlexBetween
            // Add backgroundColor, borderRadius, gap, and p props for styling
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            {/* Material UI InputBase component for search bar */}
            <InputBase placeholder="Search..." />
            {/* Material UI IconButton component with Search icon */}
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>{" "}
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          {/* Material UI IconButton component to change theme mode */}
          <IconButton
            onClick={() =>
              // Redux action to change theme mode
              dispatch(setMode())
            }
          >
            {/* Conditional rendering of DarkModeOutlined or LightModeOutlined component based on theme mode */}
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          {/* Material UI IconButton component with SettingsOutlined icon */}
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDownwardOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
