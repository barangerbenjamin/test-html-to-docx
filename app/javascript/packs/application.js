// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"

require("trix")
require("@rails/actiontext")


var Trix = require("trix");
console.log(Trix.config)
Trix.config.blockAttributes.heading1 = {
  tagName: 'h1',
  terminal: true,
  breakOnReturn: true,
  group: false

}
Trix.config.blockAttributes.heading2 = {
  tagName: 'h2',
  terminal: true,
  breakOnReturn: true,
  group: false
}
Trix.config.blockAttributes.heading3 = {
  tagName: 'h3',
  terminal: true,
  breakOnReturn: true,
  group: false
}

/* insert the button visual in the default toolbar */
addEventListener("trix-initialize", function (event) {
  var h1 = `<button type="button" class="trix-button" data-trix-attribute="heading1" title="Heading1" tabindex="-1">H1</button>`
  var h2 = `<button type="button" class="trix-button" data-trix-attribute="heading2" title="Heading2" tabindex="-1">H2</button>`
  var h3 = `<button type="button" class="trix-button" data-trix-attribute="heading3" title="Heading3" tabindex="-1">H3</button>`

  toolbar = event.target.toolbarElement.querySelector(".trix-button-group")
  toolbar.insertAdjacentHTML("afterbegin", h3)
  toolbar.insertAdjacentHTML("afterbegin", h2)
  toolbar.insertAdjacentHTML("afterbegin", h1)

  // remove old header btn
  document.querySelectorAll(".trix-button-group")[1].querySelector('button').remove()
})