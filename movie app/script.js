$('document').ready(() => {
  $('#movie-form').on('submit', (e) => {
    e.preventDefault();
    const movieTitle = $('#title').val();
    const movieRating = $('#rating').val();
    $('#movie-list').append(
      `<li><span class="movie-title">${movieTitle}</span>: ${movieRating}</li>`
    );
  });

  $('#sort-btn').on('click', () => {
    const movieList = $('#movie-list').children().toArray();

    const sortedList = movieList.sort((a, b) => {
      const titleA = $(a).find('.movie-title').text().toLowerCase();
      const titleB = $(b).find('.movie-title').text().toLowerCase();
      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    });

    // Append the sorted list back to the movie list
    sortedList.forEach((movie) => {
      $('#movie-list').append(movie);
    });
  });
});
