import React, {Component, createContext} from 'react'
import axios from 'axios'
import Authenticate from '../utils/Auth/Authenticate'

const AuthContext = createContext()

class AuthProvider extends Component {
  state = { isAuth: false, email: '', accessToken: '', client: '', uid: '' }

  constructor(props){
    super(props)
  }

  componentDidMount(){
    if (this.state.isAuth) {
      Authenticate()
        .then( (resp) => this.setState({ ...resp }) )
        .catch( err => console.log(err))
    }
  }

  login = (user, props, e) => {
    e.preventDefault()

    axios.post('/auth/sign_in', { ...user }, { withCredentials: true })
    .then( resp => {
      this.setState({ isAuth: true, accessToken: resp.headers["access-token"],
        client: resp.headers.client, uid: resp.headers.uid })
      props.history.push("/")
    })
    .catch( err => console.log(err))
  }

  signup = (user, props, e) => {
    e.preventDefault()

    axios.post('/auth/', { ...user }, { withCredentials: true })
    .then( resp => {
      this.setState({ isAuth: true, accessToken: resp.headers["access-token"],
        client: resp.headers.client, uid: resp.headers.uid })
      props.history.push("/")
    })
    .catch( err => console.log(err))
  }

  logout = (e) => {
    e.preventDefault()

    axios.delete('/auth/sign_out', {
        data: {
          'access-token': this.state.accessToken,
          "client": this.state.client,
          "uid": this.state.uid
        }
      }
    )
    .then( _resp => {
      this.setState({ isAuth: false })
      window.location.href = '/'
    })
    .catch( err => console.log(err.message))
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          email: this.state.email,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
