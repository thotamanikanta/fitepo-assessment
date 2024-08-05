import {
  Avatar,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

const Reviews = () => {
  return (
    <CardContent sx={{ maxHeight: "420px", overflow: "auto" }}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <Typography variant="h6">Customer's Feedback</Typography>
        </Grid>
        <Grid item>
          <div>
            <IconButton
              size="large"
              color="inherit"
              // sx={{ backgroundColor: "#3c475f" }}
            >
              <Avatar
                alt="T"
                src="https://mui.com/static/images/avatar/7.jpg"
                sx={{ width: "32px", height: "32px" }}
              />
            </IconButton>
            Wade Marmen
          </div>
          <Rating name="simple-controlled" defaultValue={4} precision={0.5} />
          <Typography>
            The food was delicious. The quantiy and quality of the food is
            excellent
          </Typography>
          <Divider sx={{ pt: 1 }} />
        </Grid>
        <Grid item>
          <div>
            <IconButton
              size="large"
              color="inherit"
              // sx={{ backgroundColor: "#3c475f" }}
            >
              <Avatar
                alt="T"
                src="https://mui.com/static/images/avatar/6.jpg"
                sx={{ width: "32px", height: "32px" }}
              />
            </IconButton>
            Dr Strange
          </div>
          <Rating name="simple-controlled" defaultValue={3} precision={0.5} />
          <Typography>
            Good food, okay service, dirty ambience. Inefficient service staff.
            Decent quantity for the pricing, tasty and sumptuous food.
          </Typography>
          <Divider sx={{ pt: 1 }} />
        </Grid>
        <Grid item>
          <div>
            <IconButton
              size="large"
              color="inherit"
              // sx={{ backgroundColor: "#3c475f" }}
            >
              <Avatar
                alt="T"
                src="https://mui.com/static/images/avatar/5.jpg"
                sx={{ width: "32px", height: "32px" }}
              />
            </IconButton>
            Black Panther
          </div>
          <Rating name="simple-controlled" defaultValue={4.5} precision={0.5} />
          <Typography>
            The menu offers a wide variety of options, and everything we tried
            was delicious. I especially loved the creative twists on classic
            dishes.
          </Typography>
          <Divider sx={{ pt: 1 }} />
        </Grid>
        <Grid item>
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
            Shikar Dhawan
          </div>
          <Rating name="simple-controlled" defaultValue={3.5} precision={0.5} />
          <Typography>
            The food here is absolutely delicious! Every dish we tried was
            bursting with flavor and cooked to perfection.
          </Typography>
          <Divider sx={{ pt: 1 }} />
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Reviews;
