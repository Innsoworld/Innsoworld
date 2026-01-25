const PROBLEMS = {

  air_delhi: {
    title: "Air Pollution",
    subtitle: "Delhi, India",
    category: "environmental",

    lat: 28.61,
    lng: 77.20,

    image: "images/air_delhi.jpg",

    overview:
      "Delhi faces one of the worst air pollution levels in the world. High population density, vehicles, industries, and seasonal factors combine to create toxic air that harms millions daily.",

    causes: [
      "Vehicle emissions from cars, buses, and trucks",
      "Industrial smoke and coal power plants",
      "Construction dust",
      "Burning of crop residue in nearby regions",
      "Firecrackers during festivals"
    ],

    effects: [
      "Breathing problems and lung diseases",
      "Heart related illnesses",
      "Reduced life expectancy",
      "Children suffering from asthma",
      "Elderly people facing severe health risks"
    ],

    factors: [
      "High population density",
      "Lack of strict pollution control",
      "Weather conditions trapping pollutants",
      "Dependency on fossil fuels",
      "Poor urban planning"
    ],

    questions: [
      "Why does air pollution increase in winter",
      "Which source contributes most",
      "Why rules fail to control pollution",
      "Who is affected the most",
      "What is the lowest cost solution"
    ],

    research: [
      "Check AQI data of Delhi",
      "Study pollution sources",
      "Analyze health reports",
      "Review government policies",
      "Study successful global solutions"
    ]
  },
 


global_warming_arctic: {
  title: "Global Warming",
  subtitle: "Arctic Region",
  category: "environmental",

  lat: 71.29,
  lng: -156.78,

  image: "images/global_warming.jpg",

  overview:
    "Global warming is the rise in Earth's average temperature caused mainly by human activities. The Arctic is warming much faster than the rest of the world, leading to melting ice, rising sea levels, and climate imbalance.",

  causes: [
    "Burning of fossil fuels like coal, oil, and gas",
    "Deforestation reducing carbon absorption",
    "Industrial greenhouse gas emissions",
    "Overuse of energy and resources",
    "Unsustainable transportation systems"
  ],

  effects: [
    "Melting of glaciers and polar ice",
    "Rising sea levels threatening coastal life",
    "Loss of habitat for polar animals",
    "Extreme weather events worldwide",
    "Disruption of food chains and ecosystems"
  ],

  factors: [
    "High dependence on fossil fuels",
    "Rapid industrialization",
    "Lack of global cooperation",
    "Overconsumption lifestyle",
    "Weak climate policies"
  ],

  questions: [
    "Why is the Arctic warming faster than other regions",
    "How does global warming affect daily life",
    "Which human activities contribute the most",
    "Why climate agreements struggle",
    "How warming can be slowed realistically"
  ],

  research: [
    "Study global temperature rise data",
    "Analyze Arctic ice loss reports",
    "Understand greenhouse gas sources",
    "Review climate agreements",
    "Study renewable energy solutions"
  ]
},

deforestation_amazon: {
  title: "Deforestation",
  subtitle: "Amazon Rainforest, Brazil",
  category: "environmental",

  lat: -3.47,
  lng: -62.22,

  image: "images/deforestation.jpg",

  overview:
    "Deforestation is the large-scale removal of forests for agriculture, mining, and development. The Amazon rainforest is being destroyed rapidly, threatening biodiversity and global climate stability.",

  causes: [
    "Clearing land for agriculture and cattle farming",
    "Illegal logging activities",
    "Mining and infrastructure expansion",
    "Urban development",
    "Weak enforcement of forest protection laws"
  ],

  effects: [
    "Loss of wildlife habitats",
    "Extinction of plant and animal species",
    "Increase in carbon dioxide levels",
    "Disruption of rainfall patterns",
    "Negative impact on indigenous communities"
  ],

  factors: [
    "Economic pressure for land use",
    "Global demand for food and resources",
    "Poor forest governance",
    "Lack of sustainable alternatives",
    "Short-term profit mindset"
  ],

  questions: [
    "Why is deforestation still increasing",
    "Who benefits from forest destruction",
    "How forests regulate climate",
    "Why protection laws fail",
    "How forests can be restored"
  ],

  research: [
    "Analyze satellite forest data",
    "Study biodiversity loss reports",
    "Understand economic drivers",
    "Review conservation programs",
    "Study reforestation methods"
  ]
},



  
  water_ganga: {
    title: "Water Pollution",
    subtitle: "Ganga River, India",
    category: "environmental",

    lat: 26.45,
    lng: 80.33,

    image: "images/water_ganga.jpg",

    overview:
      "The Ganga River is heavily polluted due to untreated sewage, industrial waste, and religious dumping, affecting millions who depend on it for daily use.",

    causes: [
      "Untreated sewage from cities",
      "Industrial chemical discharge",
      "Religious waste dumping",
      "Agricultural runoff with pesticides",
      "Poor waste management systems"
    ],

    effects: [
      "Water borne diseases like cholera and typhoid",
      "Death of aquatic life",
      "Unsafe drinking water",
      "Economic loss for fishermen",
      "Health issues in nearby communities"
    ],

    factors: [
      "Lack of sewage treatment plants",
      "Rapid urbanization",
      "Weak enforcement of pollution laws",
      "Cultural practices",
      "Limited public awareness"
    ],

    questions: [
      "Why sewage enters the river",
      "Which industries pollute most",
      "Health impact on humans",
      "Why treatment plants fail",
      "Local low cost solutions"
    ],

    research: [
      "Check water quality reports",
      "Study disease data",
      "Review treatment technologies",
      "Analyze policy failures",
      "Community based solutions"
    ]
  },

  plastic_ocean: {
    title: "Plastic Pollution",
    subtitle: "Pacific Ocean",
    category: "environmental",

    lat: 35.0,
    lng: -135.0,

    image: "images/plastic_ocean.jpg",

    overview:
      "Plastic waste from across the world reaches oceans through rivers and coastlines, forming massive garbage patches that threaten marine ecosystems.",

    causes: [
      "Single use plastic products",
      "Poor waste collection systems",
      "Plastic thrown into rivers",
      "Fishing nets and marine waste",
      "Low recycling rates"
    ],

    effects: [
      "Marine animals ingest plastic and die",
      "Microplastics enter the food chain",
      "Damage to coral reefs",
      "Economic loss to fisheries",
      "Long term ocean ecosystem damage"
    ],

    factors: [
      "Cheap plastic production",
      "Lack of alternatives",
      "Weak recycling infrastructure",
      "Consumer behavior",
      "Global trade of plastic waste"
    ],

    questions: [
      "How plastic reaches oceans",
      "Why recycling fails",
      "Impact on marine life",
      "Human health risks",
      "Stopping plastic at source"
    ],

    research: [
      "Study plastic flow to oceans",
      "Microplastic research",
      "Cleanup technologies",
      "Recycling limitations",
      "Policy and system gaps"
    ]
  },

illegal_hunting_africa: {
  title: "Illegal Hunting",
  subtitle: "Central Africa",
  category: "environmental",

  lat: 1.65,
  lng: 18.50,

  image: "images/illegal_hunting.jpg",

  overview:
    "Illegal hunting, also known as poaching, involves killing wildlife for trade, food, or profit. It threatens many species with extinction and disrupts natural ecosystems.",

  causes: [
    "Demand for animal products like ivory and skins",
    "Poverty and lack of alternative livelihoods",
    "Weak law enforcement",
    "Illegal wildlife trade networks",
    "Lack of awareness about conservation"
  ],

  effects: [
    "Rapid decline in wildlife populations",
    "Extinction of endangered species",
    "Ecosystem imbalance",
    "Loss of tourism income",
    "Increased human-wildlife conflict"
  ],

  factors: [
    "Economic inequality",
    "High black-market demand",
    "Corruption",
    "Insufficient conservation funding",
    "Limited community involvement"
  ],

  questions: [
    "Why poaching continues despite laws",
    "Which species are most affected",
    "How ecosystems depend on wildlife",
    "Role of global trade",
    "Ways to protect wildlife sustainably"
  ],

  research: [
    "Study poaching statistics",
    "Analyze wildlife population trends",
    "Understand illegal trade routes",
    "Review conservation laws",
    "Study community-based protection models"
  ]
},
  
coral_bleaching: {
  title: "Coral Reef Bleaching",
  subtitle: "Great Barrier Reef, Australia",
  category: "environmental",

  lat: -18.28,
  lng: 147.70,

  image: "images/coral_bleaching.jpg",

  overview:
    "Coral bleaching happens when rising ocean temperatures stress corals, causing them to lose color and die. Coral reefs support marine life and protect coastlines, so their loss threatens entire ocean ecosystems.",

  causes: [
    "Increase in ocean temperature due to climate change",
    "Ocean acidification",
    "Marine pollution",
    "Overfishing disturbing reef balance",
    "Coastal development"
  ],

  effects: [
    "Death of coral reefs",
    "Loss of marine biodiversity",
    "Decline in fish populations",
    "Damage to coastal protection",
    "Loss of livelihood for fishing communities"
  ],

  factors: [
    "Global temperature rise",
    "Carbon dioxide emissions",
    "Weak ocean protection laws",
    "Limited reef restoration efforts",
    "Human pressure on coastal areas"
  ],

  questions: [
    "Why corals are sensitive to temperature",
    "How bleaching affects marine life",
    "Why reefs recover slowly",
    "Human activities worsening bleaching",
    "Ways to protect and restore reefs"
  ],

  research: [
    "Study ocean temperature trends",
    "Analyze bleaching event reports",
    "Understand coral biology",
    "Review marine conservation efforts",
    "Study reef restoration techniques"
  ]
},

drought_africa: {
  title: "Severe Drought",
  subtitle: "Horn of Africa",
  category: "environmental",

  lat: 5.15,
  lng: 46.20,

  image: "images/drought_africa.jpg",

  overview:
    "Drought in Africa is caused by prolonged lack of rainfall and rising temperatures. It leads to water shortages, crop failure, hunger, and displacement of communities.",

  causes: [
    "Irregular and reduced rainfall",
    "Rising temperatures due to climate change",
    "Poor water management",
    "Deforestation",
    "Overuse of groundwater"
  ],

  effects: [
    "Severe water scarcity",
    "Crop failure and food shortage",
    "Malnutrition and hunger",
    "Death of livestock",
    "Forced migration of people"
  ],

  factors: [
    "Climate change",
    "Lack of irrigation infrastructure",
    "Poverty and weak governance",
    "Dependence on rain-fed agriculture",
    "Limited disaster preparedness"
  ],

  questions: [
    "Why droughts are increasing",
    "How drought affects food security",
    "Role of climate change",
    "Why communities are vulnerable",
    "Ways to manage water better"
  ],

  research: [
    "Analyze rainfall patterns",
    "Study climate change models",
    "Review water conservation techniques",
    "Examine humanitarian reports",
    "Study drought-resistant farming"
  ]
},

flooding_bangladesh: {
  title: "Flooding",
  subtitle: "Bangladesh Delta",
  category: "environmental",

  lat: 23.68,
  lng: 90.35,

  image: "images/flooding.jpg",

  overview:
    "Flooding in Bangladesh occurs due to heavy rainfall, river overflow, and rising sea levels. It destroys homes, farmland, and infrastructure, affecting millions of people every year.",

  causes: [
    "Heavy monsoon rainfall",
    "River overflow from upstream regions",
    "Melting glaciers increasing water flow",
    "Sea level rise",
    "Poor drainage systems"
  ],

  effects: [
    "Loss of human lives",
    "Destruction of homes and crops",
    "Spread of waterborne diseases",
    "Displacement of communities",
    "Economic losses"
  ],

  factors: [
    "Low-lying geography",
    "Climate change",
    "Population density",
    "Weak flood management systems",
    "Lack of early warning infrastructure"
  ],

  questions: [
    "Why floods are becoming more frequent",
    "Impact of floods on health",
    "Role of climate change",
    "Why flood defenses fail",
    "Ways to reduce flood damage"
  ],

  research: [
    "Study flood history",
    "Analyze river and rainfall data",
    "Review flood management policies",
    "Study early warning systems",
    "Community adaptation methods"
  ]
},

soil_erosion: {
  title: "Soil Erosion",
  subtitle: "Sub-Saharan Africa",
  category: "environmental",

  lat: -1.95,
  lng: 30.06,

  image: "images/soil_erosion.jpg",

  overview:
    "Soil erosion occurs when fertile topsoil is washed or blown away due to poor land use and deforestation. This reduces agricultural productivity and threatens food security.",

  causes: [
    "Deforestation and removal of vegetation",
    "Overgrazing by livestock",
    "Unsustainable farming practices",
    "Heavy rainfall and wind",
    "Lack of soil conservation methods"
  ],

  effects: [
    "Loss of fertile farmland",
    "Reduced crop yields",
    "Increased hunger and poverty",
    "Sedimentation of rivers",
    "Damage to ecosystems"
  ],

  factors: [
    "Poor land management",
    "Climate change",
    "Population pressure on land",
    "Lack of farmer education",
    "Weak agricultural policies"
  ],

  questions: [
    "Why soil erosion is increasing",
    "How erosion affects food production",
    "Role of farming practices",
    "Long term environmental impact",
    "Ways to restore soil health"
  ],

  research: [
    "Study land degradation reports",
    "Analyze farming methods",
    "Review soil conservation techniques",
    "Understand climate impact",
    "Examine sustainable agriculture models"
  ]
},

urban_waste: {
  title: "Urban Waste Crisis",
  subtitle: "Manila, Philippines",
   category: "urban",
  lat: 14.60,
  lng: 120.98,

  image: "images/urban_waste.jpg",

  overview:
    "Rapid urbanization has led to massive waste generation in cities. Poor waste management causes pollution, disease, and unsafe living conditions.",

  causes: [
    "Rapid population growth",
    "Inadequate waste collection systems",
    "Lack of recycling infrastructure",
    "High use of single-use products",
    "Weak municipal management"
  ],

  effects: [
    "Spread of diseases",
    "Water and air pollution",
    "Unhealthy living environments",
    "Flooding due to clogged drains",
    "Harm to urban ecosystems"
  ],

  factors: [
    "Poor urban planning",
    "Limited public awareness",
    "Insufficient funding",
    "Policy implementation gaps",
    "Consumer behavior"
  ],

  questions: [
    "Why cities struggle with waste?",
    "Health impacts of unmanaged waste",
    "Role of recycling",
    "Why systems fail?",
    "Low cost waste solutions"
  ],

  research: [
    "Study waste generation data",
    "Analyze collection systems",
    "Review recycling methods",
    "Examine health reports",
    "Study successful city models"
  ]
},

noise_pollution: {
  title: "Noise Pollution",
  subtitle: "New York City, USA",
  category: "urban",
  lat: 40.71,
  lng: -74.00,

  image: "images/noise_pollution.jpg",

  overview:
    "Noise pollution comes from traffic, construction, and industrial activities. Continuous exposure to high noise levels affects mental health, sleep, and hearing.",

  causes: [
    "Heavy traffic and honking",
    "Construction activities",
    "Industrial machinery",
    "Air and rail transport",
    "Poor urban noise control"
  ],

  effects: [
    "Hearing loss",
    "Stress and anxiety",
    "Sleep disturbance",
    "Reduced concentration",
    "Long term health issues"
  ],

  factors: [
    "High urban population density",
    "Lack of noise regulations",
    "Continuous city activity",
    "Poor urban design",
    "Limited public awareness"
  ],

  questions: [
    "Why noise levels are increasing",
    "Health effects of noise pollution",
    "Urban design role",
    "Why noise laws fail",
    "Ways to reduce noise"
  ],

  research: [
    "Analyze noise level data",
    "Study health impact reports",
    "Review urban planning policies",
    "Examine noise control technologies",
    "Study successful noise reduction cases"
  ]
},

 desertification: {
  title: "Desertification",
  subtitle: "Sahel Region, Africa",
  category: "environmental",

  lat: 15.50,
  lng: 10.00,

  image: "images/desertification.jpg",

  overview:
    "Desertification is the process by which fertile land gradually turns into desert due to climate change and unsustainable land use. It threatens food security and forces communities to migrate.",

  causes: [
    "Overgrazing of land",
    "Deforestation",
    "Unsustainable farming practices",
    "Climate change and rising temperatures",
    "Water mismanagement"
  ],

  effects: [
    "Loss of fertile agricultural land",
    "Decline in crop production",
    "Food insecurity and hunger",
    "Loss of biodiversity",
    "Migration and conflict over resources"
  ],

  factors: [
    "Climate variability",
    "Population pressure on land",
    "Poor land management policies",
    "Limited access to sustainable farming",
    "Lack of long-term planning"
  ],

  questions: [
    "Why fertile land turns into desert",
    "Role of climate change",
    "Impact on food security",
    "Why prevention efforts fail",
    "Ways to restore degraded land"
  ],

  research: [
    "Study land degradation data",
    "Analyze climate trends",
    "Review sustainable land practices",
    "Examine reforestation projects",
    "Study Great Green Wall initiative"
  ]
},

glacier_melting: {
  title: "Glacier Melting",
  subtitle: "Himalayan Region",
  category: "environmental",

  lat: 30.06,
  lng: 79.01,

  image: "images/glacier_melting.jpg",

  overview:
    "Glaciers are melting rapidly due to rising global temperatures. This threatens freshwater supplies, increases flood risks, and affects millions who depend on glacier-fed rivers.",

  causes: [
    "Increase in global temperature",
    "Greenhouse gas emissions",
    "Black carbon deposition on ice",
    "Deforestation",
    "Industrial pollution"
  ],

  effects: [
    "Reduction in freshwater availability",
    "Increased risk of floods",
    "Sea level rise",
    "Loss of mountain ecosystems",
    "Water insecurity for downstream populations"
  ],

  factors: [
    "Climate change",
    "High energy consumption",
    "Lack of emission control",
    "Regional warming trends",
    "Weak climate adaptation planning"
  ],

  questions: [
    "Why glaciers are melting faster",
    "How glacier loss affects rivers",
    "Impact on water security",
    "Role of human activity",
    "Ways to slow glacier melt"
  ],

  research: [
    "Study glacier retreat data",
    "Analyze climate models",
    "Review water dependency reports",
    "Study black carbon effects",
    "Explore climate mitigation strategies"
  ]
},

food_waste: {
  title: "Food Waste",
  subtitle: "Developed Nations",
   category: "urban",
  

  lat: 39.50,
  lng: -98.35,

  image: "images/food_waste.jpg",

  overview:
    "Food waste occurs when edible food is discarded at homes, restaurants, and supply chains. This wastes resources, increases emissions, and exists alongside widespread hunger.",

  causes: [
    "Overproduction of food",
    "Poor storage and transportation",
    "Consumer behavior and overbuying",
    "Lack of food redistribution systems",
    "Strict cosmetic standards for food"
  ],

  effects: [
    "Increase in greenhouse gas emissions",
    "Waste of water and energy resources",
    "Economic losses",
    "Landfill expansion",
    "Ethical issue of hunger alongside waste"
  ],

  factors: [
    "Consumer culture",
    "Inefficient supply chains",
    "Lack of awareness",
    "Policy gaps",
    "Market-driven food systems"
  ],

  questions: [
    "Why food is wasted so much",
    "Environmental impact of food waste",
    "Role of supply chains",
    "Why redistribution fails",
    "Ways to reduce waste effectively"
  ],

  research: [
    "Study food waste statistics",
    "Analyze supply chain inefficiencies",
    "Review food redistribution models",
    "Examine policy tools",
    "Study consumer behavior change methods"
  ]
},


  

  e_waste: {
    title: "Electronic Waste",
    subtitle: "Ghana (Agbogbloshie)",
     category: "urban",
    lat: 5.55, lng: -0.20,
    description: "Toxic electronic waste dumping.",
    questions: [
      "Why e-waste dumped",
      "Health risks",
      "Recycling gaps",
      "Global trade role",
      "Safer systems"
    ],
    research: [
      "E-waste flow",
      "Toxic exposure",
      "Recycling tech",
      "Trade laws",
      "Circular economy"
    ]
  },

  e_waste: {
  title: "Electronic Waste",
  subtitle: "Agbogbloshie, Ghana",
  lat: 5.55,
  lng: -0.20,

  image: "images/e_waste.jpg",

  overview:
    "Electronic waste includes discarded phones, computers, and electronic devices. Improper recycling releases toxic chemicals, harming human health and the environment.",

  causes: [
    "Rapid technology replacement",
    "Lack of proper recycling facilities",
    "Export of e-waste from rich countries",
    "Informal recycling practices",
    "Weak international regulations"
  ],

  effects: [
    "Exposure to toxic substances",
    "Respiratory and skin diseases",
    "Soil and water contamination",
    "Health risks for children",
    "Long-term environmental damage"
  ],

  factors: [
    "Consumerism",
    "Cheap electronic production",
    "Lack of awareness",
    "Poor waste regulations",
    "Economic inequality"
  ],

  questions: [
    "Why e-waste is increasing rapidly",
    "Health impact of informal recycling",
    "Role of global trade",
    "Why recycling systems fail",
    "Safer ways to manage e-waste"
  ],

  research: [
    "Study global e-waste data",
    "Analyze toxic material exposure",
    "Review recycling technologies",
    "Examine international laws",
    "Study circular electronics models"
  ]
},

overfishing: {
  title: "Overfishing",
  subtitle: "South China Sea",
  category: "environmental",

  lat: 15.00,
  lng: 115.00,

  image: "images/overfishing.jpg",

  overview:
    "Overfishing happens when fish are caught faster than they can reproduce. This leads to collapsing fish populations and threatens marine ecosystems and food security.",

  causes: [
    "Industrial-scale fishing",
    "Lack of fishing limits",
    "Illegal and unreported fishing",
    "High global seafood demand",
    "Destructive fishing methods"
  ],

  effects: [
    "Decline in fish populations",
    "Ecosystem imbalance",
    "Loss of livelihoods for fishermen",
    "Food insecurity",
    "Damage to coral reefs"
  ],

  factors: [
    "Weak marine governance",
    "Economic pressure",
    "Lack of enforcement",
    "Global market demand",
    "Limited marine protection zones"
  ],

  questions: [
    "Why overfishing continues",
    "Impact on marine ecosystems",
    "Who is most affected",
    "Why fishing laws fail",
    "Ways to fish sustainably"
  ],

  research: [
    "Study fish stock assessments",
    "Analyze fishing practices",
    "Review marine protection laws",
    "Study sustainable fishing models",
    "Examine successful conservation cases"
  ]
},

industrial_air_pollution: {
  title: "Industrial Air Pollution",
  subtitle: "Beijing, China",
  category: "environmental",

  lat: 39.90,
  lng: 116.40,

  image: "images/industrial_air_pollution.jpg",

  overview:
    "Industrial air pollution is caused by factories releasing harmful gases and particles into the air. It leads to serious health problems and environmental damage.",

  causes: [
    "Coal-based power plants",
    "Industrial emissions",
    "Lack of pollution control technology",
    "Rapid industrialization",
    "Weak enforcement of air quality laws"
  ],

  effects: [
    "Respiratory diseases",
    "Heart-related illnesses",
    "Smog formation",
    "Reduced life expectancy",
    "Environmental degradation"
  ],

  factors: [
    "Dependence on fossil fuels",
    "Economic growth pressure",
    "Outdated technology",
    "Policy enforcement gaps",
    "Urban population density"
  ],

  questions: [
    "Which industries pollute the most",
    "Health impact of industrial pollution",
    "Why regulations fail",
    "Role of clean technology",
    "Ways to reduce emissions"
  ],

  research: [
    "Study emission data",
    "Analyze health impact reports",
    "Review industrial regulations",
    "Study clean energy alternatives",
    "Examine pollution control technologies"
  ]
},

water_africa: {
  title: "Lack of Clean Water",
  subtitle: "Rural Africa",
  category: "environmental",

  lat: -2.00,
  lng: 34.00,

  image: "images/water_africa.jpg",

  overview:
    "Millions of people in Africa lack access to clean drinking water. Unsafe water causes diseases, child deaths, and limits education and development.",

  causes: [
    "Lack of water infrastructure",
    "Contaminated water sources",
    "Climate change and drought",
    "Poor sanitation systems",
    "Poverty and inequality"
  ],

  effects: [
    "Waterborne diseases",
    "High child mortality",
    "Time lost collecting water",
    "Reduced education opportunities",
    "Poor community health"
  ],

  factors: [
    "Weak infrastructure investment",
    "Rural isolation",
    "Limited government capacity",
    "Climate variability",
    "Lack of maintenance systems"
  ],

  questions: [
    "Why clean water access is limited",
    "Health impact of unsafe water",
    "Role of infrastructure",
    "Why projects fail",
    "Low-cost clean water solutions"
  ],

  research: [
    "Study water access statistics",
    "Analyze health reports",
    "Review clean water technologies",
    "Study NGO water programs",
    "Examine sustainable water systems"
  ]
},

smog_lahore: {
  title: "Smog Crisis",
  subtitle: "Lahore, Pakistan",
    category: "urban",
  lat: 31.55,
  lng: 74.34,

  image: "images/smog_lahore.jpg",

  overview:
    "Smog in Lahore is a severe air pollution problem caused by vehicle emissions, industrial smoke, and crop burning. It reduces visibility and causes serious health problems.",

  causes: [
    "Burning of crop residue",
    "Vehicle emissions",
    "Industrial pollution",
    "Construction dust",
    "Weather conditions trapping pollutants"
  ],

  effects: [
    "Breathing difficulties",
    "Eye and throat irritation",
    "Increase in asthma cases",
    "Reduced outdoor activity",
    "Long-term lung damage"
  ],

  factors: [
    "High population density",
    "Lack of pollution control",
    "Seasonal weather patterns",
    "Weak policy enforcement",
    "Cross-border pollution"
  ],

  questions: [
    "Why smog worsens in winter",
    "Major sources of smog",
    "Health impact on children",
    "Why control measures fail",
    "Ways to reduce smog"
  ],

  research: [
    "Study air quality data",
    "Analyze emission sources",
    "Review health reports",
    "Examine policy actions",
    "Study global smog control examples"
  ]
},

heatwaves: {
  title: "Extreme Heatwaves",
  subtitle: "Southern Europe",
  category: "environmental",

  lat: 41.90,
  lng: 12.50,

  image: "images/heatwaves.jpg",

  overview:
    "Heatwaves are prolonged periods of extremely high temperatures. Climate change has increased their frequency and intensity, leading to heat-related illnesses and deaths.",

  causes: [
    "Global temperature rise",
    "Urban heat island effect",
    "Deforestation",
    "High greenhouse gas emissions",
    "Climate variability"
  ],

  effects: [
    "Heat stroke and dehydration",
    "Increased mortality among elderly",
    "Power and water shortages",
    "Wildfires",
    "Reduced work productivity"
  ],

  factors: [
    "Climate change",
    "Urbanization",
    "Poor heat preparedness",
    "Lack of green spaces",
    "Aging population"
  ],

  questions: [
    "Why heatwaves are increasing",
    "Who is most vulnerable",
    "Urban heat island role",
    "Health system preparedness",
    "Ways to reduce heat impact"
  ],

  research: [
    "Study temperature trends",
    "Analyze mortality data",
    "Review urban planning models",
    "Study cooling strategies",
    "Examine climate adaptation plans"
  ]
},

mining_damage: {
  title: "Mining Damage",
  subtitle: "Congo Basin",
  category: "environmental",

  lat: -4.00,
  lng: 21.75,

  image: "images/mining_damage.jpg",

  overview:
    "Mining causes land destruction, water pollution, and health problems for nearby communities. Poorly regulated mining leads to long-term environmental damage.",

  causes: [
    "Unregulated mining activities",
    "Toxic waste disposal",
    "Deforestation for mining",
    "Lack of safety standards",
    "Illegal mining operations"
  ],

  effects: [
    "Water contamination",
    "Soil degradation",
    "Health problems in communities",
    "Loss of biodiversity",
    "Displacement of people"
  ],

  factors: [
    "High demand for minerals",
    "Weak regulations",
    "Corruption",
    "Poverty",
    "Lack of environmental monitoring"
  ],

  questions: [
    "Why mining expands rapidly",
    "Environmental impact of mining",
    "Health risks to locals",
    "Why regulations fail",
    "Ways to make mining safer"
  ],

  research: [
    "Study mining impact reports",
    "Analyze water pollution data",
    "Review mining laws",
    "Study sustainable mining methods",
    "Examine community protection models"
  ]
},

oil_spill: {
  title: "Oil Spill",
  subtitle: "Gulf of Mexico",
  category: "environmental",

  lat: 25.00,
  lng: -90.00,

  image: "images/oil_spill.jpg",

  overview:
    "Oil spills release large amounts of oil into oceans, harming marine life and coastal ecosystems. Cleanup is difficult and damage can last for decades.",

  causes: [
    "Offshore drilling accidents",
    "Pipeline leaks",
    "Oil tanker accidents",
    "Poor safety practices",
    "Equipment failure"
  ],

  effects: [
    "Death of marine animals",
    "Damage to coral reefs",
    "Pollution of coastlines",
    "Loss of fishing livelihoods",
    "Long-term ecosystem damage"
  ],

  factors: [
    "High global oil demand",
    "Weak safety regulations",
    "Risky drilling practices",
    "Poor emergency response",
    "Lack of accountability"
  ],

  questions: [
    "Why oil spills occur",
    "Impact on marine ecosystems",
    "Economic losses from spills",
    "Why cleanup is slow",
    "Ways to prevent spills"
  ],

  research: [
    "Study oil spill history",
    "Analyze marine damage reports",
    "Review cleanup technologies",
    "Examine safety regulations",
    "Study prevention strategies"
  ]
},

biodiversity_loss: {
  title: "Biodiversity Loss",
  subtitle: "Madagascar",
  category: "environmental",

  lat: -18.77,
  lng: 46.86,

  image: "images/biodiversity_loss.jpg",

  overview:
    "Biodiversity loss refers to the rapid decline of plant and animal species due to human activities. It weakens ecosystems and threatens life on Earth.",

  causes: [
    "Habitat destruction",
    "Deforestation",
    "Climate change",
    "Pollution",
    "Illegal wildlife trade"
  ],

  effects: [
    "Species extinction",
    "Ecosystem imbalance",
    "Loss of ecosystem services",
    "Reduced food security",
    "Weaker natural resilience"
  ],

  factors: [
    "Human population growth",
    "Unsustainable resource use",
    "Weak conservation policies",
    "Economic pressures",
    "Low public awareness"
  ],

  questions: [
    "Why species are disappearing fast",
    "Role of habitat loss",
    "Impact on ecosystems",
    "Why conservation fails",
    "Ways to protect biodiversity"
  ],

  research: [
    "Study species decline data",
    "Analyze habitat loss",
    "Review conservation programs",
    "Study ecosystem services",
    "Examine community-based conservation"
  ]
},
 
urban_sprawl: {
  title: "Urban Sprawl",
  subtitle: "Los Angeles, USA",
  category: "urban",
  lat: 34.05,
  lng: -118.25,

  image: "images/urban_sprawl.jpg",

  overview:
    "Urban sprawl happens when cities expand without proper planning. It consumes land, increases pollution, traffic, and energy use, and reduces quality of life.",

  causes: [
    "Rapid population growth",
    "Car-dependent city planning",
    "Lack of land-use regulation",
    "Affordable housing far from cities",
    "Weak urban planning policies"
  ],

  effects: [
    "Loss of agricultural land",
    "Increased air pollution",
    "Longer commute times",
    "Higher energy consumption",
    "Fragmentation of ecosystems"
  ],

  factors: [
    "Poor city planning",
    "Low public transport investment",
    "Economic inequality",
    "Weak zoning laws",
    "Preference for private vehicles"
  ],

  questions: [
    "Why cities expand uncontrollably",
    "Environmental cost of sprawl",
    "Impact on daily life",
    "Why planning fails",
    "Ways to build compact cities"
  ],

  research: [
    "Study urban growth patterns",
    "Analyze transport data",
    "Review zoning laws",
    "Study compact city models",
    "Examine sustainable urban design"
  ]
},

river_drying: {
  title: "River Drying",
  subtitle: "Colorado River, USA",
  category: "environmental",

  lat: 36.10,
  lng: -112.10,

  image: "images/river_drying.jpg",

  overview:
    "Many rivers are drying due to overuse, dams, and climate change. River drying threatens drinking water, agriculture, and natural ecosystems.",

  causes: [
    "Over-extraction of water",
    "Construction of large dams",
    "Climate change reducing rainfall",
    "Agricultural overuse",
    "Poor water governance"
  ],

  effects: [
    "Water shortages",
    "Damage to river ecosystems",
    "Reduced agricultural output",
    "Conflict over water resources",
    "Loss of biodiversity"
  ],

  factors: [
    "High water demand",
    "Climate variability",
    "Weak water management",
    "Population growth",
    "Lack of conservation measures"
  ],

  questions: [
    "Why rivers are drying globally",
    "Impact on agriculture and cities",
    "Role of climate change",
    "Why water sharing fails",
    "Ways to conserve river water"
  ],

  research: [
    "Study river flow data",
    "Analyze water usage patterns",
    "Review dam impacts",
    "Study climate models",
    "Examine water conservation strategies"
  ]
},

ozone_depletion: {
  title: "Ozone Layer Depletion",
  subtitle: "Antarctica",
 category: "science",

  lat: -82.86,
  lng: 135.00,

  image: "images/ozone_depletion.jpg",

  overview:
    "Ozone layer depletion occurs when harmful chemicals damage the ozone layer. This increases ultraviolet radiation reaching Earth, harming humans, crops, and ecosystems.",

  causes: [
    "Use of CFCs and halons",
    "Industrial chemical emissions",
    "Lack of early regulation",
    "Improper disposal of cooling agents",
    "Weak enforcement in some regions"
  ],

  effects: [
    "Increased skin cancer risk",
    "Eye damage",
    "Harm to crops",
    "Damage to marine plankton",
    "Ecosystem imbalance"
  ],

  factors: [
    "Industrial chemical use",
    "Slow global policy response",
    "Lack of public awareness",
    "Illegal chemical trade",
    "Technological dependency"
  ],

  questions: [
    "How ozone protects life",
    "Why ozone depletion occurred",
    "Health risks of UV radiation",
    "Role of global agreements",
    "How ozone recovery can continue"
  ],

  research: [
    "Study ozone layer data",
    "Analyze UV radiation impact",
    "Review Montreal Protocol",
    "Study recovery trends",
    "Examine chemical alternatives"
  ]
},

freshwater_loss: {
  title: "Freshwater Scarcity",
  subtitle: "Middle East",
   category: "urban",

  lat: 24.00,
  lng: 45.00,

  image: "images/freshwater_loss.jpg",

  overview:
    "Freshwater scarcity occurs when demand exceeds available clean water. It affects drinking water, agriculture, and stability in many regions.",

  causes: [
    "Overuse of freshwater resources",
    "Climate change and reduced rainfall",
    "Population growth",
    "Pollution of freshwater sources",
    "Inefficient water use"
  ],

  effects: [
    "Lack of drinking water",
    "Agricultural decline",
    "Health problems",
    "Conflict over water",
    "Economic instability"
  ],

  factors: [
    "Arid climate",
    "Poor water governance",
    "Limited infrastructure",
    "High water demand",
    "Political instability"
  ],

  questions: [
    "Why freshwater is becoming scarce",
    "Impact on food and health",
    "Role of climate change",
    "Why conservation fails",
    "Ways to use water sustainably"
  ],

  research: [
    "Study water availability data",
    "Analyze consumption patterns",
    "Review desalination technologies",
    "Study water conservation policies",
    "Examine regional cooperation models"
  ]
},

antibiotic_resistance: {
  title: "Antibiotic Resistance",
  subtitle: "Global Health Crisis",
  category: "medical",

  lat: 46.22,
  lng: 2.21,

  image: "images/antibiotic_resistance.jpg",

  overview:
    "Antibiotic resistance occurs when bacteria evolve and stop responding to medicines. This makes common infections harder or impossible to treat and threatens modern healthcare.",

  causes: [
    "Overuse of antibiotics in humans",
    "Misuse of antibiotics without prescription",
    "Use of antibiotics in livestock",
    "Incomplete treatment courses",
    "Poor infection control in hospitals"
  ],

  effects: [
    "Infections lasting longer",
    "Higher medical costs",
    "Increased death rates",
    "Failure of routine surgeries",
    "Risk to immune weakened patients"
  ],

  factors: [
    "Lack of awareness",
    "Weak regulation of drug use",
    "Slow development of new antibiotics",
    "Global travel spreading resistant bacteria",
    "Poor sanitation systems"
  ],

  questions: [
    "Why bacteria become resistant",
    "How misuse accelerates resistance",
    "Impact on future healthcare",
    "Why new antibiotics are rare",
    "Ways to slow resistance growth"
  ],

  research: [
    "Study WHO resistance reports",
    "Analyze antibiotic usage data",
    "Review hospital infection studies",
    "Examine drug development challenges",
    "Study successful containment strategies"
  ]
},

mental_health_crisis: {
  title: "Mental Health Crisis",
  subtitle: "Urban Populations Worldwide",
  category: "medical",

  lat: 40.71,
  lng: -74.00,

  image: "images/mental_health.jpg",

  overview:
    "Mental health disorders such as depression and anxiety are rising worldwide. Urban stress, isolation, and lack of access to care leave millions untreated.",

  causes: [
    "Chronic stress and pressure",
    "Social isolation",
    "Economic insecurity",
    "Stigma around mental illness",
    "Limited mental healthcare services"
  ],

  effects: [
    "Reduced quality of life",
    "Work and education disruption",
    "Substance abuse",
    "Suicide risk",
    "Long term health problems"
  ],

  factors: [
    "Urban lifestyle",
    "High living costs",
    "Digital overload",
    "Weak public mental health systems",
    "Cultural stigma"
  ],

  questions: [
    "Why mental illness is rising",
    "Why treatment access is limited",
    "Impact on youth and workers",
    "How stigma blocks help",
    "Community level mental health solutions"
  ],

  research: [
    "Study global mental health data",
    "Analyze urban stress patterns",
    "Review mental health policies",
    "Examine digital mental health tools",
    "Study community support models"
  ]
},

vaccine_inequality: {
  title: "Vaccine Inequality",
  subtitle: "Low Income Countries",
  category: "medical",

  lat: 9.08,
  lng: 8.67,

  image: "images/vaccine_inequality.jpg",

  overview:
    "Vaccine inequality happens when life saving vaccines are not equally available to all countries. Poor regions face preventable diseases due to limited access.",

  causes: [
    "High vaccine costs",
    "Weak healthcare infrastructure",
    "Supply chain failures",
    "Political and economic barriers",
    "Patent and manufacturing limits"
  ],

  effects: [
    "Preventable disease outbreaks",
    "Higher child mortality",
    "Longer pandemics",
    "Economic instability",
    "Global health risk"
  ],

  factors: [
    "Global economic inequality",
    "Limited local manufacturing",
    "Weak cold storage systems",
    "Policy and trade barriers",
    "Delayed international support"
  ],

  questions: [
    "Why vaccines are unevenly distributed",
    "Impact on global health security",
    "Why local production is limited",
    "Role of international cooperation",
    "Ways to ensure fair vaccine access"
  ],

  research: [
    "Study vaccine distribution data",
    "Analyze healthcare infrastructure gaps",
    "Review global vaccine agreements",
    "Study cold chain technologies",
    "Examine successful vaccination campaigns"
  ]
},

maternal_mortality: {
  title: "Maternal Mortality",
  subtitle: "Sub Saharan Africa",
  category: "medical",

  lat: 1.37,
  lng: 32.29,

  image: "images/maternal_mortality.jpg",

  overview:
    "Maternal mortality refers to deaths of women during pregnancy or childbirth. Many deaths are preventable but occur due to lack of medical care and safe delivery services.",

  causes: [
    "Lack of skilled birth attendants",
    "Poor access to hospitals",
    "Severe bleeding during childbirth",
    "Infections after delivery",
    "High cost of healthcare"
  ],

  effects: [
    "Death of mothers",
    "Orphaned children",
    "Emotional and economic loss for families",
    "Increased poverty",
    "Weakened community health"
  ],

  factors: [
    "Poverty",
    "Weak healthcare systems",
    "Gender inequality",
    "Poor transportation access",
    "Low health awareness"
  ],

  questions: [
    "Why maternal deaths are still high",
    "Which complications cause most deaths",
    "Why hospitals are unreachable",
    "Impact on families and society",
    "Ways to make childbirth safer"
  ],

  research: [
    "Study maternal mortality data",
    "Analyze healthcare access reports",
    "Review safe childbirth practices",
    "Study midwife training programs",
    "Examine successful country models"
  ]
},

non_communicable_diseases: {
  title: "Non Communicable Diseases",
  subtitle: "Worldwide",
  category: "medical",

  lat: 20.0,
  lng: 0.0,

  image: "images/ncd.jpg",

  overview:
    "Non communicable diseases such as diabetes, heart disease, and cancer are now the leading cause of death globally. They develop slowly but cause long term health and economic damage.",

  causes: [
    "Unhealthy diet",
    "Physical inactivity",
    "Tobacco use",
    "Alcohol consumption",
    "Chronic stress"
  ],

  effects: [
    "Early deaths",
    "Long term treatment costs",
    "Reduced work productivity",
    "Poor quality of life",
    "Overloaded healthcare systems"
  ],

  factors: [
    "Urban lifestyle",
    "Aging population",
    "Marketing of unhealthy products",
    "Lack of preventive healthcare",
    "Limited public awareness"
  ],

  questions: [
    "Why lifestyle diseases are increasing",
    "Economic impact of chronic illness",
    "Why prevention is ignored",
    "Role of policy and regulation",
    "Ways to promote healthy living"
  ],

  research: [
    "Study global disease burden data",
    "Analyze lifestyle patterns",
    "Review prevention strategies",
    "Study healthcare cost reports",
    "Examine public health campaigns"
  ]
},

infectious_disease_outbreaks: {
  title: "Infectious Disease Outbreaks",
  subtitle: "Global Hotspots",
  category: "medical",

  lat: 12.88,
  lng: 121.77,

  image: "images/infectious_disease.jpg",

  overview:
    "Infectious disease outbreaks spread rapidly when health systems are unprepared. Diseases like Ebola, COVID, and cholera have shown how quickly outbreaks can disrupt societies.",

  causes: [
    "Weak disease surveillance",
    "Poor sanitation and hygiene",
    "High population movement",
    "Delayed response systems",
    "Misinformation"
  ],

  effects: [
    "Loss of human lives",
    "Healthcare system overload",
    "Economic shutdowns",
    "Fear and social disruption",
    "Long term health complications"
  ],

  factors: [
    "Global travel",
    "Urban crowding",
    "Climate change",
    "Weak public health infrastructure",
    "Lack of trust in institutions"
  ],

  questions: [
    "Why outbreaks spread fast",
    "How early detection fails",
    "Impact on economy and society",
    "Role of public communication",
    "Ways to prevent future outbreaks"
  ],

  research: [
    "Study outbreak case data",
    "Analyze surveillance systems",
    "Review public health responses",
    "Study vaccination strategies",
    "Examine global preparedness plans"
  ]
},

 space_debris: {
  title: "Space Debris",
  subtitle: "Low Earth Orbit",
  category: "science",

  lat: 0.0,
  lng: 0.0,

  image: "images/space_debris.jpg",

  overview:
    "Space debris includes broken satellites and rocket parts orbiting Earth. These fast moving objects threaten satellites, space missions, and future space exploration.",

  causes: [
    "Destroyed or abandoned satellites",
    "Rocket stage leftovers",
    "Satellite collisions",
    "Lack of space cleanup systems",
    "Increasing number of launches"
  ],

  effects: [
    "Damage to active satellites",
    "Risk to astronauts",
    "Disruption of communication systems",
    "Higher cost of space missions",
    "Limits future space use"
  ],

  factors: [
    "Rapid growth of space industry",
    "Weak international space rules",
    "Low cost satellite launches",
    "No responsibility for cleanup",
    "Competition between countries"
  ],

  questions: [
    "Why space debris is increasing",
    "How debris travels so fast",
    "Risk to satellites and space stations",
    "Why cleanup is difficult",
    "Ways to remove space junk"
  ],

  research: [
    "Study satellite orbit data",
    "Analyze collision risk models",
    "Review international space laws",
    "Study space debris removal technologies",
    "Examine future space traffic plans"
  ]
},

urban_transport_congestion: {
  title: "Urban Transport Congestion",
  subtitle: "Mega Cities Worldwide",
  category: "urban",

  lat: 51.50,
  lng: -0.12,

  image: "images/traffic_congestion.jpg",

  overview:
    "Urban transport congestion happens when city roads carry more vehicles than they can handle. This causes long travel times, pollution, and stress for millions daily.",

  causes: [
    "High private vehicle use",
    "Poor public transport systems",
    "Unplanned city expansion",
    "Limited road capacity",
    "Lack of traffic management"
  ],

  effects: [
    "Time loss",
    "Fuel wastage",
    "Air pollution",
    "Economic productivity loss",
    "Mental stress"
  ],

  factors: [
    "Rapid urbanization",
    "Car focused planning",
    "Population growth",
    "Weak transport policies",
    "Low investment in mass transit"
  ],

  questions: [
    "Why congestion keeps increasing",
    "Why public transport is avoided",
    "Economic cost of traffic",
    "Environmental impact of congestion",
    "Ways to move people efficiently"
  ],

  research: [
    "Study traffic flow data",
    "Analyze urban mobility reports",
    "Review public transport models",
    "Study smart traffic systems",
    "Examine successful transit cities"
  ]
},

freshwater_ecosystem_loss: {
  title: "Freshwater Ecosystem Loss",
  subtitle: "Rivers and Lakes Worldwide",
  category: "environmental",

  lat: 48.85,
  lng: 2.35,

  image: "images/freshwater_ecosystem.jpg",

  overview:
    "Freshwater ecosystems such as rivers and lakes are rapidly degrading due to pollution, dams, and overuse. This threatens biodiversity and water security.",

  causes: [
    "River damming",
    "Industrial pollution",
    "Agricultural runoff",
    "Over extraction of water",
    "Urban wastewater discharge"
  ],

  effects: [
    "Loss of aquatic species",
    "Decline in water quality",
    "Collapse of local fisheries",
    "Reduced ecosystem services",
    "Higher water treatment costs"
  ],

  factors: [
    "Economic pressure on water use",
    "Weak environmental regulations",
    "Poor river management",
    "Climate change",
    "Lack of ecosystem valuation"
  ],

  questions: [
    "Why freshwater ecosystems are ignored",
    "Impact on biodiversity",
    "Link between rivers and human health",
    "Why restoration is slow",
    "Ways to protect freshwater life"
  ],

  research: [
    "Study river biodiversity data",
    "Analyze water quality reports",
    "Review dam impact studies",
    "Study ecosystem restoration projects",
    "Examine sustainable water governance"
  ]
},

financial_exclusion: {
  title: "Financial Exclusion",
  subtitle: "Low Income Communities Worldwide",
  category: "urban",

  lat: 23.88,
  lng: 45.08,

  image: "images/financial_exclusion.jpg",

  overview:
    "Financial exclusion happens when people cannot access basic banking services like savings, credit, and insurance. This keeps millions trapped in poverty.",

  causes: [
    "Lack of formal banking infrastructure",
    "High account and transaction costs",
    "Lack of legal identity",
    "Low financial literacy",
    "Distrust in financial institutions"
  ],

  effects: [
    "Limited economic opportunities",
    "Dependence on informal lenders",
    "High debt cycles",
    "Inability to handle emergencies",
    "Slower economic development"
  ],

  factors: [
    "Poverty",
    "Rural isolation",
    "Weak digital access",
    "Policy gaps",
    "Social inequality"
  ],

  questions: [
    "Why people remain unbanked",
    "Impact of financial exclusion on poverty",
    "Role of digital banking",
    "Barriers to trust",
    "Ways to provide inclusive finance"
  ],

  research: [
    "Study global unbanked population data",
    "Analyze microfinance models",
    "Review digital payment systems",
    "Study financial literacy programs",
    "Examine inclusive banking policies"
  ]
},

data_privacy_risks: {
  title: "Data Privacy Risks",
  subtitle: "Digital Platforms Worldwide",
  category: "science",

  lat: 37.77,
  lng: -122.42,

  image: "images/data_privacy.jpg",

  overview:
    "Data privacy risks arise when personal information is collected, shared, or misused without consent. Digital platforms increasingly control sensitive user data.",

  causes: [
    "Excessive data collection",
    "Weak privacy regulations",
    "Poor cybersecurity practices",
    "Opaque data sharing policies",
    "User unawareness"
  ],

  effects: [
    "Identity theft",
    "Surveillance and misuse",
    "Loss of trust in technology",
    "Psychological stress",
    "Economic fraud"
  ],

  factors: [
    "Rapid digitalization",
    "Profit driven data models",
    "Weak enforcement of privacy laws",
    "Low digital literacy",
    "Cross border data flows"
  ],

  questions: [
    "Why companies collect so much data",
    "Who controls personal information",
    "Impact of data misuse",
    "Why privacy laws lag behind",
    "Ways to protect user data"
  ],

  research: [
    "Study data breach reports",
    "Analyze privacy regulations",
    "Review cybersecurity practices",
    "Study ethical data models",
    "Examine user consent systems"
  ]
},

coastal_erosion: {
  title: "Coastal Erosion",
  subtitle: "Low Lying Coastal Regions",
  category: "environmental",

  lat: 24.45,
  lng: 54.38,

  image: "images/coastal_erosion.jpg",

  overview:
    "Coastal erosion occurs when waves, storms, and rising sea levels wear away coastlines. Communities lose land, homes, and livelihoods.",

  causes: [
    "Rising sea levels",
    "Stronger storms",
    "Loss of mangroves and reefs",
    "Unplanned coastal construction",
    "Sand mining"
  ],

  effects: [
    "Loss of coastal land",
    "Damage to homes and infrastructure",
    "Displacement of communities",
    "Loss of tourism income",
    "Ecosystem degradation"
  ],

  factors: [
    "Climate change",
    "Weak coastal regulations",
    "Population pressure",
    "Poor land use planning",
    "Lack of natural barriers"
  ],

  questions: [
    "Why coastlines are shrinking",
    "Role of climate change",
    "Impact on coastal livelihoods",
    "Why protection measures fail",
    "Ways to protect coastlines"
  ],

  research: [
    "Study sea level rise data",
    "Analyze shoreline change maps",
    "Review coastal protection methods",
    "Study nature based solutions",
    "Examine community adaptation models"
  ]
},

ai_job_displacement: {
  title: "AI Driven Job Displacement",
  subtitle: "Global Workforce",
  category: "science",

  lat: 51.16,
  lng: 10.45,

  image: "images/ai_jobs.jpg",

  overview:
    "Artificial intelligence is automating many tasks, leading to job displacement in several sectors. Workers face uncertainty without reskilling support.",

  causes: [
    "Rapid automation",
    "Cost reduction incentives",
    "Lack of reskilling programs",
    "Unequal access to education",
    "Technology focused policies"
  ],

  effects: [
    "Job losses",
    "Income inequality",
    "Skill mismatch",
    "Worker anxiety",
    "Social instability"
  ],

  factors: [
    "Fast AI development",
    "Weak labor protections",
    "Education system gaps",
    "Corporate incentives",
    "Policy lag"
  ],

  questions: [
    "Which jobs are most at risk",
    "How fast automation is happening",
    "Impact on low skill workers",
    "Role of education systems",
    "Ways to reskill the workforce"
  ],

  research: [
    "Study automation impact reports",
    "Analyze labor market data",
    "Review reskilling initiatives",
    "Study human AI collaboration models",
    "Examine policy responses"
  ]
},



water_infrastructure_failure: {
  title: "Aging Water Infrastructure",
  subtitle: "Cities in North America and Europe",
  category: "urban",

  lat: 41.88,
  lng: -87.63,

  image: "images/water_infrastructure.jpg",

  overview:
    "Many cities rely on old water pipes and systems that are decades old. These systems leak, break, and contaminate drinking water, putting public health at risk.",

  causes: [
    "Old and corroded pipelines",
    "Lack of maintenance funding",
    "Rapid urban growth",
    "Poor monitoring systems",
    "Delayed infrastructure upgrades"
  ],

  effects: [
    "Water shortages",
    "Contaminated drinking water",
    "High repair costs",
    "Service disruptions",
    "Public health risks"
  ],

  factors: [
    "Underinvestment in infrastructure",
    "Aging cities",
    "Political neglect",
    "Hidden underground damage",
    "Rising water demand"
  ],

  questions: [
    "Why cities delay pipe replacement",
    "Health impact of contaminated water",
    "Cost of infrastructure failure",
    "Why leaks go unnoticed",
    "Ways to modernize water systems"
  ],

  research: [
    "Study water pipe age data",
    "Analyze leak loss reports",
    "Review smart water monitoring",
    "Study infrastructure funding models",
    "Examine successful upgrade projects"
  ]
},

carbon_capture_challenges: {
  title: "Carbon Capture Challenges",
  subtitle: "Global Climate Efforts",
  category: "science",

  lat: 52.52,
  lng: 13.40,

  image: "images/carbon_capture.jpg",

  overview:
    "Carbon capture technologies aim to remove carbon dioxide from emissions or air. Despite promise, large scale deployment faces technical and economic barriers.",

  causes: [
    "High energy requirements",
    "Expensive technology",
    "Limited storage options",
    "Low policy support",
    "Uncertain long term effectiveness"
  ],

  effects: [
    "Slow climate mitigation progress",
    "Continued high emissions",
    "Dependence on fossil fuels",
    "Delayed transition to renewables",
    "Public skepticism"
  ],

  factors: [
    "Technology maturity level",
    "High capital costs",
    "Policy uncertainty",
    "Infrastructure limitations",
    "Public perception issues"
  ],

  questions: [
    "Why carbon capture is expensive",
    "How effective capture really is",
    "Where captured carbon goes",
    "Role in climate strategy",
    "Ways to scale safely"
  ],

  research: [
    "Study carbon capture pilot projects",
    "Analyze cost and energy data",
    "Review storage methods",
    "Study climate policy reports",
    "Examine alternative climate solutions"
  ]
},

algorithmic_bias: {
  title: "Algorithmic Bias",
  subtitle: "AI Systems Worldwide",
  category: "science",

  lat: 37.33,
  lng: -121.89,

  image: "images/algorithmic_bias.jpg",

  overview:
    "Algorithmic bias occurs when AI systems produce unfair or discriminatory outcomes due to biased data or design choices.",

  causes: [
    "Biased training data",
    "Lack of diverse testing",
    "Opaque decision making",
    "Human bias in design",
    "Weak accountability"
  ],

  effects: [
    "Discrimination in services",
    "Loss of trust in technology",
    "Unfair decision outcomes",
    "Legal and ethical issues",
    "Social inequality"
  ],

  factors: [
    "Rapid AI deployment",
    "Profit driven automation",
    "Limited regulation",
    "Low transparency",
    "Insufficient oversight"
  ],

  questions: [
    "How bias enters algorithms",
    "Who is affected most",
    "Why bias is hard to detect",
    "Role of regulation",
    "Ways to build fair AI"
  ],

  research: [
    "Study AI bias case studies",
    "Analyze training datasets",
    "Review fairness frameworks",
    "Study AI ethics guidelines",
    "Examine auditing techniques"
  ]
},

food_supply_chain_disruption: {
  title: "Food Supply Chain Disruption",
  subtitle: "Global Food Systems",
  category: "environmental",

  lat: 48.86,
  lng: 2.35,

  image: "images/food_supply_chain.jpg",

  overview:
    "Food supply chains are vulnerable to climate events, conflict, and transportation failures. Disruptions cause shortages, price spikes, and hunger.",

  causes: [
    "Extreme weather events",
    "Global conflicts",
    "Transportation bottlenecks",
    "Dependence on few suppliers",
    "Lack of storage capacity"
  ],

  effects: [
    "Food shortages",
    "Rising food prices",
    "Increased hunger",
    "Farmer income loss",
    "Social unrest"
  ],

  factors: [
    "Climate change",
    "Globalized food systems",
    "Weak local production",
    "Energy price fluctuations",
    "Policy instability"
  ],

  questions: [
    "Why food systems are fragile",
    "Impact of climate shocks",
    "Who suffers most",
    "Why local food fails",
    "Ways to build resilient supply chains"
  ],

  research: [
    "Study food trade data",
    "Analyze climate impact reports",
    "Review logistics systems",
    "Study local food models",
    "Examine resilience strategies"
  ]
},

informal_housing_growth: {
  title: "Growth of Informal Housing",
  subtitle: "Rapidly Growing Cities",
  category: "urban",

  lat: -23.55,
  lng: -46.63,

  image: "images/informal_housing.jpg",

  overview:
    "Informal housing grows when people build homes without legal planning or services. These areas often lack water, sanitation, and safety.",

  causes: [
    "Rapid urban migration",
    "Lack of affordable housing",
    "Weak land regulation",
    "Poverty",
    "Slow government response"
  ],

  effects: [
    "Unsafe living conditions",
    "Health risks",
    "Exposure to disasters",
    "Social exclusion",
    "Limited access to services"
  ],

  factors: [
    "Urban population growth",
    "Housing market failures",
    "Economic inequality",
    "Land ownership issues",
    "Policy gaps"
  ],

  questions: [
    "Why informal housing grows fast",
    "Health and safety risks",
    "Why formal housing is unaffordable",
    "Role of city planning",
    "Ways to upgrade informal settlements"
  ],

  research: [
    "Study urban migration data",
    "Analyze housing affordability reports",
    "Review slum upgrading programs",
    "Study inclusive housing policies",
    "Examine community led solutions"
  ]
},


};

