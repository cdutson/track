# track.js

Convenience wrapper for Google analytics for the most common stuff I use it for (pushing pageviews and custom events).
***

## Requirements

Google Analytics, obviously. I mean it won't break if the _gaq object can't be found, but it won't do anything either.

## Examples

### Pushing a page view
These all show up in your traffic section in GA.

#### Traditional:
```
var targetUrl = "/mysite/somepage.html";

track.pushPageview(targetUrl);
```

#### Remember that pageviews don't have to be pages, they could be files or whatever:
```
var targetUrl = "/mysite/simeFile.pdf";

track.pushPageview(targetUrl);
```

### Pushing a custom event
Custom events are pretty swell when you need to track specific things like UX interactions or store specific information
that can't be stored by simple pageviews.

#### Tracking a tab
```
// jQuery because lazy
$('.tabs').on('click', 'a', function(){
  var $this = $(this);
  track.pushEvent('tabs', 'click', $this.text().trim());
});
```

#### Event with a specific value
Sometimes you want to store a numeric value for your events. You can do that, though it is limited to numbers only.

```
// jQuery because lazy
$('#stopButton').on('click', function(){
  var video = document.getElementById('theVideo');
  var curTime = video.currentTime
  
  track.pushEvent('video', 'stop', 'video name or something', curTime);
});
