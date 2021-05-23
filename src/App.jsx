import React, { useState, useEffect } from "react";
import { Content, Global } from "./style/app_style";
import Header from "./components/header";
import Footer from "./components/footer";
import { getAxios } from "./components/axios";
import Inputs from "./components/inputs";
import Server from "./components/data";
import { useMediaQuery } from "react-responsive";

const dataServer = new Server();

const App = () => {
  const [items, setItems] = useState(null);
  const [info, setInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [range, setRange] = useState("0");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  // console.log("range", range);
  // console.log("items", items);

  // console.log(error);

  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  const res700 = useMediaQuery({ query: "(min-width: 700px)" });
  const res500 = useMediaQuery({ query: "(min-width: 500px)" });

  useEffect(() => {
    setLoader(true);
    getAxios(range)
      .then((response) => {
        setLoader(false);
        setItems(response);
        setError(null);
      })
      .catch((error) => {
        setLoader(false);
        setError(error);
      });
  }, [range]);

  useEffect(() => {
    if (error) {
      dataServer.getServer().then((data) => {
        setLoader(false);
        setItems(data);
      });
    }
  }, [error]);

  return (
    <>
      <Global></Global>
      <Content res700={res700}>
        {items && (
          <>
            <Header
              items={items}
              info={info}
              setInfo={setInfo}
              range={range}
              setRange={setRange}
              loader={loader}
              error={error}
              res1000={res1000}
              res700={res700}
            />
            <Footer
              info={info}
              setModal={setModal}
              res1000={res1000}
              res700={res700}
              res500={res500}
            />
            <Inputs
              modal={modal}
              setModal={setModal}
              items={items}
              setItems={setItems}
            />
          </>
        )}
      </Content>
    </>
  );
};

export default App;
