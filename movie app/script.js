$('document').ready(() => {
  $('#movie-form').on('submit', (e) => {
    console.log('Form submitted');
    e.preventDefault();
    const movieTitle = $('#title').val();
    const movieRating = $('#rating').val();
    $('#movie-list').append(`<li>${movieTitle} | ${movieRating}</li>`);
  });
});
