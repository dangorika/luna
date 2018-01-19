export default () => {
  const tabContext = document.querySelectorAll('.js-tabs');

  tabContext.forEach((context) => {
    let tabLink = context.querySelectorAll('.js-tab-link');
    let tabContent = context.querySelectorAll('.js-tab-content');

    makeActive(tabLink, 0);
    makeActive(tabContent, 0);

    tabLink.forEach((link) => {
      onClick(link.querySelector('a'), tabContent);
    });

  });

  function makeActive(element, index) {
    element[index].classList.add('is-active');
  }

  function onClick(element, contents) {
    element.addEventListener('click', (e) => {
      e.preventDefault();

      let tabLink = e.currentTarget.parentElement;
      let tabIndex = findIndex(tabLink);

      removeSiblingsClass(tabLink.parentElement.children, 'is-active');
      tabLink.classList.add('is-active');

      removeSiblingsClass(contents, 'is-active');
      contents[tabIndex].classList.add('is-active');

      
    });
  }

  function removeSiblingsClass(sequence, className) {
    for (let i = 0; i < sequence.length; i++) {
      sequence[i].classList.remove(className);
    }
  }

  function findIndex(element) {
    let children = element.parentElement.children;
    let childrenArray = Array.prototype.slice.call(children);

    return childrenArray.indexOf(element);
  }
};
