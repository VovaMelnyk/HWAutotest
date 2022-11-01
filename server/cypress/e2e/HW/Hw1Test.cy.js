describe("Загальні вимоги до сайту", () => {
  it("Сайт відкривається в google chrome", () => {
    cy.visit("/");
  });

  it("Тег html має мати атрибут lang зі значенням uk", () => {
    cy.get("html").invoke("attr", "lang").should("eq", "uk");
  });

  it("На сайті має бути присутній header", () => {
    cy.get("body > header").should("be.visible");
  });

  it("На сайті має бути присутній main", () => {
    cy.get("body > main").should("be.visible");
  });

  it("На сайті має бути присутній footer", () => {
    cy.get("body > footer").should("be.visible");
  });
});

describe("Перевірка хедера", () => {
  it("Всередині header першим елементом іде навігація, що створена через тег nav", () => {
    cy.get("header > nav").should("be.visible");
  });

  it("Тег nav містить 2 дочірніх елемента", () => {
    cy.get("header > nav").children().should("have.length", 2);
  });

  it("Першим дочірнім елементом є логотип, що зроблений через тег a", () => {
    cy.get("header > nav > a").should("be.visible");
  });

  it("Логотип це посилання з атрибутом href=”/”", () => {
    cy.get("header > nav > a").invoke("attr", "href").should("eq", "/");
  });
  it("Логотип містить контент WebStudio", () => {
    cy.get("header > nav > a").should("have.text", "WebStudio");
  });

  it("Другим дочірнім елементом тега nav виступає меню -  ненумерований список, що зроблений через тег ul", () => {
    cy.get("nav > ul").should("be.visible");
  });

  it("Меню складається з 3-х пунктів (3 тега li)", () => {
    cy.get("nav > ul").children().should("have.length", 3);
  });

  it("Перший пункт меню містить всередині себе тег a з артрибутом href=”” та контентом Студія", () => {
    cy.get("nav > ul > li:first-child > a").invoke("attr", "href").should("eq", "");
    cy.get("nav > ul > li:first-child > a").should("have.text", "Студія");
  });

  it("Другий пункт меню містить всередині себе тег a з артрибутом href=”” та контентом Портфоліо", () => {
    cy.get("nav > ul > li:nth-child(2) > a").invoke("attr", "href").should("eq", "");
    cy.get("nav > ul > li:nth-child(2) > a").should("have.text", "Портфоліо");
  });

  it("Третій пункт меню містить всередині себе тег a з артрибутом href=”” та контентом Контакти", () => {
    cy.get("nav > ul > li:nth-child(3) > a").invoke("attr", "href").should("eq", "");
    cy.get("nav > ul > li:nth-child(3) > a").should("have.text", "Контакти");
  });

  it("Після навігації в розмітці розміщений ненумерований список (ul) з контактними даними, в якому зберігається номер телефону та пошта", () => {
    cy.get("nav + ul").should("be.visible");
  });

  it("Список з контактними даними складається з 2-х пунктів (li)", () => {
    cy.get("nav + ul").children().should("have.length", 2);
  });

  it("Перший пункт контактних данних містить всередині себе тег а з атрибутом href=”mailto:info@devstudio.com” та контентом info@devstudio.com", () => {
    cy.get("nav + ul > li:first-child > a").invoke("attr", "href").should("eq", "mailto:info@devstudio.com");
    cy.get("nav + ul > li:first-child > a").should("have.text", "info@devstudio.com");
  });

  it("Другий пункт контактних данних містить всередині себе тег а з атрибутом href=”tel:+380961111111” (БЕЗ ПРОБІЛІВ) та контентом +38 096 111 11 11", () => {
    cy.get("nav + ul > li:nth-child(2) > a").invoke("attr", "href").should("eq", "tel:+380961111111");
    cy.get("nav + ul > li:nth-child(2) > a").should("have.text", "+38 096 111 11 11");
  });
});

describe("Перевірка тега main", () => {
  it("Тег main містить всередині себе 4 секції", () => {
    cy.get("main").children("section").should("have.length", 4);
  });
});

