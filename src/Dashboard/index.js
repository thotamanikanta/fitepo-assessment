import {
  Add,
  ArrowDropUp,
  Sell,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/system";

import OrderChart from "./OrderChart";
import Activity from "./Activity";
import Food from "./Food";
import RecentOrders from "./RecentOrders";
import Reviews from "./Reviews";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    height: "auto",
    minWidth: "0px",
    padding: "0px",

    bottom: 10,
  },
}));

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} spacing={3}>
          <Card>
            <CardContent>
              <Typography variant="h2">Dashboard</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex" }}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    background: (theme) => theme.palette.primary.light,
                    borderRadius: "12px",
                    p: 2,
                    width: "45px",
                  }}
                >
                  <StyledBadge
                    color="primary"
                    badgeContent={<Add fontSize="16px" />}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <ShoppingCart color="primary" />
                  </StyledBadge>
                </Box>
                <Typography>Total Orders</Typography>
                <Grid container justifyContent={"space-between"} pt={2}>
                  <Grid item>
                    <Typography variant="h3">75</Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <IconButton
                        sx={{
                          p: 0,
                        }}
                      >
                        <ArrowDropUp color="secondary" />
                      </IconButton>
                      <Typography color={"secondary"}>3%</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex" }}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    background: (theme) => theme.palette.success.light,
                    borderRadius: "12px",
                    p: 2,
                    width: "45px",
                  }}
                >
                  <StyledBadge
                    color="secondary"
                    badgeContent={<Add fontSize="16px" />}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <ShoppingBag color="secondary" />
                  </StyledBadge>
                </Box>
                <Typography>Total Delivered</Typography>
                <Grid container justifyContent={"space-between"} pt={2}>
                  <Grid item>
                    <Typography variant="h3">70</Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <IconButton
                        sx={{
                          p: 0,
                        }}
                      >
                        <ArrowDropUp color="error" />
                      </IconButton>
                      <Typography color={"error"}>3%</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex" }}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    background: (theme) => theme.palette.error.light,
                    borderRadius: "12px",
                    p: 2,
                    width: "45px",
                  }}
                >
                  <StyledBadge
                    color="error"
                    badgeContent={<Add fontSize="16px" />}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <ShoppingBag color="error" />
                  </StyledBadge>
                </Box>
                <Typography>Total Cancelled</Typography>
                <Grid container justifyContent={"space-between"} pt={2}>
                  <Grid item>
                    <Typography variant="h3">05</Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <IconButton
                        sx={{
                          p: 0,
                        }}
                      >
                        <ArrowDropUp color="secondary" />
                      </IconButton>
                      <Typography color={"secondary"}>3%</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex" }}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    background: alpha("#FF69B4", 0.08),
                    borderRadius: "12px",
                    p: 2,
                    width: "45px",
                  }}
                >
                  <StyledBadge
                    sx={{ color: "#FF69B4" }}
                    badgeContent={<Add fontSize="16px" />}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <Sell sx={{ color: "#FF69B4" }} />
                  </StyledBadge>
                </Box>
                <Typography>Total Revenue</Typography>
                <Grid container justifyContent={"space-between"} pt={2}>
                  <Grid item>
                    <Typography variant="h3">$12k</Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <IconButton
                        sx={{
                          p: 0,
                        }}
                      >
                        <ArrowDropUp color="error" />
                      </IconButton>
                      <Typography color={"error"}>3%</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={4} sx={{ display: "flex" }}>
            <Card>
              <CardContent>
                <Grid container spacing={3} justifyContent={"space-between"}>
                  <Grid
                    item
                    xs={6}
                    lg={5}
                    container
                    spacing={2.5}
                    direction={"column"}
                  >
                    <Grid item>Net Profit:</Grid>
                    <Grid item>
                      <Typography variant="h2">$ 6759.25</Typography>
                    </Grid>
                    <Grid item>
                      <Box sx={{ display: "flex" }}>
                        <IconButton
                          sx={{
                            p: 0,
                          }}
                        >
                          <ArrowDropUp color="error" />
                        </IconButton>
                        <Typography color={"error"}>3%</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={7}>
                    <OrderChart />
                    <Typography sx={{ fontSize: "10px" }}>
                      The values shown here are rounded off
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={12} md={8} sx={{ display: "flex" }}>
            <Card>
              <Activity />
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <Card>
              <Food />
            </Card>
          </Grid>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={12} md={8} sx={{ display: "flex" }}>
            <Card>
              <CardContent>
                <Typography variant="h6">Recent Orders</Typography>
                <RecentOrders />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <Card>
              <Reviews />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
