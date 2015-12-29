if (Posts.find().count() === 0) {

  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });

  Posts.insert(  {
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert(  {
    title: 'Angular',
    url: 'http://angularjs.com'
  });

}

if (Posts.find().count() === 4) {

let data = [{
    "title": "Par Pharmaceutical Inc.",
    "url": "xing.com"
  }, {
    "title": "Bath & Body Works, Inc.",
    "url": "pinterest.com"
  }, {
    "title": "Nelco Laboratories, Inc.",
    "url": "cnbc.com"
  }, {
    "title": "Auto-Chlor System, LLC",
    "url": "cam.ac.uk"
  }, {
    "title": "Med-Health Pharma, LLC",
    "url": "canalblog.com"
  }, {
    "title": "Medical Chemical Corporation",
    "url": "cbc.ca"
  }, {
    "title": "Amway Corp.",
    "url": "skype.com"
  }, {
    "title": "Shopko Stores Operating Co., LLC",
    "url": "flickr.com"
  }, {
    "title": "BioActive Nutritional, Inc.",
    "url": "ox.ac.uk"
  }, {
    "title": "Kmart Corporation",
    "url": "pbs.org"
  }, {
    "title": "Cardinal Health 418, Inc",
    "url": "ftc.gov"
  }, {
    "title": "Par Pharmaceutical, Inc.",
    "url": "weather.com"
  }, {
    "title": "CVS Pharmacy",
    "url": "php.net"
  }, {
    "title": "Mckesson (Sunmark)",
    "url": "forbes.com"
  }, {
    "title": "Laura Geller Beauty, LLC",
    "url": "hc360.com"
  }, {
    "title": "Kramer Novis",
    "url": "theatlantic.com"
  }, {
    "title": "Wockhardt Limited",
    "url": "mysql.com"
  }, {
    "title": "Safe Anabolic Sciences",
    "url": "nhs.uk"
  }, {
    "title": "Aurobindo Pharma Limited",
    "url": "a8.net"
  }, {
    "title": "SJ Creations, Inc.",
    "url": "ihg.com"
  }, {
    "title": "Celgene Corporation",
    "url": "usa.gov"
  }, {
    "title": "UCB, Inc.",
    "url": "npr.org"
  }, {
    "title": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
    "url": "hud.gov"
  }, {
    "title": "Vitality Works, Inc,",
    "url": "uol.com.br"
  }, {
    "title": "Target Brands",
    "url": "ning.com"
  }, {
    "title": "McKesson Packaging Services Business Unit of McKesson Corporation",
    "url": "mac.com"
  }, {
    "title": "PD-Rx Pharmaceuticals, Inc.",
    "url": "spiegel.de"
  }, {
    "title": "Native Remedies, LLC",
    "url": "tinyurl.com"
  }, {
    "title": "REMEDYREPACK INC.",
    "url": "npr.org"
  }, {
    "title": "Lifetech Resources, LLC",
    "url": "bloglovin.com"
  }, {
    "title": "A-S Medication Solutions LLC",
    "url": "sphinn.com"
  }, {
    "title": "Mylan Pharmaceuticals Inc.",
    "url": "google.co.jp"
  }, {
    "title": "Sun Pharmaceutical Industries Limited",
    "url": "mozilla.org"
  }, {
    "title": "MAKEUP ART COSMETICS",
    "url": "nymag.com"
  }, {
    "title": "Aidarex Pharmaceuticals LLC",
    "url": "oracle.com"
  }, {
    "title": "Physicians Total Care, Inc.",
    "url": "ezinearticles.com"
  }, {
    "title": "Contract Pharmacy Services-PA",
    "url": "wikia.com"
  }, {
    "title": "Good Sense (Geiss, Destin & Dunn, Inc.)",
    "url": "state.gov"
  }, {
    "title": "Allermed Laboratories, Inc.",
    "url": "symantec.com"
  }, {
    "title": "McKesson Contract Packaging",
    "url": "biglobe.ne.jp"
  }, {
    "title": "ShopKo Stores Operating Co., LLC",
    "url": "godaddy.com"
  }, {
    "title": "Apotheca Company",
    "url": "ft.com"
  }, {
    "title": "Avion Pharmaceuticals, LLC",
    "url": "vimeo.com"
  }, {
    "title": "Proficient Rx LP",
    "url": "altervista.org"
  }, {
    "title": "The Mentholatum Company",
    "url": "webs.com"
  }, {
    "title": "TYA Pharmaceuticals",
    "url": "narod.ru"
  }, {
    "title": "KAISER FOUNDATION HOSPITALS",
    "url": "meetup.com"
  }, {
    "title": "Teva Parenteral Medicines, Inc.",
    "url": "linkedin.com"
  }, {
    "title": "Cardinal Health",
    "url": "nasa.gov"
  }, {
    "title": "GERITREX CORP",
    "url": "opera.com"
  }];

  console.log(data);

  for (let i = 0; i < data.length; i++){
    let f = data[i];
    console.log("title: "+f.title);
    console.log("url: "+f.url);

    Posts.insert({
      title: f.title,
      url: f.url
    });

    console.log("Done");
  }


}
