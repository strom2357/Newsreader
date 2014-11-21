NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feeds/show'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function(){
    var content = this.template({
      model: this.model
    })
  
    this.$el.html(content);
    return this;
  }
})