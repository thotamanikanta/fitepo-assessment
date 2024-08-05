import {
  Autocomplete,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const options = [
  { value: "weekly", label: "weekly" },
  { value: "monthly", label: "monthly" },
];
const weekly = [
  {
    name: "5",
    active: 4000,
  },
  {
    name: "6",
    active: 5500,
  },
  {
    name: "7",
    active: 6000,
  },
  {
    name: "8",
    active: 4500,
  },
  {
    name: "9",
    active: 5000,
  },
  {
    name: "10",
    active: 7000,
  },
  {
    name: "11",
    active: 9000,
  },
  {
    name: "12",
    active: 4000,
  },
  {
    name: "13",
    active: 2000,
  },
  {
    name: "14",
    active: 11000,
  },
  {
    name: "15",
    active: 5500,
  },
  {
    name: "16",
    active: 4500,
  },
  {
    name: "17",
    active: 7500,
  },
  {
    name: "18",
    active: 6000,
  },
  {
    name: "19",
    active: 7500,
  },
  {
    name: "20",
    active: 6500,
  },
  {
    name: "21",
    active: 5300,
  },
  {
    name: "22",
    active: 5000,
  },
  {
    name: "23",
    active: 4000,
  },
];
const monthly = [
  {
    name: "Jan",
    active: 4000,
  },
  {
    name: "Feb",
    active: 5500,
  },
  {
    name: "Mar",
    active: 6000,
  },
  {
    name: "Apr",
    active: 4500,
  },
  {
    name: "May",
    active: 5000,
  },
  {
    name: "June",
    active: 7000,
  },
  {
    name: "July",
    active: 9000,
  },
  {
    name: "Aug",
    active: 11000,
  },
  {
    name: "Sep",
    active: 2000,
  },
  {
    name: "Oct",
    active: 8000,
  },
  {
    name: "Nov",
    active: 5500,
  },
  {
    name: "Nov",
    active: 2500,
  },
];
const Activity = () => {
  const [duration, setDuration] = useState(options[0]);
  const [data, setData] = useState(weekly);
  return (
    <CardContent>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Grid item>
          <Typography variant="h4" color="primary" sx={{ pt: 1 }}>
            Activity
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Autocomplete
            sx={{ width: "150px" }}
            options={options}
            value={duration}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            disableClearable={true}
            onChange={(event, value) => {
              setDuration(value);
              if (value.value === "weekly") setData(weekly);
              else setData(monthly);
            }}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </Grid>
      </Grid>
      <ResponsiveContainer height={200}>
        <BarChart width={730} height={150} data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="active" fill="#8884d8" radius={[10, 10, 10, 10]} />
          {/* <Bar dataKey="active" fill="#82ca9d" radius={[10, 0, 0, 10]} /> */}
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  );
};

export default Activity;
