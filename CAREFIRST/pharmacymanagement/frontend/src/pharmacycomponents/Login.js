import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './LoginStyles.css'
//import Logo from './image/logo.jpeg'
import Grid from '@material-ui/core/Grid';

export default function Login() {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const history = useHistory();

    const handleUsernameChange = (e) => {
        setUsernameInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            username: 'admin',
            password: 'password123'
        }

        if ((usernameInput == hardcodedCred.username) && (passwordInput == hardcodedCred.password)) {
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            
            history.push('/Home');
            window.location.reload();
        } else {
            alert('wrong username or password combination');
        }
    }

    return (

        <div className="container">

            <div class="eimage" >
                    {/* <img src = {Logo} width = "150" alt="logo"/> */}
            </div>

            <div style={{marginTop:"200px"}}>
               
           
              
            
       

            <Grid container spacing={2} justify="center">
                <div style={{ width: '450px' }}>
                <br/>
                    <fieldset className="blackborder transformDiv">
                        <form id="admin_login" autoComplete="off" onSubmit={handleLoginSubmit}>
                            <h5 style={{marginTop:"1000"}}>Admin Login</h5>
                            <br />
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" id="loginusername" className="form-control" placeholder="Enter Username"  aria-describedby="emailHelp" value={usernameInput} onChange={handleUsernameChange}  />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"  id="loginpassword" className="form-control" placeholder="Enter password" autoComplete="new-password" value={passwordInput} onChange={handlePasswordChange} />
                            </div>
                            <br />
                            <button type="submit"  className="btn blue darken-1" style={{width:"100%"}}>LOGIN</button>
                            <p className="forgot-password text-right"><br/></p>
                        </form>
                    </fieldset>
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
            </Grid>
       
        </div></div>
    );
}
