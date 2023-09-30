import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginApplicant } from "../Service/Api";
import { useNavigate } from "react-router-dom";
import '../Style/Login.css';


const Account = () =>
{   

    const navigate = useNavigate();

    const [userLoginData, setuserLoginData] = useState(
        {
            Email: "",
            Password: ""
        }
    );

    const HandleChange = (e) => {
        setuserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
    };

const Submithandle = async (e) => {
  e.preventDefault();
  console.log(userLoginData);

  const { Email, Password } = userLoginData;

  try {
    const response = await LoginApplicant({
      action: "login",
      email: Email,
      password: Password
    });

    if (response.message) {
      alert('Login Successful');
      navigate('/Component/Concept');
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
     if (error.response && error.response.data && error.response.data.error) {
      alert(error.response.data.error);
    } else {
      alert("An error occurred during login");
    }
  }
};



    return (<div className="body">
        {/* Account Page */}
        <div className="container">
            <div className="row">
                {/* Picture Column */}
                <div className="col-6" id="Picture_Div">
                    <img className="img" src="/Concept_Picture/necklace2.jpg" alt="Diamond Necklace" />
                </div>
                {/* Login Column */}
                <div className="col-6">
                    <div className="form">
                        <p className="logo">Login</p>

                        <form onSubmit={Submithandle} method="post">
                            <label>Email</label><br />
                            <input className="inpt_name" type="email" placeholder="Email address" name="Email" onChange={(e) => HandleChange(e)} /><br />
                            <label>Password</label><br />
                            <input className="inpt_pasw" type="password" placeholder="Password" name="Password" onChange={(e) => HandleChange(e)} /><br />
                            <p className="forgetpassword"><Link to="Forget_Password">Forgotten your password?</Link></p><br />
                            <button className="btn btn-lg" id="Login_button">Login</button><br />
                            <button className="btn btn-lg" id="Create_account_button" >Create Account</button><br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default Account;