describe("Перевірка тега main - перша секція", () => {
  it("Секція номер №1 містить заголовок h1 з контентом Ефективні рішення для вашого бізнесу", () => {
    cy.get("main > section:first-child > h1").should("be.visible");
    cy.get("main > section:first-child > h1").should("have.text", "Ефективні рішення для вашого бізнесу");
  });

  it("В секції №1 після заголовку йде кнопка зроблена через тег button з актрибутом type='button'.", () => {
    cy.get("main > section:first-child > button").invoke("attr", "type").should("eq", "button");
  });

  it("Кнопка містить контент Замовити послугу", () => {
    cy.get("main > section:first-child > button").should("have.text", "Замовити послугу");
  });
});

describe("Перевірка тега main - друга секція", () => {
  it("Секція №2 містить заголовок зроблений тегом h2, який містить контент Наші особливості", () => {
    cy.get("main > section:nth-child(2) > h2").should("have.text", "Наші особливості");
  });

  it("Секція №2 містить список особливостей, що йде після заголовка", () => {
    cy.get("main > section:nth-child(2) > ul ").should("be.visible");
  });

  it("Список особливостей зроблений через тег ul та містить 4 дочірніх елемента (li)", () => {
    cy.get("main > section:nth-child(2) > ul").children("li").should("have.length", 4);
  });

  it("Перший елемент списку містить тег h3 з контентом Увага до деталей та p з контентом Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.", () => {
    cy.get("main > section:nth-child(2) > ul > li:first-child").find("h3").should("have.text", "Увага до деталей");
    cy.get("main > section:nth-child(2) > ul > li:first-child")
      .find("p")
      .should("have.text", "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.");
  });

  it("Другий елемент списку містить тег h3 з контентом Пунктуальність та p з контентом Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.", () => {
    cy.get("main > section:nth-child(2) > ul > li:nth-child(2)").find("h3").should("have.text", "Пунктуальність");
    cy.get("main > section:nth-child(2) > ul > li:nth-child(2)")
      .find("p")
      .should("have.text", "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.");
  });

  it("Третій елемент списку містить тег h3 з контентом Планування та p з контентом Так само консультація з широким активом значною мірою зумовлює.", () => {
    cy.get("main > section:nth-child(2) > ul > li:nth-child(3)").find("h3").should("have.text", "Планування");
    cy.get("main > section:nth-child(2) > ul > li:nth-child(3)")
      .find("p")
      .should("have.text", "Так само консультація з широким активом значною мірою зумовлює.");
  });

  it("Четвертий елемент списку містить тег h3 з контентом Сучасні технології та p з контентом Значимість цих проблем настільки очевидна, що реалізація планових завдань.", () => {
    cy.get("main > section:nth-child(2) > ul > li:nth-child(4)").find("h3").should("have.text", "Сучасні технології");
    cy.get("main > section:nth-child(2) > ul > li:nth-child(4)")
      .find("p")
      .should("have.text", "Значимість цих проблем настільки очевидна, що реалізація планових завдань.");
  });
});

