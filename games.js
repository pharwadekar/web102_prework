// Image credits: Kickstarter

let games = ` [
  {
    "name": "Heroes Of Mythic Americas",
    "description": "An exciting 5e RPG supplement that heroically represents pre-Columbian American cultures and mythologies",
    "pledged": 1572,
    "goal": 10000,
    "backers": 9,
    "img": "./assets/heroes_of_mythic_americas.png"
  },
  {
    "name": "Cube Monster",
    "description": "Be the first champion to reach the top of Mount Kubia in a solo or competitive engine building strategy game",
    "pledged": 29446,
    "goal": 20000,
    "backers": 321,
    "img": "./assets/cube_monster.png"
  },
  {
    "name": "Zoo Tycoon: The Board Game",
    "description": "Your zoo in a box with more than 230 Animal Meeples. A highly thematic board game experience for 1-4 players.",
    "pledged": 442602,
    "goal": 78480,
    "backers": 3869,
    "img": "./assets/zoo_tycoon.png"
  },
  {
    "name": "Deity Tarot",
    "description": "A fully illustrated 78-card tarot deck with a divinely exalted take on the famous Smith-Waite tarot deck.",
    "pledged": 109,
    "goal": 8000,
    "backers": 3,
    "img": "./assets/deity_tarot.png"
  },
  {
    "name": "Camouflage | A hand-painting puzzle/adventure game",
    "description": "Paint your own camouflage to retrieve information, access secret locations and remove the threat to your fellow flying squirrels.",
    "pledged": 698,
    "goal": 5140,
    "backers": 9,
    "img": "./assets/camouflage.png"
  },
  {
    "name": "Beep Bapp Boom",
    "description": "The time to explode is getting shorter and shorter, please be alert!",
    "pledged": 44,
    "goal": 18133,
    "backers": 2,
    "img": "./assets/beep_bapp_boom.png"
  },
  {
    "name": "Frosthaven",
    "description": "Euro-inspired dungeon crawling sequel to the 2017 smash hit Gloomhaven",
    "pledged": 69608,
    "goal": 500000,
    "backers": 3193,
    "img": "./assets/frosthaven.png"
  },
  {
    "name": "Mislight - An Adventure Game With A Small Touch Of Thriller",
    "description": "Be the Light in a realm of Darkness",
    "pledged": 1036,
    "goal": 3099,
    "backers": 32,
    "img": "./assets/mislight.png"
  },
  {
    "name": "How to Read Minds 2 Kit: Ellusionist x Peter Turner",
    "description": "Command Attention With These REAL Mind Reading Techniques That Anyone Can Do... The Contents Inside This Kit Will Silence Skeptics.",
    "pledged": 147975,
    "goal": 10000,
    "backers": 1039,
    "img": "./assets/how_to_read_minds_2.png"
  },
  {
    "name": "A Wayfarer's Tale",
    "description": "A Wayfarer's Tale, is a Solo to 4 player game where you explore uncharted islands, collecting Treasure while avoiding Monsters.",
    "pledged": 13039,
    "goal": 1183,
    "backers": 1446,
    "img": "./assets/wayfarers_tale.png"
  },
  {
    "name": "Kingdom Death: Monster 1.5",
    "description": "A cooperative nightmare horror game experience",
    "pledged": 94139,
    "goal": 100000,
    "backers": 9264,
    "img": "./assets/kingdom_death.png"
  },

  {
    "name": "Mitosis",
    "backers": 86,
    "pledged": 5250,
    "goal": 5250,
    "img": "https://i.kickstarter.com/assets/039/782/060/2c4fb641c812a2fc63ca1687598da73e_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=ZMSohFHGj3fRi1tMPRiNfEQdQU%2FOgCBygjdZ%2FSv3ioc%3D",
    "description": "Divide and Conquer: A Mothership pamphlet adventure and a player-facing, in-universe board game"
  },
  {
    "name": "The Spearsmen™ - More than just a board game.",
    "backers": 58,
    "pledged": 2297,
    "goal": 1950,
    "img": "https://i.kickstarter.com/assets/041/154/016/0e8d20d0fdf91bc7026cacf08f518ae6_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=sj7TOcdSO38Cd7qTkOHtENAOQH2TAaQnabLWh1w%2FNXc%3D",
    "description": "Experience The Unparalleled Fusion Of Expert Craftsmanship And The Ageless Charm Of Spearsmen."
  },
  {
    "name": "BloodRunes",
    "backers": 128,
    "pledged": 6910,
    "goal": 6700,
    "img": "https://i.kickstarter.com/assets/039/180/649/aea32ed2f2bccb79a4f0da45125f5dbd_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=SfgzfvPrkgHrYI6QlElCnk4%2FzmBW1HMJodmJuHfLKSM%3D",
    "description": "BloodRunes is a pattern creation strategy board game unlike any other. Using a shared board, players cast runes & spells to win fortune"
  },
  {
    "name": "Ebb and Flow",
    "backers": 86,
    "pledged": 2945,
    "goal": 1500,
    "img": "https://i.kickstarter.com/assets/039/977/773/ca8c56616513fc7cda00f106e9554480_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=%2BvvHH7GiZxci4ohWAAVwsNth87znirOO04SG%2FJA8G4o%3D",
    "description": "A quick and silly strategy game for 2 players. March your minions across the board on the path to victory - or defeat - who knows?!"
  },
  {
    "name": "Industrial architecture",
    "backers": 65,
    "pledged": 5587,
    "goal": 2000,
    "img": "https://i.kickstarter.com/assets/039/956/597/1f3b3c5611642596030f8932a5b2ce5f_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=wc5WXZReLtorzUOJ5Xva04PH7tmVzej6oRGFNogWRYo%3D",
    "description": "3D models for 3D printing (A great collection for fans of realistic board games) 28mm and larger without loss of detail."
  },
  {
    "name": "Lost Adventures",
    "backers": 104,
    "pledged": 6883,
    "goal": 6500,
    "img": "https://i.kickstarter.com/assets/041/245/987/023ab5c57c5a75eaa6ee1e580c6642f1_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=4B0I58Wt1UGGuGJL%2FA9Pc8Jrs0G4AEiIcmQEVyiSH20%3D",
    "description": "An adventure archaeology movie board game by Jeff Warrender and Steve Sisk"
  },
  {
    "name": "Game Tiles: Chromatic Edition",
    "backers": 88,
    "pledged": 5122,
    "goal": 1000,
    "img": "https://i.kickstarter.com/assets/040/017/260/1a67f9dbf03ba5174febe88fdc4dd5f1_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=GJaUce1oSgH%2FBxamq0qoACJera0Chc0XcVnvCyk%2BJ0c%3D",
    "description": "Flexible Organization for Board Games and TTRPGs."
  },
  {
    "name": "Jauntlet",
    "backers": 77,
    "pledged": 8060,
    "goal": 6000,
    "img": "https://i.kickstarter.com/assets/040/077/756/1894fd34f368a95f550e0bcbaac91bcd_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=ef4h94uU%2B%2BCL9n92aJYYqka1XTI6cUzHTvgrR6%2F3K7c%3D",
    "description": "A game where the players create the board themselves, then try and race through it. To score, make sure someone else doesn't!"
  },
  {
    "name": "Polaris Gaming",
    "backers": 31,
    "pledged": 2641.69,
    "goal": 2500,
    "img": "https://i.kickstarter.com/assets/040/005/679/dc645c39b95d622cb10ec5304c258ba7_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=aV4VGHCQ6CZFVF5ualItvkTbDuP1GjRr%2F3MvVoEMaso%3D",
    "description": "A local game store located in Greenwood, South Carolina. Our store will be focused on board games, TCG, TTRPG, and more!"
  },
  {
    "name": "VAIKIN BOX: Modular portable game & hobby storage system",
    "backers": 45,
    "pledged": 8101,
    "goal": 2500,
    "img": "https://i.kickstarter.com/assets/039/455/130/ded783ef380491fe75b6dc7c7f36acee_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=zqY%2BPmjlI%2BOzU%2F0YE7ukr3QIcxFDY3918cOwCSu0be0%3D",
    "description": "Modular portable expandable storage system: tabletop board games, miniatures, dice, paints, sewing, beads, jewelry, crafts, hobbies"
  },
  {
    "name": "FuzeLine",
    "backers": 21,
    "pledged": 7547,
    "goal": 7127,
    "img": "https://i.kickstarter.com/assets/035/804/052/86c0e06cfce1cd60334e38acde570fcf_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=GqsLwLKUMzf3LHP1qYsTebRQuWE0BzoN55d2fNVzfH0%3D",
    "description": "A Mensa-like strategy board game app where players pit their wits against each other to complete a FuzeLine circuit for the win"
  },
      {
      "name": "Eco Quest: The Planet Is Counting on You!",
      "backers": 117,
      "pledged": 6241.95,
      "goal": 5000,
      "img": "https://i.kickstarter.com/assets/041/879/754/9d692afcb475138306b5a5cd53d14c85_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=Xh7f%2BIh8WzneE19KUvepoPPUXrqqwg1PFrbh17lrlRU%3D",
      "description": "An educational board game empowering children aged 6-12 to make sustainable choices for kids, by kids."
    },
    {
      "name": "CHINA Collection 3.0",
      "backers": 33,
      "pledged": 1721,
      "goal": 1000,
      "img": "https://i.kickstarter.com/assets/041/696/853/389741c6daac13f31fa343f69b65d9bb_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=muEzRWD7hkIZ7SEiILHmNGngJ2rOt5WovqRgj3UFBoc%3D",
      "description": "3d models for 3d printing in STL format For board games, role-playing games, RPG or wargames"
    },
    {
      "name": "Egyptian architecture",
      "backers": 49,
      "pledged": 4366,
      "goal": 1000,
      "img": "https://i.kickstarter.com/assets/041/567/837/d91513d55a15572d64c0eeb5b5c3a408_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=R6KPGDf3sueMb3MaBgDgSqJ%2Fnf0vyCTiRXqjJKHEEq0%3D",
      "description": "3d models for 3d printing in STL format For board games, role-playing games, RPG or wargames"
    },
    {
      "name": "Beers of Ballard - The Board Game",
      "backers": 276,
      "pledged": 9896,
      "goal": 6800,
      "img": "https://i.kickstarter.com/assets/039/128/107/481d2357eedb554359654ea0cf0af52d_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=9kVaer1wJ9fP7KUenbMZdJWv2R15zXwzPliQj9K%2Fe2A%3D",
      "description": "Beers of Ballard is a brewery-hopping board game inspired by the Ballard beer scene in Seattle, Washington."
    },
    {
      "name": "UFB - Futuristic Board Game",
      "backers": 39,
      "pledged": 5133,
      "goal": 2500,
      "img": "https://i.kickstarter.com/assets/041/532/246/94e7f07c809eee11530aeee7dd015e96_original.jpeg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=pZpAf5WU1zZVzQTF06g8dAg%2FnjcEMPHXkuYzmuvTZd0%3D",
      "description": "A tabletop experience that feels like playing a video game in real life."
    },
    {
      "name": "Shelf Care: A Tabletop Coloring Book",
      "backers": 442,
      "pledged": 8612,
      "goal": 5500,
      "img": "https://i.kickstarter.com/assets/040/681/017/fa3c44133e67056ca0cafd1b229df01c_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=ywQIIjHriDadC6rSgHhv1cdTQDO%2BTjkhPUhsKs0ElF0%3D",
      "description": "A board game and RPG themed coloring book featuring twenty artists from the tabletop games industry"
    },
    {
      "name": "Paper Trail",
      "backers": 96,
      "pledged": 6497,
      "goal": 5000,
      "img": "https://i.kickstarter.com/assets/040/798/525/6189fb0e1411ad97b1cbbfec76f3bff1_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=IudJYhmlup2WGRycYsGB%2BdLw5vEgQjMP9BA4pJo3%2BD0%3D",
      "description": "A reverse hidden movement board game. Students pass mischievous notes around the classroom. Don't get caught!"
    },
    {
      "name": "I AM: The Book and Board Game",
      "backers": 24,
      "pledged": 3671,
      "goal": 3600,
      "img": "https://i.kickstarter.com/assets/041/552/274/5ba273f4ba7bd77af526957b88acabbb_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=EDvdgFzl43qoTUCCswN%2BGkWjJ9f32Ab%2F%2FlhulQIkyio%3D",
      "description": "I AM: A-Z Affirmations with African American Children the Book and the Board Game by Raygen Samone of Atlanta, GA!"
    },
    {
      "name": "Badageetchy: The Piggy Investment Board Game! (RELAUNCH!)",
      "backers": 72,
      "pledged": 5791,
      "goal": 5000,
      "img": "https://i.kickstarter.com/assets/040/041/437/58ca4b99c0d055ce60aad76aafe2ebf7_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=8%2FzXLsVCQUKNhuRqaGUbl7GFGjigSnh02PuZ7IXfrOg%3D",
      "description": "A silly strategy board game where you become a capitalist Piggy, invest in small businesses, & Yeet your foes."
    },
    {
      "name": "Lands of Oz - A family friendly board game for 2-5 players!",
      "backers": 64,
      "pledged": 3611,
      "goal": 3000,
      "img": "https://i.kickstarter.com/assets/040/444/126/1958fef3961ed3c683cf4027ee4c3873_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=zZhT1ZlUud7Hvs4Tw%2Bxfsyt97FAYqAKk0o9pJLlgaDE%3D",
      "description": "The wicked witches are dead and the lands of Oz are free from tyranny! Play cards, collect tokens, and win friends in the Lands of Oz!"
    },
    {
      "name": "Sidetracks Board Game Club",
      "backers": 30,
      "pledged": 4569,
      "goal": 4000,
      "img": "https://i.kickstarter.com/assets/041/420/643/c32192602a91d1de274238a7bc0d360a_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=dsQ2sObarIAKaYX1rD5QN3mm7dthd5fmDEsq0J6Kf5k%3D",
      "description": "Social interaction and community building through the fun and enjoyment of tabletop gaming."
    },
    {
      "name": "Unsung Heroes: Court of the Pixie Queen",
      "backers": 69,
      "pledged": 6373,
      "goal": 5000,
      "img": "https://i.kickstarter.com/assets/040/920/839/803c47fca6175be8230918b556d6afdd_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=pUMwaLrtJ61fIbKqYsU%2Bu6XihM%2Fgd7X5jznQbZ6H%2BU0%3D",
      "description": "A complete expansion for Unsung Heroes the board game."
    },
    {
      "name": "8th Board Game Days",
      "backers": 39,
      "pledged": 3110,
      "goal": 3000,
      "img": "https://i.kickstarter.com/assets/041/519/152/c6e033f5b622f0df5902a429077e8e86_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=CLaoSir3qg9vnJhsO068hqKc%2FCXz15gsovg%2B78BvrkE%3D",
      "description": "Join us in growing Knoxville's original board game convention as it expands its space for table-top gamers and aspiring game designers."
    },
    {
      "name": "Rook Towers",
      "backers": 55,
      "pledged": 3365,
      "goal": 3000,
      "img": "https://i.kickstarter.com/assets/041/008/296/a6def0acca06e29993c92d098ba68169_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=JwY5lmAQqNGYXP6a1d%2F2mBTkG5VOu6146DrRU0hhwpk%3D",
      "description": "Vertical movement platforms for TTRPG and board games"
    },
    {
      "name": "FUTURE HEROES: Fast-Paced, Trick-Taking Board Game",
      "backers": 227,
      "pledged": 9179,
      "goal": 4000,
      "img": "https://i.kickstarter.com/assets/043/790/628/19c093c2d1677bd9c27c29a811527540_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=ZP9IgQv3vqGF2a4FDLfrDTzsRoLWAXN3v%2BrA0iWHBFI%3D",
      "description": "Lead your team of gladiators into the arena, arm them with weapons and magic, and ensure eternal glory in a dystopian future."
    },
    {
      "name": "Hex Link: Numbers Revolutionizing Strategy Board Games!",
      "backers": 33,
      "pledged": 3862,
      "goal": 3000,
      "img": "https://i.kickstarter.com/assets/043/535/970/877577e2ee3d1928e47423b802652203_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=NNcuxqARTsMNxlnxtilCKjxnvjyjZu%2Fr1Rs9VbwT868%3D",
      "description": "Experience the exciting blend of strategy and fun in Hex Link: Numbers a board game with a twist!"
    },
    {
      "name": "Dream State: A Dark and Disturbing Board Game",
      "backers": 39,
      "pledged": 2281,
      "goal": 2000,
      "img": "https://i.kickstarter.com/assets/043/335/045/16561f03508fd98e21f108f34991d4ca_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=QDBicFs5xFkuOG8fwevXPYqXlZ3YusjThVeguLWk6rE%3D",
      "description": "Don't Die in Your Dream"
    },
    {
      "name": "Towers of Xandermere",
      "backers": 15,
      "pledged": 7351,
      "goal": 2000,
      "img": "https://i.kickstarter.com/assets/043/112/546/5bb37dcd48ad1855488cbe82ec78518a_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=63M1i8%2Bw1ZQdafRUuW9RwZMrcl5O558M5mInNhProLM%3D",
      "description": "A roll-n-move board game with luck, decision-making and sabotage!"
    },
    {
      "name": "Boardgame: The Card Game!",
      "backers": 30,
      "pledged": 2011,
      "goal": 2000,
      "img": "https://i.kickstarter.com/assets/042/985/427/0987075d8b3567fc89f428f5cfa8c7c1_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=I3HSOEN4brTXjJQbzkYDEz3L9C%2BY%2FpApEDe7rXzL%2FUg%3D",
      "description": "Is it a card game that's played like a board game or a board game that's played like a card game? Find out for yourself by playing now!"
    },
    {
      "name": "HexChess Legends: Knights vs Ogres",
      "backers": 135,
      "pledged": 6752,
      "goal": 1000,
      "img": "https://i.kickstarter.com/assets/042/678/257/01d5f7b7bce3f7f400b839cee593d7f8_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=VeiUueEVszvZoEi58bvcyNYYpNNNA3u8iBZUHCXKZpw%3D",
      "description": "A 3D printable fantasy chess game, pieces, boards and a castle board stand! Cast spells, use skills, fight medieval warriors!"
    },
    {
      "name": "BUT WAIT, There's More Classic Strategy Board Games",
      "backers": 73,
      "pledged": 4217,
      "goal": 3995,
      "img": "https://i.kickstarter.com/assets/043/612/144/a81ea0c6def7f0ed8e52ed5d23a4cf93_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=5KP%2FEG9L7Ul7KURgD73p619rssmqH%2FEVSJJiTYJGSrI%3D",
      "description": "5 more historic strategy games from around the world for your Peg Pastimes collection!"
    },
    {
      "name": "Tabletop Football Board Game",
      "backers": 35,
      "pledged": 1492,
      "goal": 1000,
      "img": "https://i.kickstarter.com/assets/041/461/628/e9c077e46cc1f5dae34a42e2a2122809_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=n%2B0xjzX%2BZ5XD6L9%2BcxooDw1ZMDSBinewpQI6avI8514%3D",
      "description": "4th and 1. Whatcha gonna do? Tabletop Football Board Game."
    },
    {
      "name": "Sammich Time - a fun, family-friendly board game",
      "backers": 82,
      "pledged": 5018,
      "goal": 4000,
      "img": "https://i.kickstarter.com/assets/041/927/470/b892e4ceb538c53cd6ad9911da291326_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=7JOYQ%2BLfryocQMf9oRdX2LIHZLso1suVIqZJnmCm57I%3D",
      "description": "It's Sammich Time - a fun, family-friendly board game created by two teenage entrepreneurs! Help make our project a reality!"
    },
    {
      "name": "RiverCityCon Board Game & RPG Convention",
      "backers": 74,
      "pledged": 6090,
      "goal": 4000,
      "img": "https://i.kickstarter.com/assets/041/648/115/d0820c423bb7f1a42cd0000c5707163f_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=cqc2szEFcm2OX6XpoUqN7pOINztbRc%2FZaW7ifxCcx3c%3D",
      "description": "First Year of our weekend long Board Game and RPG convention in Louisville KY."
    },
    {
      "name": "2024 Gaming Calendar",
      "backers": 178,
      "pledged": 7971,
      "goal": 3000,
      "img": "https://i.kickstarter.com/assets/041/988/005/364a4ba14271212ea6a53ec0effb6945_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=1Gpv%2F3wFzQDd%2FZMuVBHTg%2FZKPDJM57zvnUs%2BbHpwnpI%3D",
      "description": "The 11th annual board gaming calendar from Scott King."
    },
    {
      "name": "Bilingo Bingo English/Ukrainian bilingual board game",
      "backers": 37,
      "pledged": 5776,
      "goal": 5700,
      "img": "https://i.kickstarter.com/assets/041/732/041/49eb49f4cf14bf5967e115e386e5d19e_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=6VZZ9gh7AyYc6Kb4lqvua1%2BTe8FKA%2BECMRP%2FtnOcmmo%3D",
      "description": "Designed to inspire learning, this game engages both English and Ukrainian learners. Challenging but fun way to practice a new language"
    },
    {
      "name": "Aliens Vs. Animals",
      "backers": 33,
      "pledged": 3131,
      "goal": 3000,
      "img": "https://i.kickstarter.com/assets/041/946/847/81639e0b4628bb30fab3638099491801_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=oc2pcip6b1rqTOP9oo8vE%2FXTFQyMTf%2FdvswNIpj%2BXQU%3D",
      "description": "A board game about managing your hand, rolling the dice, matching symbols, and protecting your habitat!"
    },
    {
      "name": "Seabound Board Game Reloaded",
      "backers": 118,
      "pledged": 9169,
      "goal": 3000,
      "img": "https://i.kickstarter.com/assets/041/954/858/a87e73f0018a4217c247d94458f48350_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=mB6Gzd2WtygdztzQOkQhT719nnDYBTmOWf8qMGhqb4g%3D",
      "description": "A casual board game of sea exploration, nautical discovery, and pirate battle that requires wits and the luck of the dice to win."
    },{
      "name": "Paycheck to Billionaire: Board Game Meets Financial Freedom",
      "backers": 201,
      "pledged": 7185,
      "goal": 5000,
      "img": "https://i.kickstarter.com/assets/045/126/850/7176867ba090df8bf23e326de4266539_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=%2BstbjAKFyIZJSwUdo8nMWgwMBBOyEh2zuThkvzIXjBI%3D",
      "description": "Start with a Paycheck, Manage Daily Bills, Invest Smartly, from Startup to Business Empire. ----A Game Changer, not only in the Game."
    },
    {
      "name": "Sumo Fight",
      "backers": 47,
      "pledged": 4474,
      "goal": 1200,
      "img": "https://i.kickstarter.com/assets/044/805/898/9c8be84cf0d8ec76653128b4864a7276_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=Ak%2FhEPlzPKf6G9%2BmNvsQfkjCWYdOUsI6%2BC1jNAcxNzs%3D",
      "description": "A unique and fast-paced new board game."
    },
    {
      "name": "Plank! - Build Your Crew and Plunder",
      "backers": 46,
      "pledged": 6984,
      "goal": 6500,
      "img": "https://i.kickstarter.com/assets/044/416/390/5a178ab0713c8a54ef689703355f316e_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=zLAoDzIePeM7QI7LCiDDdcdilRZ6pBKkDhnjWmljKIk%3D",
      "description": "Battle for control of supplies and plunder keys from your opponents as you build a crew and sail the seas to win the game."
    },
    {
      "name": "Hexes & Brews Board Game Cafe",
      "backers": 97,
      "pledged": 7949,
      "goal": 6666,
      "img": "https://i.kickstarter.com/assets/044/562/411/fb75b45f5f602dc76dd2e409c95c7894_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=8xHcMYhcDqBvj5Djo9YDujMXLO5P8CkHeDM%2BF2nSeeg%3D",
      "description": "Bringing magic and board games to Santa Ana, California!"
    },
    {
      "name": "Love, Career & Magic — A mythical reality TV board game",
      "backers": 188,
      "pledged": 7917,
      "goal": 6000,
      "img": "https://i.kickstarter.com/assets/044/353/803/30d2378e3f2af760af1699355ffd4a55_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=Q1JV6qDNhVc3Z5o2yFkV8miuo13ZcnJza%2B7KSwCevBk%3D",
      "description": "A game where fantasy meets reality TV! Can you work together to achieve high ratings or will you be cancelled after season one?"
    },
    {
      "name": "QUEST-O-GRAPHS Pencil Board Games",
      "backers": 262,
      "pledged": 3720,
      "goal": 1200,
      "img": "https://i.kickstarter.com/assets/044/035/846/1fa3694ee0276600286e270926dbb3c5_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=Bsh4AHkeQG9TKPY8ojJgUYWhUFoHGm88iIHwYh%2Bs8%2B0%3D",
      "description": "Explore 75 levels of unique locales in this full length book featuring a new type of board game puzzle. All you need is a pencil!"
    },
    {
      "name": "Widgets n' Digits",
      "backers": 142,
      "pledged": 8745,
      "goal": 7000,
      "img": "https://i.kickstarter.com/assets/043/499/508/a499a5b3fb410c48789f68b457cfb927_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=SVh%2Bussd%2Filnn94t0gKGqlDgmi6prhVQCVUvEEbQSwM%3D",
      "description": "Be the CEO of game night in this board game of wacky economic strategy!"
    },
    {
      "name": "Gnome Nabbing Grannies",
      "backers": 177,
      "pledged": 9863,
      "goal": 6920,
      "img": "https://i.kickstarter.com/assets/044/254/830/cc399975cb35fbfd82aa1b5756598e9b_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=Bek2hBaMben4oQwk9L8%2Bl%2Be07gOl6f0HKaul8NEu4Zs%3D",
      "description": "Unleash the battle of farting grannies, cane brawls, and garden-based burglary in this family-friendly team based board game!"
    },
    {
      "name": "Hampshire Battle Royale and Dingo Duel",
      "backers": 95,
      "pledged": 8215,
      "goal": 7500,
      "img": "https://i.kickstarter.com/assets/044/159/548/89319f74d7107efac676f0abf8d7fcdb_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=A2%2F6FKhunJlOz5GODX5Q3KG4fz%2FMvf%2BkcJixCxJChYY%3D",
      "description": "Hampshire Battle Royale is a mini-game centric last bear standing competitive party board game."
    },
    {
      "name": "Traditional Strategy Games from Around the World - Series 11",
      "backers": 81,
      "pledged": 5840,
      "goal": 2999,
      "img": "https://i.kickstarter.com/assets/045/158/055/ebbbd71d92d744ac11da19f2f7f389ae_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=6ExWCSNtEZhQVKeGhIBi1ILLjjeOBPmb76rX3h%2Fh45A%3D",
      "description": "Five more Peg Pastimes board games from cultures past and present"
    },
    {
      "name": "ESCAPE DEATHRACE 2182 LS BOARD GAME!",
      "backers": 64,
      "pledged": 4862,
      "goal": 4000,
      "img": "https://i.kickstarter.com/assets/044/874/953/19888d9c2d18f59507169ae64e4b8d29_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=jX%2FnYWGq8wYdKto6XiFvijkJTRZDn1r9vGqFL3dVU3M%3D",
      "description": "A tile placing, race car themed, dungeon-crawl board game for 1 to 4 players set in the cyber-tech, 22nd century."
    },
    {
      "name": "Backyard Butterfly",
      "backers": 108,
      "pledged": 6904,
      "goal": 6000,
      "img": "https://i.kickstarter.com/assets/044/930/661/78ba521e7679083890712b348c258e02_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=UiUNKq%2BBmVjGgVl2EjKmCeODK2DWYgjknQwErOO3tBQ%3D",
      "description": "A cozy, educational board game that grows with you. Multiple gameplay variations for the young and old."
    },
    {
      "name": "The Spearsmen II - More than just a board game.",
      "backers": 28,
      "pledged": 4653,
      "goal": 4500,
      "img": "https://i.kickstarter.com/assets/044/966/932/b35080354854f4f337ea5b6e1933d876_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=vDTq7yHxeDWFBda1SxOiiB781KW%2BGVR7DJ00YpUsgS4%3D",
      "description": "Experience The Unparalleled Fusion Of Expert Craftsmanship And The Ageless Charm Of Spearsmen."
    },
    {
      "name": "Race to the Ark - Board game that grows with your children!",
      "backers": 105,
      "pledged": 2660,
      "goal": 1000,
      "img": "https://i.kickstarter.com/assets/045/325/422/c33ea7cd77cd96a3c91a7216ab61ad30_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=vheymBLawXOjiiLxF%2FiVA9wPy564YxqO%2FmN2xxovz%2Fg%3D",
      "description": "From simple rules for as young as 5, this game adds new mechanics as your kids grow, with push-your-luck, set collection, and more!"
    },
    {
      "name": "Gifts Galore: the festive group gifting board game",
      "backers": 38,
      "pledged": 3196,
      "goal": 2000,
      "img": "https://i.kickstarter.com/assets/045/854/118/c8da60f8b632f960ec8dd16dc04f9951_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=hlV%2FTIkQaV9vuiLv8nJh9a0LjFLqTqxSFTeIt%2BjB7fI%3D",
      "description": "Answer trivia to open presents and Mystery Gifts on your way to the Surprise Prize! Choose your holiday: Christmas!"
    },
    {
      "name": "Pengy Pals - Antarctica's Greatest Heroes",
      "backers": 108,
      "pledged": 6680,
      "goal": 5600,
      "img": "https://i.kickstarter.com/assets/045/303/305/bc0fd1fc50ee3e2894aa7b75215af726_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=TQLXXojMKeg8nXKJp15mzGckp7sgagbJbs6zIL%2Bmgdo%3D",
      "description": "Become a Superhero Penguin in this cooperative board game of dice rolling, card playing combat. Don't forget the Fish!"
    },
    {
      "name": "CASSETTE DUNGEONS!",
      "backers": 339,
      "pledged": 5149,
      "goal": 1500,
      "img": "https://i.kickstarter.com/assets/044/985/421/e3f76a942aa1ac3cd467e5d3bed795c1_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=fEBo6tyTCp4WEsWI%2BUDHhkFh3UflqPxkmAV7LN%2B6HiY%3D",
      "description": "A compact rogue-like dungeon crawl board game through a realm of metal and madness packed in a cassette tape case!"
    }
]
`

// const template = `
// {
// "name": "",
// "description": "",
// "pledged": 0,
// "goal": 0,
// "backers": 0,
// "img": ""
// },
// `

export default games;