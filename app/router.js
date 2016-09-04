import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reader-folders');
  this.route('account-home-loggedin');
  this.route('style-guide');
  this.route('reader-search');
});

export default Router;
