    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    let btn = document.querySelector('img#myBtn');
    console.log(btn)
    
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal
    btn.addEventListener('click', () => {
        modal.style.display = "block";
    })

    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // We select the element we want to target
var target = document.querySelector("#ifooter");

var scrollToTopBtn = document.querySelector("#backToTop")
var rootElement = document.documentElement

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);