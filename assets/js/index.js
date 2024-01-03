$(".wrapper").on("animationend", function (event) {
  let wrapperElement = $(".wrapper");
  wrapperElement.remove();

  $(".animation").css("opacity", "1");
  $("title").html("Wolfdmitrich | Select Language");

  // Click on Russian
  $("#russian").click(function () {
    $("title").html("Wolfdmitrich | Русский");
    $(".switch_language")
      .parent()
      .append(`
        <div class="russian">
            <div class="header">
                <h1>Wolfdmitrich</h1>
                <p>
                    Здравствуйте, я Wolfdmitrich - я создаю сайты, приложения на Python. Я начал свой путь в качестве
                    начинающего
                    программиста на Python. Я создавал лёгкие алгоритмы, и так далее. Но мне всегда хотелось большего. Я
                    начал изучать HTML,
                    CSS и JavaScript, чтобы стать Front-End-разработчиком. Я хотел создавать красивые и интерактивные
                    веб-сайты, которыми
                    могли бы пользоваться и наслаждаться пользователи. Теперь я хочу создавать креативные и
                    функциональные сайты,
                    предназначенные для пользователей. Но я не останавливаюсь на достигнутом. Я всегда буду изучать
                    новые технологии и
                    инструменты, чтобы стать еще лучше в своей работе.
                </p>
            </div>
            <br>
            <br>
            <br>
            <div class="projects-list">
                <h1>Проекты</h1>
                <p>На данный момент проектов не существует.</p>
            </div>
            <br>
            <br>
            <br>
            <div class="footer">
                <p>© 2024, Wolfdmitrich</p>
            </div>
        </div>
    `);
    setTimeout(function () {
      $(".russian").addClass("visible");
    }, 0);
    $(".switch_language").parent().find(".switch_language").remove();
  });

  // Click on English
  $("#english").click(function () {
    $("title").html("Wolfdmitrich | English");
    $(".switch_language")
      .parent()
      .append(`
        <div class="english">
            <div class="header">
                <h1>Wolfdmitrich</h1>
                <p>
                    Hello, I am Wolfdmitrich - I build websites, applications in Python. I started my journey as an
                    aspiring Python
                    programmer. I was creating lightweight algorithms, and so on. But I always wanted more. I started
                    learning HTML, CSS,
                    and JavaScript to become a Front-End developer. I wanted to build beautiful and interactive websites
                    that users could
                    use and enjoy. Now I want to build creative and functional websites designed for users. But I don't
                    stop there. I will
                    always learn new technologies and tools to become even better at what I do.
                </p>
            </div>
            <br>
            <br>
            <br>
            <div class="projects-list">
                <h1>Projects</h1>
                <p>There are no projects at this time.</p>
            </div>
            <br>
            <br>
            <br>
            <div class="footer">
                <p>© 2024, Wolfdmitrich</p>
            </div>
        </div>
    `);
    setTimeout(function () {
      $(".english").addClass("visible");
    }, 0);
    $(".switch_language").parent().find(".switch_language").remove();
  });
});
