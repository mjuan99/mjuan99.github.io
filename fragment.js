class MiComponenteA extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Jaws (1987)</p>
        `;
    }
}
customElements.define("team-a", MiComponenteA);