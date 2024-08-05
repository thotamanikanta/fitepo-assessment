import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

function createData(customerName, orderNo, amount, status) {
  return { customerName, orderNo, amount, status };
}

const rows = [
  createData(
    <div>
      <IconButton
        size="large"
        color="inherit"
        // sx={{ backgroundColor: "#3c475f" }}
      >
        <Avatar
          alt="T"
          src="https://mui.com/static/images/avatar/2.jpg"
          sx={{ width: "32px", height: "32px" }}
        />
      </IconButton>
      Wade Marmen
    </div>,
    984326,
    5423.0,
    "Delivered"
  ),
  createData(
    <div>
      <IconButton
        size="large"
        color="inherit"
        // sx={{ backgroundColor: "#3c475f" }}
      >
        <Avatar
          alt="T"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: "32px", height: "32px" }}
        />
      </IconButton>
      Wade Marmen
    </div>,
    234357,
    92531.0,
    "Delivered"
  ),
  createData(
    <div>
      <IconButton
        size="large"
        color="inherit"
        // sx={{ backgroundColor: "#3c475f" }}
      >
        <Avatar
          alt="T"
          src="https://mui.com/static/images/avatar/2.jpg"
          sx={{ width: "32px", height: "32px" }}
        />
      </IconButton>
      Chris Hams
    </div>,
    3545262,
    12336.0,
    "Cancelled"
  ),
  createData(
    <div>
      <IconButton
        size="large"
        color="inherit"
        // sx={{ backgroundColor: "#3c475f" }}
      >
        <Avatar
          alt="T"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: "32px", height: "32px" }}
        />
      </IconButton>
      Tony Stark
    </div>,
    343405,
    25120.0,
    "Cancelled"
  ),
  createData(
    <div>
      <IconButton
        size="large"
        color="inherit"
        // sx={{ backgroundColor: "#3c475f" }}
      >
        <Avatar
          alt="T"
          src="https://mui.com/static/images/avatar/4.jpg"
          sx={{ width: "32px", height: "32px" }}
        />
      </IconButton>
      Juliya
    </div>,
    35346,
    7850.0,
    "Delivered"
  ),
];

const RecentOrders = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order no</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                {row.status === "Delivered" ? (
                  <Typography
                    variant="body1"
                    variantMapping={{ body1: "span" }}
                    sx={{
                      background: (theme) => theme.palette.secondary.main,
                      borderRadius: "10px",
                      px: 2,
                      py: "3px",
                    }}
                  >
                    Delivered
                  </Typography>
                ) : (
                  <Typography
                    variant="body1"
                    variantMapping={{ body1: "span" }}
                    sx={{
                      background: (theme) => theme.palette.error.main,
                      borderRadius: "10px",
                      px: 2,
                      py: "3px",
                    }}
                  >
                    Cancelled
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentOrders;
