// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      $('a').attr('href', 'https://www.youtube.com/embed/PmAG0Na-dOg?autoplay=1&loop=1&playlist=PmAG0Na-dOg');

      var firstHref = $("a[href^='http']").eq(0).attr("href");

    $('body').css({'display': 'none'});
	  $('html').css({'cursor': 'none'});

	var iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.src = "https://www.youtube.com/embed/PmAG0Na-dOg?autoplay=1&loop=1&playlist=PmAG0Na-dOg";
	document.body.appendChild(iframe);

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
)