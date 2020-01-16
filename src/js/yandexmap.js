var YaMapsShow = false;
$(document).ready(function() {
  $(window).scroll(function() {
    if (!YaMapsShow) {
      if($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
        showYaMaps();
        YaMapsShow = true;
      }
    }
  });

  function showYaMaps() {
    var script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A01d9e136d8b68590e866f84553ec42adb2284a2fb6288ecb2838c0f5eec37c6b&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false";
    document.getElementById("map").appendChild(script);
  }
});