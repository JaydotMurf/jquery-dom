// ! console.log the message when DOM ready
$(document).ready(() => {
  const redValue = $('#red').val();
  const blueValue = $('#blue').val();
  const greenValue = $('#green').val();

  console.log(`Let’s get ready to party with jQuery!`);
  // ! 2. add class to all imgs inside article
  $('article img').addClass('image-center');

  const lastParagraph = $('p').eq(-1);
  // ! 3. remove the last paragraph
  lastParagraph.remove();

  // ! 4. random font size of title
  const fontSize = Math.floor(Math.random() * 101);
  $('h1').css('font-size', fontSize);

  // ! 5. add item to list
  $('ol').append('<li>Get better today!</li>');

  // ! 6. remove entire aside
  $('#sideList').find('*').detach();
  $('#sideList').append('<p>Sorry! The list has been removed.</p>');

  // ! 7. change background-color via input value
  $('#red, #blue, #green').on('input', () => {
    $('body').css(
      'background-color',
      `rgb(${redValue}, ${greenValue}, ${blueValue})`
    );
  });

  // ! 8. remove img with a click
  $('article img').on('click', () => {
    $('article img').remove();
  });
});
