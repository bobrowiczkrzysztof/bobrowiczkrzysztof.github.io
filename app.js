const elements = $('.text').toArray()
$(window).scroll(function () {
  elements.forEach(function (item) {
    if ($(this).scrollTop() >= $(item).offset().top - 800) {
      $(item).addClass('reveal')
    }
  })
})

elements.forEach(function (item) {
  if ($(this).scrollTop() >= $(item).offset().top - 800) {
    $(item).addClass('reveal')
  }
})