describe("Перевірка тега main - третя секція", () => {
  it("Секція №3 містить заголовок h2 з контентом Чим ми займаємося", () => {
    cy.get("main > section:nth-child(3) > h2").should("be.visible");
    cy.get("main > section:nth-child(3) > h2").should("have.text", "Чим ми займаємося");
  });

  it("В третій секції є список з картинками, що складається з 3-х пунктів ", () => {
    cy.get("main > section:nth-child(3) > ul").children("li").should("have.length", 3);
  });

  it("В першому пункті списку зберігається картинка зроблена тегом img з атрибутами 1. src - атрибут в якому просисана адреса до картинки що починається з ./images та закінчується на .jpg  2. alt - атрибут який обовязково має бути заповнений 3. width - атрибут, що містить значення 370 4. height - атрибут, що містьть значення 294", () => {
    cy.get("main > section:nth-child(3) > ul > li:first-child")
      .find("img")
      .invoke("attr", "src")
      .should("includes", "./images");
    cy.get("main > section:nth-child(3) > ul > li:first-child")
      .find("img")
      .invoke("attr", "alt")
      .should("not.be.eq", "");
    cy.get("main > section:nth-child(3) > ul > li:first-child").find("img").invoke("attr", "width").should("eq", "370");
    cy.get("main > section:nth-child(3) > ul > li:first-child")
      .find("img")
      .invoke("attr", "height")
      .should("eq", "294");
  });

  it("В другому пункті списку зберігається картинка зроблена тегом img з атрибутами 1. src - атрибут в якому просисана адреса до картинки що починається з ./images та закінчується на .jpg  2. alt - атрибут який обовязково має бути заповнений 3. width - атрибут, що містить значення 370 4. height - атрибут, що містьть значення 294", () => {
    cy.get("main > section:nth-child(3) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "src")
      .should("includes", "./images");
    cy.get("main > section:nth-child(3) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "alt")
      .should("not.be.eq", "");
    cy.get("main > section:nth-child(3) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "width")
      .should("eq", "370");
    cy.get("main > section:nth-child(3) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "height")
      .should("eq", "294");
  });

  it("В третьому пункті списку зберігається картинка зроблена тегом img з атрибутами 1. src - атрибут в якому просисана адреса до картинки що починається з ./images та закінчується на .jpg  2. alt - атрибут який обовязково має бути заповнений 3. width - атрибут, що містить значення 370 4. height - атрибут, що містьть значення 294", () => {
    cy.get("main > section:nth-child(3) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "src")
      .should("includes", "./images");
    cy.get("main > section:nth-child(3) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "alt")
      .should("not.be.eq", "");
    cy.get("main > section:nth-child(3) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "width")
      .should("eq", "370");
    cy.get("main > section:nth-child(3) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "height")
      .should("eq", "294");
  });
});

describe("Перевірка тега main - четверта секція", () => {
  it("Секція №4 містить заголовок h2 з контентом Наша команда", () => {
    cy.get("main > section:nth-child(4) > h2").should("be.visible");
    cy.get("main > section:nth-child(4) > h2").should("have.text", "Наша команда");
  });

  it("В секції №4 після заголовка є список працівників зроблений через тег ul", () => {
    cy.get("main > section:nth-child(4) > ul ").should("be.visible");
  });

  it("Список працівників має 4 елементи li", () => {
    cy.get("main > section:nth-child(4) > ul").children("li").should("have.length", 4);
  });

  it("В першому пункті списку зберігається картинка зроблена тегом img з атрибутами 1) src - атрибут в якому просисана адреса до картинки що починається з ./images та закінчується на .jpg 2) alt - атрибут який обовязково має бути заповнений 3) width - атрибут, що містить значення 370 4) height - атрибут, що містьть значення 294", () => {
    cy.get("main > section:nth-child(4) > ul > li:first-child")
      .find("img")
      .invoke("attr", "src")
      .should("includes", "./images");
    cy.get("main > section:nth-child(4) > ul > li:first-child")
      .find("img")
      .invoke("attr", "alt")
      .should("not.be.eq", "");
    cy.get("main > section:nth-child(4) > ul > li:first-child").find("img").invoke("attr", "width").should("eq", "370");
    cy.get("main > section:nth-child(4) > ul > li:first-child")
      .find("img")
      .invoke("attr", "height")
      .should("eq", "294");
  });

  it("Також в першому пункті списку є заголовок h3 з контентом Ігор Дем'яненко та параграф p з контентом Product Designer", () => {
    cy.get("main > section:nth-child(4) > ul > li:first-child").find("h3").should("have.text", "Ігор Дем'яненко");
    cy.get("main > section:nth-child(4) > ul > li:first-child").find("p").should("have.text", "Product Designer");
  });

  it("В другому пункті списку зберігається картинка зроблена тегом img з атрибутами 1) src - атрибут в якому просисана адреса до картинки що починається з ./images та закінчується на .jpg 2) alt - атрибут який обовязково має бути заповнений 3) width - атрибут, що містить значення 370 4) height - атрибут, що містьть значення 294", () => {
    cy.get("main > section:nth-child(4) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "src")
      .should("includes", "./images");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "alt")
      .should("not.be.eq", "");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "width")
      .should("eq", "370");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(2)")
      .find("img")
      .invoke("attr", "height")
      .should("eq", "294");
  });

  it("Також в другому пункті списку є заголовок h3 з контентом Ольга Рєпіна та параграф p з контентом Frontend Developer", () => {
    cy.get("main > section:nth-child(4) > ul > li:nth-child(2)").find("h3").should("have.text", "Ольга Рєпіна");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(2)").find("p").should("have.text", "Frontend Developer");
  });

  it("В третьму пункті списку зберігається картинка зроблена тегом img з атрибутами 1) src - атрибут в якому просисана адреса до картинки що починається з ./images та закінчується на .jpg 2) alt - атрибут який обовязково має бути заповнений 3) width - атрибут, що містить значення 370 4) height - атрибут, що містьть значення 294", () => {
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "src")
      .should("includes", "./images");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "alt")
      .should("not.be.eq", "");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "width")
      .should("eq", "370");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)")
      .find("img")
      .invoke("attr", "height")
      .should("eq", "294");
  });

  it("Також в третьму пункті списку є заголовок h3 з контентом Микола Тарасов та параграф p з контентом  Marketing", () => {
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)").find("h3").should("have.text", "Микола Тарасов");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)").find("p").should("have.text", "Marketing");
  });

  it("В четвертому пункті списку зберігається картинка зроблена тегом img з атрибутами 1) src - атрибут в якому просисана адреса до картинки що починається з ./images та закінчується на .jpg 2) alt - атрибут який обовязково має бути заповнений 3) width - атрибут, що містить значення 370 4) height - атрибут, що містьть значення 294", () => {
    cy.get("main > section:nth-child(4) > ul > li:nth-child(4)")
      .find("img")
      .invoke("attr", "src")
      .should("includes", "./images");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(4)")
      .find("img")
      .invoke("attr", "alt")
      .should("not.be.eq", "");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(4)")
      .find("img")
      .invoke("attr", "width")
      .should("eq", "370");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(4)")
      .find("img")
      .invoke("attr", "height")
      .should("eq", "294");
  });

  it("Також в четвертому пункті списку є заголовок h3 з контентом Михайло Єрмаков та параграф p з контентом   UI Designer", () => {
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)").find("h3").should("have.text", "Михайло Єрмаков");
    cy.get("main > section:nth-child(4) > ul > li:nth-child(3)").find("p").should("have.text", " UI Designer");
  });
});

