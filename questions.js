const questions = [
    {
      q: "The gauge is low, so we’re low on gas.",
      options: [
        "The gauge is low.",
        "We’re low on gas.",
        "We need more gas.",
        "Low gauge means trouble."
      ],
      correct: 1
    },
    {
      q: "My sense that he doesn’t like me was confirmed by his refusal to talk to me at the party.",
      options: [
        "He didn’t talk to me at the party.",
        "He doesn’t like me.",
        "I felt uneasy.",
        "He is shy."
      ],
      correct: 1
    },
    {
      q: "The way he is dragging his feet shows that he isn’t in very good shape.",
      options: [
        "He is dragging his feet.",
        "He isn’t in very good shape.",
        "He is tired.",
        "He has no energy."
      ],
      correct: 1
    },
    {
      q: "The recent crime statistics in the newspaper are my reason for believing that my neighborhood is safe.",
      options: [
        "My neighborhood is safe.",
        "There are crime statistics.",
        "The newspaper is informative.",
        "I read the newspaper."
      ],
      correct: 0
    },
    {
      q: "Jesus loves me, this I know, for the Bible tells me so.",
      options: [
        "Jesus loves me.",
        "I read the Bible.",
        "I know things.",
        "The Bible exists."
      ],
      correct: 0
    },
    {
      q: "The teacher said the test would be hard, and I studied all night. So I deserve to feel confident.",
      options: [
        "The teacher said the test would be hard.",
        "I studied all night.",
        "I deserve to feel confident.",
        "Tests are scary."
      ],
      correct: 2
    },
    {
      q: "I skipped breakfast, and now I’m really hungry. So I need to eat something.",
      options: [
        "I skipped breakfast.",
        "I'm really hungry.",
        "I need to eat something.",
        "Breakfast is important."
      ],
      correct: 2
    },
    {
      q: "It’s going to rain. It's cloudy and the wind is picking up.",
      options: [
        "It’s cloudy.",
        "The wind is picking up.",
        "It’s going to rain.",
        "Clouds are scary."
      ],
      correct: 2
    },
    {
      q: "You need a ticket to ride the train. I don’t have a ticket. So I can’t ride.",
      options: [
        "You need a ticket to ride the train.",
        "I don’t have a ticket.",
        "I can’t ride.",
        "Trains are fun."
      ],
      correct: 2
    },
    {
      q: "We should go. If we leave now, we’ll catch the start of the movie.",
      options: [
        "If we leave now, we’ll catch the start.",
        "We should go.",
        "Movies are fun.",
        "We are late."
      ],
      correct: 1
    },
    {
      q: "I can’t find my phone. The last place I saw it was the kitchen. It must be in the kitchen.",
      options: [
        "I can’t find my phone.",
        "The kitchen was the last place.",
        "It must be in the kitchen.",
        "Phones are important."
      ],
      correct: 2
    },
    {
      q: "My guess is that nobody’s home. The door is closed, and all the lights are off. ",
      options: [
        "The door is closed.",
        "The lights are off.",
        "Nobody’s home.",
        "People sleep at night."
      ],
      correct: 2
    },
    {
      q: "Tom always walks to school. It’s raining today. He’ll be wet.",
      options: [
        "Tom walks to school.",
        "It’s raining today.",
        "He’ll be wet.",
        "Tom needs an umbrella."
      ],
      correct: 2
    },
    {
      q: "We’ve been over budget for three months. We need to cut expenses. We have big bills due soon.",
      options: [
        "We’ve been over budget.",
        "Three months is a long time.",
        "We need to cut expenses.",
        "We have big bills due soon."
      ],
      correct: 2
    },
    {
   q: "We won’t be able to buy groceries today because all the shops are closed.",
   options: [
   "All the shops are closed.",
   "We won’t be able to buy groceries.",
   "The shops will open tomorrow.",
   "We forgot to buy groceries yesterday."
   ],
   correct: 1
   },
   {
   q: "Someone must be outside, as the dog is barking wildly, which it only does when strangers are near.",
   options: [
   "The dog is barking wildly.",
   "Someone must be outside.",
   "Strangers are dangerous.",
   "The dog barks when strangers are near."
   ],
   correct: 1
   },
   {
   q: "Since she was late today, and she’s never late unless there’s traffic, there must have been traffic.",
   options: [
   "She was late today.",
   "There must have been traffic.",
   "She’s never late.",
   "She should leave earlier."
   ],
   correct: 1
   },
   {
   q: "Because the lights are off, nobody is home.",
   options: [
   "The lights are off.",
   "Nobody is home.",
   "They forgot to pay the bill.",
   "The lights are on."
   ],
   correct: 1
   },
   {
   q: "She’s dressed to leave and has a suitcase by the door. She’s probably going on a trip. She has her umbrella, too.",
   options: [
   "She’s going on a trip.",
   "She has a suitcase.",
   "She’s dressed to leave.",
   "She has her umbrella."
   ],
   correct: 0
   },
   {
   q: "Since he’s coughing and sneezing all day, it’s likely that he has a cold.",
   options: [
   "He has a cold.",
   "He’s coughing and sneezing.",
   "It’s likely that he has a cold.",
   "It’s allergy season."
   ],
   correct: 2
   },
   {
   q: "We can't make this recipe because it requires eggs and we have none.",
   options: [
   "We can’t make this recipe.",
   "We have no eggs.",
   "This recipe requires eggs.",
   "We should go to the store."
   ],
   correct: 0
   },
   {
   q: "She studied last night, so she’ll pass the test because every time she studies, she passes.",
   options: [
   "She studied last night.",
   "She’ll pass the test.",
   "She passes when she studies.",
   "Tests are hard."
   ],
   correct: 1
   },
   {
   q: "Since John isn’t answering his phone and the office is closed, he must still be in the meeting.",
   options: [
   "John isn’t answering his phone.",
   "He must still be in the meeting.",
   "The office is closed.",
   "His phone is on silent."
   ],
   correct: 1
   },
   {
   q: "Someone must have used a hose, as the streets are wet and it wasn’t raining earlier.",
   options: [
   "The streets are wet.",
   "It wasn’t raining earlier.",
   "Someone must have used a hose.",
   "Water evaporates slowly."
   ],
   correct: 2
   },
   {
   q: "Lunch starts whenever the bell rings, and the bell just rang, so it’s lunchtime.",
   options: [
   "The bell just rang.",
   "Lunch starts whenever the bell rings.",
   "It’s lunchtime.",
   "I’m hungry."
   ],
   correct: 2
   },
   {
   q: "We’re not logged in, so this can’t be the right password.",
   options: [
   "We’re not logged in.",
   "This can’t be the right password.",
   "Passwords are important.",
   "This might be the right password."
   ],
   correct: 1
   },
   {
   q: "That email has spelling errors and strange links, which suggests it might be a scam.",
   options: [
   "That email has spelling errors.",
   "It might be a scam.",
   "There are strange links.",
   "Spam filters missed it."
   ],
   correct: 1
   },
   {
   q: "Because he hasn’t trained in weeks, he's out of shape. He looked winded in the last game, too.",
   options: [
   "He’s out of shape.",
   "He looked winded.",
   "He hasn’t trained in weeks.",
   "Training is important."
   ],
   correct: 0
   },
   {
   q: "They're probably on holiday, since they aren’t answering emails and the office is closed.",
   options: [
   "They aren’t answering emails.",
   "They’re probably on holiday.",
   "The office is closed.",
   "Work is stressful."
   ],
   correct: 1
   },
   {
   q: "He works with chemicals, follows lab protocols.  He must be a scientist. Plus, he wears gloves.",
   options: [
   "He works with chemicals.",
   "He must be a scientist.",
   "Lab protocols are important.",
   "He wears gloves."
   ],
   correct: 1
   },
   {
   q: "The fan must be broken. It's' making a strange noise, and the room is hot.",
   options: [
   "The fan is making a strange noise.",
   "The fan must be broken.",
   "The room is hot.",
   "We need a new fan."
   ],
   correct: 1
   },
   {
   q: "She yawned three times in the meeting. So, she must be tired.",
   options: [
   "She yawned three times.",
   "She must be tired.",
   "The meeting is long.",
   "Yawning is contagious."
   ],
   correct: 1
   },
   {
   q: "I'd say the event is over. They took down the decorations and returned the rented chairs.",
   options: [
   "They took down the decorations.",
   "The event is over.",
   "They returned the chairs.",
   "Everyone went home."
   ],
   correct: 1
   },
   {
   q: "This must be a traffic jam. The streets are packed with cars, and people are honking.",
   options: [
   "The streets are packed with cars.",
   "This must be a traffic jam.",
   "People are honking.",
   "Traffic lights aren't working."
   ],
   correct: 1
   },
   
   
      {
        q: "He'll get promoted because he always met his targets, and he was well-liked by his team.",
        options: [
          "He always met his targets.",
          "He was well-liked by his team.",
          "He'll get promoted.",
          "He worked in sales."
        ],
        correct: 2
      },
      {
        q: "The cake collapsed. It must have been the old baking powder, since I followed the recipe exactly and baked it at the right temperature.",
        options: [
          "I followed the recipe exactly.",
          "I baked it at the right temperature.",
          "The cake collapsed.",
          "It must have been the old baking powder."
        ],
        correct: 3
      },
      {
        q: "Their team is the best because they trained hard, executed their plays well, and had great team spirit.",
        options: [
          "They trained hard.",
          "They executed their plays well.",
          "Their team is the best.",
          "They had great team spirit."
        ],
        correct: 2
      },
      {
        q: "Since the roads were icy and visibility was poor, it's clear the delay was unavoidable, even though they left on time.",
        options: [
          "The roads were icy.",
          "Visibility was poor.",
          "The delay was unavoidable.",
          "They left on time."
        ],
        correct: 2
      },
      {
        q: "Given that she practiced every day, sought feedback from her coach, and improved her timing, it's no surprise she won the race.",
        options: [
          "She practiced every day.",
          "She sought feedback from her coach.",
          "It's no surprise she won the race.",
          "She improved her timing."
        ],
        correct: 2
      },
      {
        q: "The students will perform well, which is expected because they had good teachers, consistent schedules, and plenty of resources.",
        options: [
          "They had good teachers.",
          "The students will perform well.",
          "They had consistent schedules.",
          "They had plenty of resources."
        ],
        correct: 1
      },
      {
        q: "The plot lacked depth, making the film disappointing. Also, the pacing was slow, and the acting was unconvincing.",
        options: [
          "The plot lacked depth.",
          "The film was disappointing.",
          "The pacing was slow.",
          "The acting was unconvincing."
        ],
        correct: 1
      },
      {
        q: "He had strong qualifications, but I doubt he'll get the job. He has no relevant experience, and a miserable resume.",
        options: [
          "I doubt he'll get the job.",
          "He had strong qualifications.",
          "He had relevant experience.",
          "He had a polished resume."
        ],
        correct: 0
      },
      {
        q: "Despite high fees and limited parking, the university remains a top choice due to its academic reputation.",
        options: [
          "High fees.",
          "Limited parking.",
          "The university remains a top choice.",
          "Its academic reputation."
        ],
        correct: 2
      },
      {
        q: "The internet was down, he didn’t bring the textbook and couldn't finish the assignment. And the library was closed.",
        options: [
          "The internet was down.",
          "The library was closed.",
          "He didn’t bring the textbook.",
          "He couldn’t finish the assignment."
        ],
        correct: 3
      },
      {
        q: "She must be the new manager. She has the access code, attended the leadership meeting, and signed the payroll forms.",
        options: [
          "She must be the new manager.",
          "She has the access code.",
          "She attended the leadership meeting.",
          "She signed the payroll forms."
        ],
        correct: 0
      },
      {
        q: "Because the dog was barking all night, there were footprints in the yard, and the door was ajar, I reckon someone tried to break in.",
        options: [
          "The dog was barking all night.",
          "There were footprints in the yard.",
          "Someone tried to break in.",
          "The door was ajar."
        ],
        correct: 2
      },
      {
        q: "Why should he get the award? For writing clearly, meeting every deadline, and impressing the editor.",
        options: [
          "He wrote clearly.",
          "He should get the award.",
          "He met every deadline.",
          "He impressed the editor."
        ],
        correct: 1
      },
      {
        q: "The plants are thriving. They get regular sunlight, are watered daily, and are in nutrient-rich soil.",
        options: [
          "They get regular sunlight.",
          "They are watered daily.",
          "The plants are thriving.",
          "They are in nutrient-rich soil."
        ],
        correct: 2
      },
      {
        q: "His success is no surprise — he networks constantly, maintains a great portfolio, and works harder than anyone else.",
        options: [
          "He networks constantly.",
          "He maintains a great portfolio.",
          "His success is no surprise.",
          "He works harder than anyone else."
        ],
        correct: 2
      },
      {
        q: "Her test score will be better than mine. Even though she didn’t sleep well, her focus was sharp, her answers were precise and she had practised a lot.",
        options: [
          "She didn’t sleep well.",
          "Her answers were precise.",
          "Her focus was sharp.",
          "Her test score will be better than mine."
        ],
        correct: 3
      },
      {
        q: "She apologized, so she values customer satisfaction. And she offered a refund, and fixed the issue. ",
        options: [
          "She apologized.",
          "She offered a refund.",
          "She fixed the issue.",
          "She values customer satisfaction."
        ],
        correct: 3
      },
      {
        q: "They invested early, held their shares, and diversified their portfolio. That’s why they must be super wealthy.",
        options: [
          "They invested early.",
          "They held their shares.",
          "They must be super wealthy.",
          "They diversified their portfolio."
        ],
        correct: 2
      },
      {
        q: "He completed the marathon, trained for months, and followed a strict diet. He must be a disciplined person.",
        options: [
          "He completed the marathon.",
          "He trained for months.",
          "He must be a disciplined person.",
          "He followed a strict diet."
        ],
        correct: 2
      },
      {
        q: "This restaurant must be the most popular. The room was clean, the service was prompt, and the food was excellent.",
        options: [
          "The room was clean.",
          "The service was prompt.",
          "The food was excellent.",
          "This restaurant must be the most popular."
        ],
        correct: 3
      },
   {
   q: "The lights were off and I didn’t hear anyone inside plus the car wasn’t in the driveway so I’m pretty sure nobody’s home.",
   options: [
    "I didn’t hear anyone inside.",
    "The lights were off.",
    "I’m pretty sure nobody’s home.",
    "The car wasn’t in the driveway."
   ],
   correct: 2
   },
   {
   q: "He was acting super weird like not looking at me and laughing at random stuff, probably just trying to cover up that he’s nervous.",
   options: [
    "He was acting super weird.",
    "Not looking at me.",
    "Laughing at random stuff.",
    "He’s trying to cover up that he's nervous."
   ],
   correct: 3
   },
   {
   q: "I mean the teacher didn’t even mark the last quiz yet and we’re already starting a new topic so yeah this unit is gonna be chaos.",
   options: [
    "The teacher didn’t mark the last quiz yet.",
    "We’re starting a new topic.",
    "This unit is gonna be chaos.",
    "We had a quiz last week."
   ],
   correct: 2
   },
   {
   q: "My dog was barking like crazy, then it got super quiet, and I think someone might’ve been at the door or something.",
   options: [
    "My dog was barking like crazy.",
    "It got super quiet.",
    "Someone might’ve been at the door.",
    "Dogs bark when there’s danger."
   ],
   correct: 2
   },
   {
   q: "The cafeteria food smells weird today and nobody’s sitting at the tables and Jamie literally just walked out with an uneaten tray so I don’t think I’m gonna eat that.",
   options: [
    "The food smells weird.",
    "Nobody’s sitting at the tables.",
    "Jamie walked out with an uneaten tray.",
    "I don’t think I’m gonna eat that."
   ],
   correct: 3
   },
   {
   q: "So like he said he studied, but also he didn’t bring his notes and he failed the last two tests, so I don’t really buy it.",
   options: [
    "He said he studied.",
    "He failed the last two tests.",
    "He didn’t bring his notes.",
    "I don’t really buy it."
   ],
   correct: 3
   },
   {
   q: "There were sirens last night and the neighbors were outside staring at something and this morning there was police tape so something definitely happened.",
   options: [
    "There were sirens last night.",
    "Neighbors were staring at something.",
    "There was police tape.",
    "Something definitely happened."
   ],
   correct: 3
   },
   {
   q: "He kept checking his phone like every two seconds and when I asked if he was okay he just said 'I’m fine' but not in a convincing way so I’m guessing he’s upset.",
   options: [
    "He kept checking his phone.",
    "He said 'I’m fine' but not in a convincing way.",
    "I’m guessing he’s upset.",
    "I asked if he was okay."
   ],
   correct: 2
   },
   {
   q: "The weather app is garbage! It said clear skies but it was cloudy all morning and then it poured at lunch.",
   options: [
    "The weather app said clear skies.",
    "It poured at lunch.",
    "It was cloudy all morning.",
    "That app is garbage."
   ],
   correct: 3
   }
   ];