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

    function compareTitles(movieA, movieB) {
      const titleA = $(movieA).find('.movie-title').text().toLowerCase();
      const titleB = $(movieB).find('.movie-title').text().toLowerCase();
      console.log(titleA.localeCompare(titleB));
      return titleA.localeCompare(titleB);
    }

    function sortByTitle(movieList) {
      return movieList.sort(compareTitles);
    }

    const sortedList = sortByTitle(movieList);

    sortedList.forEach((movie) => {
      $('#movie-list').append(movie);
    });
  });
});
