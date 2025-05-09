
// import React, { Component } from "react";
// import { Modal } from "react-bootstrap";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

// // Achievement Details Modal Component with improved styling
// class AchievementDetailsModal extends Component {
//   render() {
//     if (this.props.data) {
//       const achievement = this.props.data;
//       const images = achievement.images || [];
      
//       // Create slider if there are multiple images
//       const achievementSlider = (
//         <AwesomeSlider
//           animation="cubeAnimation"
//           bullets={false}
//           className="achievement-slider"
//         >
//           {images.map((elem, i) => (
//             <div key={i} data-src={elem} />
//           ))}
//         </AwesomeSlider>
//       );

//       return (
//         <Modal
//           {...this.props}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//           className="modal-inside"
//         >
//           <span onClick={this.props.onHide} className="modal-close">
//             <i className="fas fa-times fa-2x close-icon"></i>
//           </span>
//           <Modal.Body className="p-0">
//             <div className="achievement-modal-content">
//               <div className="achievement-modal-header">
//                 <h3 className="achievement-modal-title">{achievement.title}</h3>
//               </div>
//               <div className="achievement-modal-body">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="achievement-image-container mb-4">
//                       {images.length > 1 ? (
//                         achievementSlider
//                       ) : (
//                         images.length === 1 && (
//                           <img
//                             src={images[0]}
//                             alt={achievement.title}
//                             className="img-fluid rounded"
//                           />
//                         )
//                       )}
//                     </div>
//                     <div className="achievement-description">
//                       <p>{achievement.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//         </Modal>
//       );
//     }
//     return null;
//   }
// }

// // Main Achievements Component with improved styling
// class Achievements extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deps: {},
//       detailsModalShow: false,
//     };
//   }

//   render() {
//     let detailsModalShow = (data) => {
//       this.setState({ detailsModalShow: true, deps: data });
//     };

//     let detailsModalClose = () => this.setState({ detailsModalShow: false });
    
//     let achievements = [];
//     let sectionName = "Achievements"; // Default name
    
//     if (this.props.resumeAchievements && this.props.resumeBasicInfo) {
//       // Check for section name with fallback for typo in property name
//       if (this.props.resumeBasicInfo.section_name) {
//         sectionName = this.props.resumeBasicInfo.section_name.achievements || 
//                       this.props.resumeBasicInfo.section_name.achivements || 
//                       "Achievements";
//       }
      
//       // Ensure we're working with an array and map only if it's valid
//       if (Array.isArray(this.props.resumeAchievements)) {
//         achievements = this.props.resumeAchievements.map((achievement, index) => {
//           // Skip if achievement or images are missing
//           if (!achievement || !achievement.images || !achievement.images.length) {
//             return null;
//           }
          
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mb-4"
//               key={achievement.title || `achievement-${index}`}
//             >
//               <div 
//                 className="achievement-card"
//                 onClick={() => detailsModalShow(achievement)}
//               >
//                 <div className="achievement-img-container">
//                   <img
//                     src={achievement.images[0]}
//                     alt={achievement.title}
//                     className="achievement-img"
//                   />
//                   <div className="achievement-overlay">
//                     <div className="achievement-overlay-content">
//                       <i className="fas fa-search-plus fa-2x"></i>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="achievement-info">
//                   <h5 className="achievement-title">{achievement.title}</h5>
//                 </div>
//               </div>
//             </div>
//           );
//         }).filter(item => item !== null); // Filter out any null items
//       }
//     }

//     return (
//       <section id="achievements" className="section-padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center mb-4">
//               <h2 className="section-title">{sectionName}</h2>
//               <div className="section-divider"></div>
//             </div>
//           </div>
          
//           <div className="row">{achievements}</div>
//         </div>
        
//         <AchievementDetailsModal
//           show={this.state.detailsModalShow}
//           onHide={detailsModalClose}
//           data={this.state.deps}
//         />
        
//         {/* Add the necessary CSS for clean UI */}
//         <style jsx>{`
//           .section-padding {
//             padding: 80px 0;
//           }
          
//           .section-title {
//             font-size: 2.5rem;
//             font-weight: 700;
//             margin-bottom: 10px;
//             color: #333;
//           }
          
//           .section-divider {
//             height: 3px;
//             width: 60px;
//             background: #4a89dc;
//             margin: 0 auto 30px;
//           }
          
//           .achievement-card {
//             background: #fff;
//             border-radius: 8px;
//             overflow: hidden;
//             box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//             transition: all 0.3s ease;
//             cursor: pointer;
//             height: 100%;
//           }
          
//           .achievement-card:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 15px 30px rgba(0,0,0,0.15);
//           }
          
//           .achievement-img-container {
//             position: relative;
//             overflow: hidden;
//             height: 220px;
//           }
          
