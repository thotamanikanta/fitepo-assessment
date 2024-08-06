import React from "react";
import PropTypes from "prop-types";
import Popover from "@mui/material/Popover";
import { IconButton } from "@mui/material";

const CustomPopover = ({ triggerButton, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = React.useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <IconButton
        sx={{
          backgroundColor: "#039092",
          p: 1,
          "&:hover": {
            background: "#039092",
          },
        }}
        onClick={handleClick}
      >
        {triggerButton}
      </IconButton>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClick={() => {
          handleClose();
        }}
      >
        {children}
      </Popover>
    </>
  );
};

CustomPopover.propTypes = {
  open: PropTypes.bool,
  triggerButton: PropTypes.node,
  children: PropTypes.node,
};

export default CustomPopover;
