import React, { useState } from "react";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import axios from "axios";

import "./Form.css";
const Form = ({ setData, setLoader }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => setInput(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    axios
      .post("http://localhost:5000/api/postHw", { url: input })
      .then((result) => setData(result.data?.runs?.[0]))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField placeholder="Paste homework URL" size="lg" variant="outlined" onChange={onChange} />
      <Button
        color="warning"
        onClick={function () {}}
        variant="solid"
        size="lg"
        type="submit"
        sx={{
          marginLeft: "18px",
        }}
      >
        Check HW{" "}
      </Button>
    </form>
  );
};

export default Form;
