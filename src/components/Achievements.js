


// import React, { Component } from "react";
// import { Modal } from "react-bootstrap";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

// // Achievement Details Modal Component
// class AchievementDetailsModal extends Component {
//   render() {
//     if (!this.props.data) return null;

//     const achievement = this.props.data;
//     const images = achievement.images || [];

//     // Create slider if there are multiple images
//     const achievementSlider = (
//       <AwesomeSlider animation="cubeAnimation" bullets={false}>
//         {images.map((elem, i) => (
//           <div key={i} data-src={elem} />
//         ))}
//       </AwesomeSlider>
//     );

//     return (
//       <Modal
//         {...this.props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         className="modal-inside"
//       >
//         <span onClick={this.props.onHide} className="modal-close">
//           <i className="fas fa-times fa-2x close-icon"></i>
//         </span>
//         <Modal.Body className="p-0">
//           <div className="achievement-modal-content">
//             <div className="achievement-modal-header">
//               <h3 className="achievement-modal-title">{achievement.title}</h3>
//             </div>
//             <div className="achievement-modal-body">
//               <div className="achievement-image-container mb-4">
//                 {images.length > 1 ? (
//                   achievementSlider
//                 ) : (
//                   images.length === 1 && (
//                     <img
//                       src={images[0]}
//                       alt={achievement.title}
//                       className="img-fluid rounded"
//                     />
//                   )
//                 )}
//               </div>
//               <div className="achievement-description">
//                 <p>{achievement.description}</p>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     );
//   }
// }

// // Main Achievements Component with 3D Carousel
// class Achievements extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deps: {},
//       detailsModalShow: false,
//       activeIndex: 0,
//     };
//   }

//   // Move to previous achievement
//   prevAchievement = () => {
//     const validAchievements = this.getValidAchievements();
//     if (validAchievements.length === 0) return;

//     this.setState((prevState) => ({
//       activeIndex: (prevState.activeIndex - 1 + validAchievements.length) % validAchievements.length,
//     }));
//   };

//   // Move to next achievement
//   nextAchievement = () => {
//     const validAchievements = this.getValidAchievements();
//     if (validAchievements.length === 0) return;

//     this.setState((prevState) => ({
//       activeIndex: (prevState.activeIndex + 1) % validAchievements.length,
//     }));
//   };

//   // Get achievements that have images
//   getValidAchievements = () => {
//     if (!this.props.resumeAchievements || !Array.isArray(this.props.resumeAchievements)) {
//       return [];
//     }

//     return this.props.resumeAchievements.filter(
//       (achievement) => achievement && achievement.images && achievement.images.length
//     );
//   };

//   render() {
//     let detailsModalShow = (data) => {
//       this.setState({ detailsModalShow: true, deps: data });
//     };

//     let detailsModalClose = () => this.setState({ detailsModalShow: false });

//     let sectionName = "Achievements"; // Default name
//     const validAchievements = this.getValidAchievements();

//     if (this.props.resumeBasicInfo && this.props.resumeBasicInfo.section_name) {
//       sectionName = this.props.resumeBasicInfo.section_name.achievements ||
//         this.props.resumeBasicInfo.section_name.achivements || "Achievements";
//     }

//     // Calculate previous, current and next indices
//     const currentIndex = this.state.activeIndex;
//     const prevIndex = (currentIndex - 1 + validAchievements.length) % validAchievements.length;
//     const nextIndex = (currentIndex + 1) % validAchievements.length;

//     return (
//       <section id="achievements" className="achievements-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center mb-5">
//               <h2 className="section-title">{sectionName}</h2>
//               <div className="section-divider"></div>
//             </div>
//           </div>

//           {validAchievements.length > 0 && (
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="carousel-container">
//                   {/* Navigation buttons */}
//                   <button
//                     className="carousel-arrow carousel-prev"
//                     onClick={this.prevAchievement}
//                   >
//                     <i className="fas fa-chevron-left"></i>
//                   </button>

