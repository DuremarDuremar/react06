import React, { useState, useEffect } from "react";
import { Content, Global } from "./style/app_style";
import Header from "./components/header";
import Footer from "./components/footer";
import { getAxios } from "./components/axios";
import Inputs from "./components/inputs";

const App = () => {
  const [items, setItems] = useState(null);
  const [info, setInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [range, setRange] = useState("0");
  const [loader, setLoader] = useState(false);
  // console.log("range", range);
  // console.log("items", items);

  console.log(loader);

  useEffect(() => {
    setLoader(true);
    getAxios(range).then((response) => {
      setLoader(false);
      setItems(response);
    });
  }, [range]);

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
