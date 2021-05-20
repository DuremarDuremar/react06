import React from "react";
import { ContentHeader, List, Pagination, Item } from "../style/header_style";

const Header = ({ items, info, setInfo }) => {
  return (
    <ContentHeader>
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
      <Pagination>555</Pagination>
    </ContentHeader>
  );
};

export default Header;
