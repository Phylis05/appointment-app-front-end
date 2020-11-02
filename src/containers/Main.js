/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  DashBoard, SideBar, Dashy,
} from '../styles/StyledComponents';
import Tittle from '../components/SideBar/Title';
import Footer from '../components/SideBar/Footer';

const Main = ({ history }) => {

  return (
    <DashBoard>
      <SideBar>
        <Tittle />
        <Footer />
      </SideBar>
      <Dashy>
      </Dashy>
    </DashBoard>
  );
};

Main.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;