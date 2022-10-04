const HW1Test = (url) => {
  return `describe("Сайт має відкриватися в Google chrome", () => {
    it("Відкриття сторінки", () => {
      cy.visit("${url}");
    });
  });

  describe("Загальні вимоги до сайту", () => {
    it("Тег html має мати атрибут lang зі значенням uk", () => {
      cy.get("html").invoke("attr", "lang").should("eq", "uk");
    });

    it("На сайті має бути присутній header", () => {
      cy.get("header").should("be.visible");
    });

    it("На сайті має бути присутній main", () => {
      cy.get("main").should("be.visible");
    });

    it("На сайті має бути присутній footer", () => {
      cy.get("footer").should("be.visible");
    });
  });

  describe("Перевірка хедера", () => {
    it("В хедері має бути присутній тег nav", () => {
      cy.get("header > nav").should("be.visible");
    });

    it("В nav має бути присутній логотип у вигляті тега а", () => {
      cy.get("header > nav > a").should("be.visible");
    });

    it("Логотип має бути посиланням і вести на стартову сторінку", () => {
      cy.get("header > nav > a").invoke("attr", "href").should("eq", "./index.html");
    });
    it("Логотип має містити текст WebStudio", () => {
      cy.get("header > nav > a").should("have.text", "WebStudio");
    });

    it("Всередині nav є меню, що зроблене через ul", () => {
      cy.get("nav > ul").should("be.visible");
    });

    it("Меню складається з 3-х пунктів", () => {
      cy.get("nav > ul").children().should("have.length", 3);
    });

    it("Перший пункт меню - це посилання що веде на адресу ./index.html", () => {
      cy.get("nav > ul > li:first-child > a").invoke("attr", "href").should("eq", "./index.html");
    });

    it("Перший пункт меню має контент - Студія", () => {
      cy.get("nav > ul > li:first-child > a").should("have.text", "Студія");
    });

    it("Другий пункт меню - це посилання що веде на адресу #", () => {
      cy.get("nav > ul > li:nth-child(2) > a").invoke("attr", "href").should("eq", "#");
    });

    it("Другий пункт меню має контент - Портфоліо", () => {
      cy.get("nav > ul > li:nth-child(2) > a").should("have.text", "Портфоліо");
    });

    it("Третій пункт меню - це посилання що веде на адресу #", () => {
      cy.get("nav > ul > li:nth-child(3) > a").invoke("attr", "href").should("eq", "#");
    });

    it("Третій пункт меню має контент - Портфоліо", () => {
      cy.get("nav > ul > li:nth-child(3) > a").should("have.text", "Контакти");
    });

    it("У хедері є список з контактами що йде після тега nav", () => {
      cy.get("nav + ul").should("be.visible");
    });

    it("Список контактів складається з двох пунктів", () => {
      cy.get("nav + ul").children().should("have.length", 2);
    });

    it("Перший пункт в контактах це посилання з атрибутом href, що містить інтструкцію mailto", () => {
      cy.get("nav + ul > li:first-child > a").invoke("attr", "href").should("eq", "mailto:info@devstudio.com");
    });

    it("Перший пункт в контактах це посилання з контентом - info@devstudio.com", () => {
      cy.get("nav + ul > li:first-child > a").should("have.text", "info@devstudio.com");
    });

    it("Другий пункт в контактах це посилання з атрибутом href, що містить інтструкцію tel", () => {
      cy.get("nav + ul > li:nth-child(2) > a").invoke("attr", "href").should("eq", "tel:+380961111111");
    });

    it("Другий пункт в контактах це посилання з контентом - +38 096 111 11 11", () => {
      cy.get("nav + ul > li:nth-child(2) > a").should("have.text", "+38 096 111 11 11");
    });
  });

  describe("Перевірка тега main", () => {
    it("Всередині тега main має бути 4 секції", () => {
      cy.get("main").children("section").should("have.length", 4);
    });
  });

  describe("Перевірка тега main - перша секція", () => {
    it("Перша секція знаходиться всередині тега main", () => {
      cy.get("main > section:first-child").should("be.visible");
    });

    it("Перша секція має заголовок h1", () => {
      cy.get("main > section:first-child > h1").should("be.visible");
    });

    it("Перша секція має заголовок h1 з контентом - Ефективні рішення для вашого бізнесу", () => {
      cy.get("main > section:first-child > h1").should("have.text", "Ефективні рішення для вашого бізнесу");
    });

    it("Перша секція має кнопку з атрибутом type='button'", () => {
      cy.get("main > section:first-child > button").invoke("attr", "type").should("eq", "button");
    });

    it("Перша секція має кнопку з контентом - Замовити послугу", () => {
      cy.get("main > section:first-child > button").should("have.text", "Замовити послугу");
    });
  });

  describe("Перевірка тега main - друга секція", () => {
    it("Друга секція знаходиться всередині тега main", () => {
      cy.get("main > section:nth-child(2)").should("be.visible");
    });

    it("В другій секції знаходиться заголовок h2 з атрибутом hidden", () => {
      cy.get("main > section:nth-child(2) > h2").invoke("attr", "hidden");
    });

    it("В другій секції знаходиться заголовок h2 з контентом - Наші переваги", () => {
      cy.get("main > section:nth-child(2) > h2").should("have.text", "Наші переваги");
    });

    it("В другій секції після заголовка йде список з 4-х пунктів", () => {
      cy.get("main > section:nth-child(2) > ul").children("li").should("have.length", 4);
    });

    it("В другій секцій перший пункт списку має мати заголовок h3 та p", () => {
      cy.get("main > section:nth-child(2) > ul > li:first-child").find("h3").should("have.text", "УВАГА ДО ДЕТАЛЕЙ");
      cy.get("main > section:nth-child(2) > ul > li:first-child")
        .find("p")
        .should("have.text", "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.");
    });

    it("В другій секцій другий пункт списку має мати заголовок h3 та p", () => {
      cy.get("main > section:nth-child(2) > ul > li:nth-child(2)").find("h3").should("have.text", "ПУНКТУАЛЬНІСТЬ");
      cy.get("main > section:nth-child(2) > ul > li:nth-child(2)")
        .find("p")
        .should("have.text", "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.");
    });

    it("В другій секцій третій пункт списку має мати заголовок h3 та p", () => {
      cy.get("main > section:nth-child(2) > ul > li:nth-child(3)").find("h3").should("have.text", "ПЛАНУВАННЯ");
      cy.get("main > section:nth-child(2) > ul > li:nth-child(3)")
        .find("p")
        .should("have.text", "Так само консультація з широким активом значною мірою зумовлює.");
    });

    it("В другій секцій останій пункт списку має мати заголовок h3 та p", () => {
      cy.get("main > section:nth-child(2) > ul > li:nth-child(4)").find("h3").should("have.text", "СУЧАСНІ ТЕХНОЛОГІЇ");
      cy.get("main > section:nth-child(2) > ul > li:nth-child(4)")
        .find("p")
        .should("have.text", "Значимість цих проблем настільки очевидна, що реалізація планових завдань.");
    });
  });

  describe("Перевірка тега main - третя секція", () => {
    it("Третя секція знаходиться всередині тега main", () => {
      cy.get("main > section:nth-child(3)").should("be.visible");
    });

    it("В третій секції знаходиться заголовок h2", () => {
      cy.get("main > section:nth-child(3) > h2").should("be.visible");
    });

    it("В третій секції знаходиться заголовок h2 з контентом - Чим ми займаємося", () => {
      cy.get("main > section:nth-child(3) > h2").should("have.text", "Чим ми займаємося");
    });

    it("В третій секції після заголовка йде список з 3-х пунктів", () => {
      cy.get("main > section:nth-child(3) > ul").children("li").should("have.length", 3);
    });

    it("В третій секцій перший пункт списку має мати картинку з атрибутами src з адресою що включає шлях - ./images, alt - з контентом, width - з контентом, height - з контентом", () => {
      cy.get("main > section:nth-child(3) > ul > li:first-child")
        .find("img")
        .invoke("attr", "src")
        .should("includes", "./images");
      cy.get("main > section:nth-child(3) > ul > li:first-child")
        .find("img")
        .invoke("attr", "alt")
        .should("not.be.eq", "");
      cy.get("main > section:nth-child(3) > ul > li:first-child")
        .find("img")
        .invoke("attr", "width")
        .should("not.be.eq", "");
      cy.get("main > section:nth-child(3) > ul > li:first-child")
        .find("img")
        .invoke("attr", "height")
        .should("not.be.eq", "");
    });

    it("В третій секцій другий пункт списку має мати картинку з атрибутами src з адресою що включає шлях - ./images, alt - з контентом, width - з контентом, height - з контентом", () => {
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
        .should("not.be.eq", "");
      cy.get("main > section:nth-child(3) > ul > li:nth-child(2)")
        .find("img")
        .invoke("attr", "height")
        .should("not.be.eq", "");
    });

    it("В третій секцій останій пункт списку має мати картинку з атрибутами src з адресою що включає шлях - ./images, alt - з контентом, width - з контентом, height - з контентом", () => {
      cy.get("main > section:nth-child(3) > ul > li:last-child")
        .find("img")
        .invoke("attr", "src")
        .should("includes", "./images");
      cy.get("main > section:nth-child(3) > ul > li:last-child")
        .find("img")
        .invoke("attr", "alt")
        .should("not.be.eq", "");
      cy.get("main > section:nth-child(3) > ul > li:last-child")
        .find("img")
        .invoke("attr", "width")
        .should("not.be.eq", "");
      cy.get("main > section:nth-child(3) > ul > li:last-child")
        .find("img")
        .invoke("attr", "height")
        .should("not.be.eq", "");
    });
  });`;
};

module.exports = { HW1Test };
