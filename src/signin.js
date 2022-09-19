import React from 'react';
import './web.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            error: {}

        };
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
       
    }
        formValidation = () => {
            const { Email, Password } = this.state
            let isValid = true;
            const error = {};

            if (!Email) {
                isValid = false;
                error.Email = "Email is required.";
            }
            else {
                var emails = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;;
                if (!emails.test(Email)) {
                    isValid = false;
                    error.Email = "ONE Uppercase One special character and One Digit Required";
                }
            }
            if (!Password.match(/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,32}$/)) {
                isValid = false;
                error.Password = "Invalid Password"
            }
            if (!Password) {
                isValid = false;
                error.Password = " Password is required.";
            }
            this.setState({ error });
            return isValid;

        }

        onSubmit = (e) => {
            e.preventDefault();
            const isValid = this.formValidation();
            if (isValid) {
                console.log("onsubmit" + this.state.Email + this.state.Mobile + this.state.Message + this.state.Password + this.state.ConfirmPassword)
                this.setState({ Email: "", Password: "", error: {} })
            }
            let formData = new FormData();
            formData.append('user_email', this.state.Email)
            formData.append('user_password', this.state.Password)


            
        }
        render() {
            const { Email, Password, error } = this.state
          
            return (
                <div className='signimg'>


                    <div align="center" className='signin'>
                        <h1>Signin</h1>
                        <form onSubmit={this.onSubmit} >

                            <b>
                                {/* Name:<input type="text" name="Name" value={Name} onChange={this.onChange.bind(this)}  ></input><br /> */}
                                <input type="text" name="Email" placeholder='Email' value={Email} onChange={this.onChange.bind(this)}></input><br />
                                <input type="text" name="Password" placeholder='Password' value={Password} onChange={this.onChange.bind(this)} ></input><br />
                                <input type="submit" value="Submit"></input>
                               
                            </b>
                        </form>
                    </div>

                </div>
            );
        }
    }

export default Signin;