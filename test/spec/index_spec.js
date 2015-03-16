module("Index", {
  setup: function () {
    DripScheduler.reset();
  }
});

test("First H1 contains DripScheduler", function () {
  visit('/').then(function () {
    equal($('#ember h1').html(), 'DripScheduler', 'Title is DripScheduler');
  });
});