//                   <div className="carousel-stage">
//                     {/* Previous card (visible but behind) */}
//                     {validAchievements.length > 1 && (
//                       <div className="carousel-card carousel-card-prev">
//                         <img
//                           src={validAchievements[prevIndex].images[0]}
//                           alt={validAchievements[prevIndex].title}
//                           className="carousel-card-img"
//                         />
//                       </div>
//                     )}

//                     {/* Current card (in focus) */}
//                     <div
//                       className="carousel-card carousel-card-active"
//                       onClick={() => detailsModalShow(validAchievements[currentIndex])}
//                     >
//                       <img
//                         src={validAchievements[currentIndex].images[0]}
//                         alt={validAchievements[currentIndex].title}
//                         className="carousel-card-img"
//                       />
//                       <div className="carousel-card-info">
//                         <h3 className="carousel-card-title">{validAchievements[currentIndex].title}</h3>
//                         <span className="carousel-card-details">Click for details</span>
//                       </div>
//                     </div>

//                     {/* Next card (visible but behind) */}
//                     {validAchievements.length > 1 && (
//                       <div className="carousel-card carousel-card-next">
//                         <img
//                           src={validAchievements[nextIndex].images[0]}
//                           alt={validAchievements[nextIndex].title}
//                           className="carousel-card-img"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   <button
//                     className="carousel-arrow carousel-next"
//                     onClick={this.nextAchievement}
//                   >
//                     <i className="fas fa-chevron-right"></i>
//                   </button>

//                   {/* Indicator dots */}
//                   <div className="carousel-indicators">
//                     {validAchievements.map((_, index) => (
//                       <span
//                         key={index}
//                         className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
//                         onClick={() => this.setState({ activeIndex: index })}
//                       ></span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <AchievementDetailsModal
//           show={this.state.detailsModalShow}
//           onHide={detailsModalClose}
//           data={this.state.deps}
//         />

//         <style jsx>{`
//           .achievements-section {
//             padding: 80px 0;
//             background-color: #f8f9fa;
//             transition: background-color 0.3s ease;
//           }

//           .section-title {
//             font-size: 2.5rem;
//             font-weight: 700;
//             margin-bottom: 15px;
//             color: #333;
//             transition: color 0.3s ease;
//           }

//           .section-divider {
//             height: 3px;
//             width: 60px;
//             background: #4a89dc;
//             margin: 0 auto 40px;
//             transition: background-color 0.3s ease;
//           }

//           .carousel-container {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             height: 400px;
//             position: relative;
//             margin-bottom: 30px;
//           }

//           .carousel-stage {
//             position: relative;
//             width: 100%;
//             height: 100%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             perspective: 1000px;
//           }

//           .carousel-card {
//             position: absolute;
//             width: calc(100% * (9 / 16)); /* Maintain 16:9 aspect ratio */
//             height: 100%;
//             border-radius: 12px;
//             overflow: hidden;
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//             transition: all 0.5s ease;
//             transform-style: preserve-3d;
//           }

//           .carousel-card-prev {
//             transform: translateX(-50%) scale(0.8) translateZ(-100px);
//             opacity: 0.7;
//             filter: blur(1px);
//             z-index: 1;
//           }

//           .carousel-card-active {
//             transform: translateX(0) scale(1) translateZ(0);
//             opacity: 1;
//             z-index: 3;
//             cursor: pointer;
//           }

//           .carousel-card-next {
//             transform: translateX(50%) scale(0.8) translateZ(-100px);
//             opacity: 0.7;
//             filter: blur(1px);
//             z-index: 1;
//           }

//           .carousel-card-img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             transition: transform 0.5s ease;
//           }

//           .carousel-card-active:hover .carousel-card-img {
//             transform: scale(1.05);
//           }

//           .carousel-card-info {
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             padding: 20px;
//             background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
//             color: white;
//             text-align: center;
//           }

//           .carousel-card-title {
//             margin: 0 0 5px;
//             font-size: 1.2rem;
//             font-weight: 600;
//           }

//           .carousel-card-details {
//             font-size: 0.9rem;
//             opacity: 0.8;
//           }

