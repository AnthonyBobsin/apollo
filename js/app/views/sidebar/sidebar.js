
define(['KeyspacesView'], function(KeyspacesView) {

  var SidebarView = Backbone.Marionette.CompositeView.extend({
    initialize: function(options) {
      this.options = options
      this.model = new Backbone.Model()
      // Collection of databases
      this.collection = new Backbone.Collection()
    },

    template: Handlebars.templates['sidebar/sidebar_layout'],

    itemView: KeyspacesView,

    events: {

    },

    bindings: {

    },

    onDestroy: function() {

    },

    render: function() {
      this.unstickit()
      Backbone.Marionette.CompositeView.prototype.render.call(this)
      this.stickit()
    }
  })

  return SidebarView
})