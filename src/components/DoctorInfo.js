import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ApplicationDetails.module.css';
// import {
//   backendLikeDestroyAction,
//   backendLikeChangeAction,
//   backendLikeCreateAction,
// } from '../actions/index';
// import GoBack from '../assets/icons/pagePrev.png';

const DoctorsInfo = ({
  name,
  specialization,
  practice_from,
  professional_statement,
}) =>{

  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.menuIcon} />
        <Link
          to={{
            pathname: '/',
          }}
        >
          Home
          {/* <GoBack className={styles.goBack} /> */}
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeading}>
          <h1>{name}</h1>
          <h4>
            {' '}
            Specialization:
            {specialization}
          </h4>
          <h4>
            Professional Statement:
            {professional_statement}
          </h4>
          <h4>
            Practicing from:
            {practice_from}
          </h4>

         
        </div>
      </div>
    </div>
  );
};

export default DoctorsInfo;
