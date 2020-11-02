import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/StyledComponents'

const DoctorsCard = ( name) => {
  // const {
  //   // avatar,
  //   name,
  // } = cardObject;
  return (
    <div>
        {/* <img src={avatar} alt="user avatar" /> */}
        <h2>{name}</h2>   
    </div>
   
  )
};

DoctorsCard.propTypes = {
  // cardObject: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // avatar: PropTypes.string.isRequired,
  // }).isRequired,
};

export default DoctorsCard;

// import React from 'react';
// import PropTypes from 'prop-types';

// const DoctorDetails = ({
//   name, specialization, professional_statement, practicing_from,className
// }) => (
//   <div className={className}>
//     <p>
//       <span>
//         Name :
//       </span>
//       <span>
//         {name}
//       </span>
//     </p>
//     <hr />
//     <p>
//       <span>
//         Area of Specialization:
//       </span>
//       <span>
//         {specialization}
//       </span>
//     </p>
//     <hr />
//     <p>
//       <span>
//       What I do:
//       </span>
//       <span>
//       {professional_statement}
//       </span> 
//     </p>
//     <hr />
//     <p>
//       <span>
//       Been in the field from:
//       </span>
//       <span>
//       {practicing_from}
//       </span>
//     </p> 
//     <hr />
//   </div>
// );

// DoctorDetails.defaultProps = {
//   className: 'w-50',
// };

// DoctorDetails.propTypes = {
//   name: PropTypes.string.isRequired,
//   specialization: PropTypes.string.isRequired,
//   professional_statement: PropTypes.arrayOf(String).isRequired,
//   practicing_from: PropTypes.string,
// };

// export default DoctorDetails;