//           .achievement-img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             transition: transform 0.5s ease;
//           }
          
//           .achievement-card:hover .achievement-img {
//             transform: scale(1.05);
//           }
          
//           .achievement-overlay {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: rgba(74, 137, 220, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             opacity: 0;
//             transition: opacity 0.3s ease;
//           }
          
//           .achievement-card:hover .achievement-overlay {
//             opacity: 1;
//           }
          
//           .achievement-overlay-content {
//             color: white;
//           }
          
//           .achievement-info {
//             padding: 20px;
//             background: white;
//           }
          
//           .achievement-title {
//             margin: 0;
//             font-weight: 600;
//             color: #333;
//             font-size: 1.1rem;
//             line-height: 1.4;
//           }
          
//           .achievement-modal-content {
//             padding: 0;
//           }
          
//           .achievement-modal-header {
//             padding: 20px 25px;
//             border-bottom: 1px solid #eee;
//           }
          
//           .achievement-modal-title {
//             margin: 0;
//             font-weight: 600;
//             color: #333;
//           }
          
//           .achievement-modal-body {
//             padding: 25px;
//           }
          
//           .achievement-image-container {
//             border-radius: 8px;
//             overflow: hidden;
//             box-shadow: 0 5px 15px rgba(0,0,0,0.1);
//           }
          
//           .achievement-description {
//             line-height: 1.7;
//             color: #555;
//           }
          
//           .modal-close {
//             position: absolute;
//             top: 15px;
//             right: 15px;
//             z-index: 1050;
//             cursor: pointer;
//             color: #555;
//             transition: color 0.3s ease;
//           }
          
//           .modal-close:hover {
//             color: #000;
//           }
          
//           .achievement-slider {
//             border-radius: 8px;
//           }
//         `}</style>
//       </section>
//     );
//   }
// }

// export default Achievements;




import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

