$(function() {

    //http://nicinabox.com/superslides/#1
    $('#slides').superslides({
    hashchange: true
    });

    //http://instafeedjs.com/
    var userFeed = new Instafeed({
        get: 'user',
        userId: 1460878990,
        resolution: "low_resolution",
        accessToken: '1460878990.467ede5.f3f7b2d8ebae4b6b9704aeaead4acc23'
    });

    userFeed.run();

    //
    
});