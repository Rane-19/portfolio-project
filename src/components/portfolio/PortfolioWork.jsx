// import React, { useState } from “react”;
// import { FontAwesomeIcon } from “@fortawesome/react-fontawesome”;
// const WorkItems = ({ item }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const openModal = () => {
//     setModalVisible(true);
//   };
//   const closeModal = () => {
//     setModalVisible(false);
//   };
//   return (
//     <div className=“work__card” key={item.id}>
//       <img src={item.image} alt=“” className=“work__img” />
//       <h3 className=“work__title”>{item.title}</h3>
//       <span className=“work__button” onClick={openModal} >
//         View more
//         <i className=“bx bx-right-arrow-alt work__button-icon”></i>
//       </span>
//       {modalVisible && (
//         <div className=“work__modal active-modal”>
//           <div className=“work__modal-content”>
//             <i className=“uil uil-times work__modal-close” onClick={closeModal}></i>
//             {/* The content display on each modal:point_down: */}
//             {/* <h3 className=“work__modal-title”>{item.title}</h3> */}
//             <section className=“work__layout”>
//               <img src={item.image} alt=“” className=“modal__img” />
//               <div className=“title_and_ul”>
//                 <button className=“stack_used”>Stacks I used</button>
//                 <ul className=“tools__list”>
//                     {item.tools.map((tool, index) => (
//                       <li key={index} className=“tools__icon”>
//                         {tool}
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             </section>
//             <p className=“work__intro”>{item.intro}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default PortfolioWork;