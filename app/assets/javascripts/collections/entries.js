NewsReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function (feed) {
    this.feed = feed;
  },
  url: function(){return this.feed.url() + '/entries'},
  model: NewsReader.Models.Entry


});
