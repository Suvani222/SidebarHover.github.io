const menubox = {
  hamburger: document.querySelector(".haming"),
  item: document.querySelector(".menu-item"),
  onhover() {
    // this.hamburger.addEventListener('click', this.clk.bind(this));
    // mouseenter and mouseout works mouseover and mouseleave works
    this.hamburger.addEventListener("mouseover", this.show.bind(this));
    this.item.addEventListener("mouseleave", this.hide.bind(this));
  },

  clk() {
    if (this.item.style.display === "none") this.item.style.display = "block";
    else this.item.style.display = "none";
  },
  show() {
    this.item.style.display = "block";
  },
  hide() {
    this.item.style.display = "none";
  },
};
menubox.onhover();
