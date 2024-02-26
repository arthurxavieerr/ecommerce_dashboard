document.addEventListener('DOMContentLoaded', () => {
  // Selecione a lista de navegação
  const navList = document.querySelector('#nav-list');

  // Obtenha a quantidade de itens na lista de navegação
  const navItems = navList.querySelectorAll('li');
  const numNavItems = navItems.length;

  // Adicione o símbolo > entre os itens da lista de navegação, exceto no primeiro item
  for (let i = 1; i < numNavItems; i++) {
    const li = navItems[i];
    const span = document.createElement('span');
    span.textContent = ' > ';
    li.insertBefore(span, li.childNodes[0]);
  }
});