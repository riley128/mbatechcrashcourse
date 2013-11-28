$('.home.index').ready(function() {
  console.log("Page-specific JavaScript on the home.index page.");
});

$('.registrations.new').ready(function() {
  console.log("Page-specific JavaScript on the registrations.new page.");
});

$('.registrations').ready(function() {
  $.externalScript('https://js.stripe.com/v1/').done(function(script, textStatus) {
    console.log('Script loading: ' + textStatus );
    if (typeof Stripe != 'undefined') {
      console.log('Okay. Stripe file loaded.');
    }
    else
    {
      console.log('Problem. Stripe file not loaded.');
    }
  });
});