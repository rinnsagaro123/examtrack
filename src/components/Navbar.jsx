  import React from 'react';

  const Navbar = () => {
    return (
      <header className="navbar">
        <div className="navbar-logo">
          <h1>Exam <span className="navbar-logo-highlight">track</span></h1>
        </div>
        <div className="navbar-nav">
          <button>My Request
          <img src="https://dashboard.codeparrot.ai/api/image/Z6BUrQ58MnUDluSl/icon-che.png" alt="dropdown" style={{ width: '12px', height: '12px' }} />
          </button>
          <button>Administration Tools
          <img src="https://dashboard.codeparrot.ai/api/image/Z6BUrQ58MnUDluSl/icon-che.png" alt="dropdown" style={{ width: '12px', height: '12px' }} />
          </button>
          <img src="https://dashboard.codeparrot.ai/api/image/Z6BUrQ58MnUDluSl/avatar.png" alt="avatar" />
          <div>
            <button>My Account
            <img src="https://dashboard.codeparrot.ai/api/image/Z6BUrQ58MnUDluSl/icon-che.png" alt="dropdown" style={{ width: '12px', height: '12px' }} />
            </button>
            
          </div>
        </div>
      </header>
    );
  };

  export default Navbar;