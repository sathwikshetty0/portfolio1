// import React, { Component } from "react";
// import Typical from "react-typical";
// import Switch from "react-switch";

// class Header extends Component {
//   titles = [];

//   constructor() {
//     super();
//     this.state = { checked: false };
//     this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
//   }

//   onThemeSwitchChange(checked) {
//     this.setState({ checked });
//     this.setTheme();
//   }

//   setTheme() {
//     var dataThemeAttribute = "data-theme";
//     var body = document.body;
//     var newTheme =
//       body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
//     body.setAttribute(dataThemeAttribute, newTheme);
//   }

//   render() {
//     if (this.props.sharedData) {
//       var name = this.props.sharedData.name;
//       this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
//     }

//     const HeaderTitleTypeAnimation = React.memo( () => {
//       return <Typical className="title-styles" steps={this.titles} loop={50} />
//     }, (props, prevProp) => true);

//     return (
//       <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
//         <div className="row aligner" style={{height: '100%'}}>
//           <div className="col-md-12">
//             <div>
//               <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
//               <br/>
//               <h1 className="mb-0">
//                 <Typical steps={[name]} wrapper="p" />
//               </h1>
//               <div className="title-container">
//                 <HeaderTitleTypeAnimation />
//               </div>
//               <Switch
//                 checked={this.state.checked}
//                 onChange={this.onThemeSwitchChange}
//                 offColor="#baaa80"
//                 onColor="#353535"
//                 className="react-switch mx-auto"
//                 width={90}
//                 height={40}
//                 uncheckedIcon={
//                   <span
//                     className="iconify"
//                     data-icon="twemoji:owl"
//                     data-inline="false"
//                     style={{
//                       display: "block",
//                       height: "100%",
//                       fontSize: 25,
//                       textAlign: "end",
//                       marginLeft: "20px",
//                       color: "#353239",
//                     }}
//                   ></span>
//                 }
//                 checkedIcon={
//                   <span
//                     className="iconify"
//                     data-icon="noto-v1:sun-with-face"
//                     data-inline="false"
//                     style={{
//                       display: "block",
//                       height: "100%",
//                       fontSize: 25,
//                       textAlign: "end",
//                       marginLeft: "10px",
//                       color: "#353239",
//                     }}
//                   ></span>
//                 }
//                 id="icon-switch"
//               />
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

// export default Header;

