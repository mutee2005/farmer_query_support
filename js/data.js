const farmingData = [

  // ─── CROP DISEASES ───────────────────────────────────────────
  {
    id: 1,
    category: "crop-diseases",
    keywords: ["yellow", "leaves", "wheat", "yellowing"],
    question: "Why are my wheat leaves turning yellow?",
    answer: "Yellow wheat leaves usually indicate nitrogen deficiency, waterlogging, or rust disease. Check if the yellowing starts from older leaves (nitrogen deficiency) or shows orange pustules (rust). Apply urea fertilizer for nitrogen deficiency, improve drainage for waterlogging, or use a fungicide like Propiconazole for rust."
  },
  {
    id: 2,
    category: "crop-diseases",
    keywords: ["black", "spots", "tomato", "blight"],
    question: "What causes black spots on tomato leaves?",
    answer: "Black spots on tomato leaves are commonly caused by Early Blight (Alternaria) or Bacterial Speck. Early Blight shows dark concentric rings, while Bacterial Speck shows small black spots with yellow halos. Use copper-based fungicide, remove infected leaves, and avoid overhead watering."
  },
  {
    id: 3,
    category: "crop-diseases",
    keywords: ["powdery", "mildew", "white", "coating", "leaves"],
    question: "My plants have a white powdery coating on leaves. What is it?",
    answer: "This is Powdery Mildew, a fungal disease that thrives in humid conditions. It affects crops like cucumbers, pumpkins, and grapes. Spray a solution of baking soda (1 tsp per liter of water) or neem oil. In severe cases use sulfur-based fungicide. Improve air circulation between plants."
  },
  {
    id: 4,
    category: "crop-diseases",
    keywords: ["rice", "brown", "blast", "neck rot"],
    question: "What is rice blast disease and how to treat it?",
    answer: "Rice blast is caused by the fungus Magnaporthe oryzae. It creates diamond-shaped gray lesions on leaves and can infect the neck of the panicle (neck rot). Apply Tricyclazole or Carbendazim fungicide early. Use resistant varieties and avoid excess nitrogen fertilizer."
  },
  {
    id: 5,
    category: "crop-diseases",
    keywords: ["cotton", "wilt", "drooping", "dying"],
    question: "My cotton plants are wilting and dying. What's happening?",
    answer: "Cotton wilt is most likely caused by Fusarium or Verticillium wilt fungi that block the plant's water transport system. Wilting occurs even when soil is moist. There is no cure once infected — remove and destroy infected plants. Use disease-free seeds and crop rotation to prevent future outbreaks."
  },
  {
    id: 6,
    category: "crop-diseases",
    keywords: ["onion", "purple blotch", "spots", "lesions"],
    question: "What are the purple spots on my onion leaves?",
    answer: "Purple blotch (Alternaria porri) causes these symptoms. The spots start as white with purple centers and enlarge rapidly in humid weather. Spray Mancozeb or Iprodione fungicide. Avoid overhead irrigation and maintain proper plant spacing for air circulation."
  },
  {
    id: 7,
    category: "crop-diseases",
    keywords: ["banana", "sigatoka", "streak", "leaf spots"],
    question: "My banana plants have yellow and brown streaks on leaves.",
    answer: "This is likely Yellow Sigatoka or Black Sigatoka, a fungal disease. Yellow streaks turn brown as the disease progresses and can cause premature fruit ripening. Remove and destroy infected leaves. Spray propiconazole or triadimefon fungicide. Ensure proper drainage and plant spacing."
  },
  {
    id: 8,
    category: "crop-diseases",
    keywords: ["potato", "late blight", "brown", "rot"],
    question: "How do I identify and treat late blight in potatoes?",
    answer: "Late blight (Phytophthora infestans) causes dark brown water-soaked lesions on leaves and stems, with white mold on the underside. Tubers rot in storage. Spray Metalaxyl or Mancozeb fungicide preventively. Remove infected plant material. Avoid planting in waterlogged soil."
  },

  // ─── PESTS & INSECTS ─────────────────────────────────────────
  {
    id: 9,
    category: "pests",
    keywords: ["aphids", "small", "insects", "sticky", "leaves", "green bugs"],
    question: "How do I get rid of aphids on my plants?",
    answer: "Aphids are small soft-bodied insects that suck plant sap, causing leaves to curl and yellow. Spray neem oil solution (5ml per liter of water) or insecticidal soap. You can also spray a strong stream of water to knock them off. Introduce ladybugs as a natural predator. In severe cases use Imidacloprid or Dimethoate."
  },
  {
    id: 10,
    category: "pests",
    keywords: ["locusts", "grasshoppers", "swarm", "eating crops"],
    question: "How do I protect my crops from locust attacks?",
    answer: "For locust control: (1) Spray Malathion or Chlorpyrifos early morning when locusts are inactive. (2) Use noise makers and reflective materials to disturb swarms. (3) Contact your local agricultural department immediately — locust swarms are a national emergency. (4) Plant biopesticide barriers using Metarhizium fungus. Early warning and community coordination are essential."
  },
  {
    id: 11,
    category: "pests",
    keywords: ["whitefly", "white", "flying", "insects", "tomato", "chili"],
    question: "My tomato plants have tiny white flying insects. What are they?",
    answer: "These are whiteflies. They suck sap from leaves and also transmit viral diseases. Use yellow sticky traps to monitor populations. Spray neem oil or insecticidal soap. For chemical control use Acetamiprid or Thiamethoxam. Remove heavily infested leaves and avoid excess nitrogen fertilizer which attracts whiteflies."
  },
  {
    id: 12,
    category: "pests",
    keywords: ["stem borer", "rice", "dead heart", "white ear"],
    question: "What is stem borer in rice and how to control it?",
    answer: "Rice stem borers are moth larvae that bore into stems causing 'dead heart' in vegetative stage and 'white ear' at panicle stage. Use pheromone traps to monitor. Apply Chlorantraniliprole or Fipronil granules during early infestation. Remove and destroy stubble after harvest to break the pest cycle."
  },
  {
    id: 13,
    category: "pests",
    keywords: ["mites", "spider mites", "red", "webbing", "leaves"],
    question: "There is fine webbing on my plant leaves. What pest is this?",
    answer: "This is spider mites — very tiny arachnids that suck plant sap and create fine webbing. They thrive in hot, dry conditions. Spray water on leaves to increase humidity. Use neem oil or acaricides like Abamectin or Spiromesifen. Avoid dusty conditions and over-watering stress which makes plants vulnerable."
  },
  {
    id: 14,
    category: "pests",
    keywords: ["bollworm", "cotton", "holes", "fruit damage"],
    question: "How do I control bollworm in cotton?",
    answer: "Bollworm (Helicoverpa armigera) is a major cotton pest that bores into bolls. Use pheromone traps for monitoring. Spray Bt (Bacillus thuringiensis) for early instars. Chemical options include Indoxacarb, Spinosad, or Emamectin benzoate. Plant Bt cotton varieties if available. Maintain field hygiene by removing crop residue."
  },
  {
    id: 15,
    category: "pests",
    keywords: ["nematodes", "root knot", "swollen", "roots", "poor growth"],
    question: "My plants show poor growth and the roots have small lumps.",
    answer: "These are root-knot nematodes (Meloidogyne spp.) — microscopic worms in the soil that cause galls on roots blocking water and nutrient uptake. Apply Carbofuran or Phorate granules to soil before planting. Use neem cake as an organic option. Practice crop rotation with non-host crops like marigold for 1-2 seasons."
  },

  // ─── SOIL & FERTILIZERS ──────────────────────────────────────
  {
    id: 16,
    category: "soil-fertilizers",
    keywords: ["urea", "rice", "dose", "how much", "per acre"],
    question: "How much urea should I apply for rice per acre?",
    answer: "For rice, the recommended urea dose is 50-60 kg per acre, applied in split doses: 1/3 at transplanting, 1/3 at tillering (20-25 days after transplanting), and 1/3 at panicle initiation. Avoid applying all at once to prevent nitrogen loss and burning. Always apply when soil is moist but not flooded."
  },
  {
    id: 17,
    category: "soil-fertilizers",
    keywords: ["sandy soil", "fertilizer", "best", "nutrients"],
    question: "What is the best fertilizer for sandy soil?",
    answer: "Sandy soil drains quickly and loses nutrients fast. Use slow-release fertilizers or organic matter like compost, farmyard manure (10-15 tons/acre), or vermicompost. Apply fertilizers in smaller, more frequent doses. Adding clay or organic matter improves water and nutrient retention. Potassium is particularly important for sandy soils."
  },
  {
    id: 18,
    category: "soil-fertilizers",
    keywords: ["soil ph", "acidic", "lime", "alkaline"],
    question: "My soil is too acidic. How do I fix it?",
    answer: "For acidic soil (pH below 6), apply agricultural lime (calcium carbonate) at 1-2 tons per acre depending on soil test results. Apply 2-3 months before planting and mix well into soil. Wood ash also raises pH organically. Test soil pH every 2-3 years to monitor changes. Most crops prefer pH 6.0-7.0."
  },
  {
    id: 19,
    category: "soil-fertilizers",
    keywords: ["compost", "how to make", "organic", "manure"],
    question: "How do I make compost at home for my farm?",
    answer: "To make compost: (1) Layer green materials (kitchen scraps, fresh leaves) with brown materials (dry leaves, straw) in a 1:3 ratio. (2) Keep the pile moist but not waterlogged. (3) Turn the pile every 2 weeks for aeration. (4) Compost is ready in 2-3 months when it's dark, crumbly, and smells earthy. Apply 4-5 tons per acre annually."
  },
  {
    id: 20,
    category: "soil-fertilizers",
    keywords: ["npk", "fertilizer", "ratio", "what does it mean"],
    question: "What does NPK mean on fertilizer bags?",
    answer: "NPK stands for Nitrogen (N), Phosphorus (P), and Potassium (K) — the three main plant nutrients. A 20-20-20 fertilizer has equal parts of each. Nitrogen promotes leafy green growth. Phosphorus supports root development and flowering. Potassium improves overall plant health, disease resistance, and fruit quality. Choose ratio based on your crop's growth stage."
  },
  {
    id: 21,
    category: "soil-fertilizers",
    keywords: ["zinc deficiency", "white stripes", "rice", "maize"],
    question: "My rice/maize plants have white or yellow stripes. Is this zinc deficiency?",
    answer: "Yes, white to yellowish stripes on young leaves (especially in rice) are classic signs of zinc deficiency, common in flooded or alkaline soils. Apply Zinc Sulphate at 10-15 kg per acre as a basal dose. For quick correction, spray 0.5% Zinc Sulphate solution on leaves. Zinc deficiency is very common in paddy fields."
  },
  {
    id: 22,
    category: "soil-fertilizers",
    keywords: ["boron", "deficiency", "hollow stem", "cauliflower", "fruit drop"],
    question: "My cauliflower stems are hollow and cracked. What's wrong?",
    answer: "Hollow or cracked stems in cauliflower indicate Boron deficiency. Boron is essential for cell wall formation and pollen germination. Apply Borax at 1-2 kg per acre to soil, or spray 0.1-0.2% Borax solution on leaves. Boron deficiency is common in sandy, acidic, or heavily leached soils."
  },
  {
    id: 23,
    category: "soil-fertilizers",
    keywords: ["green manure", "sunhemp", "dhaincha", "soil health"],
    question: "What is green manuring and which crops are best for it?",
    answer: "Green manuring involves growing fast-growing crops and plowing them into the soil to improve fertility. Best green manure crops: Sunhemp (Crotalaria), Dhaincha (Sesbania), Cowpea, and Cluster bean. They fix atmospheric nitrogen and add organic matter. Plow them in 45-60 days after sowing, before flowering."
  },

  // ─── IRRIGATION ──────────────────────────────────────────────
  {
    id: 24,
    category: "irrigation",
    keywords: ["drip irrigation", "what is", "how does it work", "water saving"],
    question: "What is drip irrigation and how does it save water?",
    answer: "Drip irrigation delivers water directly to the root zone through emitters, reducing evaporation and runoff. It saves 40-60% water compared to flood irrigation. It also reduces weed growth and fungal diseases. Ideal for vegetables, orchards, and cash crops. Initial setup cost is higher but pays off through water savings and better yields."
  },
  {
    id: 25,
    category: "irrigation",
    keywords: ["how often", "water", "tomatoes", "frequency"],
    question: "How often should I water tomato plants?",
    answer: "Tomatoes need consistent moisture — water deeply 2-3 times per week in normal weather, more in hot/dry conditions. The goal is to keep the soil evenly moist 6-8 inches deep. Inconsistent watering causes blossom end rot and fruit cracking. Mulching around plants reduces water needs. Reduce watering frequency as fruits ripen."
  },
  {
    id: 26,
    category: "irrigation",
    keywords: ["waterlogging", "flooded", "field", "drainage", "roots"],
    question: "My field gets waterlogged after rain. How do I fix it?",
    answer: "For waterlogging: (1) Create drainage channels/furrows across the slope to remove excess water. (2) Install subsurface drainage pipes in severe cases. (3) Add organic matter to improve soil structure. (4) Raise bed height for vegetable crops. (5) Choose waterlogging-tolerant varieties. Waterlogging depletes soil oxygen and kills roots within 48 hours in most crops."
  },
  {
    id: 27,
    category: "irrigation",
    keywords: ["sprinkler", "irrigation", "how to use", "setup"],
    question: "Is sprinkler irrigation suitable for all crops?",
    answer: "Sprinkler irrigation suits most field crops including wheat, maize, pulses, and fodder crops. It is NOT ideal for paddy rice (needs flooded conditions) or crops prone to fungal diseases (wet foliage promotes disease). Best for uneven terrain where flood irrigation is difficult. Water 2-3 times per week for 45-60 minutes depending on crop and weather."
  },

  // ─── WEATHER & SEASONS ───────────────────────────────────────
  {
    id: 28,
    category: "weather-seasons",
    keywords: ["when to sow", "cotton", "planting time"],
    question: "When is the best time to sow cotton?",
    answer: "Cotton is a Kharif crop. The ideal sowing time is when soil temperature reaches 18-20°C. In South Asia, sow between late April to June depending on your region. Early sowing gives better yields but risks cold damage. Sow at 60-75 cm row spacing and 30-45 cm plant spacing. Use certified seeds treated with Thiram or Carbendazim."
  },
  {
    id: 29,
    category: "weather-seasons",
    keywords: ["wheat", "sowing time", "rabi", "winter crop"],
    question: "When should I sow wheat?",
    answer: "Wheat is a Rabi (winter) crop. Sow between mid-October to mid-November for best yields. Late sowing (after December) reduces yield by 30-40%. Soil temperature should be 20-22°C at sowing. Timely sown wheat needs 5-6 irrigations. Late sown varieties like PBW-373 or HD-2781 perform better if sowing is delayed."
  },
  {
    id: 30,
    category: "weather-seasons",
    keywords: ["frost", "damage", "protect crops", "cold"],
    question: "How do I protect my crops from frost damage?",
    answer: "To protect from frost: (1) Irrigate fields before frost — wet soil holds heat better. (2) Apply sulfur spray 48 hours before expected frost. (3) Cover small plants with cloth or plastic sheets. (4) Light smoke screens help in small areas. (5) Avoid applying nitrogen fertilizer before frost season as it promotes tender growth. (6) Plant frost-tolerant varieties."
  },
  {
    id: 31,
    category: "weather-seasons",
    keywords: ["summer", "irrigation", "hot weather", "heat stress"],
    question: "How should I manage irrigation during extreme summer heat?",
    answer: "During extreme heat: (1) Water early morning (before 8 AM) or evening (after 5 PM) to minimize evaporation. (2) Increase irrigation frequency — crops may need water every 2-3 days. (3) Apply mulch to conserve soil moisture. (4) Avoid spraying pesticides during peak heat — it can burn plants. (5) Flood irrigation in evening is most effective in summer."
  },
  {
    id: 32,
    category: "weather-seasons",
    keywords: ["monsoon", "rain", "crop", "kharif", "when to plant"],
    question: "Which crops should I plant during the monsoon season?",
    answer: "Kharif (monsoon) crops to grow: Rice, Cotton, Maize, Sorghum, Bajra (Pearl millet), Soybean, Groundnut, Sesame, and Sugarcane. Start land preparation 2-3 weeks before monsoon onset. These crops need warm temperatures (25-35°C) and moderate to high rainfall. Pre-treat seeds to protect against early pest and disease attacks."
  },

  // ─── SEEDS & PLANTING ────────────────────────────────────────
  {
    id: 33,
    category: "seeds-planting",
    keywords: ["seed treatment", "before sowing", "how to", "fungicide seeds"],
    question: "How should I treat seeds before sowing?",
    answer: "Seed treatment prevents early diseases and pests: (1) Fungicide treatment — mix Thiram or Carbendazim at 2-3g per kg of seed. (2) Biofertilizer treatment — coat seeds with Rhizobium (for legumes) or Azotobacter. (3) Insecticide treatment — use Imidacloprid 70WS at 5ml per kg for sucking pest control. Always treat in sequence: Fungicide → Biofertilizer. Let seeds dry in shade before sowing."
  },
  {
    id: 34,
    category: "seeds-planting",
    keywords: ["germination", "seeds not sprouting", "why seeds fail"],
    question: "Why are my seeds not germinating properly?",
    answer: "Poor germination causes: (1) Old or low-quality seeds — always check seed expiry and germination rate (should be >85%). (2) Planting too deep — most seeds should be planted at 2-3× their size depth. (3) Soil too dry or waterlogged. (4) Soil temperature too low — seeds need minimum 18-20°C. (5) Hard seed coat — scarify or soak in water for 8-12 hours before sowing."
  },
  {
    id: 35,
    category: "seeds-planting",
    keywords: ["hybrid seed", "open pollinated", "difference", "which is better"],
    question: "What is the difference between hybrid and open-pollinated seeds?",
    answer: "Hybrid seeds are created by crossing two different parent lines, giving 20-30% higher yields with better uniformity. However, seeds saved from hybrid plants won't perform the same next season — you must buy fresh seeds annually. Open-pollinated (OP) varieties breed true and seeds can be saved. For subsistence farming, OP varieties are economical. For commercial farming, hybrids give better returns."
  },
  {
    id: 36,
    category: "seeds-planting",
    keywords: ["transplanting", "seedlings", "when to transplant", "how"],
    question: "When and how should I transplant seedlings?",
    answer: "Transplant seedlings when they have 3-4 true leaves (usually 3-4 weeks after sowing). Transplant in the evening or on a cloudy day to reduce transplant shock. Water the nursery bed an hour before lifting seedlings. Dip roots in a slurry of clay soil + Trichoderma before planting. Water immediately after transplanting. Provide partial shade for 2-3 days."
  },

  // ─── WEED MANAGEMENT ─────────────────────────────────────────
  {
    id: 37,
    category: "weed-management",
    keywords: ["herbicide", "weed killer", "which one", "how to use"],
    question: "Which herbicide should I use and how do I apply it?",
    answer: "Choose herbicide based on crop and weed type: Pre-emergence (apply before weeds emerge) — Pendimethalin for most crops. Post-emergence narrow-leaf weeds — Clodinafop (wheat), Fenoxaprop (rice). Post-emergence broad-leaf weeds — 2,4-D (wheat, maize). Always wear gloves and mask during application. Never spray on windy days. Maintain recommended dose — overuse causes crop damage."
  },
  {
    id: 38,
    category: "weed-management",
    keywords: ["manual weeding", "how many times", "when to weed"],
    question: "How many times should I weed my field manually?",
    answer: "The critical weed-free period is the first 30-45 days after sowing — weeds during this time cause maximum yield loss. For most crops, 2 manual weedings are needed: first at 20-25 days and second at 40-45 days after sowing. Use a hand hoe for row crops. In vegetable gardens, weed every 2 weeks. Timely weeding can improve yield by 15-25%."
  },

  // ─── LIVESTOCK & POULTRY ─────────────────────────────────────
  {
    id: 39,
    category: "livestock",
    keywords: ["cow", "milk", "production", "increase", "low milk"],
    question: "How can I increase milk production in my cows?",
    answer: "To increase milk yield: (1) Feed balanced ration — 1 kg concentrate feed per 2-3 liters of milk produced. (2) Ensure fresh clean water is always available (cows drink 50-60 liters daily). (3) Milking at same time daily stimulates production. (4) Treat mastitis and other health issues promptly. (5) Keep animal stress-free with proper housing and ventilation. (6) Breed with high-yielding bulls."
  },
  {
    id: 40,
    category: "livestock",
    keywords: ["poultry", "chickens", "disease", "vaccination", "Newcastle"],
    question: "What vaccinations do my chickens need?",
    answer: "Essential poultry vaccinations: (1) Marek's Disease — at 1 day old (hatchery level). (2) Newcastle Disease (Ranikhet) — at 7 days and 21 days. (3) Infectious Bursal Disease (Gumboro) — at 14 days and 28 days. (4) Fowl Pox — at 6 weeks (in endemic areas). Maintain a cold chain for vaccines. Vaccinate only healthy birds. Record all vaccinations."
  },
  {
    id: 41,
    category: "livestock",
    keywords: ["goat", "diarrhea", "sick", "treatment"],
    question: "My goats have diarrhea. What should I do?",
    answer: "Diarrhea in goats can be caused by: dietary change, bacterial infection (E. coli, Salmonella), parasites, or viral disease. Immediate steps: (1) Provide oral rehydration solution (ORS) — 1 liter water + 6 tsp sugar + 1/2 tsp salt. (2) Isolate sick animals. (3) Consult a vet for antibiotic treatment. (4) Deworm if parasites suspected. Diarrhea can be fatal in young kids within 24-48 hours."
  },

  // ─── ORGANIC FARMING ─────────────────────────────────────────
  {
    id: 42,
    category: "organic-farming",
    keywords: ["neem", "pesticide", "how to make", "organic spray"],
    question: "How do I make neem-based pesticide at home?",
    answer: "Neem spray recipe: (1) Crush 500g neem leaves in 1 liter of water. (2) Let it soak overnight. (3) Filter and dilute to 10 liters. (4) Add a few drops of liquid soap as a sticking agent. (5) Spray on affected plants in the evening. Alternatively, mix 5ml neem oil per liter of water with soap. Effective against aphids, whiteflies, mites, and various fungi."
  },
  {
    id: 43,
    category: "organic-farming",
    keywords: ["vermicompost", "earthworm", "how to make", "organic"],
    question: "How do I make vermicompost using earthworms?",
    answer: "Vermicomposting: (1) Create a bed 3 feet wide, 2 feet deep in shade. (2) Layer with farmyard manure and biodegradable kitchen/farm waste. (3) Introduce earthworms (Eisenia fetida or local red wigglers) at 1 kg per square meter. (4) Keep moist by sprinkling water every 2-3 days. (5) Ready in 45-60 days. Apply at 2-3 tons per acre. Vermicompost has 3× more nutrients than regular compost."
  },
  {
    id: 44,
    category: "organic-farming",
    keywords: ["crop rotation", "what is", "benefits", "why rotate"],
    question: "Why is crop rotation important?",
    answer: "Crop rotation means growing different crops in the same field across seasons. Benefits: (1) Breaks pest and disease cycles — pests that attack one crop starve when a different crop is planted. (2) Improves soil fertility — legumes fix nitrogen for the next crop. (3) Reduces weed pressure. (4) Improves soil structure. A simple rotation: Rice → Wheat → Legume (like moong or chickpea)."
  },

  // ─── GOVERNMENT & SCHEMES ────────────────────────────────────
  {
    id: 45,
    category: "government-schemes",
    keywords: ["pm kisan", "government scheme", "farmer benefit", "subsidy"],
    question: "What is PM-KISAN scheme and how to apply?",
    answer: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) provides ₹6,000 per year to eligible farmers in three installments of ₹2,000 each. Eligibility: small and marginal farmers with landholding up to 2 hectares. Apply at your nearest Common Service Centre (CSC) or online at pmkisan.gov.in. You need Aadhaar card, bank account, and land records."
  },
  {
    id: 46,
    category: "government-schemes",
    keywords: ["crop insurance", "fasal bima", "how to claim", "insurance"],
    question: "How does the Pradhan Mantri Fasal Bima Yojana work?",
    answer: "PMFBY provides crop insurance against natural calamities, pests, and diseases. Farmers pay a premium of only 1.5-2% (Kharif crops) and 2% (Rabi crops). In case of crop loss, report to your insurance company, bank, or local agricultural officer within 72 hours. Enroll before sowing through your bank or CSC center. Landless farmers can also apply through state-specific rules."
  },

  // ─── GENERAL FARMING TIPS ────────────────────────────────────
  {
    id: 47,
    category: "general",
    keywords: ["intercropping", "multiple crops", "together", "mixed farming"],
    question: "What is intercropping and what are its benefits?",
    answer: "Intercropping is growing two or more crops simultaneously in the same field. Benefits: (1) Better land use efficiency. (2) Risk reduction — if one crop fails, the other survives. (3) Additional income from the secondary crop. (4) Legume-cereal intercropping improves soil fertility. Examples: Maize + Beans, Cotton + Moong, Sugarcane + Garlic."
  },
  {
    id: 48,
    category: "general",
    keywords: ["mulching", "what is", "benefits", "plastic mulch"],
    question: "What is mulching and how does it help my crops?",
    answer: "Mulching is covering the soil surface around plants with material to conserve moisture, suppress weeds, and regulate soil temperature. Types: Organic mulch (straw, dry leaves — decomposes and adds nutrients), Plastic mulch (black or silver — very effective for vegetables). Apply 5-8 cm thick. Reduces water requirement by 30-40% and improves yield by 20-30%."
  },
  {
    id: 49,
    category: "general",
    keywords: ["soil testing", "how to test", "soil sample", "laboratory"],
    question: "How do I collect a soil sample for testing?",
    answer: "To collect soil samples: (1) Divide your field into uniform sections. (2) Collect 10-15 sub-samples from each section in a zigzag pattern at 15 cm depth. (3) Mix all sub-samples, take 500g as the composite sample. (4) Label and send to your nearest Soil Testing Laboratory. Test every 2-3 years for optimal results. The report guides fertilizer application reducing cost by 15-20%."
  },
  {
    id: 50,
    category: "general",
    keywords: ["yield", "increase", "how to", "productivity", "better harvest"],
    question: "What are the best ways to increase crop yield?",
    answer: "Key practices to increase yield: (1) Use certified high-yielding variety (HYV) seeds. (2) Soil test-based balanced fertilization. (3) Timely sowing — early or late sowing reduces yield. (4) Proper plant spacing — avoid overcrowding. (5) Timely irrigation at critical growth stages. (6) Integrated Pest Management (IPM). (7) Harvesting at right maturity stage. (8) Post-harvest handling to reduce losses."
  }

];

