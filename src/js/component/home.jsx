import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { string } from "prop-types";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">{props.brand}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" aria-current="#">{props.home}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{props.about}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">{props.services}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">{props.services}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
const Jumbotron = (props) => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.jumbotronBtn} role="button">
				{props.btnLabel}
			</a>
		</div>
	);
};

const Card = (props) => {
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.cardImg} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardDescription}
				</p>
				<a href={props.cardBtnUrl} className="btn btn-primary">
					{props.cardLabel}
				</a>
			</div>
		</div>
	);
};

const Footer = (props) => {
	return (
		<div className="text-center text-lg-start text-white" style={FooterStyle}>
				<div
				className="d-flex justify-content-between p-4">
				<div className="me-5">
					<span>Follow me on Github</span>
				</div>
				<div>
				
					<a href="https://github.com/jorge06br" className="text-white me-4">
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
			<div className="">
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						
						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold">Documentación</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={FooterStylesColHeader}
							/>
							<p>
								<a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" className="text-white">Bootstrap 5.1.3</a>
							</p>
							<p>
								<a href="reactjs.org" className="text-white">React JS</a>
							</p>
							<p>
								<a href="https://www.w3schools.com/js/default.asp" className="text-white">Javascript</a>
							</p>
							<p>
								<a href="https://stackoverflow.com/" className="text-white">stackoverflow</a>
							</p>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold">Contacto</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={FooterStylesColHeader}
							/>
							<p><i className="fas fa-home mr-3"></i> Managua,Nicaragua</p>
							<p><i className="fas fa-envelope mr-3"></i> jorgebaca06@gmail.com</p>
							<p><i className="fas fa-phone mr-3"></i> +505-86792585</p>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center p-3">
				<a className="text-white" href="https://mdbootstrap.com/"></a>
			</div>
		</div>

	)
}
//Proptypes Text Content 
Navbar.PropTypes = {
	brand: PropTypes.string,
	home: PropTypes.string,
	about: PropTypes.string,
	services: PropTypes.string,
	contact: PropTypes.string
}
Jumbotron.PropTypes = {
	title: PropTypes.string,
	description: string,
	jumbotronBtn: string,
	btnLabel: string
}
Card.PropTypes = {
	cardImg: PropTypes.string,
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string,
	cardBtnUrl: PropTypes.string,
	cardLabel: PropTypes.string
}
//Proptypes Styles
const FooterStylesColHeader={
	width: "60px",
	backgroundColor:"white"
	//height ?
}
const  FooterStyle={
	backgroundColor:"black"
}

//ReactDOM.render( <Home />, document.querySelector("#app"));
//export default Home
//ReactDOM.render( <Navbar brand="Start Bootstrap" home="Home" about="about" services="services" contact="Contact" />, document.querySelector("#app"));
/*ReactDOM.render(
	<Jumbotron
				title="A Warm Welcome!!!"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
				btnLabel="Call to action!"
				jumbotronBtn="https://reactjs.org/"
			/>,
			document.querySelector("#app")
			);*/
/*ReactDOM.render(<Card
				cardImg="https://static.wixstatic.com/media/27151c_86240c83350a457c96b3459377f558de~mv2.jpg/v1/fill/w_640,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27151c_86240c83350a457c96b3459377f558de~mv2.jpg"
				cardTitle="Card Title"
				cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameNameical Latin literature from 45 BC "
				cardBtnUrl="https://www.akc.org/dog-breeds/"
				cardLabel="Find out more!"
			/>, document.querySelector("#app"));*/
ReactDOM.render(<Footer />, document.querySelector("#app"));
