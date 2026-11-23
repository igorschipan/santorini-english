// Lesson content. p: [english, russian, key word for the gap task]
// r: replies {s: what they say, sr: перевод, ok: best answer, bad: [two weaker answers], why: почему}
// f: fixes {w: wrong, ok: right, alt: another wrong option, why}
// rd: reading {t: text, q: question (ru), ok, bad: [2]}
// w: word pairs [en, ru]
// talk: scene for the ChatGPT teacher
const WORLDS = [
{
  id: "guests", name: "Гости", en: "Guests",
  lessons: [
  {
    id: "g1", title: "Встреча и бронь", en: "Welcome & booking",
    w: [["reservation","бронь"],["table","столик"],["inside","внутри"],["outside","снаружи"],["name","имя"]],
    p: [
      ["Good evening! Welcome to Santorini.", "Добрый вечер! Добро пожаловать в Санторини.", "Welcome"],
      ["Do you have a reservation?", "У вас есть бронь?", "reservation"],
      ["What name is the reservation under?", "На чьё имя бронь?", "under"],
      ["A table for two?", "Столик на двоих?", "table"],
      ["Would you like to sit inside or outside?", "Хотите сесть внутри или снаружи?", "outside"],
      ["Please follow me.", "Пройдёмте за мной.", "follow"]
    ],
    r: [
      { s: "Hi, we don't have a booking. Do you have a table for four?", sr: "Здравствуйте, у нас нет брони. Есть столик на четверых?",
        ok: "No problem, let me check what we have.", bad: ["Yes, you're welcome.", "What time you have reservation?"],
        why: "Гость сказал, что брони нет. Сначала успокоить и пойти проверить." },
      { s: "Thank you so much!", sr: "Большое спасибо!",
        ok: "You're welcome! Enjoy your dinner.", bad: ["Please come in.", "Yes, thank you."],
        why: "«You're welcome» говорят только в ответ на «thank you»." }
    ],
    f: [{ w: "What time you have to reservation?", ok: "What time is your reservation?", alt: "What time you have reservation?",
          why: "В вопросе нужен глагол «is»: What time is your reservation?" }],
    rd: { t: "Booking: Mr. Novak, 4 people, 7:30 pm, terrace, birthday — bring a candle with dessert.",
          q: "Что нужно сделать в конце ужина?", ok: "Принести десерт со свечой", bad: ["Пересадить гостей внутрь", "Позвонить мистеру Новаку"] },
    talk: "a guest arrives without a reservation on a busy Friday evening"
  },
  {
    id: "g2", title: "Меню и аллергии", en: "Menu & allergies",
    w: [["dish","блюдо"],["sold out","закончилось"],["nuts","орехи"],["chef","шеф-повар"],["vegan","веганский"]],
    p: [
      ["I recommend our moussaka.", "Рекомендую нашу мусаку.", "recommend"],
      ["The halloumi comes with honey and lemon.", "Халлуми подаётся с мёдом и лимоном.", "comes"],
      ["Do you have any allergies?", "У вас есть аллергия?", "allergies"],
      ["I'll check with the chef.", "Я уточню у шефа.", "check"],
      ["The walnut baklava contains nuts.", "В ореховой баклаве есть орехи.", "contains"],
      ["The grilled octopus is sold out tonight.", "Осьминог на гриле сегодня закончился.", "sold"]
    ],
    r: [
      { s: "What do you recommend?", sr: "Что вы порекомендуете?",
        ok: "I recommend our moussaka. It's very popular.", bad: ["I recommend to try moussaka.", "Moussaka is at the menu."],
        why: "После recommend не ставят «to»: I recommend our…, I recommend trying…" },
      { s: "My son is allergic to nuts. Is the baklava okay?", sr: "У сына аллергия на орехи. Баклава подойдёт?",
        ok: "I'm sorry, the baklava contains walnuts. Let me check with the chef what's safe.", bad: ["I think it's okay.", "Yes, no nuts, maybe."],
        why: "Про аллергию нельзя угадывать. Сказать честно и уточнить у шефа." }
    ],
    f: [{ w: "This dish is at the menu.", ok: "This dish is on the menu.", alt: "This dish is in the menu.",
          why: "По-английски говорят «on the menu»." },
        { w: "I recommend to try the octopus.", ok: "I recommend trying the octopus.", alt: "I recommend try the octopus.",
          why: "После recommend идёт форма с -ing или существительное." }],
    rd: { t: "Chef's note: grilled octopus is sold out tonight. The walnut baklava contains walnuts. Pita Melitzana (eggplant dip) is vegan.",
          q: "Что можно предложить веганам?", ok: "Питу мелидзану", bad: ["Ореховую баклаву", "Осьминога на гриле"] },
    dishes: 2,
    talk: "a guest asks for recommendations and has a nut allergy"
  },
  {
    id: "g2m", title: "Наше меню", en: "Our menu", menu: true,
    talk: "a guest asks you to explain several Greek dishes from our menu and to recommend one"
  },
  {
    id: "g3", title: "Жалобы", en: "Complaints",
    w: [["cold","холодный"],["replace","заменить"],["discount","скидка"],["sorry","извините"],["wrong","не тот"]],
    p: [
      ["I'm so sorry about that.", "Мне очень жаль, простите.", "sorry"],
      ["I'll replace your dish right away.", "Я сразу заменю вам блюдо.", "replace"],
      ["Let me see what I can do.", "Сейчас посмотрю, что можно сделать.", "see"],
      ["I'll tell the waiter.", "Я скажу официанту.", "tell"],
      ["Can I offer you a free dessert?", "Могу предложить десерт за наш счёт?", "offer"],
      ["Thank you for telling us.", "Спасибо, что сказали.", "telling"]
    ],
    r: [
      { s: "Excuse me, my steak is cold.", sr: "Простите, мой стейк холодный.",
        ok: "I'm so sorry. I'll replace it right away.", bad: ["I tell the waiter.", "Okay. To place your dish."],
        why: "Сначала извиниться, потом пообещать с «I'll»." },
      { s: "We've been waiting for forty minutes!", sr: "Мы ждём уже сорок минут!",
        ok: "I'm really sorry. Let me check your order now.", bad: ["Kitchen is busy.", "Wait please, is normal."],
        why: "Не оправдываться. Извиниться и сразу действовать." }
    ],
    f: [{ w: "I tell the waiter.", ok: "I'll tell the waiter.", alt: "I telling the waiter.",
          why: "Когда обещаешь что-то сделать, говори «I'll»." },
        { w: "I will place your dish.", ok: "I will replace your dish.", alt: "I will change you dish.",
          why: "Заменить — replace. Place значит «положить, поставить»." }],
    rd: { t: "Review: \"The food was late and cold, but the manager apologised, replaced my dish and gave us dessert. We'll come back!\"",
          q: "Почему гость вернётся?", ok: "Менеджер извинился и всё исправил", bad: ["Еда была горячей", "Ужин был бесплатным"] },
    talk: "a guest complains that the food is cold and they waited too long"
  },
  {
    id: "g4", title: "Счёт и такси", en: "Bill & taxi",
    w: [["bill","счёт"],["cash","наличные"],["receipt","чек"],["service charge","сервисный сбор"],["tax","налог"]],
    p: [
      ["You can pay however you like.", "Можно платить как вам удобно.", "however"],
      ["There is no extra tax or service charge.", "Сверху нет налога и сервисного сбора.", "extra"],
      ["Would you like to split the bill?", "Хотите разделить счёт?", "split"],
      ["Which hotel are you staying at?", "В каком отеле вы живёте?", "staying"],
      ["Would you like me to call a taxi?", "Вызвать вам такси?", "call"],
      ["The taxi will be here in ten minutes.", "Такси будет через десять минут.", "here"]
    ],
    r: [
      { s: "Can I pay by card?", sr: "Можно оплатить картой?",
        ok: "Of course. I'll bring the card machine.", bad: ["Yes, pay how you want.", "Card is possible maybe."],
        why: "Коротко и с обещанием: I'll bring…" },
      { s: "Could you get us a taxi to our hotel?", sr: "Можете вызвать нам такси до отеля?",
        ok: "Sure. Which hotel are you staying at?", bad: ["In which hotel you stay?", "I ordered the taxi."],
        why: "Порядок слов в вопросе: Which hotel are you staying at?" }
    ],
    f: [{ w: "In which hotel you stay?", ok: "Which hotel are you staying at?", alt: "Which hotel you staying?",
          why: "В вопросе: вопросительное слово + are + you + staying." },
        { w: "I ordered the taxi in time you want.", ok: "I'll order a taxi for the time you need.", alt: "I order taxi in time you need.",
          why: "Обещание на будущее: I'll order…, и «for the time»." }],
    rd: { t: "Table 12: total 645,000 IDR. No extra tax or service charge. Guests asked for a taxi to Seminyak at 10 pm.",
          q: "Нужно ли добавлять налог и сервисный сбор к сумме?", ok: "Нет, сверху ничего не добавляют", bad: ["Да, 10% сверху", "Только налог"] },
    talk: "guests want to pay, ask about the service charge and need a taxi to their hotel"
  },
  {
    id: "g5", title: "Босс: ресторанный критик", en: "Boss: the food critic", boss: true,
    w: [["taken","занят"],["wait","ждать"],["sea view","вид на море"],["impressed","впечатлён"],["fully booked","всё занято"]],
    p: [
      ["I'm sorry, all our window tables are taken.", "Извините, все столики у окна заняты.", "taken"],
      ["I can offer you a table nearby.", "Могу предложить столик рядом.", "offer"],
      ["The wait is about fifteen minutes.", "Ждать примерно пятнадцать минут.", "wait"],
      ["I'll let you know when a table is free.", "Я скажу вам, когда освободится столик.", "know"],
      ["Sorry, could you say that again?", "Извините, повторите, пожалуйста.", "again"],
      ["Thank you for coming. Have a lovely evening!", "Спасибо, что пришли. Хорошего вечера!", "lovely"]
    ],
    r: [
      { s: "I want the table by the window. The one with the sea view.", sr: "Мне нужен столик у окна. Тот, с видом на море.",
        ok: "I'm sorry, those tables are taken. I can offer you one nearby with a good view.", bad: ["Tables are busy.", "No. Window is not possible."],
        why: "Вежливый отказ сразу с заменой." },
      { s: "Is the fish fresh? Where is it from?", sr: "Рыба свежая? Откуда она?",
        ok: "I'll check with the chef and come back to you.", bad: ["Yes, very fresh, I think.", "I don't know."],
        why: "Если не знаешь точно, пообещай уточнить." },
      { s: "Hmm. The wine is too warm.", sr: "Хм. Вино слишком тёплое.",
        ok: "I'm so sorry. I'll bring you a cold bottle right away.", bad: ["It's normal temperature.", "Okay, I tell the waiter."],
        why: "Извинение + действие с I'll." },
      { s: "I write about restaurants. Can I speak to the owner?", sr: "Я пишу о ресторанах. Могу поговорить с владельцем?",
        ok: "The owner isn't here tonight, but I'm the manager. How can I help?", bad: ["No owner.", "Owner is not here, sorry, bye."],
        why: "Ты менеджер, ты и решаешь вопросы гостя." },
      { s: "Well, I'm impressed. Thank you.", sr: "Что ж, я впечатлён. Спасибо.",
        ok: "Thank you! We hope to see you again soon.", bad: ["You're welcome, come in.", "Yes."],
        why: "Поблагодарить и пригласить снова." }
    ],
    f: [{ w: "Sorry, tables are busy.", ok: "Sorry, the tables are taken.", alt: "Sorry, tables is busy.",
          why: "О столиках говорят «taken», а не «busy»." }],
    rd: { t: "Food blog: \"Santorini was fully booked, but the manager found us a table in ten minutes and checked my allergy with the chef. Four stars.\"",
          q: "Что понравилось критику?", ok: "Быстро нашли столик и проверили аллергию", bad: ["Вид на море", "Бесплатное вино"] },
    talk: "a demanding food critic who wants the best table and asks many questions"
  }
  ]
},
{
  id: "team", name: "Команда", en: "Team",
  lessons: [
  {
    id: "t1", title: "Брифинг перед сменой", en: "Pre-shift briefing",
    w: [["shift","смена"],["special","блюдо дня"],["section","зона, секция"],["busy","загруженный"],["briefing","планёрка"]],
    p: [
      ["Good morning, team. Let's start the briefing.", "Доброе утро, команда. Начнём планёрку.", "briefing"],
      ["Tonight we are fully booked.", "Сегодня вечером всё забронировано.", "booked"],
      ["Today's special is grilled sea bass.", "Блюдо дня — сибас на гриле.", "special"],
      ["Made, you take the terrace section.", "Маде, ты берёшь террасу.", "section"],
      ["Please check all the tables before six.", "Проверьте все столики до шести.", "check"],
      ["Any questions?", "Есть вопросы?", "questions"]
    ],
    r: [
      { s: "Do we have a big group tonight?", sr: "У нас сегодня большая группа?",
        ok: "Yes, a group of twelve at eight o'clock on the terrace.", bad: ["Yes, big group is coming maybe.", "Group twelve eight terrace."],
        why: "Полный ответ: сколько, когда, где." },
      { s: "What is the special today?", sr: "Какое сегодня блюдо дня?",
        ok: "Today's special is grilled sea bass with lemon.", bad: ["Special is fish.", "Today special fish grill."],
        why: "Официант должен повторить это гостям, поэтому скажи полной фразой." }
    ],
    f: [{ w: "Tonight we fully booked.", ok: "Tonight we are fully booked.", alt: "Tonight we is fully booked.",
          why: "Нужен глагол «are»: we are fully booked." }],
    rd: { t: "Shift plan: 5 pm briefing. Wayan — bar. Made — terrace. Putu — inside. Group of 12 at 8 pm. Sea bass special.",
          q: "Кто работает на террасе?", ok: "Маде", bad: ["Ваян", "Путу"] },
    talk: "you lead a short pre-shift briefing for your waiters"
  },
  {
    id: "t2", title: "Задание официанту", en: "Tasks for waiters",
    w: [["set","накрыть"],["refill","долить"],["clear","убрать со стола"],["ask","спросить"],["napkins","салфетки"]],
    p: [
      ["Could you set table five, please?", "Накрой, пожалуйста, пятый столик.", "set"],
      ["Please refill their water.", "Долей им, пожалуйста, воды.", "refill"],
      ["Can you clear table eight?", "Можешь убрать восьмой столик?", "clear"],
      ["Ask them if they want dessert.", "Спроси, хотят ли они десерт.", "dessert"],
      ["We need more napkins at the bar.", "На баре нужно больше салфеток.", "napkins"],
      ["Thanks, good job!", "Спасибо, молодец!", "job"]
    ],
    r: [
      { s: "Table three is waiting for the bill.", sr: "Третий столик ждёт счёт.",
        ok: "Okay, I'll bring it to them now.", bad: ["Okay, I bring it.", "Yes, bill."],
        why: "Обещание действия: I'll bring it." },
      { s: "Sorry, I didn't understand. Which table?", sr: "Извините, я не понял. Какой столик?",
        ok: "Table five, by the window.", bad: ["Five! I said!", "You don't listen."],
        why: "Спокойно повтори и добавь подсказку." }
    ],
    f: [{ w: "Can you to clear table eight?", ok: "Can you clear table eight?", alt: "Can you clearing table eight?",
          why: "После can глагол без «to»." }],
    rd: { t: "Note for Putu: table 4 — no ice in drinks. Table 7 — birthday, bring the cake at 9. Table 9 — vegetarian.",
          q: "Что нужно сделать для седьмого столика?", ok: "Принести торт в девять", bad: ["Не класть лёд", "Подать вегетарианское"] },
    talk: "you give tasks to a new waiter during a busy evening"
  },
  {
    id: "t3", title: "Ошибка на кухне", en: "A problem in the kitchen",
    w: [["order","заказ"],["mistake","ошибка"],["again","снова"],["ready","готов"],["burnt","подгоревший"]],
    p: [
      ["We have a problem with table six.", "У нас проблема с шестым столиком.", "problem"],
      ["The guest ordered chicken, not beef.", "Гость заказал курицу, а не говядину.", "ordered"],
      ["Can you make it again, please?", "Можешь, пожалуйста, приготовить заново?", "again"],
      ["How long will it take?", "Сколько это займёт?", "long"],
      ["Please check the order before it goes out.", "Пожалуйста, проверяй заказ перед выдачей.", "before"],
      ["It's okay, let's fix it together.", "Ничего страшного, давай исправим вместе.", "fix"]
    ],
    r: [
      { s: "It's not my fault! The waiter wrote it wrong.", sr: "Я не виноват! Официант неправильно записал.",
        ok: "Okay, let's fix it first. We'll talk about it after the shift.", bad: ["Yes, it's your fault.", "I don't care."],
        why: "Сначала решить проблему гостя, разбор потом." },
      { s: "Ten minutes for the new dish.", sr: "Новое блюдо — десять минут.",
        ok: "Thank you. I'll tell the guest.", bad: ["Ten minutes is too long!", "Okay, I tell."],
        why: "Поблагодарить и пообещать с I'll." }
    ],
    f: [{ w: "How long it will take?", ok: "How long will it take?", alt: "How long it take?",
          why: "В вопросе will ставится перед it." }],
    rd: { t: "Kitchen report: 3 dishes returned this week. 2 — wrong order, 1 — too salty. New rule: waiters read the order back to guests.",
          q: "Почему чаще всего возвращали блюда?", ok: "Неправильно записан заказ", bad: ["Слишком солёно", "Долго готовили"] },
    talk: "you talk to the cook about a wrong dish that a guest sent back"
  },
  {
    id: "t4", title: "Смены и опоздания", en: "Shifts & being late",
    w: [["late","опоздать"],["day off","выходной"],["swap","поменяться"],["schedule","график"],["on time","вовремя"]],
    p: [
      ["You were late again today.", "Ты сегодня снова опоздал.", "late"],
      ["Please come on time tomorrow.", "Пожалуйста, приходи завтра вовремя.", "time"],
      ["Can you swap shifts with Ketut?", "Можешь поменяться сменами с Кетутом?", "swap"],
      ["Your day off is on Tuesday.", "Твой выходной во вторник.", "off"],
      ["I'll send the new schedule tonight.", "Я пришлю новый график вечером.", "schedule"],
      ["Let me know if you're sick.", "Предупреди, если заболеешь.", "know"]
    ],
    r: [
      { s: "Can I have Saturday off? It's my sister's wedding.", sr: "Можно мне выходной в субботу? Свадьба сестры.",
        ok: "Congratulations! Let me check the schedule and I'll tell you today.", bad: ["No, Saturday is busy.", "Maybe. I don't know."],
        why: "Тепло ответить и пообещать решение в срок." },
      { s: "Sorry I'm late. The traffic was terrible.", sr: "Простите за опоздание. Ужасные пробки.",
        ok: "Okay, but please leave earlier next time.", bad: ["Again! Always late!", "Is okay, no problem, always."],
        why: "Спокойно и по делу: что сделать в следующий раз." }
    ],
    f: [{ w: "You was late again.", ok: "You were late again.", alt: "You is late again.",
          why: "С you в прошлом всегда were." }],
    rd: { t: "Schedule, week 48: Monday–Friday Wayan 2–11 pm. Ketut off on Wednesday. Putu off on Saturday — wedding.",
          q: "Когда выходной у Кетута?", ok: "В среду", bad: ["В субботу", "В понедельник"] },
    talk: "a waiter asks for a day off and you need to check the schedule"
  },
  {
    id: "t5", title: "Босс: новичок и конфликт", en: "Boss: the new hire", boss: true,
    w: [["uniform","форма"],["rule","правило"],["calm","спокойный"],["respect","уважение"],["first day","первый день"]],
    p: [
      ["Welcome to the team! This is your first day.", "Добро пожаловать в команду! Это твой первый день.", "first"],
      ["Let me show you around.", "Давай я тебе всё покажу.", "show"],
      ["Our rule is: guests always come first.", "Наше правило: гости всегда на первом месте.", "rule"],
      ["Please stay calm and talk to me.", "Пожалуйста, успокойся и поговори со мной.", "calm"],
      ["Let's talk about it after the shift.", "Давай обсудим после смены.", "after"],
      ["I'm here if you need help.", "Я рядом, если нужна помощь.", "help"]
    ],
    r: [
      { s: "Hi, I'm Komang. It's my first day.", sr: "Привет, я Команг. Это мой первый день.",
        ok: "Welcome, Komang! Let me show you around.", bad: ["Okay. Go to work.", "Hello. You're welcome."],
        why: "Тепло встретить и сразу помочь." },
      { s: "Where do I keep my things?", sr: "Где мне оставить вещи?",
        ok: "There's a staff room behind the kitchen. I'll show you.", bad: ["Somewhere.", "In kitchen, maybe."],
        why: "Конкретно и с обещанием." },
      { s: "Made shouted at me in front of the guests!", sr: "Маде накричал на меня при гостях!",
        ok: "I'm sorry. That's not okay. I'll talk to him after the shift.", bad: ["Don't cry.", "Made is always like this."],
        why: "Признать проблему и пообещать разобраться." },
      { s: "I don't know how to use the card machine.", sr: "Я не знаю, как работать с терминалом.",
        ok: "No problem. Watch me once, then you try.", bad: ["Ask somebody.", "It's easy, just do it."],
        why: "Показать и дать попробовать." },
      { s: "Thanks for your help today.", sr: "Спасибо за помощь сегодня.",
        ok: "You're welcome. You did a great job!", bad: ["Please come in.", "Yes, okay."],
        why: "You're welcome — ответ на спасибо." }
    ],
    f: [{ w: "Let me to show you around.", ok: "Let me show you around.", alt: "Let me showing you around.",
          why: "После let me глагол без «to»." }],
    rd: { t: "Staff rules: 1. Uniform clean every day. 2. Phones stay in the staff room. 3. Problems with colleagues — talk to the manager, never in front of guests.",
          q: "Что делать при конфликте с коллегой?", ok: "Говорить с менеджером, не при гостях", bad: ["Решать при гостях", "Звонить владельцу"] },
    talk: "it's a new waiter's first day and later two staff members have a conflict"
  }
  ]
},
{
  id: "suppliers", name: "Поставщики", en: "Suppliers",
  lessons: [
  {
    id: "s1", title: "Заказ продуктов", en: "Placing an order",
    w: [["order","заказ"],["kilo","килограмм"],["delivery","доставка"],["box","коробка"],["tomorrow","завтра"]],
    p: [
      ["I'd like to place an order.", "Я хочу сделать заказ.", "order"],
      ["We need ten kilos of tomatoes.", "Нам нужно десять кило помидоров.", "need"],
      ["Can you deliver tomorrow morning?", "Можете доставить завтра утром?", "deliver"],
      ["What time will the delivery arrive?", "Во сколько приедет доставка?", "arrive"],
      ["Please send me the invoice.", "Пришлите, пожалуйста, счёт.", "invoice"],
      ["Let me confirm the order.", "Давайте я подтвержу заказ.", "confirm"]
    ],
    r: [
      { s: "Hello, Bali Fresh. How can I help?", sr: "Алло, Bali Fresh. Чем могу помочь?",
        ok: "Hi, this is the manager of Santorini. I'd like to place an order.", bad: ["I want tomatoes.", "Hello, order please."],
        why: "Представиться и сказать, зачем звонишь." },
      { s: "We can deliver at eleven.", sr: "Можем привезти в одиннадцать.",
        ok: "That's too late for us. Can you come before nine?", bad: ["No, no, no.", "Eleven is bad."],
        why: "Объяснить, почему не подходит, и предложить своё время." }
    ],
    f: [{ w: "We need ten kilo tomatoes.", ok: "We need ten kilos of tomatoes.", alt: "We need ten kilo of tomato.",
          why: "Kilos во множественном и «of»." }],
    rd: { t: "Order #204: tomatoes 10 kg, onions 5 kg, lemons 3 kg, basil 1 box. Delivery: Thursday, 8 am. Payment: 14 days.",
          q: "Когда приедет доставка?", ok: "В четверг в 8 утра", bad: ["Через 14 дней", "В пятницу утром"] },
    talk: "you call a vegetable supplier to place an order for tomorrow"
  },
  {
    id: "s2", title: "Привезли не то", en: "Wrong delivery",
    w: [["missing","не хватает"],["damaged","повреждённый"],["fresh","свежий"],["return","вернуть"],["instead","вместо"]],
    p: [
      ["Two boxes are missing.", "Не хватает двух коробок.", "missing"],
      ["These fish aren't fresh.", "Эта рыба несвежая.", "fresh"],
      ["We ordered salmon, not tuna.", "Мы заказывали лосося, а не тунца.", "ordered"],
      ["I'm going to return this box.", "Я верну эту коробку.", "return"],
      ["Can you send the rest today?", "Можете довезти остальное сегодня?", "rest"],
      ["Please change the invoice.", "Пожалуйста, исправьте счёт.", "change"]
    ],
    r: [
      { s: "Here's your delivery. Please sign here.", sr: "Вот ваша доставка. Распишитесь здесь.",
        ok: "Just a moment, I need to check everything first.", bad: ["Okay, I sign.", "Thank you, bye."],
        why: "Сначала проверить, потом подписывать." },
      { s: "Sorry, we didn't have salmon. We sent tuna.", sr: "Извините, лосося не было. Мы прислали тунца.",
        ok: "I understand, but you need to call me first next time.", bad: ["Okay, no problem.", "Why tuna? Crazy!"],
        why: "Спокойно, но твёрдо: о заменах предупреждают заранее." }
    ],
    f: [{ w: "Two boxes is missing.", ok: "Two boxes are missing.", alt: "Two box are missing.",
          why: "Boxes — много, значит are." }],
    rd: { t: "Delivery note: salmon 5 kg — replaced with tuna 5 kg. Prawns 3 kg — 2 kg delivered, 1 kg tomorrow.",
          q: "Сколько креветок привезут завтра?", ok: "1 кг", bad: ["2 кг", "3 кг"] },
    talk: "a supplier delivered the wrong fish and some boxes are missing"
  },
  {
    id: "s3", title: "Поставщик опаздывает", en: "A late supplier",
    w: [["late","поздно"],["traffic","пробки"],["urgent","срочно"],["on the way","в пути"],["promise","обещать"]],
    p: [
      ["Where is our delivery?", "Где наша доставка?", "delivery"],
      ["You promised to come at eight.", "Вы обещали приехать в восемь.", "promised"],
      ["We open in one hour.", "Мы открываемся через час.", "open"],
      ["It's urgent, please.", "Это срочно, пожалуйста.", "urgent"],
      ["How long until you arrive?", "Через сколько вы приедете?", "until"],
      ["If it happens again, we'll find another supplier.", "Если это повторится, мы найдём другого поставщика.", "another"]
    ],
    r: [
      { s: "Sorry, the driver is stuck in traffic.", sr: "Извините, водитель застрял в пробке.",
        ok: "I understand. How long until he arrives?", bad: ["Traffic is your problem.", "Okay, okay."],
        why: "Понять и сразу узнать срок." },
      { s: "Maybe in two hours.", sr: "Может, через два часа.",
        ok: "That's too late. Can you send the fish with a scooter now?", bad: ["Okay, two hours.", "No!"],
        why: "Предложить решение, а не просто ждать." }
    ],
    f: [{ w: "You promised come at eight.", ok: "You promised to come at eight.", alt: "You promise coming at eight.",
          why: "После promised нужен «to»." }],
    rd: { t: "Message from Ocean Fish: \"Sorry! Truck broke down. Delivery at 12 instead of 8. 10% discount on today's order.\"",
          q: "Что поставщик предлагает за опоздание?", ok: "Скидку 10% на сегодняшний заказ", bad: ["Бесплатную доставку", "Привезти в 8"] },
    talk: "your fish supplier is two hours late and the restaurant opens soon"
  },
  {
    id: "s4", title: "Цена и условия", en: "Prices & terms",
    w: [["price","цена"],["expensive","дорогой"],["discount","скидка"],["contract","договор"],["per kilo","за килограмм"]],
    p: [
      ["The price is too high for us.", "Цена для нас слишком высокая.", "high"],
      ["Can you give us a discount?", "Можете сделать скидку?", "discount"],
      ["We order every week.", "Мы заказываем каждую неделю.", "every"],
      ["Another supplier offers a better price.", "Другой поставщик предлагает цену лучше.", "offers"],
      ["Can we pay in thirty days?", "Можем платить через тридцать дней?", "pay"],
      ["Let me talk to the owner and call you back.", "Я поговорю с владельцем и перезвоню.", "back"]
    ],
    r: [
      { s: "From next month the price is 120,000 per kilo.", sr: "Со следующего месяца цена 120 000 за кило.",
        ok: "That's twenty percent more. Can we keep the old price if we order more?", bad: ["Okay.", "Too expensive, bye."],
        why: "Назвать проблему и предложить сделку." },
      { s: "I can give you five percent.", sr: "Могу дать пять процентов.",
        ok: "Thank you. Let me talk to the owner and call you back today.", bad: ["Five is nothing!", "Yes, yes, deal."],
        why: "Не соглашаться сразу, взять время на решение." }
    ],
    f: [{ w: "Another supplier offer better price.", ok: "Another supplier offers a better price.", alt: "Another supplier offering better price.",
          why: "Supplier — он, значит offers; и артикль «a»." }],
    rd: { t: "Offer from Bali Meat: beef 135,000 IDR/kg, chicken 55,000 IDR/kg. Discount 7% for orders over 50 kg a week. Payment: 30 days.",
          q: "Когда дают скидку 7%?", ok: "При заказе больше 50 кг в неделю", bad: ["При оплате за 30 дней", "На всю курицу"] },
    talk: "you negotiate a new price with a meat supplier"
  },
  {
    id: "s5", title: "Босс: новый поставщик рыбы", en: "Boss: the new fish supplier", boss: true,
    w: [["sample","образец"],["quality","качество"],["trial","пробный период"],["reliable","надёжный"],["deal","сделка"]],
    p: [
      ["Can you bring us a sample first?", "Можете сначала привезти образец?", "sample"],
      ["Quality is the most important thing for us.", "Качество для нас важнее всего.", "Quality"],
      ["Let's start with a two-week trial.", "Давайте начнём с двухнедельной пробы.", "trial"],
      ["We need delivery before nine every day.", "Нам нужна доставка до девяти каждый день.", "before"],
      ["What happens if the fish isn't fresh?", "Что будет, если рыба окажется несвежей?", "happens"],
      ["Sounds good. Let's make a deal.", "Звучит хорошо. Договорились.", "deal"]
    ],
    r: [
      { s: "Our tuna is the best in Bali.", sr: "Наш тунец лучший на Бали.",
        ok: "Great. Can you bring us a sample first?", bad: ["Everybody says this.", "Okay, send 50 kilos."],
        why: "Вежливо проверить, прежде чем заказывать." },
      { s: "We deliver at ten.", sr: "Мы привозим в десять.",
        ok: "We need it before nine. Is that possible?", bad: ["Ten is okay.", "Ten no."],
        why: "Чётко назвать своё условие." },
      { s: "If the fish isn't fresh, you can return it.", sr: "Если рыба несвежая, можно вернуть.",
        ok: "Good. And you'll replace it the same day?", bad: ["Okay.", "I hope it's fresh."],
        why: "Уточнить детали, пока не подписали." },
      { s: "Our price is 95,000 per kilo.", sr: "Наша цена 95 000 за кило.",
        ok: "Our current supplier is 85,000. Can you do better?", bad: ["Very expensive!", "Okay, good price."],
        why: "Сравнить с текущей ценой и попросить лучше." },
      { s: "Okay, 88,000 and a two-week trial.", sr: "Хорошо, 88 000 и две недели пробы.",
        ok: "Sounds good. I'll confirm with the owner today.", bad: ["Deal, deal!", "Maybe, maybe."],
        why: "Принять, но подтвердить у владельца." }
    ],
    f: [{ w: "Can you bring us sample first?", ok: "Can you bring us a sample first?", alt: "Can you bring to us sample first?",
          why: "Перед одним предметом нужен «a»." }],
    rd: { t: "Proposal: tuna 88,000 IDR/kg, snapper 75,000 IDR/kg. Delivery 7–8:30 am daily. Two-week trial. Fish not fresh — replaced the same day.",
          q: "Что будет с несвежей рыбой?", ok: "Заменят в тот же день", bad: ["Вернут деньги через неделю", "Дадут скидку"] },
    talk: "you meet a new fish supplier and agree on price, delivery time and a trial"
  }
  ]
},
{
  id: "owner", name: "Владелец", en: "Owner",
  lessons: [
  {
    id: "o1", title: "Отчёт за неделю", en: "Weekly report",
    w: [["revenue","выручка"],["guests","гости"],["increase","рост"],["decrease","спад"],["average","средний"]],
    p: [
      ["Here is the report for last week.", "Вот отчёт за прошлую неделю.", "report"],
      ["We had four hundred guests.", "У нас было четыреста гостей.", "had"],
      ["Revenue went up by ten percent.", "Выручка выросла на десять процентов.", "up"],
      ["Tuesday was our slowest day.", "Вторник был самым слабым днём.", "slowest"],
      ["The average bill was higher than usual.", "Средний чек был выше обычного.", "higher"],
      ["Next week I want to try a lunch menu.", "На следующей неделе хочу попробовать обеденное меню.", "try"]
    ],
    r: [
      { s: "So, how was the week?", sr: "Ну, как прошла неделя?",
        ok: "Good. We had four hundred guests and revenue went up by ten percent.", bad: ["Good.", "Was many guests, good money."],
        why: "Владельцу нужны цифры." },
      { s: "Why was Tuesday so quiet?", sr: "Почему вторник был таким тихим?",
        ok: "It rained all day. I think we need a rainy-day offer.", bad: ["I don't know.", "Tuesday is always bad."],
        why: "Причина + идея, что делать." }
    ],
    f: [{ w: "Revenue went up on ten percent.", ok: "Revenue went up by ten percent.", alt: "Revenue went up for ten percent.",
          why: "Рост на сколько-то: «by»." }],
    rd: { t: "Week 47: 412 guests (+8%). Revenue 98 million IDR (+10%). Best day: Saturday. Worst day: Tuesday (rain). 2 complaints, both solved.",
          q: "Почему вторник был слабым?", ok: "Был дождь", bad: ["Не хватило персонала", "Не было рыбы"] },
    talk: "you give the owner a short weekly report with numbers"
  },
  {
    id: "o2", title: "Плохой отзыв", en: "A bad review",
    w: [["review","отзыв"],["rude","грубый"],["happen","случиться"],["reply","ответить"],["prevent","не допустить"]],
    p: [
      ["We got a bad review on Google.", "Нам оставили плохой отзыв в Google.", "review"],
      ["The guest said the waiter was rude.", "Гость написал, что официант был груб.", "rude"],
      ["I already talked to the waiter.", "Я уже поговорила с официантом.", "already"],
      ["I'll reply to the guest today.", "Я отвечу гостю сегодня.", "reply"],
      ["It won't happen again.", "Это не повторится.", "happen"],
      ["Here's my plan to prevent this.", "Вот мой план, как этого не допустить.", "prevent"]
    ],
    r: [
      { s: "Did you see the one-star review?", sr: "Ты видела отзыв на одну звезду?",
        ok: "Yes. I already talked to the waiter, and I'll reply to the guest today.", bad: ["Yes, bad guest.", "No."],
        why: "Показать, что ты уже действуешь." },
      { s: "What will you write to the guest?", sr: "Что ты напишешь гостю?",
        ok: "I'll apologise, explain what we changed, and invite them back.", bad: ["Sorry, bye.", "That he is wrong."],
        why: "Извинение, что изменили, приглашение." }
    ],
    f: [{ w: "It won't happens again.", ok: "It won't happen again.", alt: "It not happen again.",
          why: "После won't глагол без окончания." }],
    rd: { t: "Google review, 1 star: \"We waited 30 minutes for drinks and the waiter was rude when we asked. Beautiful place, bad service.\"",
          q: "Что гостю понравилось?", ok: "Само место", bad: ["Обслуживание", "Скорость подачи"] },
    talk: "the owner asks you about a one-star review"
  },
  {
    id: "o3", title: "Просьба о бюджете", en: "Asking for budget",
    w: [["budget","бюджет"],["staff","персонал"],["repair","ремонт"],["worth it","того стоит"],["cost","стоить"]],
    p: [
      ["I'd like to ask for a small budget.", "Я хочу попросить небольшой бюджет.", "budget"],
      ["We need one more waiter on weekends.", "Нам нужен ещё один официант на выходные.", "more"],
      ["The coffee machine needs a repair.", "Кофемашине нужен ремонт.", "repair"],
      ["It will cost about five million rupiah.", "Это будет стоить около пяти миллионов рупий.", "cost"],
      ["I think it's worth it because…", "Думаю, это того стоит, потому что…", "worth"],
      ["Can we decide by Friday?", "Можем решить до пятницы?", "decide"]
    ],
    r: [
      { s: "Why do you need another waiter?", sr: "Зачем тебе ещё один официант?",
        ok: "On Saturdays guests wait too long. One more waiter means faster service and better reviews.", bad: ["Because we need.", "Waiters are tired."],
        why: "Причина и польза для бизнеса." },
      { s: "Five million is a lot.", sr: "Пять миллионов — это много.",
        ok: "I understand. We can start with weekends only and check the results.", bad: ["Not a lot.", "Okay, forget it."],
        why: "Предложить вариант поменьше." }
    ],
    f: [{ w: "It will costs five million.", ok: "It will cost five million.", alt: "It will costing five million.",
          why: "После will глагол в начальной форме." }],
    rd: { t: "Request: 1 extra waiter Fri–Sun, 3 months. Cost: 4.5 million IDR/month. Expected: waiting time −30%, more 5-star reviews.",
          q: "Сколько будет стоить официант в месяц?", ok: "4,5 миллиона рупий", bad: ["5 миллионов рупий", "3 миллиона рупий"] },
    talk: "you ask the owner for budget for an extra weekend waiter"
  },
  {
    id: "o4", title: "Идея для ресторана", en: "Pitching an idea",
    w: [["idea","идея"],["sunset","закат"],["event","мероприятие"],["profit","прибыль"],["test","проверить"]],
    p: [
      ["I have an idea for the restaurant.", "У меня есть идея для ресторана.", "idea"],
      ["What about a sunset happy hour?", "Как насчёт счастливого часа на закате?", "sunset"],
      ["It could bring more guests on weekdays.", "Это может привести больше гостей в будни.", "bring"],
      ["We can test it for one month.", "Можем проверить в течение месяца.", "test"],
      ["Other places nearby do it too.", "Другие места рядом тоже так делают.", "nearby"],
      ["What do you think?", "Что вы думаете?", "think"]
    ],
    r: [
      { s: "A happy hour? Won't we lose money on drinks?", sr: "Счастливый час? Мы не потеряем деньги на напитках?",
        ok: "Drinks are cheaper, but guests usually stay and order food.", bad: ["No, no, no.", "Maybe yes."],
        why: "Ответить на сомнение аргументом." },
      { s: "Okay, but how will we know if it works?", sr: "Хорошо, но как мы поймём, что работает?",
        ok: "We'll compare weekday guests before and after the month.", bad: ["We will see.", "It works, sure."],
        why: "Предложить понятную проверку." }
    ],
    f: [{ w: "It could brings more guests.", ok: "It could bring more guests.", alt: "It could to bring more guests.",
          why: "После could глагол без окончания и без «to»." }],
    rd: { t: "Idea: Sunset hour 5–7 pm, Mon–Thu. Cocktails −30%. Goal: +25 guests per weekday. Test for 4 weeks, then decide.",
          q: "Какая цель у счастливого часа?", ok: "+25 гостей в каждый будний день", bad: ["Скидка 30% на еду", "Работать до 7 утра"] },
    talk: "you pitch a sunset happy hour idea to the owner"
  },
  {
    id: "o5", title: "Босс: итоги месяца", en: "Boss: monthly review", boss: true,
    w: [["goal","цель"],["achieve","достичь"],["responsibility","ответственность"],["raise","повышение (зарплаты)"],["improve","улучшить"]],
    p: [
      ["We reached our goal this month.", "В этом месяце мы достигли цели.", "goal"],
      ["Our rating went up to 4.7.", "Наш рейтинг вырос до 4,7.", "rating"],
      ["I'd like to take more responsibility.", "Я хочу взять больше ответственности.", "responsibility"],
      ["I think I've earned a raise.", "Думаю, я заслужила повышение.", "earned"],
      ["Next month I want to improve the lunch service.", "В следующем месяце хочу улучшить обеды.", "improve"],
      ["Thank you for your trust.", "Спасибо за доверие.", "trust"]
    ],
    r: [
      { s: "So, tell me about the month.", sr: "Ну, расскажи про месяц.",
        ok: "We reached our goal. Revenue went up by twelve percent, and our rating is 4.7.", bad: ["Good month.", "Many guests, good."],
        why: "Начни с результата и цифр." },
      { s: "What didn't go well?", sr: "Что не получилось?",
        ok: "Lunch is still slow. I have a plan to improve it next month.", bad: ["Everything was perfect.", "Staff was bad."],
        why: "Честно назвать слабое место и план." },
      { s: "The guests love you. What do you want to do next?", sr: "Гости тебя любят. Что хочешь делать дальше?",
        ok: "I'd like to take more responsibility, for example the supplier contracts.", bad: ["Nothing.", "I want more money."],
        why: "Конкретное предложение, а не общее желание." },
      { s: "And what about your salary?", sr: "А что насчёт твоей зарплаты?",
        ok: "I think I've earned a raise. Can we discuss ten percent?", bad: ["Is okay, I don't know.", "Give me more."],
        why: "Спокойно назвать конкретную цифру." },
      { s: "Let me think about it until Monday.", sr: "Дай подумать до понедельника.",
        ok: "Of course. Thank you for your trust.", bad: ["Why Monday?", "You're welcome."],
        why: "Вежливо согласиться и поблагодарить." }
    ],
    f: [{ w: "I'd like to take more responsibilities for supplier.", ok: "I'd like to take more responsibility for the suppliers.", alt: "I like take more responsibility.",
          why: "Responsibility здесь без -s, и «the suppliers»." }],
    rd: { t: "Monthly summary: revenue +12%, Google rating 4.5 → 4.7, staff turnover 0, lunch guests −5%. Goal for next month: lunch +15%.",
          q: "Что нужно улучшить в следующем месяце?", ok: "Обеды", bad: ["Рейтинг", "Персонал"] },
    talk: "a monthly review meeting with the owner where you also ask for a raise"
  }
  ]
}
];
