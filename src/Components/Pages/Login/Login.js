import "./Login.css"


let Login = () => {
    return( <>
        <form className="Container">
        <div className="ContentBorder">
            <h1  className="Title">Login</h1>
            <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" required/>
        </div>    
     
     <div>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" required/>
    </div>

   <div><button type="button" className="Forget_password" >Forgot Password</button></div>
        

     <div className="button_container">
    <button className="button"> Submit</button>
    </div>
    </div>
</form>
    </>
    )
}

export default Login