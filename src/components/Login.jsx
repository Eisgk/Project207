import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            email: '',
            password: '',
            messages: '',
            messages: [],
            currentUser: null,
            image: '',
            comment: ''
        }
        this.logout = this.logout.bind(this)
    }

    onSubmit = e => {
        e.preventDefault()
        const { email,password } = this.state
        firebase.auth()
           .signInWithEmailAndPassword(email, password)
           .then(response => {
               this.setState({
                   currentUser: response.user
               })
           })
           .catch(error => {
               this.setState({
                   message: error.message
               })
           })


    }

    logout(){
        firebase.auth().signOut().then(response => {
            this.setState({
                currentUser: null
            })
        })
    }

    render(){
        const { message, currentUser } = this.state
        if (currentUser){
            return(
                <div>
                    <Navbar logout={this.logout} username={currentUser.email}></Navbar>
                    <MessageList
                       image={this.state.image}
                       messages={this.state.messages}
                       onChange={this.onChange}
                       post={this.post}
                       delete={this.delete} />
                </div>
            )
        }
        return(
            <section className="section container">
               <div className="columns is-centered">
                   <div className="column is-half">
                       <form onSubmit={this.onSubmit}> 
                           <div className="field">
                               <label className="label">Email</label>
                               <div className="control">
                                   <input className="input" type="email" name="email" onChange={this.onChange} />
                               </div>
                           </div>
                           <div className="field">
                               <label className="label">
                                   password
                               </label>
                               <div className="control">
                                   <input className="input" type="password" name="password" onChange={this.onChange} />
                               </div>
                           </div>
                                {message ? <p className="help is-danger">{message}</p> : null}
                           <div className="field is-grouped">
                               <div className="control">
                                   <button className="button is-link">Login</button>
                               </div>
                           </div>
                       </form>
                   </div>
               </div>
           </section>

        )
    }
}

export default Login