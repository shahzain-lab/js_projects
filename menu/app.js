const menu = [
    
    {
        title:'chicken diavola with polenta and zucchini flowers',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/chicken-diavola-with-polenta-and-zucchini-flowers.jpg',
    },
    {
        title:'chicken masala recipe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/chicken-masala-recipe.jpg',
    },
    {
        title:'KitKat ice cream pie',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/KitKat-ice-cream-pie.jpg',
    },
    {
        title:'maple thyme roast chicken',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/maple-thyme-roast-chicken.jpg',
    },
    {
        title:'charred lemon chicken piccata Recipe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/charred-lemon-chicken-piccata-recipe.webp',
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
    },
    {
        title:'UbeIce Cream HERO',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/UbeIceCreamHERO.jpg',
    },
    {
        title:'Vegetable Stir Fry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem aliquid ipsum quaerat error vero reiciendis, sequi numquam labore.',
        img:'./img/vegetable-stir-fry.jpg',
    },
];

const products = document.querySelector('.products');


let menuItem = menu.map(item => {
    return `
    <div class="item">
    <img src=${item.img} alt=${item.title}>
    <div class="itemText">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <span class="feed">
    <i class="fas fa-thumbs-up"> </i>
    <i class="fas fa-heart"></i>
  </span>
  </div>
</div>
    `
});

menuItem = menuItem.join('');
products.innerHTML = menuItem;

