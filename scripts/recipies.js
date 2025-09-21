const RECIPES = [
  // Vegan (5)
  {
    id:'v1', title:'Herby Chickpea Salad', category:'Vegan', time:10, image:'./images/recipes/chickpea-salad-min.webp',
    description:'Fresh chickpeas, tomatoes, cucumber, and a lemon–herb dressing.',
    ingredients:['1 can chickpeas, rinsed','1 cup cherry tomatoes, halved','1 cup cucumber, diced','2 tbsp olive oil','1 tbsp lemon juice','Salt & pepper'],
    steps:['Toss chickpeas with veg.','Whisk oil, lemon, salt & pepper.','Combine and chill 5 minutes.'],
    nutrition:{Calories:320,Protein:'12g',Carbs:'40g',Fat:'12g'}
  },
  { id:'v2', title:'Avocado Toast', category:'Vegan', time:8, image:'./images/recipes/avocado-toast-min.webp',
    description:'Creamy avocado on toasted bread with lime and chili.',
    ingredients:['2 slices whole-grain bread','1 ripe avocado','½ lime, juice','Pinch chili flakes','Salt'],
    steps:['Toast bread.','Mash avocado with lime & salt.','Spread and top with chili flakes.'],
    nutrition:{Calories:380,Protein:'9g',Carbs:'44g',Fat:'18g'}
  },
  { id:'v3', title:'Mango Chia Pudding', category:'Vegan', time:5, image:'./images/recipes/mango-chia-min.webp',
    description:'Chia soaked in plant milk with mango layers.',
    ingredients:['3 tbsp chia seeds','¾ cup oat/almond milk','½ tsp vanilla','½ cup mango, diced'],
    steps:['Mix chia, milk, vanilla.','Chill 2+ hours.','Layer with mango.'],
    nutrition:{Calories:280,Protein:'6g',Carbs:'39g',Fat:'10g'}
  },
  { id:'v4', title:'Quinoa Veggie Stir-Fry', category:'Vegan', time:15, image:'./images/recipes/quinoa-stirfry-min.webp',
    description:'Quick wok of mixed veggies tossed with quinoa.',
    ingredients:['1 cup cooked quinoa','1 cup mixed veg','1 tbsp soy/tamari','1 tsp sesame oil'],
    steps:['Sauté veg 3–4 min.','Add quinoa & tamari.','Finish with sesame oil.'],
    nutrition:{Calories:360,Protein:'12g',Carbs:'54g',Fat:'10g'}
  },
  { id:'v5', title:'Red Lentil Soup', category:'Vegan', time:15, image:'./images/recipes/lentil-soup-min.webp',
    description:'Comforting 1-pot lentil soup with tomato.',
    ingredients:['¾ cup red lentils','1 small onion, diced','1 cup tomato passata','2 cups water/stock','Salt'],
    steps:['Sauté onion.','Add rest; simmer 12 min.','Season to taste.'],
    nutrition:{Calories:310,Protein:'18g',Carbs:'48g',Fat:'4g'}
  },

  // High Protein (5)
  { id:'hp1', title:'Greek Yogurt Power Bowl', category:'High Protein', time:5, image:'./images/recipes/yogurt-bowl-min.webp',
    description:'Thick yogurt with berries and nuts.',
    ingredients:['1 cup Greek yogurt','½ cup berries','1 tbsp mixed nuts','1 tsp honey (optional)'],
    steps:['Add yogurt to bowl.','Top with berries & nuts.','Drizzle honey.'],
    nutrition:{Calories:280,Protein:'22g',Carbs:'24g',Fat:'9g'}
  },
  { id:'hp2', title:'Chicken Salad Cups', category:'High Protein', time:12, image:'./images/recipes/chicken-salad-min.webp',
    description:'Shredded chicken with yogurt dressing in lettuce cups.',
    ingredients:['1 cup cooked chicken, shredded','2 tbsp yogurt','1 tsp mustard','Lettuce leaves','Salt & pepper'],
    steps:['Mix chicken, yogurt, mustard.','Season.','Spoon into lettuce leaves.'],
    nutrition:{Calories:260,Protein:'28g',Carbs:'6g',Fat:'12g'}
  },
  { id:'hp3', title:'Egg & Spinach Scramble', category:'High Protein', time:10, image:'./images/recipes/egg-spinach-min.webp',
    description:'Fluffy eggs with wilted spinach.',
    ingredients:['2–3 eggs','1 cup spinach','1 tsp olive oil','Salt & pepper'],
    steps:['Whisk eggs.','Sauté spinach 30s.','Add eggs; scramble.'],
    nutrition:{Calories:240,Protein:'18g',Carbs:'2g',Fat:'18g'}
  },
  { id:'hp4', title:'Tuna Lettuce Wraps', category:'High Protein', time:8, image:'./images/recipes/tuna-wraps-min.webp',
    description:'Quick tuna mix wrapped in crisp lettuce.',
    ingredients:['1 can tuna, drained','1 tbsp olive oil or yogurt','1 tsp lemon','Lettuce leaves'],
    steps:['Mix tuna with dressing & lemon.','Wrap in lettuce.'],
    nutrition:{Calories:210,Protein:'23g',Carbs:'2g',Fat:'12g'}
  },
  { id:'hp5', title:'Cottage-Cheese Pancakes', category:'High Protein', time:15, image:'./images/recipes/cottage-pancakes-min.webp',
    description:'Tender pancakes high in protein.',
    ingredients:['½ cup cottage cheese','1 egg','¼ cup oat flour','Pinch baking powder'],
    steps:['Blend batter.','Cook 2–3 min/side.'],
    nutrition:{Calories:300,Protein:'22g',Carbs:'30g',Fat:'9g'}
  },

  // Gluten Free (5)
  { id:'gf1', title:'Zucchini Noodles Pesto', category:'Gluten Free', time:12, image:'./images/recipes/zoodles-min.webp',
    description:'Zoodles tossed with basil pesto.',
    ingredients:['2 cups zucchini noodles','2 tbsp pesto','Cherry tomatoes'],
    steps:['Sauté zoodles 2 min.','Toss with pesto & tomatoes.'],
    nutrition:{Calories:220,Protein:'7g',Carbs:'16g',Fat:'14g'}
  },
  { id:'gf2', title:'Grilled Salmon & Veg', category:'Gluten Free', time:15, image:'./images/recipes/salmon-veg-min.webp',
    description:'Pan-grilled salmon with seasonal veg.',
    ingredients:['1 salmon fillet','1 cup veg','1 tsp olive oil','Salt & pepper'],
    steps:['Season salmon & veg.','Grill/pan 3–4 min/side.'],
    nutrition:{Calories:420,Protein:'34g',Carbs:'10g',Fat:'26g'}
  },
  { id:'gf3', title:'Stuffed Bell Peppers', category:'Gluten Free', time:15, image:'./images/recipes/stuffed-peppers-min.webp',
    description:'Peppers filled with rice & beans.',
    ingredients:['2 bell peppers','1 cup cooked rice','½ cup beans','Spices'],
    steps:['Stuff peppers.','Bake/air-fry 10–12 min.'],
    nutrition:{Calories:340,Protein:'11g',Carbs:'58g',Fat:'6g'}
  },
  { id:'gf4', title:'Sweet Potato Hash', category:'Gluten Free', time:15, image:'./images/recipes/sweet-potato-hash-min.webp',
    description:'Skillet hash with onions & herbs.',
    ingredients:['2 cups diced sweet potato','½ onion','1 tsp olive oil','Salt'],
    steps:['Pan-fry potatoes 10–12 min.','Add onion; season.'],
    nutrition:{Calories:300,Protein:'4g',Carbs:'60g',Fat:'6g'}
  },
  { id:'gf5', title:'Coconut Rice & Beans', category:'Gluten Free', time:15, image:'./images/recipes/coconut-rice-beans-min.webp',
    description:'Creamy coconut rice with black beans.',
    ingredients:['1 cup cooked rice','½ cup black beans','¼ cup coconut milk','Salt'],
    steps:['Warm rice & beans.','Stir in coconut milk; season.'],
    nutrition:{Calories:390,Protein:'12g',Carbs:'61g',Fat:'12g'}
  },

  // 15-minute meals (5)
  { id:'q1', title:'Caprese Omelette', category:'15-minute meals', time:10, image:'./images/recipes/caprese-omelette-min.webp',
    description:'Tomato, basil & mozzarella omelette.',
    ingredients:['2–3 eggs','Tomato slices','Basil','Mozzarella','Salt'],
    steps:['Whisk eggs; pour into pan.','Add fillings; fold.'],
    nutrition:{Calories:330,Protein:'22g',Carbs:'4g',Fat:'24g'}
  },
  { id:'q2', title:'PB Banana Smoothie', category:'15-minute meals', time:5, image:'./images/recipes/pb-smoothie-min.webp',
    description:'Creamy peanut butter & banana shake.',
    ingredients:['1 banana','1 tbsp peanut butter','¾ cup milk','Ice'],
    steps:['Blend all until smooth.'],
    nutrition:{Calories:310,Protein:'11g',Carbs:'44g',Fat:'10g'}
  },
  { id:'q3', title:'Quick Shrimp Stir-Fry', category:'15-minute meals', time:12, image:'./images/recipes/shrimp-stirfry-min.webp',
    description:'Garlic shrimp with mixed veg.',
    ingredients:['200g shrimp','1 cup mixed veg','1 tsp soy/tamari','Garlic'],
    steps:['Sauté shrimp 2–3 min.','Add veg & soy; toss.'],
    nutrition:{Calories:280,Protein:'26g',Carbs:'14g',Fat:'12g'}
  },
  { id:'q4', title:'Hummus Veg Wrap', category:'15-minute meals', time:8, image:'./images/recipes/hummus-wrap-min.webp',
    description:'Hummus with crunchy veg in a wrap.',
    ingredients:['Wrap/tortilla','3 tbsp hummus','Cucumber & carrot','Lettuce'],
    steps:['Spread hummus.','Add veg; roll up.'],
    nutrition:{Calories:360,Protein:'11g',Carbs:'48g',Fat:'12g'}
  },
  { id:'q5', title:'Tomato Basil Pasta (quick)', category:'15-minute meals', time:15, image:'./images/recipes/quick-pasta-min.webp',
    description:'Fast skillet pasta with basil & garlic.',
    ingredients:['150g pasta','1 cup cherry tomatoes','2 garlic cloves','Olive oil','Basil'],
    steps:['Cook pasta.','Sauté tomatoes & garlic.','Toss with pasta & basil.'],
    nutrition:{Calories:520,Protein:'14g',Carbs:'88g',Fat:'12g'}
  }
];

