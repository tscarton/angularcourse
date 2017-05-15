(function(){

  var app = angular.module('gemStore', []);
  app.controller('StoreController', function(){
    this.products = gems;
  })

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(selectedTab){
      this.tab = selectedTab;
    }

    this.isTab = function(currentTab) {
      return this.tab == currentTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    }
  });

  var gems = [
    {name: 'ProductA', description: 'ProductA', price: 2.95, soldOut: false, canPurchase: false, images: [], reviews: [{
      stars: 5,
      body: 'Comment 1',
      author: 'author@gmail.com'
    }]},
    {name: 'ProductB', description: 'ProductB', price: 5.00, soldOut: false, canPurchase: false, images: [
      "images/1.png" ,
      "images/2.png"
    ], reviews: [{
      stars: 2,
      body: 'Comment 2',
      author: 'author2@gmail.com'
    }]},
    {name: 'ProductC', description: 'ProductC', price: 8.25, soldOut: false, canPurchase: true, images: [
      "images/3.png"
    ], reviews: [{
      stars: 1,
      body: 'Comment 3',
      author: 'author3@gmail.com'
    }]},
  ];


})();
