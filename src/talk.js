// Scenes for live practice in ChatGPT. rv: based on real guest reviews of Santorini Greek Restaurant (Bali), paraphrased.
const TALK = {
  cats: [
    { id:"guests", name:"Гости", role:"a guest at the restaurant" },
    { id:"reviews", name:"По отзывам", role:"a guest at the restaurant" },
    { id:"team", name:"Персонал", role:"a staff member of the restaurant" },
    { id:"suppliers", name:"Поставщики", role:"a supplier of the restaurant" },
    { id:"owner", name:"Руководство", role:"the owner of the restaurant, a member of the Greek family that runs it" }
  ],
  accents: {
    guests: ["Australian","British (London)","Scottish","Irish","American (New York)","American Southern","Indian","Singaporean","German","French","Italian","Russian","Japanese","Chinese","Dutch"],
    reviews: ["Australian","British (London)","Irish","American (California)","Indian","German","French","Dutch","Russian","New Zealand"],
    team: ["Balinese","Javanese","Balinese"],
    suppliers: ["Balinese","Javanese","Australian (an expat living in Bali)","Greek"],
    owner: ["Greek","Greek","Greek-Australian"]
  },
  speeds: [
    { id:"slow", name:"Медленно", en:"slowly and clearly, with short simple sentences" },
    { id:"normal", name:"Обычно", en:"at a natural, normal pace" },
    { id:"fast", name:"Быстро", en:"fast, like a real busy person, with contractions, fillers and some slang" }
  ],
  moods: ["friendly and relaxed","in a hurry","a bit irritated","very picky","chatty and curious","tired after a long day","confused and asking many questions","polite but firm"],
  scenes: [
    // guests
    { c:"guests", t:"Гость без брони в пятницу", en:"a guest arrives without a reservation on a busy Friday evening and wants a table for four" },
    { c:"guests", t:"Аллергия на орехи", en:"a guest asks for recommendations and has a nut allergy" },
    { c:"guests", t:"Холодное блюдо и долгое ожидание", en:"a guest complains that the food is cold and they waited too long" },
    { c:"guests", t:"Счёт и такси", en:"guests want to pay, ask about the bill and need a taxi to their hotel" },
    { c:"guests", t:"Сюрприз на день рождения", en:"a guest secretly organises a birthday surprise for their partner" },
    { c:"guests", t:"Большая компания", en:"a group of ten arrives without warning and wants to sit together" },
    { c:"guests", t:"Ресторанный критик", en:"a demanding food critic wants the best table and asks many questions" },
    { c:"guests", t:"Забыли телефон", en:"a guest comes back because they think they left their phone at the table" },
    // reviews (real themes, paraphrased)
    { c:"reviews", t:"Вернули коктейль", en:"a guest sends back a frozen margarita because it tastes wrong; offer to replace it with another drink, for example a mango daiquiri", rv:"Guests wrote that drinks are hit or miss and one sent back a frozen margarita." },
    { c:"reviews", t:"Осьминог закончился", en:"a guest came especially for the grilled octopus, but it is sold out tonight", rv:"A guest wrote that the grilled octopus was sold out." },
    { c:"reviews", t:"Баранина закончилась рано", en:"at 8 pm the lamb is already sold out and a guest is disappointed", rv:"Reviews say lamb dishes sell out quickly, so guests should come early." },
    { c:"reviews", t:"Шумная улица", en:"a guest says the street outside is too noisy and asks for a quieter table further back", rv:"A guest wrote that the street outside is very busy and noisy." },
    { c:"reviews", t:"Жёсткая пита и маленький бургер", en:"a family says the pita bread is hard and the kids' burger is too small", rv:"A family wrote that the bread was hard and the kids' burger was very small." },
    { c:"reviews", t:"Везде один и тот же салат", en:"a guest says every dish comes with the same salad and asks for something different, for example rice instead of bread", rv:"A guest wrote that every dish came with the same salad." },
    { c:"reviews", t:"Холодные кальмары", en:"a guest says the calamari arrived cold", rv:"Some guests wrote that the calamari was served cold." },
    { c:"reviews", t:"Что такое мусака и узо?", en:"a curious guest asks what moussaka, gemista and spanakopita are, and what ouzo is", rv:"A guest wrote that staff didn't know much about Greek food and drinks." },
    { c:"reviews", t:"Дорого за такие блюда", en:"a guest thinks the prices are a bit high for what they got", rv:"Two guests wrote that prices felt steep for what was offered." },
    { c:"reviews", t:"В другом филиале вкуснее", en:"a guest says the food at your other branch was better than here", rv:"A guest wrote that the food was not as good as at another branch." },
    { c:"reviews", t:"Веганское меню", en:"a vegan guest asks which dishes are vegan and what you recommend", rv:"Guests praised the clearly marked vegan options like the falafel platter." },
    { c:"reviews", t:"Постоянный гость", en:"a returning guest comes in; you remember their name from last time and offer a free dessert", rv:"A guest loved that a server remembered their booking name and offered a free dessert." },
    { c:"reviews", t:"Неприветливый кассир", en:"a guest complains that the cashier was unfriendly when they paid", rv:"A guest wrote that the person at the cash register seemed less friendly." },
    { c:"reviews", t:"Есть ли налог и сервисный сбор?", en:"a guest asks whether there is an extra tax or service charge on the bill, like in many Bali restaurants", rv:"Guests noticed there was no extra tax or service fee, unlike many Bali restaurants." },
    // team
    { c:"team", t:"Переделать коктейль", en:"you ask the bartender to remake a margarita that a guest sent back" },
    { c:"team", t:"Научить новичка греческим блюдам", en:"you teach a new waiter what moussaka, souvlaki, halloumi and baklava are, so they can explain them to guests" },
    { c:"team", t:"Разговор с кассиром", en:"you talk to the cashier about being friendlier, after a guest complained" },
    { c:"team", t:"Почему кальмары холодные?", en:"you ask the cook why the calamari went out cold, without blaming anyone" },
    { c:"team", t:"Планёрка: что закончится", en:"you brief the team: lamb and octopus sell out early, so waiters should offer alternatives" },
    { c:"team", t:"Отпроситься на церемонию", en:"a waiter asks to leave early for a family ceremony in the village" },
    { c:"team", t:"Спор из-за большого стола", en:"two waiters argue about who takes the big table; you solve it" },
    { c:"team", t:"Похвалить официанта", en:"you praise a waiter by name because a guest mentioned them in a great review" },
    // suppliers
    { c:"suppliers", t:"Фета подорожала", en:"you order feta cheese and the supplier says the price went up" },
    { c:"suppliers", t:"Осьминога привезут половину", en:"the octopus supplier can deliver only half of your order this week" },
    { c:"suppliers", t:"Жёсткая пита из пекарни", en:"you tell the bakery that the pita bread was too hard and ask for a fresher delivery" },
    { c:"suppliers", t:"Нужно больше баранины", en:"you ask the lamb supplier for more lamb because it sells out every evening" },
    { c:"suppliers", t:"Новое вино для сангрии", en:"a wine supplier offers a new wine for the sangria; ask about price and taste" },
    { c:"suppliers", t:"Плохие помидоры", en:"the vegetable delivery has bad tomatoes; you want them replaced today" },
    // owner
    { c:"owner", t:"Отзывы за неделю", en:"you show the owner this week's reviews: what guests love and what they complain about" },
    { c:"owner", t:"Больше гарниров", en:"you suggest more side dishes because guests say every dish comes with the same salad" },
    { c:"owner", t:"Бюджет на обучение", en:"you ask the owner for budget to train staff on Greek food, wine and ouzo" },
    { c:"owner", t:"«В другом филиале лучше»", en:"the owner asks why a guest said another branch is better, and what you will do" },
    { c:"owner", t:"Заказывать больше?", en:"you discuss ordering more lamb and octopus because they sell out" },
    { c:"owner", t:"Итоги месяца и повышение", en:"a monthly review meeting where you also ask for a raise" }
  ]
};
