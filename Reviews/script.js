// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "data:image/jpeg;base64,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",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://tradiesinbusiness.com.au/wp-content/uploads/2019/09/avatar-jongen-voorbeeld-1.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://miro.medium.com/max/800/1*t0qEftasrCc2qanM79RrmA.png",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


  const img  = document.getElementById('person-img');
  const author  = document.getElementById('author');
  const job  = document.getElementById('job');
  const info  = document.getElementById('info');

  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const randomNumber = document.querySelector('.random-btn');


  let itemNum = 0;
  window.addEventListener('DOMContentLoaded', () => {
      getData()
  });

function getData(){
    const item = reviews[itemNum];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}

nextBtn.addEventListener('click', () => {
    itemNum++;
    if(itemNum > reviews.length - 1) {
        itemNum = 0
    }
    getData()
});

prevBtn.addEventListener('click', () => {
    itemNum--;
    if(itemNum < 0) {
        itemNum = reviews.length - 1
    };
    getData();
});

randomNumber.addEventListener('click', () => {
    itemNum = getRandomNumber();
    console.log(itemNum);
    getData();
});

function getRandomNumber(){
    return Math.floor(Math.random() * reviews.length);
}
