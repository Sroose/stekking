// STEKKING REGISTER REFERRAL
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url.includes("https://stekking.com/register") && details.url !== "https://stekking.com/register/rG9e8KWQlOa32jME" ) {
          var r = confirm("Is it ok to use the affiliate link of your Stekking extension developer to support the work on the extension?");
          if (r == true) {
            alert("Thank you!");
            return {redirectUrl: "https://stekking.com/register/rG9e8KWQlOa32jME" };
          } else {
            return true;
          }
        }
    },
    {urls: ["https://stekking.com/*"]},
    ["blocking"]
);
    
    
function handleUrl(url) {
  current_url = url;

  websites = [
    { "id": "D4JmknW", "domain": "365games.co.uk"},
    { "id": "G4YGyLQ", "domain": "abebooks.com"},
    { "id": "JznoOny", "domain": "alamo.nl"},
    { "id": "bnBBr1n", "domain": "offer.alibaba.com"},
    { "id": "poQ3y4X", "domain": "aliexpress.com"},
    { "id": "D4JgNwZ", "domain": "allyouplay.com"},
    { "id": "KZgjr4v", "domain": "amsterdenim.com"},
    { "id": "oQ3RAZX", "domain": "walibi.com"},
    { "id": "qZvPJVn", "domain": "arsenaldirect.arsenal.com"},
    { "id": "246e1np", "domain": "audible.fr"},
    { "id": "Ln1jv4V", "domain": "auspiteurope.com"},
    { "id": "j4bN2d4", "domain": "auto.nl"},
    { "id": "G4YG31Q", "domain": "avant-skincare.com"},
    { "id": "gnRL6ZE", "domain": "backpackflags.com"},
    { "id": "j4bN8Y4", "domain": "bajabikes.eu"},
    { "id": "5AnWAZb", "domain": "bamboobasics.com"},
    { "id": "endJ8Zb", "domain": "banggood.com"},
    { "id": "j4bNNy4", "domain": "beerwulf.com"},
    { "id": "lvnwL4J", "domain": "berrylook.com"},
    { "id": "2nGAJ5Z", "domain": "bimuno.com"},
    { "id": "RQNOkmn", "domain": "blockchainstuff.nl"},
    { "id": "JQzLqN4", "domain": "bluebella.it"},
    { "id": "N8nrg4j", "domain": "bodyandfit.com"},
    { "id": "Vn2k214", "domain": "bombaysunset.com"},
    { "id": "qZvmE4A", "domain": "bonanza.com"},
    { "id": "r4m817n", "domain": "bonodora.com"},
    { "id": "znoVOWQ", "domain": "booking.com"},
    { "id": "WZjKmQx", "domain": "bookingmonkey.com"},
    { "id": "y4VlWQ7", "domain": "botteroski.com"},
    { "id": "G4YGYjQ", "domain": "britishcornershop.co.uk"},
    { "id": "KQyj7gn", "domain": "brooksrunning.com"},
    { "id": "8Zl5MQq", "domain": "brouwland.com"},
    { "id": "KZgqV9n", "domain": "brunotti.com"},
    { "id": "bZKwPZW", "domain": "bullguard.com"},
    { "id": "50nxRZB", "domain": "bungalow.net"},
    { "id": "246m9np", "domain": "buylopez.com"},
    { "id": "N4Pm1Z0", "domain": "canadianclassics.it"},
    { "id": "MZ7ba4y", "domain": "casualplay.com"},
    { "id": "jZqOErn", "domain": "cavaier.com"},
    { "id": "x4O8YZJ", "domain": "cbdarmour.co.uk"},
    { "id": "y4VBo34", "domain": "cbddirect2u.co.uk"},
    { "id": "oQ306Wn", "domain": "ctshirts.com"},
    { "id": "KQyjjRn", "domain": "chemistdirect.co.uk"},
    { "id": "246DKaQ", "domain": "christmassweats.com"},
    { "id": "kZ5G1Jn", "domain": "chromeburner.com"},
    { "id": "MZ73DZy", "domain": "colorsofcalifornia.it"},
    { "id": "7M4084q", "domain": "colourfulrebel.com"},
    { "id": "q4ErpZ0", "domain": "coralblue.it"},
    { "id": "v4LGlnr", "domain": "crazy-factory.com"},
    { "id": "2nGwxnv", "domain": "cross.com"},
    { "id": "8nrrOrn", "domain": "dx.com"},
    { "id": "oO4aNZm", "domain": "dennisdeal.com"},
    { "id": "PJQzwnr", "domain": "clkuk.tradedoubler.com"},
    { "id": "2Qek949", "domain": "es.dhgate.com"},
    { "id": "KZgM1nv", "domain": "discount-supplements.co.uk"},
    { "id": "r4m7zQp", "domain": "disfrazzes.com"},
    { "id": "2nGAPNZ", "domain": "drmartens.com"},
    { "id": "D4JgMEZ", "domain": "drogisterijplus.nl"},
    { "id": "G4YGGjQ", "domain": "ukecigstore.com"},
    { "id": "M40WXnq", "domain": "eksypno.com"},
    { "id": "v4LrlQr", "domain": "etihad.com"},
    { "id": "y4VEMn7", "domain": "eurail.com"},
    { "id": "jZqOB2n", "domain": "everybodycare.com"},
    { "id": "r4m88zn", "domain": "exantediet.com"},
    { "id": "zQ90MpZ", "domain": "expert.nl"},
    { "id": "RQNXe4w", "domain": "fitnest.eu"},
    { "id": "Vn2pJZ3", "domain": "block.fiverr.com"},
    { "id": "MZ7gLZy", "domain": "frmoda.com"},
    { "id": "q4EMbb4", "domain": "fuerdenruecken.de"},
    { "id": "gnROk4E", "domain": "gearbest.com"},
    { "id": "Vn2v1n3", "domain": "geekbuying.com"},
    { "id": "y4Vp3Q7", "domain": "gigas.com"},
    { "id": "WZjG5Qx", "domain": "gisela.com"},
    { "id": "KZgqO5n", "domain": "giuseppezanotti.com"},
    { "id": "gnROgK4", "domain": "golfino.com"},
    { "id": "D4JyrnW", "domain": "goos-e.com"},
    { "id": "y4VBaE4", "domain": "goosevpn.com"},
    { "id": "AnWMMoZ", "domain": "greenbaysupermarket.co.uk"},
    { "id": "AnWMBoZ", "domain": "h-hotels.com"},
    { "id": "MZ7z7a4", "domain": "helloprint.com"},
    { "id": "x4ONjnJ", "domain": "hema.com"},
    { "id": "KZgddQv", "domain": "holidaysuites.be"},
    { "id": "Vn2kG43", "domain": "hollandpass.com"},
    { "id": "q4ELLn0", "domain": "homey.app"},
    { "id": "q4Eddn0", "domain": "hostelscentral.com"},
    { "id": "pnX1GM4", "domain": "store.hp.com"},
    { "id": "Ln1omAZ", "domain": "hunterboots.com"},
    { "id": "x4OdNZJ", "domain": "ilcaffeitaliano.com"},
    { "id": "m4Mx3np", "domain": "intergard.eu"},
    { "id": "KZg11nv", "domain": "interrail.eu"},
    { "id": "aZpLjZe", "domain": "into-led.com"},
    { "id": "WZjzbZx", "domain": "ivacy.com"},
    { "id": "2nGAA5Z", "domain": "iwantoneofthose.com"},
    { "id": "bnBBD1n", "domain": "eu.katespade.com"},
    { "id": "endNegZ", "domain": "kingsofindigo.com"},
    { "id": "2Qez9Wn", "domain": "konsensus.network"},
    { "id": "KQDrN4G", "domain": "laborsetteria.com"},
    { "id": "znoKDny", "domain": "lamuscle.com"},
    { "id": "aZpoa64", "domain": "laulas.com"},
    { "id": "rnAdWQx", "domain": "lenovo.com"},
    { "id": "MZ7zAW4", "domain": "lesmauxdedos.com"},
    { "id": "r4mplnp", "domain": "lightshopping.com"},
    { "id": "MZ75any", "domain": "livexmaintain.com"},
    { "id": "0nxLkMn", "domain": "loqed.com"},
    { "id": "8nrrPAn", "domain": "luksusbaby.com"},
    { "id": "KZgLwQv", "domain": "macron.com"},
    { "id": "aZpog4e", "domain": "magix.com"},
    { "id": "JQzL7k4", "domain": "maikaicopenhagen.com"},
    { "id": "zQ99MQj", "domain": "martinshotels.com"},
    { "id": "znovoQy", "domain": "maszapatillas.com"},
    { "id": "qZv5b4A", "domain": "medion.com"},
    { "id": "MZ7zrb4", "domain": "momox.de"},
    { "id": "oQ3PdnX", "domain": "mondraghi.com"},
    { "id": "2nG9xZv", "domain": "mms.com"},
    { "id": "rnANpb4", "domain": "myvegan.com"},
    { "id": "oQ3DAnX", "domain": "myvitamins.com"},
    { "id": "x4OEkQJ", "domain": "nalho.eu"},
    { "id": "jZqONrn", "domain": "nanoshi.com"},
    { "id": "j4b3yZd", "domain": "newchic.com"},
    { "id": "bnBBB5n", "domain": "nike.com"},
    { "id": "9Z80pdZ", "domain": "nike.com"},
    { "id": "MZ7zGW4", "domain": "nordvpn.com"},
    { "id": "D4JgPOZ", "domain": "nupo.com"},
    { "id": "oQ30G9n", "domain": "onepiece.com"},
    { "id": "oQ30oWn", "domain": "panzerglass.com"},
    { "id": "2QezpJn", "domain": "panzerglass.co.uk"},
    { "id": "zZkxPQO", "domain": "paragonshop.it"},
    { "id": "bZK52nW", "domain": "paulobellini.com"},
    { "id": "x4OB3kn", "domain": "perfumetrader.de"},
    { "id": "O4ap9nm", "domain": "plushostels.com"},
    { "id": "Vn2kDd4", "domain": "podspeakers.com"},
    { "id": "q4EMYR4", "domain": "poederbaas.com"},
    { "id": "KZgr94v", "domain": "q1905.com"},
    { "id": "Ln1Nw4V", "domain": "qatarairways.com"},
    { "id": "m4M67Zp", "domain": "qeeq.com"},
    { "id": "pnXaw4V", "domain": "radissonhotels.com"},
    { "id": "bZKNP4W", "domain": "rawdenim.co.uk"},
    { "id": "aZpomo4", "domain": "redrickshaw.com"},
    { "id": "9Z86Nnr", "domain": "reolink.com"},
    { "id": "M40AdZq", "domain": "retto.com"},
    { "id": "KQD2Y4G", "domain": "richmeetbeautiful.com"},
    { "id": "AnWM63Z", "domain": "rusvpn.com"},
    { "id": "v4LbBQr", "domain": "sabinastore.com"},
    { "id": "KQDddMQ", "domain": "sabinastore.com"},
    { "id": "KQyjPRn", "domain": "shavesavings.com"},
    { "id": "gnRMNQE", "domain": "shop-apotheke.com"},
    { "id": "KQDj14G", "domain": "shuzulab.com"},
    { "id": "r4m8y7n", "domain": "spotahome.com"},
    { "id": "jZqOb2n", "domain": "spotahome.com"},
    { "id": "bZKOx2Z", "domain": "startselect.com"},
    { "id": "D4Jgg2Z", "domain": "stiegl-shop.at"},
    { "id": "G4Y1o4r", "domain": "studentuniverse.co.uk"},
    { "id": "v4LoPxn", "domain": "superdry.de"},
    { "id": "kZ5ypZP", "domain": "surania.com"},
    { "id": "Ln1oo8Z", "domain": "sweet-cures.com"},
    { "id": "KZgqzOn", "domain": "swisseme.com"},
    { "id": "kZ5Gw0n", "domain": "tails.com"},
    { "id": "N4P5eZ0", "domain": "terravision.eu"},
    { "id": "kZ5zpQP", "domain": "thebodyshop.com"},
    { "id": "8ZlaP6Q", "domain": "bookdepository.com"},
    { "id": "pnXNoZV", "domain": "thehut.com"},
    { "id": "MZ7zdD4", "domain": "de.theproteinworks.com"},
    { "id": "pnXOoQV", "domain": "smws.com"},
    { "id": "RQNOMYn", "domain": "thespark.company"},
    { "id": "Ln1LwQV", "domain": "thewhiskybarrel.co.uk"},
    { "id": "oQ300Pn", "domain": "thewhiskyexchange.com"},
    { "id": "8nrr0ln", "domain": "thedrinkshop.com"},
    { "id": "MZ7XgQy", "domain": "tifoshop.com"},
    { "id": "znoVrwQ", "domain": "timberland.co.uk"},
    { "id": "KZgqqOn", "domain": "tiqets.com"},
    { "id": "2461rnp", "domain": "tomtop.com"},
    { "id": "M406EQq", "domain": "tonki.com"},
    { "id": "rnAm5nx", "domain": "tropilex.com"},
    { "id": "JQzLvj4", "domain": "trufflehunter.co.uk"},
    { "id": "O4a6LZm", "domain": "tuscanyleather.it"},
    { "id": "2QeyPQ9", "domain": "tyreo.com"},
    { "id": "0nxDOnB", "domain": "victoriamilan.be"},
    { "id": "endP7nb", "domain": "vintagewineandport.co.uk"},
    { "id": "M40j5yQ", "domain": "vitamineman.nl"},
    { "id": "q4E8Rn0", "domain": "vueling.com"},
    { "id": "jZqmPZR", "domain": "walibi.com"},
    { "id": "KZgp1Qv", "domain": "walkingdinner.com"},
    { "id": "zQ97W4j", "domain": "woodwatch.com"},
    { "id": "bZK3PZW", "domain": "worldofscentchips.com"},
    { "id": "qZvREZA", "domain": "worldwidecampers.com"},
    { "id": "8ZldaZq", "domain": "eu.yoins.com"},
    { "id": "q4EMGv4", "domain": "yumeko.de"},
    { "id": "WZjDLnx", "domain": "yummygums.com"},
    { "id": "2nGA6JZ", "domain": "fr.zaful.com"},
    { "id": "endNKvZ", "domain": "zavvi.com"},
    { "id": "end0bnb", "domain": "zuca-europe.com"}
  ];

  var website = websites.filter(site => {
    return url.includes('.' + site.domain) || url.includes( '//' + site.domain)
  });
  if(website[0] !== undefined) {
    chrome.browserAction.setIcon({path:"iconGreen.png"});
    is_stekking_parter = true;
    partner_id = website[0].id;
    // possible improvement: if a website has multiple locations and separate stekking affiliate links, show both
  } else {
    chrome.browserAction.setIcon({path:"icon.png"});
    is_stekking_parter = false;
  }
  
}
    
// DETECTION
var is_stekking_parter = false;
var partner_id;
var current_url;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  handleUrl(tab.url);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab){
     handleUrl(tab.url);
  });
}); 

