import React, { useState, useEffect } from "react";
import {
  ContentHeader,
  Search,
  Form,
  Options,
  Logo,
  List,
  Pagination,
  PagLi,
  Item,
} from "../style/header_style";
import logo from "../images/logo.png";
import { chunk } from "lodash";
import { searchItems } from "../util/search";

const Header = ({ items, info, setInfo }) => {
  const [sortItems, setSortItems] = useState(null);
  const [pag, setPag] = useState(0);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("id");
  const [value, setValue] = useState("");

  useEffect(() => {
    setSortItems(chunk(items, 10));
  }, [items]);

  const onSearch = (e) => {
    let arr = searchItems(items, e, search);
    setValue(e);
    if (arr.length === 0) {
      setSortItems(null);
    } else {
      setSortItems(chunk(arr, 10));
    }
  };

  console.log(search);

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
            {["id", "first name", "last name"].map((item, index) => {
              return (
                <li key={index} onClick={() => setSearch(item)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </Options>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Form>
          <input
            type="text"
            value={value}
            placeholder={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </Form>
      </Search>
      <List>
        <Item>
          <li>ID</li>
          <li>FirstName</li>
          <li>LastName</li>
          <li>Email</li>
          <li>Phone</li>
        </Item>
        {sortItems &&
          sortItems[pag].map((item, index) => {
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
      {sortItems && <Pagination>{renderPagination()}</Pagination>}
    </ContentHeader>
  );
};

export default Header;
