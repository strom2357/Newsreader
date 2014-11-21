NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: '/api/feeds',
  
  entries: function(){
    this._entries || (this._entries = new NewsReader.Collections.Entries(this))
    return this._entries
  },
  
  parse: function(resp){
    if (resp['latest_entries']) {
      this.entries().set(resp['latest_entries'], { parse: true })
      delete resp['latest_entries']
    }
    
    return resp;
  }
});
