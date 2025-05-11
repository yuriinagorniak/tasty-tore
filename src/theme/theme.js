import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "#e0cfa4",
          borderColor: "#e0cfa4",

          "&:hover": {
            backgroundColor: "#e0cfa418",
          },

          "&.Mui-selected": {
            color: "#111111",
            backgroundColor: "#e0cfa4",
            borderColor: "#e0cfa4",
          },

          "&.Mui-selected:hover": {
            backgroundColor: "#d6bd94",
          },

          "&.Mui-disabled": {
            color: "#a8a29e",
            borderColor: "#a8a29e",
          },
        },
      },
    },
     MuiInputBase: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#e0cfa4", // normal text color
          },
          "& .MuiInputBase-input.Mui-disabled": {
            color: "#e0cfa4", // disabled input color
          },
        },
      },
    },
  },
});