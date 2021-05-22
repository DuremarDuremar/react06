import React, { useState, useEffect } from "react";
import {
  ContentHeader,
  Search,
  Left,
  Form,
  Options,
  Logo,
  Range,
  Title,
  List,
  Pagination,
  PagLi,
  Item,
  ItemLi,
} from "../style/header_style";
import logo from "../images/logo.png";
import { chunk, sortBy } from "lodash";
import { searchItems } from "../util/search";

const Header = ({ items, info, setInfo, range, setRange }) => {
  const [sortItems, setSortItems] = useState(null);
  const [pag, setPag] = useState(0);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("id");
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("id");
  const [sortArrow, setSortArrow] = useState(false);
  const [visibl, setVisibl] = useState([0, 1, 2, 3, 4]);

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

  console.log("vis", visibl);
  console.log("pag", pag);
  // console.log(sortItems.length - 1);

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
          none={!visibl.includes(item)}
        >
          {item + 1}
        </PagLi>
      );
    });
  };

  const slider = (arg, double) => {
    if (arg === "next") {
      setPag((prev) => (double ? prev + 10 : prev + 1));
      if (pag === visibl[visibl.length - 1] && !double) {
        setVisibl((prev) => {
          return prev.map((item) => item + 1);
        });
      }
      if (double) {
        setVisibl((prev) => {
          return prev.map((item) => item + 10);
        });
      }
    } else {
      setPag((prev) => (double ? prev - 10 : prev - 1));
      if (pag === visibl[0] && !double) {
        setVisibl((prev) => {
          return prev.map((item) => item - 1);
        });
      }
      if (double) {
        setVisibl((prev) => {
          return prev.map((item) => item - 10);
        });
      }
    }
  };

  return (
    <ContentHeader>
      <Search>
        <Left>
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
        </Left>
        <Range>
          <input
            type="range"
            max="1"
            min="0"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </Range>
        <Title>
          <div>
            <h1> Some</h1>
            <span>List</span>
          </div>
        </Title>
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
      {sortItems && (
        <Pagination>
          {Number(range) && visibl[0] !== 0 ? (
            <>
              {visibl[0] - 10 > 0 && (
                <i
                  className="fas fa-angle-double-left fa-2x"
                  onClick={() => slider("prev", "double")}
                ></i>
              )}
              <i
                className="fas fa-angle-left fa-2x"
                onClick={() => slider("prev")}
              ></i>
            </>
          ) : null}
          {renderPagination()}
          {Number(range) &&
          visibl[visibl.length - 1] !== sortItems.length - 1 ? (
            <>
              <i
                className="fas fa-angle-right fa-2x"
                onClick={() => slider("next")}
              ></i>
              {visibl[visibl.length - 1] + 10 < sortItems.length - 1 && (
                <i
                  className="fas fa-angle-double-right fa-2x"
                  onClick={() => slider("next", "double")}
                ></i>
              )}
            </>
          ) : null}
        </Pagination>
      )}
    </ContentHeader>
  );
};

export default Header;
