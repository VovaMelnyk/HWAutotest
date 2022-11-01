import { CssVarsProvider } from "@mui/joy/styles";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import "./App.css";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Box from "@mui/joy/Box";

function App() {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  console.log("dataApp", data);
  return (
    <CssVarsProvider>
      <div className="App">
        <Tabs
          defaultValue={1}
          size="lg"
          sx={{
            "--Tabs-gap": "16px",
          }}
        >
          <TabList variant="solid" color="warning">
            <Tab value={1}>ДЗ №1</Tab>
            {/* <Tab value={2}>ДЗ №2</Tab> */}
          </TabList>
          <TabPanel
            value={1}
            sx={{
              paddingTop: "0",
            }}
          >
            <Header setData={setData} stats={data.stats} setLoader={setLoader} />
            {loader ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  paddingTop: "24px",
                }}
              >
                <CircularProgress variant="solid" />
              </Box>
            ) : (
              <Result data={data} />
            )}
          </TabPanel>
          {/* <TabPanel
            value={2}
            sx={{
              paddingTop: "0",
            }}
          >
            <Header />
          </TabPanel> */}
        </Tabs>
      </div>
    </CssVarsProvider>
  );
}

export default App;
