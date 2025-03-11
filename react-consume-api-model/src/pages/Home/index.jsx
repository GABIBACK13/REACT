import React from "react";
import { FaPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

import { NavList, ListItem, Text, Main, MainHeader } from "./styled-home.js";
import colors from "../../config/colors.js";

export default function Home() {
  return (
    <Main className="home ">
      <MainHeader className="home__header">
        <h1>Bem Vindo nome </h1>
        <p>This is the home page.</p>
      </MainHeader>
      <div className="home__content">
        <div className="home__navigation">
          <NavList>
            <ListItem>
              <Link to="/students">
                <Text>
                  <FaUsers color={colors.primary} size={48} />
                </Text>
                <Text>Students</Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link to="/student">
                <Text>
                  <FaPlus color={colors.primary} size={32} />
                  <FaUsers color={colors.primary} size={48} />
                </Text>
                <Text>ADD student</Text>
              </Link>
            </ListItem>
          </NavList>
        </div>
      </div>
    </Main>
  );
}
