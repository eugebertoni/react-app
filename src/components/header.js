import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		   hasScrolled: false
		}
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = (event) => {
	  	const scrollTop = window.pageYOffset

	  	if (scrollTop > 50) {
	    	this.setState({ hasScrolled: true })
	  	} else {
	    	this.setState({ hasScrolled: false })
	  	}
	}

  	render() {
    	return (
		  	<div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}> {/*if the user has scrolled, then add a new CSS class HeaderScrolled. Otherwise, remove it.*/}
		    	<div className="HeaderGroup">
		      		<Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link>
		      		<Link to="/courses">Courses</Link>
		      		<Link to="/downloads">Downloads</Link>
		      		<Link to="/workshops">Workshops</Link>
		      		<Link to="/buy"><button>Buy</button></Link>
		    	</div>
		  	</div>
    	)
  	}
}



export default Header
