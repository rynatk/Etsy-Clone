import Backbone from 'backbone';
import _ from 'underscore';

const API_KEY = 'qemaedhuj8rhq1k8hs2kdapx';

export class Listing extends Backbone.Model{
	get url() {
		return `https://openapi.etsy.com/v2/listings/${this.get('listing_id')}.js?api_key=${API_KEY}&callback=?`;
	}

  get defaults() {
		return {
			'title' : '',
			'price' : '',
			'currency_code' : ''
		}
	}

	imageURL() {
		return this.attributes.Images[0]['url_570xN'];
	}

	serialize() {
		var json = this.toJSON();
    json.imageURL = this.imageURL();
		return json;
	}
};

export class ActiveListings extends Backbone.Collection{
  get url() {
    return `https://openapi.etsy.com/v2/listings/active.js?api_key=${API_KEY}&callback=?&includes=Images:1:0`;
  }

	get model() {
		return Listing;
	}

	parse(data) {
		return data.results;
	}
};
