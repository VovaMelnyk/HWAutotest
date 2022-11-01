import React from "react";
import Form from "../Form/Form";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";

const Header = ({ setData, stats, setLoader }) => (
  <header>
    <Form setData={setData} setLoader={setLoader} />
    {stats && (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "50px",
          }}
        >
          <AccessTimeIcon
            sx={{
              fill: "#fff",
              fontSize: "25px",
            }}
          />
          <Typography
            level="body1"
            sx={{
              color: "#fff",
            }}
          >
            {(stats?.duration / 1000).toFixed(2)} с
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SummarizeOutlinedIcon
            sx={{
              fill: "#fff",
              fontSize: "25px",
            }}
          />
          <Typography
            level="body1"
            sx={{
              color: "#fff",
            }}
          >
            {stats?.tests}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CheckCircleIcon
            sx={{
              fill: "#c8e6c9",
              fontSize: "25px",
            }}
          />
          <Typography
            level="body1"
            sx={{
              color: "#fff",
            }}
          >
            {stats?.passes}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CancelIcon
            sx={{
              fill: "#ffcdd2",
              fontSize: "25px",
            }}
          />
          <Typography
            level="body1"
            sx={{
              color: "#fff",
            }}
          >
            {stats?.failures}
          </Typography>
        </Box>
      </div>
    )}
  </header>
);

export default Header;
