import React, { useEffect } from 'react';
import { Link } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../store/userReducer';
import { useAuth } from "../store/userSelectors";
// import { showNameProfile, changeNameProfile } from '../store/profileReducer'

function HomePage() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth, navigate]);
  return (
    <div>
      {
        isAuth 
          ? <>
              <h1>Welcome</h1>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  dispatch(removeUser());
                }}
              > 
              Log out {email}
              </Link>
            </>
          : <h1>Error</h1>
      }
    </div>
  );
};

export default HomePage;
