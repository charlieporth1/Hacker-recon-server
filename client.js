$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
    console.log(JSON.stringify(data, null, 2));

    var ua = navigator.userAgent.toLocaleLowerCase();
    var pf = navigator.platform.toLocaleLowerCase();
    (async () => {
        const rawResponse = await fetch('https://bravo25.appspot.com/geo_ip_rec', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data + ua + pf, null, 2)
            // body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();

        console.log(content);
    })();
});