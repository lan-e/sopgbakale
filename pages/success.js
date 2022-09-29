import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCardItems, setTotalPrice, setTotalQuantities } = useStateContext();

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Hvala Vam na narudžbi!</h2>
        <p className="email-msg">Provjerite vlastiti email za račun.</p>
        <p className="description">
          Za sva pitanja javite nam se na mail
          <a className="email" href="mailto:opg.hrvojebakale@gmail.com">
            opg.hrvojebakale@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Nastavite kupnju
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
