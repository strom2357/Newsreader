NewsReader.Models.Entry = Backbone.Model.extend({
  initialize: function (feed) {
    this.feed = feed;
  },

  url: function(){ this.feed.url() + '/entries'}
  

});
