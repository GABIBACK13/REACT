import React from "react";
import { FaPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authState } from "../../store/Auth/atoms";

import { NavList, ListItem, Text, Main, MainHeader } from "./styled-home.js";
import colors from "../../config/colors.js";
import { useRecoilValue } from "recoil";

export default function Home() {
  const auth = useRecoilValue(authState);
  let title = "Gabi School";
  let subtitle = "You need to login first";
  if (auth.isAuthenticated) {
    title = `Welcome ${auth.user.nome}`;
    subtitle = `Logged in as ${auth.user.email}`;
  }

  return (
    <Main className="home ">
      <MainHeader className="home__header">
        <h1>{title}</h1>
        <p>{subtitle}.</p>
      </MainHeader>
      <div className="home__content">
        <div className="home__navigation">
          <NavList>
            <Link to="/students">
              <ListItem>
                <Text>
                  <FaUsers color={colors.primary} size={48} />
                </Text>
                <Text>Students</Text>
              </ListItem>
            </Link>

            <Link to="/student">
              <ListItem>
                <Text>
                  <FaPlus color={colors.primary} size={32} />
                  <FaUsers color={colors.primary} size={48} />
                </Text>
                <Text>ADD student</Text>
              </ListItem>
            </Link>
          </NavList>
        </div>
      </div>
    </Main>
  );
}