function searchFarmingData(query) {
  if (!query || query.trim() === "") return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  const results = farmingData.map(item => {
    let score = 0;

    // exact match in question
    if (item.question.toLowerCase().includes(q)) score += 10;

    // exact match in answer
    if (item.answer.toLowerCase().includes(q)) score += 5;

    // keyword matches
    words.forEach(word => {
      if (word.length < 3) return;
      item.keywords.forEach(kw => {
        if (kw.includes(word) || word.includes(kw)) score += 3;
      });
      if (item.question.toLowerCase().includes(word)) score += 2;
      if (item.answer.toLowerCase().includes(word)) score += 1;
    });

    return { ...item, score };
  });

  return results
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function getByCategory(category) {
  if (category === "all") return farmingData;
  return farmingData.filter(item => item.category === category);
}

function getCategoryLabel(cat) {
  const labels = {
    "crop-diseases":       "Crop Diseases",
    "pests":               "Pests & Insects",
    "soil-fertilizers":    "Soil & Fertilizers",
    "irrigation":          "Irrigation",
    "weather-seasons":     "Weather & Seasons",
    "seeds-planting":      "Seeds & Planting",
    "weed-management":     "Weed Management",
    "livestock":           "Livestock & Poultry",
    "organic-farming":     "Organic Farming",
    "government-schemes":  "Govt. Schemes",
    "general":             "General Tips"
  };
  return labels[cat] || cat;
}