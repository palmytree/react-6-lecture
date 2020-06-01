import React, { Component } from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { loginUser } from '../../dux/userReducer'
import './productList.css'

class ProductListContainer extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className='container'>
        <h1 className='product-list-head'>
          {this.props.user ? 'All of our products' : 'Log in to see products'}
        </h1>
        {this.props.isLoggedIn ? (
          <ProductList />
        ) : (
          <div className='form'>
            <input name='userInput' placeholder='Username' onChange={this.handleChange} />
            <button onClick={() => this.props.loginUser(this.state.userInput)}>Sign In</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps, { loginUser })(ProductListContainer)
// We're putting our action and state 
// Action creators are also called dispatches
