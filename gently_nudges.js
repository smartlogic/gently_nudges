
var GentlyNudges = {
  getMessage: function() {
    return "It looks like you're using Internet Explorer 6.  We suggest that you <a href='http://www.microsoft.com/ie8'>upgrade to Internet Explorer 8</a>.  <span style='margin-left: 12px;'><a href='javascript:void(0)' onclick='alert(\"Make an AJAX call\");'>I'm not using Internet Explorer 6</a></span> <span style='margin-left: 12px;'><a href='javascript:void(0)' onclick='alert(\"Open Window Explaining Why They Should Upgrade\");'>Why Should I Upgrade?</a></span> <span style='margin-left: 12px;'><a href='javascript:void(0)' onclick='alert(\"Dismiss This Alert and Store It in a Cookie\");'>I Don't Care</a></span>";
  }
};

var html = '<div style="border: 1px solid orange; padding: 4px; position: absolute; display: inline; background-color: #FFF1A8; line-height: 16px; height: 16px; font-family: Helvetica; font-size: 12px;">' + GentlyNudges.getMessage() + '</div>';

document.body.innerHTML += html;