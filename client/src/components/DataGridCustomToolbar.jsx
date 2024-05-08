import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment, Box } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer sx={{ justifyContent: "space-between" }}>
      {/* <FlexBetween width="100%"> */}
      <FlexBetween>
        <GridToolbarContainer>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </GridToolbarContainer>
      </FlexBetween>
      <GridToolbarContainer>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          onChange={(e) => setSearch(e.target.value)}
          value={searchInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </GridToolbarContainer>
      {/* </FlexBetween> */}
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
