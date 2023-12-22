import React from 'react'
import Logo from './Icons/Logo'
import { logout } from './User/Auth/authService';
import { useNavigate } from 'react-router-dom';
import { number } from 'yup';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <article className="container">
      <hgroup className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <section className="card o-hidden border-0 shadow-lg my-5">
            <main className="card-body p-0">
              <section className="row justify-content-center">

                <section className="col-lg-12 p-5">
                  <hgroup className="d-flex justify-content-center user-heading">
                    <Logo width={60} height={60} className="me-3 fill-orange" />
                    <h1 className="text-center  h1">ADUDU</h1>
                  </hgroup>

                  <header className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Welcome Come Back!
                    </h1>
                  </header>
                  <pre className="d-flex justify-content-center user-heading">
                    <code>
                      import time from "universe"; {'\n'}
                      time.past(() =&gt;{`{`} {'\n'}
                      
                      {'  '}{`setInterval(() => {`}{'\n'}
                      {'    '}{`console.log('don't waste the chance')`}{'}'}{'\n'}
                      {'  '}{`,5000)`}
                      {'\n'}{`}`})
                    </code>
                  </pre>
                  <div className="d-flex justify-content-center user-heading">
                  <button
                    className="btn btn-primary btn-user btn-block col-lg-4"
                    type="submit"
                    onClick={handleLogout}
                  >
                    Logout
                  </button></div>

                </section>
              </section>
            </main>
          </section>
        </div>
      </hgroup>
    </article>
  )
}

export default Dashboard