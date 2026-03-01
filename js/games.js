// ============================================
// js/games.js — all game data
// ============================================

const GAMES = {

  "re-requiem": {
    slug: "re-requiem", title: "Resident Evil Requiem",
    screenshots: ["assets/images/screenshots/re-requiem-1.jpg","assets/images/screenshots/re-requiem-2.jpg","assets/images/screenshots/re-requiem-3.jpg","assets/images/screenshots/re-requiem-4.jpg"],
    developer: "Capcom", publisher: "Capcom",
    genre: "Survival Horror", platforms: "PC, PS5, XSX, Switch 2", release: "February 27, 2026", playtime: "~14 hours",
    image:      "assets/images/banners/re-requiem.jpg",
    score: 93, verdict: "Essential", verdictClass: "great",
    tags: ["Horror", "PC", "PS5", "XSX"],
    breakdown: { Gameplay: 93, Visuals: 96, Audio: 91, Story: 90 },
    lede: "Resident Evil Requiem brings the series back to Raccoon City with dual protagonists and a renewed sense of dread — and it may be Capcom's finest entry in the modern era.",
    body: [
      { heading: "Back to Raccoon City", text: "Returning to the series' most iconic setting could have felt like a cynical nostalgia play. Instead, Capcom uses the familiar location to tell a genuinely new story, layering new mythology over the bones of what came before. It's fan service done right." },
      { heading: "Grace and Leon", text: "The dual-protagonist structure — newcomer Grace Ashford and returning fan-favourite Leon S. Kennedy — works beautifully. Their perspectives offer different gameplay approaches and emotional registers, and the interplay between their storylines is the game's biggest narrative strength." },
      { heading: "The Horror Is Back", text: "After RE Village's action-heavy approach, Requiem makes a conscious return to tension and resource scarcity. Ammunition is genuinely scarce, enemies are genuinely threatening, and the environments are designed to make you feel deeply uncomfortable. This is survival horror." },
      { heading: "Verdict", text: "An early contender for game of the year. Resident Evil Requiem proves Capcom has no intention of coasting — this is a confident, ambitious, and genuinely scary entry that honours the series' legacy while pushing it forward." }
    ],
    pullQuote: "Capcom's finest entry in the modern era.",
    pros: ["Dual protagonist structure is brilliantly handled", "Genuine survival horror tension returns", "Raccoon City setting used inventively", "Leon's best appearance since RE4"],
    cons: ["Some late-game puzzles feel padded", "Grace's characterisation takes time to click", "Online co-op feels tacked on"]
  },

  "rdr2": {
    slug: "rdr2", title: "Red Dead Redemption 2",
    screenshots: ["assets/images/screenshots/rdr2-1.jpg","assets/images/screenshots/rdr2-2.jpg","assets/images/screenshots/rdr2-3.jpg","assets/images/screenshots/rdr2-4.jpg"],
    developer: "Rockstar Games", publisher: "Rockstar Games",
    genre: "Open World / Action", platforms: "PC, PS4, Xbox One", release: "October 26, 2018", playtime: "~60 hours",
    image:      "assets/images/banners/rdr2.jpg",
    score: 98, verdict: "Essential", verdictClass: "great",
    tags: ["Open World", "PC", "PS4"],
    breakdown: { Gameplay: 96, Visuals: 99, Audio: 99, Story: 98 },
    lede: "Red Dead Redemption 2 is Rockstar's magnum opus — a slow, deliberate, devastating portrait of the dying American frontier. Nothing in open world gaming comes close to what this achieves.",
    body: [
      { heading: "A World That Breathes", text: "The attention to detail in RDR2's world is unprecedented. Animals behave realistically, weather affects gameplay, NPCs have daily routines. You don't play this game — you inhabit it. The frontier feels genuinely alive in a way no other open world has managed before or since." },
      { heading: "Arthur Morgan", text: "Arthur Morgan is one of the greatest protagonists in game history. His arc — a man slowly reckoning with a life of violence — is told with remarkable subtlety. The writing respects the player's intelligence at every turn." },
      { heading: "The Slow Burn", text: "RDR2 is deliberately paced and demands patience. The opening hours are slow by design. Some players will bounce off this. Those who commit will be rewarded with one of the most emotionally resonant experiences gaming has produced." },
      { heading: "Verdict", text: "A once-in-a-decade achievement. Flawed in small ways — some mission design is rigid, online was a mess at launch — but nothing diminishes what the single-player campaign accomplishes. A masterpiece." }
    ],
    pullQuote: "Nothing in open world gaming comes close to what this achieves.",
    pros: ["Arthur Morgan is an all-time protagonist", "The most detailed open world ever made", "Emotionally devastating storytelling", "Stunning visuals that still hold up"],
    cons: ["Deliberately slow pacing won't suit everyone", "Some missions are overly rigid", "Online mode was neglected post-launch"]
  },

  "gta5": {
    slug: "gta5", title: "Grand Theft Auto V",
    screenshots: ["assets/images/screenshots/gta5-1.jpg","assets/images/screenshots/gta5-2.jpg","assets/images/screenshots/gta5-3.jpg","assets/images/screenshots/gta5-4.jpg"],
    developer: "Rockstar North", publisher: "Rockstar Games",
    genre: "Open World / Action", platforms: "PC, PS5, XSX", release: "September 17, 2013", playtime: "~35 hours",
    image:      "assets/images/banners/gta5.jpg",
    score: 90, verdict: "Essential", verdictClass: "great",
    tags: ["Open World", "PC", "PS5"],
    breakdown: { Gameplay: 92, Visuals: 88, Audio: 91, Story: 87 },
    lede: "Over a decade later, GTA V remains a landmark. Los Santos is still one of the most convincing game cities ever built, and the three-protagonist structure was a masterstroke that the industry never quite replicated.",
    body: [
      { heading: "Three Protagonists, One Brilliant Idea", text: "Splitting the story across Michael, Trevor, and Franklin was a bold structural gamble that paid off completely. Each brings a distinct tone and playstyle, and switching between them mid-mission opened up scenarios impossible with a single protagonist." },
      { heading: "Los Santos", text: "The world is a razor-sharp satire of contemporary America — consumerism, celebrity culture, the media cycle. It's funny, it's sharp, and it holds up surprisingly well given how much has changed in the decade since launch." },
      { heading: "Verdict", text: "Still essential. A testament to what ambition and craft can produce. The story mode alone justifies everything." }
    ],
    pullQuote: "Los Santos is still one of the most convincing game cities ever built.",
    pros: ["Three-protagonist structure is brilliantly executed", "Los Santos is a world-class open world", "Sharp satirical writing", "Enormous content"],
    cons: ["Story wraps up messily", "Some missions haven't aged well", "GTA Online overshadowed single-player support"]
  },

  "witcher3": {
    slug: "witcher3", title: "The Witcher 3: Wild Hunt",
    screenshots: ["assets/images/screenshots/witcher3-1.jpg","assets/images/screenshots/witcher3-2.jpg","assets/images/screenshots/witcher3-3.jpg","assets/images/screenshots/witcher3-4.jpg"],
    developer: "CD Projekt Red", publisher: "CD Projekt",
    genre: "RPG / Open World", platforms: "PC, PS5, XSX, Switch", release: "May 19, 2015", playtime: "~100 hours",
    image:      "assets/images/banners/witcher3.jpg",
    score: 99, verdict: "Essential", verdictClass: "great",
    tags: ["RPG", "PC", "PS5", "XSX"],
    breakdown: { Gameplay: 93, Visuals: 97, Audio: 98, Story: 99 },
    lede: "The Witcher 3 is the gold standard of open world RPGs. A decade on, nothing has matched the density of its writing, the scale of its world, or the weight of its choices.",
    body: [
      { heading: "The Best Side Quests Ever Made", text: "In most RPGs, side quests are filler. In The Witcher 3, they're often better than the main story. Each one is a self-contained narrative with real moral complexity. The Bloody Baron questline alone contains more emotional depth than most complete games." },
      { heading: "Geralt of Rivia", text: "Geralt is the perfect vehicle for this world — weathered, morally pragmatic, and deeply human beneath the gruff exterior. His relationships with Ciri, Yennefer, and Triss are written with a care rarely seen in the medium." },
      { heading: "Blood and Wine", text: "The Blood and Wine expansion is one of the greatest pieces of DLC ever released — an entirely new region, 20+ hours of content, and a bittersweet ending to Geralt's journey that lands perfectly." },
      { heading: "Verdict", text: "A masterpiece without qualification. If you've never played it, stop everything and do so now." }
    ],
    pullQuote: "Nothing has matched the density of its writing or the weight of its choices.",
    pros: ["Best side quest writing in any game", "Staggering world with real depth", "Blood and Wine is an all-time expansion", "Geralt is one of gaming's greatest protagonists"],
    cons: ["Combat is functional but not exceptional", "Inventory management is a chore", "Opening hours can feel overwhelming"]
  },

  "fate-stay-night": {
    slug: "fate-stay-night", title: "Fate/stay night REMASTERED",
    screenshots: ["assets/images/screenshots/fate-stay-night-1.jpg","assets/images/screenshots/fate-stay-night-2.jpg","assets/images/screenshots/fate-stay-night-3.jpg","assets/images/screenshots/fate-stay-night-4.jpg"],
    developer: "TYPE-MOON", publisher: "Aniplex",
    genre: "Visual Novel", platforms: "PC, Switch", release: "August 8, 2025", playtime: "~60 hours",
    image:      "assets/images/banners/fate-stay-night.jpg",
    score: 95, verdict: "Essential", verdictClass: "great",
    tags: ["Visual Novel", "PC", "Switch"],
    breakdown: { Gameplay: 88, Visuals: 95, Audio: 96, Story: 99 },
    lede: "Twenty years after its original release, Fate/stay night finally arrives officially in English — and it was worth every year of the wait. The foundation of a franchise, and still its peak.",
    body: [
      { heading: "The Origin of Everything", text: "Before the endless Fate/ spinoffs, gacha games, and anime, there was this visual novel. The Holy Grail War — Masters summoning Heroic Spirits to fight to the death — is one of the most compelling setups in fiction, and this remaster presents it beautifully." },
      { heading: "Three Routes, One Masterpiece", text: "Fate, Unlimited Blade Works, and Heaven's Feel tell three fundamentally different stories using the same opening. Each recontextualises what came before. Heaven's Feel in particular is devastating in a way that lingers long after the credits roll." },
      { heading: "Verdict", text: "An essential piece of gaming history now finally accessible to everyone. Unmissable for any visual novel fan, and compelling even for those new to the medium." }
    ],
    pullQuote: "The foundation of a franchise — and still its peak.",
    pros: ["Heaven's Feel is a narrative masterpiece", "Three routes offer completely different experiences", "Gorgeous remastered visuals and full voice acting", "Finally officially in English"],
    cons: ["The Fate route is notably weaker than the others", "Very slow start", "Combat sections can feel repetitive"]
  },

  "mahoyo": {
    slug: "mahoyo", title: "Witch on the Holy Night",
    screenshots: ["assets/images/screenshots/mahoyo-1.jpg","assets/images/screenshots/mahoyo-2.jpg","assets/images/screenshots/mahoyo-3.jpg","assets/images/screenshots/mahoyo-4.jpg"],
    developer: "TYPE-MOON", publisher: "Aniplex",
    genre: "Visual Novel", platforms: "PC, Switch", release: "December 8, 2022", playtime: "~20 hours",
    image:      "assets/images/banners/mahoyo.jpg",
    score: 92, verdict: "Essential", verdictClass: "great",
    tags: ["Visual Novel", "PC", "Switch"],
    breakdown: { Gameplay: 85, Visuals: 97, Audio: 94, Story: 93 },
    lede: "Witch on the Holy Night is TYPE-MOON's most visually stunning work — a coming-of-age story drenched in 1980s atmosphere that feels unlike anything else in the medium.",
    body: [
      { heading: "Visual Storytelling", text: "Mahoyo's art direction is extraordinary. The painted backgrounds, the careful use of colour, the way scenes are composed — it reads more like a graphic novel than a traditional visual novel. Every frame is considered." },
      { heading: "Aoko and Alice", text: "The relationship between the two protagonists — brash, impulsive Aoko and cold, precise Alice — is the heart of the story. Watching them grow around each other across the game's runtime is quietly one of the best character dynamics TYPE-MOON has written." },
      { heading: "Verdict", text: "Essential for any TYPE-MOON fan and a great entry point for newcomers. Shorter than Fate/stay night but arguably more focused and consistently excellent." }
    ],
    pullQuote: "TYPE-MOON's most visually stunning work.",
    pros: ["Extraordinary visual presentation", "Aoko and Alice are a brilliant duo", "Tight, focused runtime", "Gorgeous 1980s atmosphere"],
    cons: ["Combat sequences are simplistic", "Ending feels slightly abrupt", "Less narrative scope than Fate/stay night"]
  },

  "tsukihime": {
    slug: "tsukihime", title: "Tsukihime: A Piece of Blue Glass Moon",
    screenshots: ["assets/images/screenshots/tsukihime-1.jpg","assets/images/screenshots/tsukihime-2.jpg","assets/images/screenshots/tsukihime-3.jpg","assets/images/screenshots/tsukihime-4.jpg"],
    developer: "TYPE-MOON", publisher: "Aniplex",
    genre: "Visual Novel", platforms: "PS4, Switch", release: "June 27, 2024", playtime: "~40 hours",
    image:      "assets/images/banners/tsukihime.jpg",
    score: 94, verdict: "Essential", verdictClass: "great",
    tags: ["Visual Novel", "PS4", "Switch"],
    breakdown: { Gameplay: 87, Visuals: 96, Audio: 95, Story: 97 },
    lede: "Twenty years in the making, the Tsukihime remake finally delivers on every promise. Kinoko Nasu has rebuilt this story from the ground up — and the result is one of the finest visual novels ever written.",
    body: [
      { heading: "Arcueid", text: "Arcueid Brunestud is one of fiction's great characters. Her route — Moon Princess — is a masterwork of tonal balance: comic and tragic, tender and brutal. The rebuilt narrative gives her the depth the original always hinted at but couldn't fully realise." },
      { heading: "The Remake Difference", text: "This isn't a remaster — it's a complete reconstruction. The setting has been updated, the narrative expanded, and the visual presentation is leagues beyond the original. Nasu's prose has never been sharper." },
      { heading: "Verdict", text: "An all-time great visual novel. The PC port can't come soon enough — but if you have a PS4 or Switch, play this now." }
    ],
    pullQuote: "One of the finest visual novels ever written.",
    pros: ["Arcueid's route is an all-time great", "Complete narrative reconstruction — not just a remaster", "Stunning visual presentation", "Nasu's best writing"],
    cons: ["Only covers two routes — Red Garden still in development", "No PC version yet", "Some pacing issues in Ciel's route"]
  },

  "ghost-of-tsushima": {
    slug: "ghost-of-tsushima", title: "Ghost of Tsushima",
    screenshots: ["assets/images/screenshots/ghost-of-tsushima-1.jpg","assets/images/screenshots/ghost-of-tsushima-2.jpg","assets/images/screenshots/ghost-of-tsushima-3.jpg","assets/images/screenshots/ghost-of-tsushima-4.jpg"],
    developer: "Sucker Punch Productions", publisher: "Sony Interactive Entertainment",
    genre: "Action / Open World", platforms: "PC, PS5, PS4", release: "July 17, 2020", playtime: "~40 hours",
    image:      "assets/images/banners/ghost-of-tsushima.jpg",
    score: 91, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PC", "PS5"],
    breakdown: { Gameplay: 90, Visuals: 96, Audio: 93, Story: 88 },
    lede: "Ghost of Tsushima is the most beautiful open world game ever made. Sucker Punch crafted something that transcends its genre — a love letter to samurai cinema that stands on its own as a genuine work of art.",
    body: [
      { heading: "Kurosawa Mode", text: "The inclusion of a black-and-white Kurosawa Mode — with added film grain and wind — is a statement of intent. This is a game that understands what it's inspired by and wears that influence with genuine reverence." },
      { heading: "Jin Sakai", text: "Jin's conflict between samurai honour and pragmatic survival is the emotional backbone of the game. It's a smaller, more personal story than many open world games attempt, and it's better for it." },
      { heading: "Verdict", text: "Unmissable. One of PlayStation's finest exclusive titles — now available on PC, where it looks extraordinary." }
    ],
    pullQuote: "The most beautiful open world game ever made.",
    pros: ["Stunning visual direction", "Excellent, focused story", "Kurosawa Mode is inspired", "Iki Island DLC is excellent additional content"],
    cons: ["Open world formula can feel by-the-numbers", "Side content lacks variety", "Combat has a slight learning curve"]
  },

  "ghost-of-yotei": {
    slug: "ghost-of-yotei", title: "Ghost of Yōtei",
    screenshots: ["assets/images/screenshots/ghost-of-yotei-1.jpg","assets/images/screenshots/ghost-of-yotei-2.jpg","assets/images/screenshots/ghost-of-yotei-3.jpg","assets/images/screenshots/ghost-of-yotei-4.jpg"],
    developer: "Sucker Punch Productions", publisher: "Sony Interactive Entertainment",
    genre: "Action / Open World", platforms: "PS5", release: "October 2, 2025", playtime: "~45 hours",
    image:      "assets/images/banners/ghost-of-yotei.jpg",
    score: 93, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PS5"],
    breakdown: { Gameplay: 93, Visuals: 98, Audio: 94, Story: 91 },
    lede: "Ghost of Yōtei is everything a sequel should be — it takes what made Tsushima special, discards what was holding it back, and builds something bolder and more personal in its place.",
    body: [
      { heading: "Atsu", text: "Where Jin was defined by duty, Atsu is defined by grief and hunger for vengeance. It's a darker emotional register and the game earns it. Her journey across Ezo — hunting the six outlaws who destroyed her family — is gripping from the first moment to the last." },
      { heading: "Ezo", text: "Hokkaido in 1603 is a revelation. The dynamic weather system — snowstorms, auroras, rain-soaked forests — makes Tsushima's already beautiful world look static by comparison. This is one of the most visually stunning games ever made." },
      { heading: "Verdict", text: "An easy game of the year contender and one of PS5's finest exclusives. Play Ghost of Tsushima first — then play this immediately after." }
    ],
    pullQuote: "Bolder, more personal, and more beautiful than its predecessor.",
    pros: ["Atsu is a brilliant protagonist", "Ezo is visually breathtaking", "Non-linear Yōtei Six structure works excellently", "Significant gameplay improvements over Tsushima"],
    cons: ["Some side quests are repetitive", "Combat can feel formulaic in extended sessions", "PC port not available yet"]
  },

  "tlou1": {
    slug: "tlou1", title: "The Last of Us Part I",
    screenshots: ["assets/images/screenshots/tlou1-1.jpg","assets/images/screenshots/tlou1-2.jpg","assets/images/screenshots/tlou1-3.jpg","assets/images/screenshots/tlou1-4.jpg"],
    developer: "Naughty Dog", publisher: "Sony Interactive Entertainment",
    genre: "Action / Adventure", platforms: "PC, PS5", release: "September 2, 2022", playtime: "~15 hours",
    image:      "assets/images/banners/tlou1.jpg",
    score: 97, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PC", "PS5"],
    breakdown: { Gameplay: 94, Visuals: 99, Audio: 99, Story: 98 },
    lede: "The Last of Us Part I is the definitive version of one of the greatest games ever made. Rebuilt from the ground up for PS5, it remains a devastating, essential experience.",
    body: [
      { heading: "Joel and Ellie", text: "The relationship between Joel and Ellie is gaming's greatest. It develops slowly, organically, earned through shared survival rather than cutscene exposition. By the time the ending arrives, the emotional gut-punch lands with full force precisely because the game has done the work to make you feel it." },
      { heading: "The Remake Question", text: "Whether the Part I remake is strictly necessary is debatable — the original still holds up. But the visual fidelity here is extraordinary, the accessibility options are exemplary, and for newcomers this is unquestionably the way to experience it." },
      { heading: "Verdict", text: "One of the most important games ever made, now in its best form. Essential without reservation." }
    ],
    pullQuote: "Gaming's greatest relationship, in gaming's best form.",
    pros: ["Joel and Ellie are an all-time duo", "Completely rebuilt visuals are extraordinary", "Best-in-class accessibility options", "Tense, satisfying gameplay loop"],
    cons: ["Remake necessity is debatable if you played the original", "PC port had rough launch performance", "Linear structure shows its age slightly"]
  },

  "tlou2": {
    slug: "tlou2", title: "The Last of Us Part II",
    screenshots: ["assets/images/screenshots/tlou2-1.jpg","assets/images/screenshots/tlou2-2.jpg","assets/images/screenshots/tlou2-3.jpg","assets/images/screenshots/tlou2-4.jpg"],
    developer: "Naughty Dog", publisher: "Sony Interactive Entertainment",
    genre: "Action / Adventure", platforms: "PC, PS5, PS4", release: "June 19, 2020", playtime: "~25 hours",
    image:      "assets/images/banners/tlou2.jpg",
    score: 95, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PC", "PS5"],
    breakdown: { Gameplay: 96, Visuals: 99, Audio: 99, Story: 94 },
    lede: "The Last of Us Part II is the most technically accomplished game ever made — and one of the bravest. It will make you deeply uncomfortable, and that's entirely the point.",
    body: [
      { heading: "The Structural Gamble", text: "What the game does with its structure in the second half is either a masterstroke or a provocation, depending on who you ask. It's one of the most discussed design decisions in gaming history. We think it works — not perfectly, but purposefully." },
      { heading: "Ellie and Abby", text: "Ellie's arc is a study in how trauma warps perspective. Abby's arc is one of the most daring things a major studio has ever attempted — asking you to understand, if not forgive, a character the game initially positions as a villain." },
      { heading: "Verdict", text: "Difficult, divisive, and deeply human. Part II demands more from the player than almost any game before it — and rewards that demand with something genuinely unforgettable." }
    ],
    pullQuote: "The bravest game a major studio has ever made.",
    pros: ["Technical achievements are unmatched", "Ellie and Abby's arcs are extraordinary", "Gameplay is the best in the series", "Emotionally devastating in the best way"],
    cons: ["Structural gamble won't work for everyone", "Brutally violent — not for the faint of heart", "Pacing sags in the Seattle Day 2 section"]
  },

  "uncharted4": {
    slug: "uncharted4", title: "Uncharted 4: A Thief's End",
    screenshots: ["assets/images/screenshots/uncharted4-1.jpg","assets/images/screenshots/uncharted4-2.jpg","assets/images/screenshots/uncharted4-3.jpg","assets/images/screenshots/uncharted4-4.jpg"],
    developer: "Naughty Dog", publisher: "Sony Interactive Entertainment",
    genre: "Action / Adventure", platforms: "PC, PS5, PS4", release: "May 10, 2016", playtime: "~15 hours",
    image:      "assets/images/banners/uncharted4.jpg",
    score: 93, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PC", "PS5"],
    breakdown: { Gameplay: 91, Visuals: 97, Audio: 95, Story: 93 },
    lede: "A Thief's End is the perfect closing chapter — a game about growing up, letting go, and whether the thrill of adventure is worth the cost. Naughty Dog at the absolute height of their craft.",
    body: [
      { heading: "Sam Drake", text: "The introduction of Sam as a narrative device — and the complications he brings — gives Drake a genuine emotional conflict for the first time in the series. The relationship between the brothers carries the story effortlessly." },
      { heading: "Madagascar", text: "The Madagascar car chase sequence is one of the greatest setpieces in gaming history. The open environment, the escalating chaos, the seamless transition from driving to on-foot — it's a technical and creative marvel." },
      { heading: "Verdict", text: "A triumphant farewell to Nathan Drake. Naughty Dog made the rare and difficult decision to end a franchise on their own terms — and the result is something special." }
    ],
    pullQuote: "A triumphant farewell — Naughty Dog at their absolute height.",
    pros: ["Emotionally resonant story and finale", "Madagascar setpiece is an all-timer", "Best visuals in the series", "Sam Drake is a great addition"],
    cons: ["Climbing sections can feel repetitive", "Antagonist is underdeveloped", "Combat variety is limited"]
  },

  "spiderman1": {
    slug: "spiderman1", title: "Marvel's Spider-Man",
    screenshots: ["assets/images/screenshots/spiderman1-1.jpg","assets/images/screenshots/spiderman1-2.jpg","assets/images/screenshots/spiderman1-3.jpg","assets/images/screenshots/spiderman1-4.jpg"],
    developer: "Insomniac Games", publisher: "Sony Interactive Entertainment",
    genre: "Action / Open World", platforms: "PC, PS5, PS4", release: "September 7, 2018", playtime: "~20 hours",
    image:      "assets/images/banners/spiderman1.jpg",
    score: 92, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PC", "PS5"],
    breakdown: { Gameplay: 95, Visuals: 93, Audio: 91, Story: 90 },
    lede: "Insomniac's Spider-Man is the definitive superhero game — fluid, joyful, and with a Peter Parker worth caring about. Every moment of web-swinging through Manhattan feels extraordinary.",
    body: [
      { heading: "The Best Movement System in Gaming", text: "Web-swinging in this game is a masterclass in feel. The physics, the momentum, the way Peter's body moves through the air — it's been studied and referenced by developers ever since. Moving through New York never gets old across the entire runtime." },
      { heading: "Peter Parker", text: "Insomniac's version of Peter is 23, already established as Spider-Man, and dealing with the mundane struggles of adult life alongside the extraordinary ones. It's a more grounded take that pays off enormously." },
      { heading: "Verdict", text: "The game that proved superhero games could be truly great. Essential for any fan of the character or the genre." }
    ],
    pullQuote: "The definitive superhero game.",
    pros: ["Web-swinging is the best movement system in any game", "Peter Parker is written with genuine care", "Combat is deep and satisfying", "Manhattan is a joy to explore"],
    cons: ["MJ stealth sections are tedious", "Villain lineup is overstuffed", "Some side content feels padded"]
  },

  "miles-morales": {
    slug: "miles-morales", title: "Spider-Man: Miles Morales",
    screenshots: ["assets/images/screenshots/miles-morales-1.jpg","assets/images/screenshots/miles-morales-2.jpg","assets/images/screenshots/miles-morales-3.jpg","assets/images/screenshots/miles-morales-4.jpg"],
    developer: "Insomniac Games", publisher: "Sony Interactive Entertainment",
    genre: "Action / Open World", platforms: "PC, PS5, PS4", release: "November 12, 2020", playtime: "~12 hours",
    image:      "assets/images/banners/miles-morales.jpg",
    score: 90, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PC", "PS5"],
    breakdown: { Gameplay: 93, Visuals: 95, Audio: 94, Story: 89 },
    lede: "Miles Morales is a tighter, more intimate Spider-Man story — and in many ways a more emotionally affecting one. Harlem at Christmas has never looked better.",
    body: [
      { heading: "Miles", text: "Miles Morales is a different Spider-Man from Peter — younger, more uncertain, finding his feet. The Venom powers and Camouflage add genuine mechanical freshness, and his story — about community, legacy, and what it means to protect the people you love — lands beautifully." },
      { heading: "Harlem", text: "The decision to set the game in Harlem, decorated for Christmas, was inspired. The neighbourhood feels genuinely alive with culture and character in a way that generic game cities rarely achieve." },
      { heading: "Verdict", text: "Shorter than its predecessor but in no way lesser. A must-play that makes you root for Miles as much as any Spider-Man before him." }
    ],
    pullQuote: "A more intimate Spider-Man story — and a more emotionally affecting one.",
    pros: ["Miles is an outstanding protagonist", "Venom powers add real freshness", "Harlem setting is brilliantly realised", "Tight, focused runtime"],
    cons: ["Short — some will want more", "Less villain variety than the first game", "Story wraps up a little too neatly"]
  },

  "spiderman2": {
    slug: "spiderman2", title: "Marvel's Spider-Man 2",
    screenshots: ["assets/images/screenshots/spiderman2-1.jpg","assets/images/screenshots/spiderman2-2.jpg","assets/images/screenshots/spiderman2-3.jpg","assets/images/screenshots/spiderman2-4.jpg"],
    developer: "Insomniac Games", publisher: "Sony Interactive Entertainment",
    genre: "Action / Open World", platforms: "PC, PS5", release: "October 20, 2023", playtime: "~20 hours",
    image:      "assets/images/banners/spiderman2.jpg",
    score: 90, verdict: "Essential", verdictClass: "great",
    tags: ["Action", "PC", "PS5"],
    breakdown: { Gameplay: 94, Visuals: 98, Audio: 93, Story: 87 },
    lede: "Spider-Man 2 is the most technically spectacular entry in Insomniac's trilogy — bigger, faster, and more ambitious than anything before it. The Symbiote arc delivers.",
    body: [
      { heading: "The Symbiote", text: "The Venom suit sections are the game's highlight. The shift in Peter's personality, the expanded moveset, the moral implications — it's handled with more care than the source material usually receives. When the suit takes hold, you feel it." },
      { heading: "Two Spider-Men", text: "Switching between Peter and Miles mid-mission is a genuine innovation that the game uses well. Both characters feel distinct to play, and their interplay throughout the story gives the narrative real emotional stakes." },
      { heading: "Verdict", text: "The best-looking superhero game ever made and a worthy continuation of the series. Minor story stumbles in the third act don't diminish what is largely an exceptional experience." }
    ],
    pullQuote: "The most technically spectacular superhero game ever made.",
    pros: ["Symbiote arc is handled brilliantly", "Dual Spider-Men mechanic is excellent", "Visually stunning — best on PS5", "Wing suit traversal is a great addition"],
    cons: ["Third act rushes its story beats", "Kraven feels wasted as a villain", "Some technical issues at launch"]
  },

  "silksong": {
    slug: "silksong", title: "Hollow Knight: Silksong",
    screenshots: ["assets/images/screenshots/silksong-1.jpg","assets/images/screenshots/silksong-2.jpg","assets/images/screenshots/silksong-3.jpg","assets/images/screenshots/silksong-4.jpg"],
    developer: "Team Cherry", publisher: "Team Cherry",
    genre: "Indie / Metroidvania", platforms: "PC, PS5, Switch 2, XSX", release: "September 4, 2025", playtime: "~40 hours",
    image:      "assets/images/banners/silksong.jpg",
    score: 96, verdict: "Essential", verdictClass: "great",
    tags: ["Indie", "PC", "PS5"],
    breakdown: { Gameplay: 98, Visuals: 95, Audio: 97, Story: 91 },
    lede: "Six years was worth every second. Hollow Knight: Silksong doesn't just live up to its impossible expectations — it surpasses them.",
    body: [
      { heading: "Hornet", text: "Where Hollow Knight's knight was a blank slate, Hornet is a fully realised character — precise, fast, and utterly satisfying to control. Her moveset is more aggressive and combo-driven, and mastering it feels genuinely earned." },
      { heading: "Pharloom", text: "The new kingdom of Pharloom is a stunning achievement in world design. Its interconnected areas feel distinct without sacrificing navigational logic, and the verticality is extraordinary." },
      { heading: "Verdict", text: "An all-time great. Silksong is the rare sequel that improves on a masterpiece without losing what made the original special." }
    ],
    pullQuote: "Six years was worth every second.",
    pros: ["Hornet's moveset is endlessly satisfying", "Pharloom is a world-class game world", "Boss design is genre-best", "Christopher Larkin's score is extraordinary"],
    cons: ["Narrative is harder to follow than the original", "Some late-game difficulty spikes are brutal", "Will feel overwhelming for series newcomers"]
  },

  "cyberpunk": {
    slug: "cyberpunk", title: "Cyberpunk 2077",
    screenshots: ["assets/images/screenshots/cyberpunk-1.jpg","assets/images/screenshots/cyberpunk-2.jpg","assets/images/screenshots/cyberpunk-3.jpg","assets/images/screenshots/cyberpunk-4.jpg"],
    developer: "CD Projekt Red", publisher: "CD Projekt",
    genre: "RPG / Open World", platforms: "PC, PS5, XSX", release: "December 10, 2020", playtime: "~50 hours",
    image:      "assets/images/banners/cyberpunk.jpg",
    score: 86, verdict: "Recommended", verdictClass: "great",
    tags: ["RPG", "PC", "PS5"],
    breakdown: { Gameplay: 85, Visuals: 94, Audio: 88, Story: 89 },
    lede: "The story of Cyberpunk 2077 is one of gaming's great redemption arcs. A disastrous launch gave way to years of patches and one excellent expansion — and what exists now is genuinely great.",
    body: [
      { heading: "Night City", text: "Night City is one of the most detailed, dense, and visually spectacular game worlds ever built. Walking its streets feels like inhabiting a living science fiction novel. No open world has matched its sheer visual ambition." },
      { heading: "Phantom Liberty", text: "The Phantom Liberty expansion elevated everything — a tighter story, Idris Elba in a career-best performance, and mechanical refinements that addressed many of the base game's shortcomings." },
      { heading: "Verdict", text: "Play the 2.0 version with Phantom Liberty. What you'll find is a flawed but fascinating RPG wrapped around one of gaming's greatest cities." }
    ],
    pullQuote: "Night City is one of the most visually spectacular game worlds ever built.",
    pros: ["Night City is unmatched in visual density", "Phantom Liberty is an excellent expansion", "V's story has genuine emotional stakes", "2.0 update fixed most launch issues"],
    cons: ["RPG systems lack depth compared to genre leaders", "Some quests end abruptly", "Launch state was unacceptable — buy on sale"]
  },

  "persona-3-reload": {
    slug: "persona-3-reload", title: "Persona 3 Reload",
    screenshots: ["assets/images/screenshots/persona-3-reload-1.jpg","assets/images/screenshots/persona-3-reload-2.jpg","assets/images/screenshots/persona-3-reload-3.jpg","assets/images/screenshots/persona-3-reload-4.jpg"],
    developer: "Atlus", publisher: "Sega",
    genre: "JRPG", platforms: "PC, PS5, XSX", release: "February 2, 2024", playtime: "~80 hours",
    image:      "assets/images/banners/persona-3-reload.jpg",
    score: 91, verdict: "Essential", verdictClass: "great",
    tags: ["RPG", "PC", "PS5"],
    breakdown: { Gameplay: 90, Visuals: 93, Audio: 95, Story: 92 },
    lede: "Persona 3 Reload is a masterclass in how to remake a classic — faithful enough to honour the original, rebuilt thoroughly enough to feel essential even for those who've played it before.",
    body: [
      { heading: "The Rebuild", text: "Atlus didn't just upres the textures. The UI has been completely redesigned, the gameplay modernised, and Tartarus is actually fun now. It's a thorough remake that respects the source material." },
      { heading: "The Cast", text: "The new English voice cast is exceptional. Aleks Le's portrayal of the protagonist carries real emotional weight, and SEES has never felt more like a found family." },
      { heading: "Verdict", text: "Whether you're a returning fan or newcomer, Persona 3 Reload is unmissable. Atlus treated the source material with genuine reverence." }
    ],
    pullQuote: "A masterclass in how to remake a classic.",
    pros: ["Tartarus is genuinely fun now", "New voice cast is outstanding", "Modernised systems without losing the soul", "Emotionally devastating finale"],
    cons: ["The Answer DLC sold separately", "Social links still gender-locked", "Some mid-game pacing issues remain"]
  }
};