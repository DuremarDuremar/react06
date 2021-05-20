import React, { useState, useEffect } from "react";
import {
  ContentHeader,
  Search,
  Options,
  List,
  Pagination,
  PagLi,
  Item,
} from "../style/header_style";
import { chunk } from "lodash";

const Header = ({ items, info, setInfo }) => {
  const [sortItems, setSortItems] = useState(null);
  const [pag, setPag] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setSortItems(chunk(items, 10));
  }, [items]);

  console.log(menu);

  if (sortItems) {
    const renderPagination = () => {
      return [...new Array(sortItems.length).keys()].map((item) => {
        return (
          <PagLi
            key={item}
            onClick={() => setPag(item)}
            active={item === pag ? 1 : 0}
          >
            {item + 1}
          </PagLi>
        );
      });
    };

    return (
      <ContentHeader>
        <Search>
          <Options onClick={() => setMenu(!menu)} menu={menu}>
            <i
              className={
                menu
                  ? "fas fa-chevron-circle-up fa-2x"
                  : "fas fa-chevron-circle-down fa-2x"
              }
            ></i>
            <ul>
              <li>id</li>
              <li>first name</li>
              <li>last name</li>
            </ul>
          </Options>
        </Search>
        <List>
          <Item>
            <li>ID</li>
            <li>FirstName</li>
            <li>LastName</li>
            <li>Email</li>
            <li>Phone</li>
          </Item>
          {sortItems[pag].map((item, index) => {
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
        <Pagination>{renderPagination()}</Pagination>
      </ContentHeader>
    );
  } else {
    return <p>55</p>;
  }
};

export default Header;
