/**
 * @file
 * Attaches the behaviors for the skeleton theme for mobile.
 */

(function ($, Drupal, drupalSettings) {
	Drupal.behaviors.skeleton = {
		attach: function (context, settings) {
			$("div#navigation ul.menu").mobileMenu({
				prependTo: "div#navigation",
				combine: true,
				switchWidth: drupalSettings.skeleton.switchwidth,
				topOptionText: drupalSettings.skeleton.topoptiontext
			});
		}
	};
})(jQuery, Drupal, drupalSettings);