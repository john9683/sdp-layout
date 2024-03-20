(() => {
    var any = document.getelementsbyclassname("ymaps-2-1-79-searchbox-input__input")
    any.setAttribute("placeholder", "Поиск магазина")
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map-1", {
        center: [55.7599, 37.6231],
        zoom: 14,

        controls: []
    });

    myMap.behaviors.disable('scrollZoom')

    myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
            bottom: '370px',
            right: '15px'
        }
    });

    myMap.controls.add('geolocationControl', {
        size: 'small',
        float: 'none',
        position: {
            bottom: '320px',
            right: '15px'
        }
    });

    myCollection = new ymaps.GeoObjectCollection(),
        myPoints = [
            { coords: [55.750819, 37.642411], text: 'SitDownPls на Солянке' },
            { coords: [55.762054, 37.653963], text: 'SitDownPls на Покровке' },
            { coords: [55.752414, 37.599597], text: 'SitDownPls на Новом Арбате' },
            { coords: [55.763321, 37.593983], text: 'SitDownPls на Малой Бронной' },
            { coords: [55.767423, 37.601178], text: 'SitDownPls на Тверской' }
        ];

    for (var i = 0, l = myPoints.length; i < l; i++) {
        var point = myPoints[i];
        myCollection.add(new ymaps.Placemark(
            point.coords, {
                balloonContentHeader: point.text,
                balloonContentBody: '<div class="map__balloon-adress">м. Китай-город, ул. Солянка, д.24</div>' +
                    '<div class="map__balloon-tel flex"><svg class="header__svg-call" width="16.5" height="16.5" viewbox="0 0 16.5 16.5"><use xlink:href="images/sprite.svg#call-us"></use></svg><a class="header__tel" href="tel:+74958854547">+7 (495) 885-45-47</a></div>' +
                    '<div class="map__balloon-work"><span>Часы работы:</span>&nbsp;с 10:00 до 21:00</div>' +
                    '<div class="map__balloon-descr"><span>Что здесь:</span>&nbsp;шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'map-point.svg'
            }
        ));
        myMap.geoObjects.add(myCollection);

    }

    function CustomSearchProvider(points) {
        this.points = points;
    }

    CustomSearchProvider.prototype.geocode = function(request, options) {
        var deferred = new ymaps.vow.defer(),
            geoObjects = new ymaps.GeoObjectCollection();

        var points = [];
        for (var i = 0, l = this.points.length; i < l; i++) {
            var point = this.points[i];
            if (point.text.toLowerCase().indexOf(request.toLowerCase()) != -1) {
                points.push(point);
            }
        }

        for (var i = 0, l = points.length; i < l; i++) {
            var point = points[i],
                coords = point.coords,
                text = point.text;

            geoObjects.add(new ymaps.Placemark(coords, {
                name: text,
                description: 'Представлен весь ассортимент сети',
                boundedBy: [coords, coords]
            }));
        }

        deferred.resolve({
            geoObjects: geoObjects,
            metaData: {
                geocoder: {
                    request: request,
                    found: geoObjects.getLength()
                }
            }
        });

        return deferred.promise();
    };

    var mySearchControl = new ymaps.control.SearchControl({
        options: {
            provider: new CustomSearchProvider(myPoints),
            noPlacemark: true,
            resultsPerPage: 5
        }
    });

    myMap.controls.add(mySearchControl);
}