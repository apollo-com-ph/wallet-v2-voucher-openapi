window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      // { url: 'yaml/wallet-v2-voucher.yaml', name: 'wallet-v2-voucher-be' },
      { url: 'yaml/wallet-v2-be.yaml', name: 'wallet-v2-be' },
      { url: 'yaml/wallet-v2-voucher-be.yaml', name: 'wallet-v2-voucher-be' }

    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
