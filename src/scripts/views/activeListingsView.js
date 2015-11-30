import $ from 'jquery';
import Backbone from 'backbone';
import { Listing, ActiveListings } from '../models.js';
import ListingView from './listingView.js';

class ActiveListingsView extends Backbone.View {
  render() {
    const self = this;
    this.collection.each((listing) => {
      let listingView = new ListingView({ model: listing });
      self.$el.append(listingView.render());
    });
    return this.$el;
  }
  initialize() {
    console.log('activeListingsView initialized!');
  }
}

export default ActiveListingsView;
