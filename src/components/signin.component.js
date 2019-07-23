import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <main>
          <section className="d-flex align-items-center section-bg">
            <div className="color-overly" />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <h5 className="text-center mb-4"><strong>Sign In</strong></h5>
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="alert alert-secondary rounded-0 text-center" role="alert">Don’t have an account?<Link to="signup" className="alert-link">Get started for free!</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
        </main>
        </div>
    )
  }
}
export default Signin
