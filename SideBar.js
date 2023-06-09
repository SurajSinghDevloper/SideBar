mport React, { useState, useEffect, useRef } from 'react';
import { draIcon } from '../../common/custom/icon-library';
import CardTitleHeader from '../../common/ui/CardTitleHeader';

const ParentDocCard = ({ children }) => {
  console.log("🚀 ~ file: ParentDocCard.js:6 ~ ParentDocCard ~ children:", children)
  const [show, setShow] = useState(false);
  const sidebarRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDocumentation = () => {
    setShow(true);
  };

  return (
    <>
      <div className={`documentation ${show ? "open" : ""}`} ref={sidebarRef}>
        <div className="documentation-toggle">
          <div
            className="documentation-toggle-option documentation-toggle-option-text"
            title="Documentation"
            onClick={toggleDocumentation}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" 
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
            className="feather feather-help-circle">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            &nbsp; Documentation
          </div>
        </div>

        <div className="documentation-panel">
          <div className="documentation-content">
            <div className="documentation-title d-flex align-items-center">
              <button
                type="button"
                className={`btn-close float-right ${show ? "" : "open"}`}
                aria-label="Close"
                onClick={handleClose}
              ></button>
              <h4 className=" card-title-header ml-5">Documentation</h4>
            </div>

            <div className="documentation-body">
              {/* <div className="alert alert-primary" role="alert">
                <div className="alert-message">
                  <strong>Hey there!</strong> Set your own customized style below. Choose the ones
                  that best fits your needs.
                </div>
              </div> */}
              {/* <hr /> */}
              {children}
              {/* Content will be here... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentDocCard;
