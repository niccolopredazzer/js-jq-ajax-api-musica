//SCOPO DEL GIOCO: Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
//Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
//Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.

    var source = $("#card-template").html();
    var template = Handlebars.compile(source);
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function (data) {
            var arrayAlbums = data.response;
            for (var i = 0; i < arrayAlbums.length; i++) {
                var album = arrayAlbums[i];
                var oggettoAlbum = {
                    immagine: album.poster,
                    titolo: album.title,
                    autore: album.author,
                    anno: album.year,
                    genere: album.genre,
                }
                var cardDaAppendere = template(oggettoAlbum);
                $('.card-container').append(cardDaAppendere);
            }

        },
        error: function () {
            alert('errore');
        }

    })
