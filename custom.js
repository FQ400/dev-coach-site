function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction(event)
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}

ready(_ => {
  const navButton = document.querySelector('button.navbar-toggle');

  navButton.addEventListener('click', function(evt) {
    const target = evt.target.dataset.target;

    document.querySelector(target).classList.toggle('in');
  });
});


