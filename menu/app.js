const menu = [
    
    {
        title:'chicken diavola with polenta and zucchini flowers',
        price: 24.55,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/chicken-diavola-with-polenta-and-zucchini-flowers.jpg',
        category: 'chicken',
    },
    {
        title:'chicken masala recipe',
        price: 16.34,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/chicken-masala-recipe.jpg',
        category: 'chicken',
    },
    {
        title:'KitKat ice cream pie',
        price: 14.76,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/KitKat-ice-cream-pie.jpg',
        category: 'icecream',
    },
    {
        title:'maple thyme roast chicken',
        price: 34.24,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/maple-thyme-roast-chicken.jpg',
        category: 'chicken',
    },
    {
        title:'charred lemon chicken piccata Recipe',
        price: 22.56,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/charred-lemon-chicken-piccata-recipe.webp',
        category: 'chicken',
    },
    {
        title:'sauted-vegetable-medley',
        price: 13.67,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/sauted-vegetable-medley.jpeg',
        category:"vegetarian",
    },
    {
        title:'Scoops kinds ice cream',
        price: 17.00,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/Scoops-kinds-ice-cream.jpg',
        category: 'icecream',
    },
    {
        title:'Skinny Broccoli And Mixed Vege Dish',
        price: 23.56,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/skinny-broccoli-and-mixed-vege-dish.jpg',
        category:"vegetarian",
    },
    {
        title:'Tequila Chicken Recipe',
        price: 36.56,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/Tequila-Chicken-Recipe.jpg',
        category: 'chicken',
    },
    {
        title:'UbeIce Cream HERO',
        price: 21.89,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/UbeIceCreamHERO.jpg',
        category: 'icecream',
    },
    {
        title:'Vegetable Stir Fry',
        price: 19.43,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/vegetable-stir-fry.jpg',
        category:"vegetarian",
    },
];

const menuProducts = document.querySelector('.section-center');
const btnContainer = document.querySelectorAll('.btn-container');


window.addEventListener('DOMContentLoaded', () => {
    displayMenuItem(menu);
});


btnContainer.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        const category = e.target.dataset.type;
        const filterMenu = menu.filter(item => {
            if(item.category === category){
                return item;
            }
        })
        if(category === 'all'){
            displayMenuItem(menu)
        } else {
            displayMenuItem(filterMenu)
        }
    })
});



function displayMenuItem(menuItem) {
    let displayMenu = menuItem.map(item => {
        return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.description}
            </p>
          </div>
        </article>
        `
    });
    displayMenu = displayMenu.join('');
    menuProducts.innerHTML = displayMenu;
}