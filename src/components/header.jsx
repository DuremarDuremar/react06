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
  ItemLi,
} from "../style/header_style";
import logo from "../images/logo.png";
import { chunk, sortBy } from "lodash";
import { searchItems } from "../util/search";

const Header = ({ items, info, setInfo }) => {
  const [sortItems, setSortItems] = useState(null);
  const [pag, setPag] = useState(0);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("id");
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("id");
  const [sortArrow, setSortArrow] = useState(false);

  useEffect(() => {
    setSortItems(chunk(items, 10));
  }, [items]);

  useEffect(() => {
    setSortItems((prev) => {
      return sortArrow
        ? chunk(sortBy(prev.flat(), [sort]).reverse(), 10)
        : chunk(sortBy(prev.flat(), [sort]), 10);
    });
  }, [sort, sortArrow]);

  const onSearch = (e) => {
    let arr = searchItems(items, e, search);
    setValue(e);
    if (arr.length === 0) {
      setSortItems(null);
    } else {
      setSortItems(chunk(arr, 10));
    }
  };

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
          {["id", "firstName", "lastName", "email", "phone"].map(
            (item, index) => {
              return (
                <ItemLi key={index} change={item === sort ? 1 : 0}>
                  <p
                    onClick={() => {
                      setSortArrow(!sortArrow);
                      setSort(item);
                    }}
                  >
                    <span>{item}</span> <br />
                    <i
                      className={
                        sortArrow
                          ? "fas fa-caret-up fa-lg"
                          : "fas fa-caret-down fa-lg"
                      }
                    ></i>
                  </p>
                </ItemLi>
              );
            }
          )}
        </Item>
        {sortItems &&
          sortItems[pag].map((item, index) => {
            return (
              <Item
                key={index}
                active={info && item.id === info.id ? 1 : 0}
                onClick={() => setInfo(item)}
              >
                <ItemLi>{item.id}</ItemLi>
                <ItemLi>{item.firstName}</ItemLi>
                <ItemLi>{item.lastName}</ItemLi>
                <ItemLi>{item.email}</ItemLi>
                <ItemLi>{item.phone}</ItemLi>
              </Item>
            );
          })}
      </List>
      {sortItems && <Pagination>{renderPagination()}</Pagination>}
    </ContentHeader>
  );
};

export default Header;
