// The following line makes sure your styles are included in the project. Don't remove this.

import "../styles/main.scss";
import "bootstrap";
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../node_modules/bootstrap/js/src/popover.js";

// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
$(function() {
  $('[data-toggle="popover"]').popover();
});
