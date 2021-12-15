import React, { useState } from 'react';
import { Link } from '@material-ui/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from '../store/userReducer';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    const auth = getAuth();
    console.log(auth);
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          dispatch(addUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          }));
          navigate('/');
        })
        .catch(console.log);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <p>Fill in the form below to register new account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p>{error}</p>}
          <button type="submit">Sign up</button>
        </div>
        <hr />
        <p>
          Already have an account?
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              navigate('/login');
            }}
          > 
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup