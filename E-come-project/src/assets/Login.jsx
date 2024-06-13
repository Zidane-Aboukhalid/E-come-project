import React from 'react';

export default function AuthPage() {
  return (
    <div className="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static" data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="auth-wrapper auth-basic px-2">
              <div className="auth-inner my-2">
                <div className="card mb-0">
                  <div className="card-body">
                    <a href="index.html" className="brand-logo">
                      <svg viewBox="0 0 139 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="28">
                        <defs>
                          <linearGradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                            <stop stopColor="#000000" offset="0%"></stop>
                            <stop stopColor="#FFFFFF" offset="100%"></stop>
                          </linearGradient>
                          <linearGradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                            <stop stopColor="#EEEEEE" stopOpacity="0" offset="0%"></stop>
                            <stop stopColor="#FFFFFF" offset="100%"></stop>
                          </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                            <g id="Group" transform="translate(400.000000, 178.000000)">
                              <path className="text-primary" id="Path" d="M0,0 L39.1816085,0 L69.3453773,32.2519224 L101.428699,0 L138.784583,0 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 0,0 Z" style={{fill: 'currentColor'}}></path>
                              <path id="Path1" d="M69.3453773,32.2519224 L101.428699,0 L138.784583,0 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2"></path>
                              <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"></polygon>
                              <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"></polygon>
                              <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"></polygon>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <h2 className="brand-text text-primary ms-1">Vuexy</h2>
                    </a>

                    <h4 className="card-title mb-1">Welcome to Vuexy! 👋</h4>
                    <p className="card-text mb-2">Please sign-in to your account and start the adventure</p>

                    <form className="auth-login-form mt-2" action="index.html" method="POST">
                      <div className="mb-1">
                        <label htmlFor="login-email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="login-email" name="login-email" placeholder="john@example.com" aria-describedby="login-email" tabIndex="1" autoFocus />
                      </div>

                      <div className="mb-1">
                        <div className="d-flex justify-content-between">
                          <label className="form-label" htmlFor="login-password">Password</label>
                          <a href="auth-forgot-password-basic.html">
                            <small>Forgot Password?</small>
                          </a>
                        </div>
                        <div className="input-group input-group-merge form-password-toggle">
                          <input type="password" className="form-control form-control-merge" id="login-password" name="login-password" tabIndex="2" placeholder="••••••••••••" aria-describedby="login-password" />
                          <span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                        </div>
                      </div>
                      <div className="mb-1">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="remember-me" tabIndex="3" />
                          <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                        </div>
                      </div>
                      <button className="btn btn-primary w-100" tabIndex="4">Sign in</button>
                    </form>

                    <p className="text-center mt-2">
                      <span>New on our platform?</span>
                      <a href="auth-register-basic.html">
                        <span>Create an account</span>
                      </a>
                    </p>

                    <div className="divider my-2">
                      <div className="divider-text">or</div>
                    </div>

                    <div className="auth-footer-btn d-flex justify-content-center">
                      <a href="#" className="btn btn-facebook">
                        <i data-feather="facebook"></i>
                      </a>
                      <a href="#" className="btn btn-twitter white">
                        <i data-feather="twitter"></i>
                      </a>
                      <a href="#" className="btn btn-google">
                        <i data-feather="mail"></i>
                      </a>
                      <a href="#" className="btn btn-github">
                        <i data-feather="github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