describe("Перевірка футера", () => {
  it("Першим елементом футера є логотип, зроблений посилання а з атрибутом href=”./index.html” та контентом WebStudio", () => {
    cy.get("body > footer > a").invoke("attr", "href").should("eq", "./index.html");
    cy.get("body > footer > a").should("have.text", "WebStudio");
  });

  it("Другим елементом футера є тег address", () => {
    cy.get("body > footer > address").should("be.visible");
  });

  it("Всередині тега addressss є список ul з трьома елементами li", () => {
    cy.get("body > footer > address > ul").children().should("have.length", 3);
  });

  it("В першому елементі списку знаходиться посилання з 1) атрибутом href=”” в якому міститься посилання на гугл карту 2) атрибутом target=”_blank” для відкриття посилання в новій вкладці 3) атрибутом rel=”noopener noreferrer nofollow” для захисту сайту 4) контентом м. Київ, пр-т Лесі Українки, 26", () => {
    cy.get("body > footer > address > ul > li:first-child").find("a").invoke("attr", "href");
    should("not.be.eq", "");
    cy.get("body > footer > address > ul > li:first-child").find("a").invoke("attr", "target");
    should("eq", "_blank");
    cy.get("body > footer > address > ul > li:first-child").find("a").invoke("attr", "rel");
    should("eq", "noopener noreferrer nofollow");
    cy.get("body > footer > address > ul > li:first-child")
      .find("a")
      .should("have.text", "м. Київ, пр-т Лесі Українки, 26");
  });

  it("В другому елементі списку знаходиться посилання з 1) атрибутом href=”mailto:info@devstudio.com” 2) контентом mailto:info@devstudio.com", () => {
    cy.get("body > footer > address > ul > li:nth-child(2)").find("a").invoke("attr", "href");
    should("eq", "mailto:info@devstudio.com");
    cy.get("body > footer > address > ul > li:nth-child(2)").find("a").should("have.text", "mailto:info@devstudio.com");
  });

  it("В третьому елементі списку знаходиться посилання з 1) атрибутом href=”tel:+380961111111”без пробілів 2) контентом +38 096 111 11 11 з пробілами для кращого читання", () => {
    cy.get("body > footer > address > ul > li:nth-child(3)").find("a").invoke("attr", "href");
    should("eq", "tel:+380961111111");
    cy.get("body > footer > address > ul > li:nth-child(3)").find("a").should("have.text", "tel:+380961111111");
  });
});
