var Base64 = {
        characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" ,
    
        encode: function( string )
        {
            var characters = Base64.characters;
            var result     = '';
    
            var i = 0;
            do {
                var a = string.charCodeAt(i++);
                var b = string.charCodeAt(i++);
                var c = string.charCodeAt(i++);
    
                a = a ? a : 0;
                b = b ? b : 0;
                c = c ? c : 0;
    
                var b1 = ( a >> 2 ) & 0x3F;
                var b2 = ( ( a & 0x3 ) << 4 ) | ( ( b >> 4 ) & 0xF );
                var b3 = ( ( b & 0xF ) << 2 ) | ( ( c >> 6 ) & 0x3 );
                var b4 = c & 0x3F;
    
                if( ! b ) {
                    b3 = b4 = 64;
                } else if( ! c ) {
                    b4 = 64;
                }
    
                result += Base64.characters.charAt( b1 ) + Base64.characters.charAt( b2 ) + Base64.characters.charAt( b3 ) + Base64.characters.charAt( b4 );
    
            } while ( i < string.length );
    
            return result;
        } ,
    
        decode: function( string )
        {
            var characters = Base64.characters;
            var result     = '';
    
            var i = 0;
            do {
                var b1 = Base64.characters.indexOf( string.charAt(i++) );
                var b2 = Base64.characters.indexOf( string.charAt(i++) );
                var b3 = Base64.characters.indexOf( string.charAt(i++) );
                var b4 = Base64.characters.indexOf( string.charAt(i++) );
    
                var a = ( ( b1 & 0x3F ) << 2 ) | ( ( b2 >> 4 ) & 0x3 );
                var b = ( ( b2 & 0xF  ) << 4 ) | ( ( b3 >> 2 ) & 0xF );
                var c = ( ( b3 & 0x3  ) << 6 ) | ( b4 & 0x3F );
    
                result += String.fromCharCode(a) + (b?String.fromCharCode(b):'') + (c?String.fromCharCode(c):'');
    
            } while( i < string.length );
    
            return result;
        }
    };


var Utf8 = {




    // public method for url encoding


    encode : function (string) {


        string = string.replace(/\r\n/g,"\n");


        var utftext = "";




        for (var n = 0; n < string.length; n++) {




            var c = string.charCodeAt(n);




            if (c < 128) {


                utftext += String.fromCharCode(c);


            }


            else if((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            }


            else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }




        }




        return utftext;


    },




    // public method for url decoding


    decode : function (utftext) {


        var string = "";


        var i = 0;


        var c = c1 = c2 = 0;




        while ( i < utftext.length ) {




            c = utftext.charCodeAt(i);




            if (c < 128) {


                string += String.fromCharCode(c);


                i++;


            }


            else if((c > 191) && (c < 224)) {


                c2 = utftext.charCodeAt(i+1);


                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));


                i += 2;


            }


            else {


                c2 = utftext.charCodeAt(i+1);


                c3 = utftext.charCodeAt(i+2);


                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));


                i += 3;


            }




        }




        return string;


    }



}