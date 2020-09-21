document.addEventListener('DOMContentLoaded', function() {
  
  var bg = chrome.extension.getBackgroundPage();
  var is_partner = bg.is_stekking_parter;
  var partner_id = bg.partner_id;
  var current_url = bg.current_url;

  // current tab url for reporting function
  // Note: user will be able to edit in github issue if this would be revealing private info
  current_domain = current_url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
  
  if(is_partner) {
    if(partner_id === 'country_specific') {
      document.getElementById('isPartner').innerHTML  = "This site gives satsback! <br>This site has country specific links.<br><span style='font-size: 1.4em;'><a href='https://stekking.com/shops' target='_blank'>Open the Stekking website</a> and search the site for your country!</span>";
    } else {
      document.getElementById('isPartner').innerHTML  = "This site gives satsback! <br><span style='font-size: 1.4em;'><a href='https://stekking.com/satsback/" + partner_id + "' target='_blank'>Open via Stekking website</a></span>";
    }
    document.getElementById('wrongQuestion').innerHTML  = "Is this site incorrectly flagged as stekking partner? Let us know!";
    document.getElementById('report').innerHTML  = "Report site as false positive";
    document.getElementById('report').href = "https://github.com/sroose/stekking/issues/new?labels[]=report&labels[]=[Type]%20Bug&title=" + encodeURI(current_domain) + "&body=The%20site%20" + encodeURI(current_url) + "%20is%20not%20a%20valid%20Stekking%20site.";
  } else {
    document.getElementById('isPartner').innerHTML = '';
    document.getElementById('wrongQuestion').innerHTML  = "Should this site be flagged as stekking partner? Let us know!";
    document.getElementById('report').innerHTML  = "Report site as stekking partner";
    document.getElementById('report').href = "https://github.com/sroose/stekking/issues/new?labels[]=report&labels[]=[Type]%20Bug&title=" + encodeURI(current_domain) + "&body=The%20site%20" + encodeURI(current_url) + "%20should%20be%20listed%20as%20a%20Stekking%20site.";

  }

  
}, false);

