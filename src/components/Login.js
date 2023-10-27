import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default to 'admin'
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const result = login(email, password, role);

    if (result.success) {
      setMessage(`Login successful as ${role}`);

      // Redirect based on the role after a successful login
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'lecturer') {
        navigate('/lecturer');
      }
    } else {
      setMessage('Login failed');
    }
  };

  
  return (
    <>
        <main >
            <section className='login-form'>
                <div>
                    <h2> Faculty Module Allocation </h2>
                    <form className='login-form'>
                    <div className='radio-option'>
                      <label>
                        <input
                          type="radio"
                          name="role"
                          value="admin"
                          checked={role === 'admin'}
                          onChange={() => setRole('admin')}
                        />
                        Admin
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="role"
                          value="lecturer"
                          checked={role === 'lecturer'}
                          onChange={() => setRole('lecturer')}
                        />
                        Lecturer
                      </label>
                    </div>
                        <div className='controls'>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='controls'>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>

                        <div>
                        <p>{message}</p>
                        </div>
                    </form>

                </div>
            </section>
        </main>
    </>
)





  // return (
  //   <div>
  //     <h1>Login</h1>
      // <div>
      //   <label>
      //     <input
      //       type="radio"
      //       name="role"
      //       value="admin"
      //       checked={role === 'admin'}
      //       onChange={() => setRole('admin')}
      //     />
      //     Admin
      //   </label>
      //   <label>
      //     <input
      //       type="radio"
      //       name="role"
      //       value="lecturer"
      //       checked={role === 'lecturer'}
      //       onChange={() => setRole('lecturer')}
      //     />
      //     Lecturer
      //   </label>
      // </div>
      // <input
      //   type="text"
      //   placeholder="Email"
      //   value={email}
      //   onChange={(e) => setEmail(e.target.value)}
      // />
      // <input
      //   type="password"
      //   placeholder="Password"
      //   value={password}
      //   onChange={(e) => setPassword(e.target.value)}
      // />
  //     <button onClick={handleLogin}>Login</button>
  //     <p>{message}</p>
  //   </div>
  // );

};

export default Login;