//           .carousel-arrow {
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             background: #4a89dc;
//             color: white;
//             border: none;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             z-index: 10;
//             transition: all 0.3s ease;
//             opacity: 0.8;
//           }

//           .carousel-arrow:hover {
//             opacity: 1;
//             transform: translateY(-50%) scale(1.1);
//           }

//           .carousel-prev {
//             left: 20px;
//           }

//           .carousel-next {
//             right: 20px;
//           }

//           .carousel-indicators {
//             display: flex;
//             justify-content: center;
//             margin-top: 20px;
//           }

//           .carousel-dot {
//             width: 10px;
//             height: 10px;
//             border-radius: 50%;
//             background: #ccc;
//             margin: 0 5px;
//             cursor: pointer;
//             transition: all 0.3s ease;
//           }

//           .carousel-dot.active {
//             background-color: #4a89dc;
//           }

//           .achievement-modal-content {
//             padding: 0;
//             transition: padding 0.3s ease;
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
//             box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//           }

//           .achievement-description {
//             line-height: 1.7;
//             color: #555;
//             margin-top: 20px;
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

//           /* Responsive adjustments */
//           @media (max-width: 767px) {
//             .carousel-card {
//               width: calc(100% * (9 / 16)); /* Maintain 16:9 aspect ratio */
//               height: 100%;
//             }

//             .carousel-card-prev,
//             .carousel-card-next {
//               display: none;
//             }

//             .carousel-arrow {
//               width: 35px;
//               height: 35px;
//             }

//             .carousel-prev {
//               left: 10px;
//             }

