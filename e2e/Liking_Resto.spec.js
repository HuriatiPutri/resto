Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite resto', ({ I }) => {
  I.see('Belum ada resto yang disukai', '.resto-empty');
  I.amOnPage('/');
});

Scenario('like resto and dislike', ({ I }) => {
  I.see('Belum ada resto yang disukai', '.resto-empty');
  I.amOnPage('/');

  // pause();
  I.see('Loading...', 'div');

  I.click(locate('h2 a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.item-row');

  I.seeElement('h2 a');
  I.click(locate('h2 a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Belum ada resto yang disukai', '.resto-empty');

});
