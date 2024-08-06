import { ArrowRight, Dining, Fastfood, GpsFixed } from "@mui/icons-material";
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
                <GpsFixed color="warning" />
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
              <IconButton
                sx={{
                  p: 1,
                  mr: 1,
                  background: (theme) => theme.palette.primary.light,

                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                    background: (theme) => theme.palette.primary.light,
                  },
                }}
              >
                <Fastfood color="primary" />
              </IconButton>
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
              <IconButton
                sx={{
                  p: 1,
                  mr: 1,
                  background: (theme) => theme.palette.neutral.light,

                  "&:hover": {
                    color: (theme) => theme.palette.neutral.main,
                    background: (theme) => theme.palette.neutral.light,
                  },
                }}
              >
                <Dining sx={{ color: (theme) => theme.palette.neutral.main }} />
              </IconButton>
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
