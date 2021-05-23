import React, { useState, useEffect } from "react";
import { Content, Global } from "./style/app_style";
import Header from "./components/header";
import Footer from "./components/footer";
import { getAxios } from "./components/axios";
import Inputs from "./components/inputs";
import Server from "./components/data";

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
      <Content>
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
            />
            <Footer info={info} setModal={setModal} />
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
