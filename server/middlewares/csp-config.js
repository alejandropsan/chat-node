'use strict'

const cspConfig = {
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://www.google-analytics.com", "https://code.jquery.com", "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", "https://www.google-analytics.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"]
      }
    };

module.exports = cspConfig