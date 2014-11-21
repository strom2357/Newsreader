NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function($main) {
    this.$main = $main;
    this.collection = new NewsReader.Collections.Feeds();
    this.collection.fetch();
  },
  
  routes: {
    "": "feeds",
    "feeds/:id": "feedShow"
  },
  
  feeds: function() {
    var view = new NewsReader.Views.FeedsIndex({
      collection: this.collection
    });
    this.$main.html(view.render().$el);
  },
  
  feedShow: function(id) {
    var m = this.collection.getOrFetch(id)
    // var m = new NewsReader.Models.Feed({id: id});
//     m.fetch();
    var view = new NewsReader.Views.FeedShow({ model: m });
    this.$main.html(view.render().$el);
  }
});