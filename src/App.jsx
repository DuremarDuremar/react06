import React, { useState, useEffect } from "react";
import { Content, List, Info, Item, Global } from "./style/app_style";
import { getAxios } from "./components/axios";

const App = () => {
  const [items, setItems] = useState(null);

  console.log(items);

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
                  <Item key={index}>
                    <li>{item.id}</li>
                    <li>{item.firstName}</li>
                    <li>{item.lastName}</li>
                    <li>{item.email}</li>
                    <li>{item.phone}</li>
                  </Item>
                );
              })}
            </List>
            <Info>44</Info>
          </>
        )}
      </Content>
    </>
  );
};

export default App;

// console.log(getAxios());
