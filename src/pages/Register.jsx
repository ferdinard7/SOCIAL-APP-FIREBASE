import React, { useState } from "react";
import "../styles/register.css";
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Handle progress or errors if needed
    },
  (error) => {
    setErr(true);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
     const update = await updateProfile(res.user, {
      displayName,
      photoURL: downloadURL,
     });

     console.log(update);

     await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
     });
     
     await setDoc(doc(db, "userChats", res.user.uid), {});
     navigate("/");
    });
  }
);
        } catch (err) {
            setErr(true);
            console.log(err);
         }
 
    }


    return (
        <div className="form-container">
            <div  className="form-wrapper">
                <span className="logo"> Big_ Ferd Chat</span>
                <span className="title"> Register</span>
                <form onSubmit={handleSubmit}>
            <input type="text" placeholder="display name" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input  style={{display: "none"}}type="file"  id="file"/>
            <label htmlFor="file" >
                <img src={Add} alt="" />
                Add an avatar
                </label> 
            <button> Sign up</button>
            {err && <span>Something went wrong! </span>}

            </form>
            <p> You do have an account?  <Link to="/login">Login</Link></p>
         </div>
        </div>
    )
}


export default Register;