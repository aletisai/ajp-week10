import {useState} from"react"
function Register(){
    const [Username,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const registerUser = async () => {
        const res = await fetch("http://localhost:5000/register",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:json.stringify({Username,password})
        });
        const msg =  await res.text();
        alert(msg);
    };
    return(
        <div>
        <h2>Register</h2>

        <input
        palceholder= "Username"
        onChange={(e1) => setEmail(e1.target.value)}
        /><br/><br/>
        <input
        palceholder= "Username"
        onChange={(e2) => setEmail(e2.target.value)}
        /><br/><br/>

        <button onClick = {registerUser}>Register</button>
        </div>
    );
}
export default Register
