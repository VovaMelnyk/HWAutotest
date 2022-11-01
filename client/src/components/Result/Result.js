import React, { useMemo } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Result.css";

const Result = ({ data }) => {
  const result = useMemo(
    () =>
      data?.tests
        ?.map((el, i, arr) => ({
          title: el.title[0],
          tests: arr.reduce((acc, e, i, a) => {
            if (el.title[0] === e.title[0]) {
              return [...acc, { status: el.state, duration: el.attempts[0].duration, text: el.title[1] }];
            }
            return acc;
          }, []),
        }))
        .map((el) => ({ ...el, tests: [el.tests[0]] })),
    [data?.tests]
  );

  //   const tests = useMemo(() => uniqBy(result, (obj) => obj.title), [result]);

  console.log("result", result);

  return (
    <div className="container">
      {result?.map((el) => (
        <article>
          {/* <Typography
            level="h4"
            sx={{
              color: "#000",
            }}
          >
            {el.title}
          </Typography> */}
          <ul className="test-list">
            {el.tests.map((e) =>
              e.status === "passed" ? (
                <li className="test-item">
                  <CheckCircleIcon
                    sx={{
                      fontSize: "25px",
                      fill: "#4caf50",
                    }}
                  />{" "}
                  {e.text}
                </li>
              ) : (
                <li className="test-item--error">
                  <CancelIcon
                    sx={{
                      fontSize: "25px",
                      fill: "#f44336",
                    }}
                  />{" "}
                  {e.text}
                </li>
              )
            )}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Result;
