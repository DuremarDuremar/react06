import React, { useState, useEffect } from "react";
import {
  Content,
  Footer,
  List,
  Add,
  Info,
  Item,
  InfoItem,
  Global,
} from "./style/app_style";
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
              <Item>
                <li>ID</li>
                <li>FirstName</li>
                <li>LastName</li>
                <li>Email</li>
                <li>Phone</li>
              </Item>
              {items.map((item, index) => {
                return (
                  <Item
                    key={index}
                    active={info && item.id === info.id ? 1 : 0}
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
            <Footer>
              <Add>
                <button>
                  <i className="fas fa-user-plus fa-4x"></i>
                </button>
              </Add>
              <Info>
                {info && (
                  <InfoItem>
                    <li>
                      Выбран пользователь&nbsp;
                      <b>
                        {info.firstName}&nbsp;
                        {info.lastName}
                      </b>
                    </li>
                    <li>
                      Описание:&nbsp;
                      <textarea
                        value={info.description}
                        readOnly
                        cols="40"
                        rows="3"
                      />
                    </li>
                    <li>
                      <span>
                        Адрес проживания: &nbsp;
                        <b>{info.address.streetAddress}</b>
                      </span>
                      <span>
                        &nbsp; Город:&nbsp;<b>{info.address.city}</b>
                      </span>
                    </li>

                    <li>
                      <span>
                        Провинция/штат: &nbsp;<b>{info.address.state}</b>
                      </span>
                      <span>
                        &nbsp; Индекс: <b>{info.address.zip}</b>
                      </span>
                    </li>
                  </InfoItem>
                )}
              </Info>
            </Footer>
          </>
        )}
      </Content>
    </>
  );
};

export default App;