import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { 
      checked: false,
      showScrollIndicator: false 
    };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  componentDidMount() {
    this.injectScrollStyles();
    
    // Show scroll indicator after 3 seconds
    this.scrollTimer = setTimeout(() => {
      this.setState({ showScrollIndicator: true });
    }, 3000);

    // Hide on scroll
    this.handleScroll = () => {
      if (window.scrollY > 100) {
        this.setState({ showScrollIndicator: false });
      }
    };

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }
    window.removeEventListener('scroll', this.handleScroll);
    
    const existingStyle = document.getElementById('header-scroll-styles');
    if (existingStyle) {
      existingStyle.remove();
    }
  }

  injectScrollStyles = () => {
    if (document.getElementById('header-scroll-styles')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'header-scroll-styles';
    style.textContent = `
      .scroll-indicator-container {
        position: absolute !important;
        bottom: 40px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        z-index: 1000 !important;
        cursor: pointer !important;
        animation: magnificentEntry 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
        opacity: 0.85 !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1)) !important;
      }

      .scroll-indicator-container:hover {
        opacity: 1 !important;
        transform: translateX(-50%) translateY(-10px) scale(1.05) !important;
        filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15)) !important;
      }

      .scroll-indicator-container:active {
        transform: translateX(-50%) translateY(-5px) scale(0.98) !important;
        transition: all 0.1s ease !important;
      }

      .scroll-text {
        color: var(--text-color, #666) !important;
        font-size: 13px !important;
        font-weight: 400 !important;
        letter-spacing: 3px !important;
        text-transform: uppercase !important;
        margin-bottom: 20px !important;
        opacity: 0.8 !important;
        animation: enchantedPulse 3s ease-in-out infinite !important;
        background: linear-gradient(45deg, var(--text-color, #666), var(--accent-color, #888)) !important;
        background-clip: text !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        position: relative !important;
      }

      .scroll-text::after {
        content: '' !important;
        position: absolute !important;
        bottom: -5px !important;
        left: 50% !important;
        transform: translateX(-50%) scaleX(0) !important;
        width: 40px !important;
        height: 1px !important;
        background: linear-gradient(90deg, transparent, var(--text-color, #666), transparent) !important;
        animation: underlineGrow 3s ease-in-out infinite !important;
      }

      .mouse-container {
        position: relative !important;
        width: 32px !important;
        height: 50px !important;
        border: 2.5px solid var(--text-color, #666) !important;
        border-radius: 18px !important;
        opacity: 0.7 !important;
        margin-bottom: 20px !important;
        background: rgba(255, 255, 255, 0.05) !important;
        backdrop-filter: blur(10px) !important;
        transition: all 0.3s ease !important;
        animation: mouseBreathe 4s ease-in-out infinite !important;
      }

      .mouse-container:hover {
        border-color: var(--accent-color, #888) !important;
        background: rgba(255, 255, 255, 0.1) !important;
      }

      .mouse-wheel {
        position: absolute !important;
        top: 10px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        width: 4px !important;
        height: 10px !important;
        background: linear-gradient(180deg, var(--text-color, #666), var(--accent-color, #888)) !important;
        border-radius: 3px !important;
        animation: dreamyScroll 2.5s ease-in-out infinite !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
      }

      .arrow-container {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 3px !important;
        animation: containerFloat 3s ease-in-out infinite !important;
      }

      .chevron-arrow {
        width: 0 !important;
        height: 0 !important;
        border-left: 10px solid transparent !important;
        border-right: 10px solid transparent !important;
        border-top: 8px solid var(--text-color, #666) !important;
        opacity: 0.3 !important;
        animation: etherealFlow 2.5s ease-in-out infinite !important;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)) !important;
        transition: all 0.3s ease !important;
      }

      .chevron-arrow:nth-child(1) {
        animation-delay: 0s !important;
        transform: scale(1.1) !important;
      }

      .chevron-arrow:nth-child(2) {
        animation-delay: 0.3s !important;
        transform: scale(1) !important;
      }

      .chevron-arrow:nth-child(3) {
        animation-delay: 0.6s !important;
        transform: scale(0.9) !important;
      }

      .scroll-indicator-container:hover .chevron-arrow {
        border-top-color: var(--accent-color, #888) !important;
        opacity: 0.8 !important;
      }

      /* Enhanced Animations */
      @keyframes magnificentEntry {
        0% {
          opacity: 0;
          transform: translateX(-50%) translateY(60px) scale(0.5) rotate(10deg);
        }
        60% {
          opacity: 0.9;
          transform: translateX(-50%) translateY(-10px) scale(1.1) rotate(-2deg);
        }
        100% {
          opacity: 0.85;
          transform: translateX(-50%) translateY(0) scale(1) rotate(0deg);
        }
      }

      @keyframes enchantedPulse {
        0%, 100% {
          opacity: 0.8;
          transform: scale(1);
        }
        33% {
          opacity: 1;
          transform: scale(1.02);
        }
        66% {
          opacity: 0.9;
          transform: scale(1.01);
        }
      }

      @keyframes underlineGrow {
        0%, 100% {
          transform: translateX(-50%) scaleX(0);
          opacity: 0;
        }
        50% {
          transform: translateX(-50%) scaleX(1);
          opacity: 0.6;
        }
      }

      @keyframes mouseBreathe {
        0%, 100% {
          transform: scale(1);
          opacity: 0.7;
        }
        50% {
          transform: scale(1.02);
          opacity: 0.8;
        }
      }

      @keyframes dreamyScroll {
        0%, 100% {
          opacity: 0.3;
          transform: translateX(-50%) translateY(0) scale(1);
        }
        25% {
          opacity: 0.8;
          transform: translateX(-50%) translateY(8px) scale(1.1);
        }
        50% {
          opacity: 1;
          transform: translateX(-50%) translateY(16px) scale(1.2);
        }
        75% {
          opacity: 0.6;
          transform: translateX(-50%) translateY(24px) scale(1);
        }
      }

      @keyframes containerFloat {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }

      @keyframes etherealFlow {
        0%, 100% {
          opacity: 0.3;
          transform: translateY(0) scale(var(--arrow-scale, 1));
        }
        50% {
          opacity: 0.9;
          transform: translateY(12px) scale(calc(var(--arrow-scale, 1) * 1.1));
        }
      }

      /* Enhanced Theme Support */
      [data-theme="dark"] .scroll-text {
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(167, 243, 208, 0.8)) !important;
        background-clip: text !important;
        -webkit-background-clip: text !important;
      }

      [data-theme="dark"] .scroll-text::after {
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent) !important;
      }

      [data-theme="dark"] .mouse-container {
        border-color: rgba(255, 255, 255, 0.7) !important;
        background: rgba(255, 255, 255, 0.08) !important;
      }

      [data-theme="dark"] .mouse-wheel {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(167, 243, 208, 0.6)) !important;
      }

      [data-theme="dark"] .chevron-arrow {
        border-top-color: rgba(255, 255, 255, 0.7) !important;
      }

      [data-theme="dark"] .scroll-indicator-container:hover .chevron-arrow {
        border-top-color: rgba(167, 243, 208, 0.9) !important;
      }

      /* Responsive Enhancements */
      @media (max-width: 768px) {
        .scroll-indicator-container {
          bottom: 25px !important;
        }
        
        .scroll-text {
          font-size: 11px !important;
          letter-spacing: 2px !important;
          margin-bottom: 15px !important;
        }
        
        .mouse-container {
          width: 28px !important;
          height: 45px !important;
          margin-bottom: 15px !important;
        }

        .chevron-arrow {
          border-left: 8px solid transparent !important;
          border-right: 8px solid transparent !important;
          border-top: 6px solid var(--text-color, #666) !important;
        }
      }

      /* CSS Variables for Theme Integration */
      :root {
        --arrow-scale: 1;
        --accent-color: #667eea;
      }

      [data-theme="dark"] {
        --accent-color: #a7f3d0;
      }
    `;
    document.head.appendChild(style);
  };

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  handleScrollClick = () => {
    const nextSection = document.querySelector('#about, .next-section, main, .container');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
    this.setState({ showScrollIndicator: false });
  };

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block', position: 'relative' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>

        {/* Professional Scroll Indicator */}
        {this.state.showScrollIndicator && (
          <div 
            className="scroll-indicator-container"
            onClick={this.handleScrollClick}
            role="button"
            aria-label="Scroll down to content"
          >
            <div className="scroll-text">Scroll</div>
            
            <div className="mouse-container">
              <div className="mouse-wheel"></div>
            </div>
            
            <div className="arrow-container">
              <div className="chevron-arrow"></div>
              <div className="chevron-arrow"></div>
              <div className="chevron-arrow"></div>
            </div>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
