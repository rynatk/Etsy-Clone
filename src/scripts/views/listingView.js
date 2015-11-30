import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Listing from '../models.js';

class ListingView extends Backbone.View {
	get template() {
    return _.template($("#listingTemplate").text());
  }

  render() {
    this.$el.html(this.template(this.model.serialize()));
    return this.$el;
  }
};

export default ListingView;
