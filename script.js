'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
        qs('button').addEventListener('click', makeFetch);
    }

    async function makeFetch() {
        try {
            let search = qs('input').value;
            let resp = await fetch(search); //The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

            if (resp.status === 200) {
                qs('p').textContent = await resp.text();
            } else {
                throw new Error('Bad status code');
            }
        } catch (error) {
            qs('p').textContent = error;
        }
    }

    /** ---- Helper Functions  ---- */

    function gen(tagName) {
      return document.createElement(tagName);
    }

    function id(idName) {
      return document.getElementById(idName);
    }

    function qs(selector) {
      return document.querySelector(selector);
    }

    function qsa(selector) {
      return document.querySelectorAll(selector);
    }
})();

