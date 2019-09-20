var contentArray = [
  {"creatorName":"Ced", "imageUrl":"./Images/chalkboard.jpg", "contentText":"Ideas float all around, get ready to catch some", "upvotes":0, "downvotes":0, "comments":0, "shares":0},
  {"creatorName":"Ced", "imageUrl":"./Images/chalkboard.jpg", "contentText":"Ideas float all around get ready to catch some", "upvotes":0, "downvotes":0, "comments":0, "shares":0},
  {"creatorName":"Ced", "imageUrl":"./Images/chalkboard.jpg", "contentText":"Ideas float all around get ready to catch some", "upvotes":0, "downvotes":0, "comments":0, "shares":0}
];

function renderContent () {
  var template = $('#template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, {contentArray});
  $('#content-box').html(rendered);
}

$('.btn').click(function(dropDown1) {
  dropDown1.preventDefault();
  dropDown1();
});

function dropDown1 () {
  document.getElementById("drop-menu1").classList.toggle("show");
}

function dropDown2 (event) {
  document.getElementById("drop-menu2").classList.toggle("show");
}

window.addEventListener('load', async () => {
  renderContent ();
});

/*window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
      var dropdowns = document.getElementByClassName("dropmenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/
