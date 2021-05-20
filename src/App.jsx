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

  // console.log(info);

  useEffect(() => {
    getAxios().then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <>
      <Global></Global>
      <Content>
        {items && (
          <>
            <Header items={items} info={info} setInfo={setInfo} />
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
