import $ from 'jquery';
import Backbone from 'backbone';

import { Listing, ActiveListings } from './models.js';

import ActiveListingsView from './views/activeListingsView.js';
import ListingDetailsView from './views/listingDetailsView.js';

class Router extends Backbone.Router {
	get routes() {
		return {
			'' : 'showActive',
			'details/:id' : 'showDetails'
		};
	}

	initialize() {
    Backbone.history.start();
	}

	showActive() {
    this.activeListings = new ActiveListings();

		const activeListingsView = new ActiveListingsView({
			collection: this.activeListings
		});

		this.activeListings.fetch({
			success: function() {
				console.log('things are good!');
				$('#product').html(activeListingsView.render());
			},
			error: function() {
				console.log('things are bad!');
			},
			complete: function(xhr, textStatus) {
        console.log(textStatus);
      }
		});
	}

	showDetails(listingId) {

	}
};

export default Router;