// Achievement Details Modal Component
class AchievementDetailsModal extends Component {
  render() {
    if (!this.props.data) return null;

    const achievement = this.props.data;
    const images = achievement.images || [];

    // Create slider if there are multiple images
    const achievementSlider = (
      <AwesomeSlider animation="cubeAnimation" bullets={false}>
        {images.map((elem, i) => (
          <div key={i} data-src={elem} />
        ))}
      </AwesomeSlider>
    );

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-2x close-icon"></i>
        </span>
        <Modal.Body className="p-0">
          <div className="achievement-modal-content">
            <div className="achievement-modal-header">
              <h3 className="achievement-modal-title">{achievement.title}</h3>
            </div>
            <div className="achievement-modal-body">
              <div className="achievement-image-container mb-4">
                {images.length > 1 ? (
                  achievementSlider
                ) : (
                  images.length === 1 && (
                    <img
                      src={images[0]}
                      alt={achievement.title}
                      className="img-fluid rounded"
                    />
                  )
                )}
              </div>
              <div className="achievement-description">
                <p>{achievement.description}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

// Main Achievements Component with 3D Carousel
class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      activeIndex: 0,
    };
  }

  // Move to previous achievement
  prevAchievement = () => {
    const validAchievements = this.getValidAchievements();
    if (validAchievements.length === 0) return;

    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex - 1 + validAchievements.length) % validAchievements.length,
    }));
  };

  // Move to next achievement
  nextAchievement = () => {
    const validAchievements = this.getValidAchievements();
    if (validAchievements.length === 0) return;

    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % validAchievements.length,
    }));
  };

  // Get achievements that have images
  getValidAchievements = () => {
    if (!this.props.resumeAchievements || !Array.isArray(this.props.resumeAchievements)) {
      return [];
    }

    return this.props.resumeAchievements.filter(
      (achievement) => achievement && achievement.images && achievement.images.length
    );
  };

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    let sectionName = "Achievements"; // Default name
    const validAchievements = this.getValidAchievements();

    if (this.props.resumeBasicInfo && this.props.resumeBasicInfo.section_name) {
      sectionName = this.props.resumeBasicInfo.section_name.achievements ||
        this.props.resumeBasicInfo.section_name.achivements || "Achievements";
    }

    // Calculate previous, current and next indices
    const currentIndex = this.state.activeIndex;
    const prevIndex = (currentIndex - 1 + validAchievements.length) % validAchievements.length;
    const nextIndex = (currentIndex + 1) % validAchievements.length;

    return (
      <section id="achievements" className="achievements-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="section-title">{sectionName}</h2>
              <div className="section-divider"></div>
            </div>
          </div>

          {validAchievements.length > 0 && (
            <div className="row">
              <div className="col-md-12">
                <div className="carousel-container">
                  {/* Navigation buttons */}
                  <button
                    className="carousel-arrow carousel-prev"
                    onClick={this.prevAchievement}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  <div className="carousel-stage">
                    {/* Previous card (visible but behind) */}
                    {validAchievements.length > 1 && (
                      <div className="carousel-card carousel-card-prev">
                        <img
                          src={validAchievements[prevIndex].images[0]}
                          alt={validAchievements[prevIndex].title}
                          className="carousel-card-img"
                        />
                      </div>
                    )}

                    {/* Current card (in focus) */}
                    <div
                      className="carousel-card carousel-card-active"
                      onClick={() => detailsModalShow(validAchievements[currentIndex])}
                    >
                      <img
                        src={validAchievements[currentIndex].images[0]}
                        alt={validAchievements[currentIndex].title}
                        className="carousel-card-img"
                      />
                      <div className="carousel-card-info">
                        <h3 className="carousel-card-title">{validAchievements[currentIndex].title}</h3>
                        <span className="carousel-card-details">Click for details</span>
                      </div>
                    </div>

                    {/* Next card (visible but behind) */}
                    {validAchievements.length > 1 && (
                      <div className="carousel-card carousel-card-next">
                        <img
                          src={validAchievements[nextIndex].images[0]}
                          alt={validAchievements[nextIndex].title}
                          className="carousel-card-img"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    className="carousel-arrow carousel-next"
                    onClick={this.nextAchievement}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>

                  {/* Indicator dots */}
                  <div className="carousel-indicators">
                    {validAchievements.map((_, index) => (
                      <span
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => this.setState({ activeIndex: index })}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <AchievementDetailsModal
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
          data={this.state.deps}
        />

        <style jsx>{`
          .achievements-section {
            padding: 80px 0;
            background-color: #f8f9fa;
            transition: background-color 0.3s ease;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
            transition: color 0.3s ease;
          }

          .section-divider {
            height: 3px;
            width: 60px;
            background: #4a89dc;
            margin: 0 auto 40px;
            transition: background-color 0.3s ease;
          }

          .carousel-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;
            position: relative;
            margin-bottom: 30px;
          }

          .carousel-stage {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            perspective: 1000px;
          }

          .carousel-card {
            position: absolute;
            width: calc(100% * (9 / 16)); /* Maintain 16:9 aspect ratio */
            height: 100%;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            transition: all 0.5s ease;
            transform-style: preserve-3d;
          }

          .carousel-card-prev {
            transform: translateX(-50%) scale(0.8) translateZ(-100px);
            opacity: 0.7;
            filter: blur(1px);
            z-index: 1;
          }

          .carousel-card-active {
            transform: translateX(0) scale(1) translateZ(0);
            opacity: 1;
            z-index: 3;
            cursor: pointer;
          }

          .carousel-card-next {
            transform: translateX(50%) scale(0.8) translateZ(-100px);
            opacity: 0.7;
            filter: blur(1px);
            z-index: 1;
          }

          .carousel-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .carousel-card-active:hover .carousel-card-img {
            transform: scale(1.05);
          }

          .carousel-card-info {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 20px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
            color: white;
            text-align: center;
          }

          .carousel-card-title {
            margin: 0 0 5px;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .carousel-card-details {
            font-size: 0.9rem;
            opacity: 0.8;
          }

          .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #4a89dc;
            color: white;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            opacity: 0.8;
          }

          .carousel-arrow:hover {
            opacity: 1;
            transform: translateY(-50%) scale(1.1);
          }

          .carousel-prev {
            left: 20px;
          }

          .carousel-next {
            right: 20px;
          }

          .carousel-indicators {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }

          .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ccc;
            margin: 0 5px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .carousel-dot.active {
            background-color: #4a89dc;
          }

          .achievement-modal-content {
            padding: 0;
            transition: padding 0.3s ease;
          }

          .achievement-modal-header {
            padding: 20px 25px;
            border-bottom: 1px solid #eee;
          }

          .achievement-modal-title {
            margin: 0;
            font-weight: 600;
            color: #333;
          }

          .achievement-modal-body {
            padding: 25px;
          }

          .achievement-image-container {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }

          .achievement-description {
            line-height: 1.7;
            color: #555;
            margin-top: 20px;
          }

          .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 1050;
            cursor: pointer;
            color: #555;
            transition: color 0.3s ease;
          }

          .modal-close:hover {
            color: #000;
          }

          /* Responsive adjustments */
          @media (max-width: 767px) {
            .carousel-card {
              width: calc(100% * (9 / 16)); /* Maintain 16:9 aspect ratio */
              height: 100%;
            }

            .carousel-card-prev,
            .carousel-card-next {
              display: none;
            }

            .carousel-arrow {
              width: 35px;
              height: 35px;
            }

            .carousel-prev {
              left: 10px;
            }

            .carousel-next {
              right: 10px;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default Achievements;
