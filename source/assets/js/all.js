console.log('Hi Console');

$(() => {
  $('.btn').on('click', () => {
    $('.link').toggle('show');
  })
});