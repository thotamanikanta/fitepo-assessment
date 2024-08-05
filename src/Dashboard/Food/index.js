import {
  AdsClick,
  ArrowLeft,
  ArrowRight,
  Dining,
  Fastfood,
} from "@mui/icons-material";
import { CardContent, Grid, IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.warning.light,

  "&:hover": {
    color: theme.palette.warning.main,
    background: theme.palette.warning.light,
  },
}));

const Food = () => {
  return (
    <CardContent sx={{ height: "100%" }}>
      <Grid
        container
        spacing={2}
        direction={"column"}
        sx={{ height: "100%" }}
        justifyContent={"space-around"}
      >
        <Grid
          item
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledIconButton sx={{ p: 1, mr: 1 }}>
                <AdsClick color="warning" />
              </StyledIconButton>
              <Typography>Goals</Typography>
            </Box>
          </Grid>
          <Grid item>
            <IconButton>
              <ArrowRight sx={{ fontSize: "34px" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledIconButton sx={{ p: 1, mr: 1 }}>
                <Fastfood color="warning" />
              </StyledIconButton>
              <Typography>Popular Dishes</Typography>
            </Box>
          </Grid>
          <Grid item>
            <IconButton>
              <ArrowRight sx={{ fontSize: "34px" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledIconButton sx={{ p: 1, mr: 1 }}>
                <Dining color="warning" />
              </StyledIconButton>
              <Typography>Menus</Typography>
            </Box>
          </Grid>
          <Grid item>
            <IconButton>
              <ArrowRight sx={{ fontSize: "34px" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Food;
