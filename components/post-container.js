class postContainer extends HTMLElement {
  constructor() {
    super();
  }

	static get observedAttributes() {
    return["title", "description"]
  }

	attributeChangedCallback(atribute, oldVal, newVal) {
		if(atribute === "title" && oldVal !== newVal) {
			this.title = newVal
		}
	}

  getTemplate() {
    const templete = document.createElement("template");
    templete.innerHTML = `
		${this.getStyles()}
		<article class="post-container">
			<img src="../img/post-1.png" alt="" />
			<p class="parrafo-component">${this.title}</p>
			<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
			ut a fugiat soluta consequatur nisi sunt.
			</p>
			<a href="../blog.html" class="blogs-button">Leer más</a>
		</article>
		`;
    return templete;
  }

	getStyles() {
		return `
			<style>
				.parrafo-component {
					font-weight: 900;
					font-size: 1.2rem;
					color: #c3285d;
				}
			</style>
		`
	}

  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("post-article", postContainer);
