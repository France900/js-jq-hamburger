// mostrare / nascondere il menu principale

// selettoreper il click
var openMenu =  $(".fa-bars")
var closeMenu = $(".fa-times")
// selettore della cosa che compare
var theShow = $(".hamburger-menu")


openMenu.click(function () {
  // theShow.show()
  theShow.addClass("active");
 })

closeMenu.click(function () {
  // theShow.hide()
  theShow.removeClass("active");
})
