(function (window) {


    var names = ["Yaakov", "jason", "Jennifer", "John", "Hopkins", "joe", "Chu", "walter", "Laura", "Jesse"];

    window.names = names;

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {

            byeSpeaker.speak(names[i]);

          } else {

            helloSpeaker.speak(names[i]);

          }

        }

        

        })(window);

