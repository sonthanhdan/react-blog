import React from 'react'

const Footer = class extends React.Component {
  render() {
    const copyRightYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="content has-text-centered has-text-grey copyright">
            <p>
              Copyright © {copyRightYear} Dan Blog's. All rights reserved.  
            </p>
        </div>
      </footer>
    )
  }
}

export default Footer