var playlist = {[artist]: songTitle};

function updatePlayList(obj, artist, songTitle){
  obj[artist] = songTitle;
  return obj;
}