//             .carousel-next {
//               right: 10px;
//             }
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

    const achievementSlider = (
      <AwesomeSlider 
        animation="cubeAnimation" 
        bullets={false}
        className="modal-slider"
      >
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
          <i className="fas fa-times close-icon"></i>
        </span>
        <Modal.Body className="p-0">
          <div className="achievement-modal-content">
            <div className="achievement-image-container">
              {images.length > 1 ? (
                achievementSlider
              ) : (
                images.length === 1 && (
                  <img
                    src={images[0]}
                    alt={achievement.title}
                    className="single-modal-image"
                  />
                )
              )}
            </div>
            <div className="achievement-modal-body">
              <h3 className="achievement-modal-title">{achievement.title}</h3>
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

// Main Achievements Component with Enhanced 3D Carousel
class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      activeIndex: 0,
      isTransitioning: false,
    };
  }

  prevAchievement = () => {
    if (this.state.isTransitioning) return;
    
    const validAchievements = this.getValidAchievements();
    if (validAchievements.length === 0) return;

    this.setState({ isTransitioning: true });
    
    setTimeout(() => {
      this.setState((prevState) => ({
        activeIndex: (prevState.activeIndex - 1 + validAchievements.length) % validAchievements.length,
        isTransitioning: false,
      }));
    }, 100);
  };

  nextAchievement = () => {
    if (this.state.isTransitioning) return;
    
    const validAchievements = this.getValidAchievements();
    if (validAchievements.length === 0) return;

    this.setState({ isTransitioning: true });
    
    setTimeout(() => {
      this.setState((prevState) => ({
        activeIndex: (prevState.activeIndex + 1) % validAchievements.length,
        isTransitioning: false,
      }));
    }, 100);
  };

  goToSlide = (index) => {
    if (this.state.isTransitioning || index === this.state.activeIndex) return;
    
    this.setState({ 
      isTransitioning: true,
      activeIndex: index 
    });
    
    setTimeout(() => {
      this.setState({ isTransitioning: false });
    }, 100);
  };

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

    let sectionName = "Achievements";
    const validAchievements = this.getValidAchievements();

    if (this.props.resumeBasicInfo && this.props.resumeBasicInfo.section_name) {
      sectionName = this.props.resumeBasicInfo.section_name.achievements ||
        this.props.resumeBasicInfo.section_name.achivements || "Achievements";
    }

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
                <div className="carousel-wrapper">
                  <div className="carousel-container">
                    {validAchievements.length > 1 && (
                      <>
                        <button
                          className="carousel-arrow carousel-prev"
                          onClick={this.prevAchievement}
                          disabled={this.state.isTransitioning}
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        
                        <button
                          className="carousel-arrow carousel-next"
                          onClick={this.nextAchievement}
                          disabled={this.state.isTransitioning}
                        >
                          <i className="fas fa-chevron-right"></i>
                        </button>
                      </>
                    )}

                    <div className="carousel-stage">
                      {/* Previous card */}
                      {validAchievements.length > 2 && (
                        <div className="carousel-card carousel-card-prev">
                          <div className="card-image-section">
                            <img
                              src={validAchievements[prevIndex].images[0]}
                              alt={validAchievements[prevIndex].title}
                              className="carousel-card-img"
                            />
                          </div>
                          <div className="card-content-section">
                            <h4 className="card-title">{validAchievements[prevIndex].title}</h4>
                            <p className="card-description">{validAchievements[prevIndex].description}</p>
                          </div>
                        </div>
                      )}

                      {/* Current card */}
                      <div
                        className="carousel-card carousel-card-active"
                        onClick={() => detailsModalShow(validAchievements[currentIndex])}
                      >
                        <div className="card-image-section">
                          <img
                            src={validAchievements[currentIndex].images[0]}
                            alt={validAchievements[currentIndex].title}
                            className="carousel-card-img"
                          />
                          <div className="hover-overlay">
                            <div className="view-more-btn">
                              <i className="fas fa-expand-alt"></i>
                              <span>View More</span>
                            </div>
                          </div>
                        </div>
                        <div className="card-content-section">
                          <h3 className="card-title">{validAchievements[currentIndex].title}</h3>
                          <p className="card-description">{validAchievements[currentIndex].description}</p>
                        </div>
                      </div>

                      {/* Next card */}
                      {validAchievements.length > 2 && (
                        <div className="carousel-card carousel-card-next">
                          <div className="card-image-section">
                            <img
                              src={validAchievements[nextIndex].images[0]}
                              alt={validAchievements[nextIndex].title}
                              className="carousel-card-img"
                            />
                          </div>
                          <div className="card-content-section">
                            <h4 className="card-title">{validAchievements[nextIndex].title}</h4>
                            <p className="card-description">{validAchievements[nextIndex].description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {validAchievements.length > 1 && (
                    <div className="carousel-indicators">
                      {validAchievements.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                          onClick={() => this.goToSlide(index)}
                          disabled={this.state.isTransitioning}
                        >
                          <span className="dot-inner"></span>
                        </button>
                      ))}
                    </div>
                  )}
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
            background: linear-gradient(135deg, #8c8c8dff 0%, #b3aeb8ff 100%);
            min-height: 700px;
            position: relative;
          }

          .achievements-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(197, 173, 173, 0.1);
            backdrop-filter: blur(10px);
          }

          .section-title {
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: 20px;
            color: white;
            letter-spacing: -1px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            position: relative;
            z-index: 1;
          }

          .section-divider {
            height: 4px;
            width: 80px;
            background: white;
            margin: 0 auto 60px;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(255,255,255,0.3);
            position: relative;
            z-index: 1;
          }

          .carousel-wrapper {
            position: relative;
            z-index: 1;
          }

          .carousel-container {
            position: relative;
            height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
          }

          .carousel-stage {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            perspective: 1200px;
          }

          .carousel-card {
            position: absolute;
            width: 1020px;
            height: 480px;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform-style: preserve-3d;
            box-shadow: 0 25px 50px rgba(0,0,0,0.25);
            display: flex;
            flex-direction: column;
          }

          .carousel-card-prev {
            transform: translateX(-150px) translateZ(-200px) rotateY(35deg) scale(0.8);
            opacity: 0.6;
            z-index: 1;
          }

          .carousel-card-active {
            transform: translateX(0) translateZ(0) rotateY(0deg) scale(1);
            opacity: 1;
            z-index: 5;
            cursor: pointer;
          }

          .carousel-card-next {
            transform: translateX(150px) translateZ(-200px) rotateY(-35deg) scale(0.8);
            opacity: 0.6;
            z-index: 1;
          }

          .card-image-section {
            position: relative;
            height: 380px;
            overflow: hidden;
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

          .hover-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .carousel-card-active:hover .hover-overlay {
            opacity: 1;
          }

          .view-more-btn {
            color: white;
            text-align: center;
            font-size: 1rem;
            font-weight: 600;
          }

          .view-more-btn i {
            display: block;
            font-size: 1.5rem;
            margin-bottom: 8px;
          }

          .card-content-section {
            padding:30px;
            flex: 1;
            display: flex;
            flex-direction: column;
            background: white;
          }

          .card-title {
            font-size: 1.4rem;
            font-weight: 880;
            color: #2c3e50;
            margin-bottom: 15px;
            line-height: 1.3;
          }

          .carousel-card-prev .card-title,
          .carousel-card-next .card-title {
            font-size: 3.2rem;
            margin-bottom: 10px;
          }

          .card-description {
            color: #6c757d;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .carousel-card-prev .card-description,
          .carousel-card-next .card-description {
            font-size: 0.85rem;
            -webkit-line-clamp: 3;
            opacity: 0.8;
          }

          .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255,255,255,0.9);
            color: #6789bbff;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            font-size: 1.2rem;
            backdrop-filter: blur(10px);
          }

          .carousel-arrow:hover:not(:disabled) {
            transform: translateY(-50%) scale(1.1);
            background: white;
            box-shadow: 0 12px 35px rgba(0,0,0,0.2);
          }

          .carousel-arrow:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .carousel-prev {
            left: 30px;
          }

          .carousel-next {
            right: 30px;
          }

          .carousel-indicators {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 30px;
          }

          .carousel-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid rgba(255,255,255,0.5);
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            padding: 0;
          }

          .dot-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: white;
            opacity: 0;
            transition: all 0.3s ease;
          }

          .carousel-dot.active {
            border-color: white;
            background: rgba(255,255,255,0.2);
          }

          .carousel-dot.active .dot-inner {
            opacity: 1;
          }

          .carousel-dot:hover:not(:disabled) {
            border-color: white;
            transform: scale(1.2);
          }

          /* Modal Styles */
          .achievement-modal-content {
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0,0,0,0.25);
          }

          .achievement-image-container {
            position: relative;
            height: 300px;
            overflow: hidden;
          }

          .single-modal-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .modal-slider {
            height: 100% !important;
          }

          .achievement-modal-body {
            padding: 30px;
            background: white;
          }

          .achievement-modal-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #2c3e50;
          }

          .achievement-description {
            line-height: 1.8;
            color: #495057;
            font-size: 1rem;
          }

          .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1050;
            cursor: pointer;
            color: white;
            background: rgba(0,0,0,0.5);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .modal-close:hover {
            background: rgba(0,0,0,0.8);
            transform: scale(1.1);
          }

          .close-icon {
            font-size: 1.2rem;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .achievements-section {
              padding: 60px 0;
            }

            .section-title {
              font-size: 2.2rem;
            }

            .carousel-container {
              height: 420px;
            }

            .carousel-card {
              width: 320px;
              height: 380px;
            }

            .card-image-section {
              height: 200px;
            }

            .card-content-section {
              padding: 20px;
            }

            .card-title {
              font-size: 1.2rem;
            }

            .card-description {
              font-size: 0.9rem;
              -webkit-line-clamp: 3;
            }

            .carousel-card-prev,
            .carousel-card-next {
              display: none;
            }

            .carousel-arrow {
              width: 40px;
              height: 40px;
            }

            .carousel-prev {
              left: 15px;
            }

            .carousel-next {
              right: 15px;
            }
          }

          @media (max-width: 480px) {
            .carousel-card {
              width: 280px;
              height: 350px;
            }

            .card-image-section {
              height: 180px;
            }

            .achievement-modal-body {
              padding: 20px;
            }

            .achievement-modal-title {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default Achievements;
