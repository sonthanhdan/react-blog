import React from 'react'
import { Link } from 'react-navi'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top mediumnavigation"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link href="/" className="logo" title="Logo">
              <span className="txt-logo">Dan Blog's</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered navbar-font">
                
              <Link className="navbar-item" href="/blog">
                  Blog
              </Link>
              <Link className="navbar-item" href="/stories">
                  Chuyện của dev
              </Link>
              <Link className="navbar-item" href="/tags/bookresource">
                Book & Resource
              </Link>
              {/* <div className="navbar-item has-dropdown is-hoverable is-boxed"> */}
                {/* <a className="navbar-link">
                  Self
                </a> */}
                {/* <div className="navbar-dropdown">
                  <Link className="navbar-item" href="/tags/bookresource">
                    Book & Resource
                  </Link> */}
                  {/* <Link className="navbar-item" href="/products">
                    Project
                  </Link> */}
                
                {/* </div> */}
                
              {/* </div> */}
              <Link className="navbar-item" href="/about">
                About me
              </Link>
            
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
