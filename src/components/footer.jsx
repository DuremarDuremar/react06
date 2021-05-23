import React from "react";
import { ContentFooter, Add, Info, InfoItem } from "../style/footer_style";

const Footer = ({ info, setModal, res500, res700, res1000 }) => {
  return (
    <ContentFooter res500={res500}>
      <Add res500={res500}>
        <button onClick={() => setModal(true)}>
          <i className="fas fa-user-plus fa-4x"></i>
        </button>
      </Add>
      <Info res1000={res1000} res500={res500}>
        {info && (
          <InfoItem res700={res700}>
            <li>
              {res700 && "Выбран пользователь"}&nbsp;
              <b>
                {info.firstName}&nbsp;
                {info.lastName}
              </b>
            </li>
            <li>
              {res700 && "Описание:"}&nbsp;
              <textarea
                value={info.description}
                readOnly
                cols={res700 ? "40" : "20"}
                rows="3"
              />
            </li>
            <li>
              <span>
                Адрес проживания: &nbsp; {!res700 && <br />}
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
