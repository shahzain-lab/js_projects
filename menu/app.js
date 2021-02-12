const menu = [
    
    {
        title:'chicken diavola with polenta and zucchini flowers',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/chicken-diavola-with-polenta-and-zucchini-flowers.jpg',
        category: 'chicken',
    },
    {
        title:'chicken masala recipe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/chicken-masala-recipe.jpg',
        category: 'chicken',
    },
    {
        title:'KitKat ice cream pie',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/KitKat-ice-cream-pie.jpg',
        category: 'Ice',
    },
    {
        title:'maple thyme roast chicken',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/maple-thyme-roast-chicken.jpg',
        category: 'chicken',
    },
    {
        title:'charred lemon chicken piccata Recipe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/charred-lemon-chicken-piccata-recipe.webp',
        category: 'chicken',
    },
    {
        title:'sauted-vegetable-medley',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/sauted-vegetable-medley.jpeg',
    },
    {
        title:'Scoops kinds ice cream',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/Scoops-kinds-ice-cream.jpg',
        category: 'Ice',
    },
    {
        title:'Skinny Broccoli And Mixed Vege Dish',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/skinny-broccoli-and-mixed-vege-dish.jpg',
    },
    {
        title:'Tequila Chicken Recipe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/Tequila-Chicken-Recipe.jpg',
        category: 'chicken',
    },
    {
        title:'UbeIce Cream HERO',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/UbeIceCreamHERO.jpg',
        category: 'Ice',
    },
    {
        title:'Vegetable Stir Fry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/vegetable-stir-fry.jpg',
    },
];

const products = document.querySelector('.products');

window.addEventListener('DOMContentLoaded', () => {
    displayMenu()
})

function displayMenu(){
let menuItem = menu.map(item => {
    return `
    <div class="item">
    <img src=${item.img} alt=${item.title}>
    <div class="itemText">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </div>
</div>
    `
});

menuItem = menuItem.join('');
products.innerHTML = menuItem;


}