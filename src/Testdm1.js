
function Testdm1() {
  return (

	<div>
		<header id="site-header" className="fixed-top">
			<div className="container">
				<nav className="navbar navbar-expand-lg stroke">
					<a className="navbar-brand" href="index.html">
						<span className="fa fa-laptop"></span> PQV
					</a>
					<button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
						data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
						<span className="navbar-toggler-icon fa icon-close fa-times"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item @@about__active">
								<a className="nav-link" href="#about">About</a>
							</li>
							<li className="nav-item @@about__active">
								<a className="nav-link" href="#skills">Skills</a>
							</li>
							<li className="nav-item @@contact__active">
								<a className="nav-link" href="#about_us">Contact</a>
							</li>
						</ul>
					</div>

					<div className="mobile-position">
						<nav className="navigation">
							<div className="theme-switch-wrapper">
								<label className="theme-switch" for="checkbox">
									<input type="checkbox" id="checkbox"/>
									<div className="mode-container">
										<i className="gg-sun"></i>
										<i className="gg-moon"></i>
									</div>
								</label>
							</div>
						</nav>
					</div>

				</nav>
			</div>
		</header>

		<section id="home" className="w3l-banner py-5">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
						<span className="title-small">Hello</span>
						<h1 className="mb-2 title"> <span>I'm</span> PHAM QUOC VAN </h1>
						<h1 className="mb-4 title"> a <span className="typed-text"></span><span className="cursor1">Web developer</span></h1>
						<p>I am a sophomore , VKU University of Information Technology and Communication. 
							I have a passion for programming and want to be a good programmer</p>
						<div className="mt-sm-5 mt-4">
							<a className="btn btn-primary btn-style mr-2" href="contact.html"> Hire Me </a>
							<a className="btn btn-outline-primary btn-style mr-2" href="#portfolio"> Portfolio </a>
						</div>
					</div>
					<div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
						<div className="img-effect text-lg-center">
							<img src="assets/images/avatar.png" alt="myphoto" className="img-fluid" width="545px" height="545px"/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="w3l-index3" id="about">
			<div className="midd-w3 py-5">
				<div className="container py-lg-5 py-md-3">
					<div className="row">
						<div className="col-lg-4">
							<div className="position-relative">
								<img src="assets/images/avatar.png" alt="" className="radius-image img-fluid"/>
							</div>
						</div>
						<div className="col-lg-8 mt-lg-0 mt-5">
							<h5 className="title-small mb-2">Who am i?</h5>
							<h3 className="title-big">I'm PHAM QUOC VAN, a visual UI/UX Designer and Web Developer</h3>
							<p className="mt-4">I am a sophomore , VKU University of Information Technology and Communication.
							 I have a passion for programming and want to be a good programmer</p>
							<a href="#download" className="btn btn-style btn-primary mt-lg-5 mt-4">Download CV</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div id="skills" class="skills container-fluid">
            <div class="row">
				<div class="col-md-3"></div>
                <div class="col-md-6 skii-div tech-skill">
                    <div class="title">
                        <h2>Skill</h2>
                    </div>
                    
                    <ul>
                        <li>
                            <label for="">PHP / MYSQL</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning pb-1" role="progressbar" 
								  ></div>
                                </div>
                        </li>
                         <li>
                            <label for="">HTML5</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning pb-2" role="progressbar" 
								  ></div>
                                </div>
                        </li>
                         <li>
                            <label for="">CSS</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning pb-3" role="progressbar" 
								  ></div>
                                </div>
                        </li>
                         <li>
                            <label for="">JavaScript</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning pb-4" role="progressbar" 
								  ></div>
                                </div>
                        </li>
                    </ul>
                </div>
				<div class="col-md-3"></div>
            </div>
        </div> 

		<div id="about_us" className="about-us container-fluid">
           <div className="container">
               <div className="session-title row">
                    <h2>About Me</h2>
					<p></p>
                   <div className="heading-line"></div>
                </div>
                <div className="about-row row">
                   <div className="image-col col-md-4">
                       {/* <img src="assets/images/about.png" alt=""/> */}
					   <img src="assets/images/avatar.png" alt="myphoto" className="img-fluid"/>
                       <button className="btn btn-primary"><i className="fas fa-download"></i> Download CV</button>
                   </div>
                   <div className="detail-col col-md-8">
                       <h2>PHAM QUOC VAN</h2>
                        <h6>Freelance Web Designer</h6>
                        <p>I am a sophomore , VKU University of Information Technology and Communication. 
							I have a passion for programming and want to be a good programmer.</p>
                          <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="info-list">
                                    <ul>
                                        <li><span>Birthday:</span>20. 03. 2001</li>
                                        <li><span>City:</span>Da Nang</li>
                                        <li><span>Study:</span>VKU University</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="info-list">
                                    <ul>
                                        <li><span>Age:</span>20 Years</li>
                                        <li><span>Mail:</span>pqvan.19it3@vku.udn.com</li>
                                        <li><span>Phone:</span>0347 021 624</li>
                                    </ul>
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

export default Testdm1;
