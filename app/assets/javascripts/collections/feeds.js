NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: '/api/feeds',
  model: NewsReader.Models.Feed,
  
  getOrFetch: function(id) {
    var feed = this.get(id);
    var that = this;
    if (!feed) {
      model = new NewsReader.Models.Feed({id: id});
      model.fetch({
        success: function() { that.add(feed)}
      })
    }
    
    return model;
    
    // var m = new NewsReader.Models.Feed({id: id});
//     m.fetch();
  }


});
