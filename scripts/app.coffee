$(document).ready ->
  Mousetrap.bind "z o o", ->
    $("body").append "<embed src='scripts/secret.mp3' autostart='true' loop='false' width='2' height='0'></embed>"
