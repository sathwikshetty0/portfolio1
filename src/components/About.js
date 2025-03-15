// import React, { Component } from "react";
// import { Icon } from "@iconify/react";
// import arduinoIcon from "@iconify/icons-logos/arduino";
// import pythonIcon from "@iconify/icons-logos/python";
// import cIcon from "@iconify/icons-logos/c";
// import nextjsIcon from "@iconify/icons-logos/nextjs";

// class About extends Component {
//   render() {
//     if (this.props.sharedBasicInfo) {
//       var profilepic = "images/" + this.props.sharedBasicInfo.image;
//     }
//     if (this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.about;
//       var hello = this.props.resumeBasicInfo.description_header;
//       var about = this.props.resumeBasicInfo.description;
//     }

//     return (
//       <section id="about">
//         <div className="col-md-12">
//           <h1 style={{ color: "black" }}>
//             <span>{sectionName}</span>
//           </h1>
//           <div className="row center mx-auto mb-5">
//             <div className="col-md-4 mb-5 center">
//               <div className="polaroid">
//                 <span style={{ cursor: "auto" }}>
//                   <img
//                     height="250px"
//                     width="270px"
//                     src={profilepic}
//                     alt="Avatar placeholder"
//                   />
//                   <Icon
//                     icon={arduinoIcon}
//                     style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                   />
//                   <Icon
//                     icon={pythonIcon}
//                     style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                   />
//                   <Icon
//                     icon={nextjsIcon}
//                     style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                   />
//                   <Icon
//                     icon={cIcon}
//                     style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
//                   />
//                 </span>
//               </div>
//             </div>

//             <div className="col-md-8 center">
//               <div className="col-md-10">
//                 <div className="card">
//                   <div className="card-header">
//                     <span
//                       className="iconify"
//                       data-icon="emojione:red-circle"
//                       data-inline="false"
//                     ></span>{" "}
//                     &nbsp;{" "}
//                     <span
//                       className="iconify"
//                       data-icon="twemoji:yellow-circle"
//                       data-inline="false"
//                     ></span>{" "}
//                     &nbsp;{" "}
//                     <span
//                       className="iconify"
//                       data-icon="twemoji:green-circle"
//                       data-inline="false"
//                     ></span>
//                   </div>
//                   <div
//                     className="card-body font-trebuchet text-justify ml-3 mr-3"
//                     style={{
//                       height: "auto",
//                       fontSize: "132%",
//                       lineHeight: "200%",
//                     }}
//                   >
//                     <br />
//                     <span className="wave">{hello} :) </span>
//                     <br />
//                     <br />
//                     {about}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default About;


import React, { Component } from "react";
import { Icon } from "@iconify/react";
import arduinoIcon from "@iconify/icons-logos/arduino";
import pythonIcon from "@iconify/icons-logos/python";
import cIcon from "@iconify/icons-logos/c";
import nextjsIcon from "@iconify/icons-logos/nextjs";

class About extends Component {
  openResume = () => {
    window.open("https://drive.google.com/file/d/16GDdB5DtGbXrTwKZPIuqiDbPACuYC79R/view?usp=drive_link", "_blank");
  };

  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    width="270px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={arduinoIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nextjsIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={cIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br />
                    <br />
                    <div style={{ 
                      textAlign: "center", 
                      marginTop: "20px",
                      marginBottom: "10px",
                      position: "relative"
                    }}>
                      <div style={{
                        background: "linear-gradient(to right, rgba(240,240,240,0), rgba(240,240,240,1), rgba(240,240,240,0))",
                        height: "1px",
                        width: "100%",
                        marginBottom: "25px"
                      }}></div>
                      <button 
                        className="resume-button"
                        onClick={this.openResume}
                        style={{ 
                          fontSize: "16px", 
                          padding: "12px 32px", 
                          borderRadius: "30px",
                          background: "linear-gradient(135deg, #2196F3, #0D47A1)",
                          color: "white",
                          border: "none",
                          boxShadow: "0 4px 15px rgba(33, 150, 243, 0.4)",
                          transition: "all 0.4s ease",
                          fontWeight: "600",
                          letterSpacing: "1px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          overflow: "hidden",
                          textTransform: "uppercase"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = "linear-gradient(135deg, #1E88E5, #0D47A1)";
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 7px 20px rgba(33, 150, 243, 0.5)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = "linear-gradient(135deg, #2196F3, #0D47A1)";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 4px 15px rgba(33, 150, 243, 0.4)";
                        }}
                      >
                        <span
                          className="iconify"
                          data-icon="mdi:file-document-outline"
                          data-inline="false"
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        ></span>
                        View Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;