import React, { useState, useEffect } from "react";
import { Content, List, Info, Item, InfoItem, Global } from "./style/app_style";
import { getAxios } from "./components/axios";

const App = () => {
  const [items, setItems] = useState(null);
  const [info, setInfo] = useState(null);

  console.log(info);

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
            <List>
              {items.map((item, index) => {
                return (
                  <Item
                    key={index}
                    active={item.id === info.id ? 1 : 0}
                    onClick={() => setInfo(item)}
                  >
                    <li>{item.id}</li>
                    <li>{item.firstName}</li>
                    <li>{item.lastName}</li>
                    <li>{item.email}</li>
                    <li>{item.phone}</li>
                  </Item>
                );
              })}
            </List>
            <Info>
              {info && (
                <InfoItem>
                  <textarea value={info.description} readOnly />
                  Адрес проживания:
                  <b>{info.address.streetAddress}</b>
                  Город: <b>{info.address.city}</b>
                  Провинция/штат: <b>{info.address.state}</b>
                  Индекс: <b>{info.address.zip}</b>
                </InfoItem>
              )}
            </Info>
          </>
        )}
      </Content>
    </>
  );
};

export default App;
