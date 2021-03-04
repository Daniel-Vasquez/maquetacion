class footerComponent extends HTMLElement {
  constructor() {
    super();
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
			<footer>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</footer>
		`;
    return template;
  }

  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("footer-container", footerComponent);