function renderCards(){
  const container = document.querySelector(".recipieContainer");
  container.innerHTML = ""; 
  for (let i = 0; i < RECIPES.length; i++) {
    const r = RECIPES[i];
    const card = document.createElement("div");
    card.className = "recipieitem";
    card.dataset.category = (r.category || "").toLowerCase();
    card.dataset.id = r.id;
    card.dataset.time = r.time;

    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}" loading="lazy">
      <h1 class="recipietitle">${r.title}</h1>
      <p class="recipiedesc">${r.description}</p>
      <p class="recipiecategory">${r.category}</p>
      <button id="view">View</button>
    `;
    container.appendChild(card);
  }
}
renderCards();

function rendervegan(){
  const container = document.querySelector(".recipieContainer");
  container.innerHTML = ""; 
  for (let i = 0; i < RECIPES.length; i++) {
    const r = RECIPES[i];
    const card = document.createElement("div");
    card.className = "recipieitem";
    card.dataset.category = (r.category || "").toLowerCase();
    card.dataset.id = r.id;
    card.dataset.time = r.time;

    if(r.category=="Vegan"){
      card.innerHTML = `
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <h1 class="recipietitle">${r.title}</h1>
        <p class="recipiedesc">${r.description}</p>
        <p class="recipiecategory">${r.category}</p>
        <button id="view">View</button>
      `;
      container.appendChild(card);  
    }
  }
}
function renderhighprotrein(){
  const container = document.querySelector(".recipieContainer");
  container.innerHTML = ""; 
  for (let i = 0; i < RECIPES.length; i++) {
    const r = RECIPES[i];
    const card = document.createElement("div");
    card.className = "recipieitem";
    card.dataset.category = (r.category || "").toLowerCase();
    card.dataset.id = r.id;
    card.dataset.time = r.time;

    if(r.category=="High Protein"){
      card.innerHTML = `
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <h1 class="recipietitle">${r.title}</h1>
        <p class="recipiedesc">${r.description}</p>
        <p class="recipiecategory">${r.category}</p>
        <button id="view">View</button>
      `;
      container.appendChild(card);  
    }
  }
}
function renderglutenfree(){
  const container = document.querySelector(".recipieContainer");
  container.innerHTML = ""; 
  for (let i = 0; i < RECIPES.length; i++) {
    const r = RECIPES[i];
    const card = document.createElement("div");
    card.className = "recipieitem";
    card.dataset.category = (r.category || "").toLowerCase();
    card.dataset.id = r.id;
    card.dataset.time = r.time;

    if(r.category=="Gluten Free"){
      card.innerHTML = `
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <h1 class="recipietitle">${r.title}</h1>
        <p class="recipiedesc">${r.description}</p>
        <p class="recipiecategory">${r.category}</p>
        <button id="view">View</button>
      `;
      container.appendChild(card);  
    }
  }
}
function rendermin(){
  const container = document.querySelector(".recipieContainer");
  container.innerHTML = ""; 
  for (let i = 0; i < RECIPES.length; i++) {
    const r = RECIPES[i];
    const card = document.createElement("div");
    card.className = "recipieitem";
    card.dataset.category = (r.category || "").toLowerCase();
    card.dataset.id = r.id;
    card.dataset.time = r.time;

    if(r.category=="15-minute meals"){
      card.innerHTML = `
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <h1 class="recipietitle">${r.title}</h1>
        <p class="recipiedesc">${r.description}</p>
        <p class="recipiecategory">${r.category}</p>
        <button id="view">View</button>
      `;
      container.appendChild(card);  
    }
  }
}
let veganBtn = document.getElementById("btnVegan");
let highpr = document.getElementById("btnHighProtein");
let gluten = document.getElementById("btnGlutenFree");
let min15 = document.getElementById("btn15Min");
let all = document.getElementById("btnAll");
veganBtn.addEventListener("click",rendervegan);
highpr.addEventListener("click",renderhighprotrein);
gluten.addEventListener("click",renderglutenfree);
min15.addEventListener("click",rendermin);
all.addEventListener("click",renderCards)

let search = document.getElementById("recipiesearch");
let searchbtn = document.getElementById("searchbtn");

function searchFilter(){
  const container = document.querySelector(".recipieContainer");
  const q = (search.value || "").trim().toLowerCase();

  container.innerHTML = "";

  let found = 0;
  for (let i = 0; i < RECIPES.length; i++) {
    const r = RECIPES[i];
    let match =
      q === "" ||
      r.title.toLowerCase().includes(q);

    if (match) {
      const card = document.createElement("div");
      card.className = "recipieitem";
      card.dataset.category = (r.category || "").toLowerCase();
      card.dataset.id = r.id;
      card.dataset.time = r.time;

      card.innerHTML = `
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <h1 class="recipietitle">${r.title}</h1>
        <p class="recipiedesc">${r.description}</p>
        <p class="recipiecategory">${r.category}</p>
        <button id="view">View</button>
      `;
      container.appendChild(card);
      found++;
    }
  }

  if (found === 0) {
    container.innerHTML = `<p style="padding:1rem">No recipes found.</p>`;
  }
}

// --- minimal modal wiring (event delegation) ---
const popup = document.getElementById("recipiepop");
const containerEl = document.querySelector(".recipieContainer");

// open modal for any View button
containerEl?.addEventListener("click", (e) => {
  const btn = e.target.closest("button#view"); // reuse existing id
  if (!btn) return;

  const card = btn.closest(".recipieitem");
  const id = card?.dataset.id;
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;

  popup.style.display = "flex"; // your CSS centers via flex
  popup.innerHTML = `
    <div class="recipiedata">
      <h1 class="recipietitle">${r.title}</h1>
      <img src="${r.image}" alt="${r.title}" loading="lazy">
      
      <p class="recipiedesc">${r.description}</p>

      <h3>Ingredients</h3>
      <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

      <h3>Steps</h3>
      <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>

      <h3>Nutrition</h3>
      <table border=1 >
        <tr><th>Calories</th><td>${r.nutrition.Calories}</td></tr>
        <tr><th>Protein</th><td>${r.nutrition.Protein}</td></tr>
        <tr><th>Carbs</th><td>${r.nutrition.Carbs}</td></tr>
        <tr><th>Fat</th><td>${r.nutrition.Fat}</td></tr>
      </table>
      <button id="close" aria-label="Close">Close</button>
    </div>
  `;
});

// close on overlay click or × button
popup.addEventListener("click", (e) => {
  if (e.target.id === "close" || e.target === popup) {
    popup.style.display = "none";
    popup.innerHTML = "";
  }
});

// search listeners (safe + Enter support)
if (searchbtn) searchbtn.addEventListener("click", searchFilter);
search.addEventListener("keydown", (e) => { if (e.key === "Enter") searchFilter(); });
