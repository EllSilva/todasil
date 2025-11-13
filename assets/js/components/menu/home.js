import get_template from '../../components/get_template.js'

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
        }
    },

    methods: {
 
        mostrarMenu() {  
            this.activo = !this.activo; 
        },
      
 
        homeMenu() { 
                this.activo5 = false,
                this.activo4 = false,
                this.activo3 = false,
                this.activo2 = false,
                this.activo1 = true,
                this.activo = !this.activo; 
        },

        sobreMenu() {
            this.activo5 = false,
            this.activo4 = false,
            this.activo3 = false,
            this.activo2 = true,
            this.activo1 = false
            this.activo = !this.activo; 
        },

        servicoMenu() {
            this.activo5 = false,
            this.activo4 = false,
            this.activo3 = true,
            this.activo2 = false,
            this.activo1 = false,
            this.activo = !this.activo; 
        },

        galeriaMenu() {
            this.activo5 = false,
            this.activo4 = true,
            this.activo3 = false,
            this.activo2 = false,
            this.activo1 = false,
            this.activo = !this.activo; 
        },

        contactoMenu() {
            this.activo5 = true,
            this.activo4 = false,
            this.activo3 = false,
            this.activo2 = false,
            this.activo1 = false,
            this.activo = !this.activo; 
        },

         
      
    },

     async mounted() {
          /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile_nav_active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile_nav_active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });
   },
    
    template: await get_template('./assets/js/components/menu/home')
}