import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      title: "home",
      activo: false,
      activo1: true,
      activo2: false,
      activo3: false,
      activo4: false,
      activo5: false,
    };
  },

  methods: {},

  async mounted() {
    const toggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    toggle.addEventListener("click", () => {
      mobileNav.style.display =
        mobileNav.style.display === "block" ? "none" : "block";
    });
  },

  template: await get_template("./assets/js/components/menu/home"),
};
