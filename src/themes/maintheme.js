import { alpha } from "@mui/material";

export const mainTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1080,
      xl: 1200,
    },
  },

  palette: {
    primary: {
      main: "#14C9CB",
      light: alpha("#14C9CB", 0.08),
      dark: "#039092",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#4EAA05",
      light: alpha("#4EAA05", 0.08),
      dark: "#3E8804",
      contrastText: "#FFF",
    },
    error: {
      main: "#ED6A6A",
      light: alpha("#ED6A6A", 0.08),
      dark: "#AD001E",
      contrastText: "#FFF",
    },
    warning: {
      main: "#EF6C00",
      light: alpha("#EF6C00", 0.18),
      dark: "#BB6900",
      contrastText: "#FFF",
    },
    info: {
      main: "#2EB5C9",
      light: "#6FE7FC",
      dark: "#008598",
      contrastText: "#FFF",
    },
    success: {
      main: "#4EAA05",
      light: alpha("#4EAA05", 0.08),
      dark: "#3E8804",
      contrastText: "#FFF",
    },
    neutral: {
      main: "#039092",
      light: alpha("#039092", 0.1),
      contrastText: "#000000de",
    },
    text: {
      primary: "#000000de",
      secondary: "#00000099",
      disabled: "#A2B2C3",
      title: "#000",
    },
    divider: "#DEE2E6",
    background: {
      paper: "#FFFFFF",
      default: "#F7F7F7",
    },
    action: {
      active: "#475259",
      hover: "#F7F7F7",
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
    "0 5px 10px rgba(0, 0, 0, 0.085)",
    "0 5px 10px rgba(0, 0, 0, 0.175)",
  ],
  typography: {
    fontFamily: "Roboto,  sans-serif",
    fontSize: 16,
    lineHeight: "20px",
    h1: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 300,
      color: "inherit",
      textAlign: "center",
    },
    h2: {
      fontSize: "1.4rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#37373C",
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#37373C",
      margin: "0 0 .5rem",
    },
    h4: {
      fontSize: "1.1rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#37373C",
      margin: "0 0 .5rem",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "120%",
      fontWeight: 300,
      color: "#000",
    },
    h6: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
      color: "#000",
      padding: "0px",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.5px",

      // color: '#000'
    },
  },

  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: "auto",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          width: "100%",
          //   padding: "16px",
          borderRadius: 4,
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "10px 16px !important",
          letterSpacing: "0.5px",
          lineHeight: "24px",
          // '&:last-child': {
          //     paddingBottom: '10px'
          // }
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          padding: "0px",
        },
      },
    },

    // MuiAccordionDetails: {
    //     styleOverrides: {
    //         root: {
    //             padding: 0,

    //         }
    //     }
    // },
    // MuiAccordion: {
    //     styleOverrides: {
    //         root: {
    //             '&:before': {
    //                 backgroundColor: 'transparent',
    //             },
    //             '&.Mui-expanded': {
    //                 minHeight: 0,
    //                 margin: 0
    //             },
    //         }
    //     }
    // },

    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: "pointer",

          "& td": {
            padding: "10px 16px",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          width: "auto",
          // padding: '4px 8px',
          borderRadius: "4px",
          background: "#FFF",
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          // borderTop: '1px solid rgba(251, 251, 252, 1)',
          borderColor: alpha("#000", 0.1),
          // width: "200px",
          maxWidth: "200px",
          overflow: "hidden",
          fontSize: "1rem",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          textOverflow: "ellipsis",
          // background: '#fff'

          // display: 'block',
          // overflow: 'hidden',
          // minWidth: '100px',
        },
        head: {
          backgroundColor: alpha("#14C9CB", 0.08),
          // padding: "10px 16px",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "5px 10px",
        },
      },
    },
  },
};
