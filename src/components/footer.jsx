import React from "react";
import { ContentFooter, Add, Info, InfoItem } from "../style/footer_style";

const Footer = ({ info, setModal }) => {
  return (
    <ContentFooter>
      <Add>
        <button onClick={() => setModal(true)}>
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
              <textarea value={info.description} readOnly cols="40" rows="3" />
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
    </ContentFooter>
  );
};

export default Footer;
