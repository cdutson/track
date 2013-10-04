 if(typeof window.track === "undefined"){
     window.track = { 
        pushPageview: function pushPageview (url) { 
            if (null !== _gaq && "undefined" !== _gaq) { 
                _gaq.push(["_trackPageview", url]) 
            } 
        }, 
        pushEvent: function pushEvent (category, action, label, value) { 
            if (null !== _gaq && "undefined" !== _gaq) { 
                var toPush = [category,action];
                if(label !== "undefined" && label !== null) {
                    toPush.push(label);
                    if(value !== "undefined" && value !== null) toPush.push(value);
                }
                _gaq.push(toPush);
            } 
        } 
    };
}