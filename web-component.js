class myComponent extends HTMLElement {
	constructor() {
		super() 
			// this.attachShadow({ mode: "open" });
	}

	static get observedAttributes() {
    return["title", "index"]
  }

	attributeChangedCallback(atribute, oldVal, newVal) {
		if(atribute === "title" && oldVal !== newVal) {
			this.title = newVal
		}

		if(atribute === "index" && oldVal !== newVal) {
			this.index = newVal
		}
	}

	getTemplate() {
		const template = document.createElement("template")
		template.innerHTML = `
		<header>
			<section class="header-icons-container">
				<div class="icons">
					<a href="https://www.facebook.com" target="_black"><span class="flaticon-001-facebook"></span></a>
					<a href="https://www.twitter.com" target="_black"><span class="flaticon-002-twitter"></span></a>
					<a href="https://www.instagram.com" target="_black"><span class="flaticon-011-instagram"></span></a>
					<a href="https://www.linkedin.com" target="_black"><span class="flaticon-010-linkedin"></span></a>
					<a href="https://www.youtube.com" target="_black"><span class="flaticon-008-youtube"></span></a>
				</div>
			</section>
			<nav>
				<section class="nav-logo-container">
					<a href="./"><img src="img/Logo-negro.png" alt="Logo de mi blog"></a>
				</section>
				<section class="profile-link">
					<a href="${this.index}">${this.title}</a>
				</section>
			</nav>
		</header>
		`
		return template
	}
	
	render() {
		this.appendChild(this.getTemplate().content.cloneNode(true))
	}
	connectedCallback() {
    this.render()
  }
}

customElements.define("header-component", myComponent)