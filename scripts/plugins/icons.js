export const IconPlugin = {
  install(Vue) {
    // Redmine renders a hidden sprite icon in every page (#icon-copy-source);
    // its href gives the digested path of core's icons.svg.
    Vue.prototype.iconHref = (name) => {
      const use = document.querySelector('#icon-copy-source use');
      const sprite = use ? use.getAttribute('href').split('#')[0] : '';
      return `${sprite}#icon--${name}`;
    };
  }
};
