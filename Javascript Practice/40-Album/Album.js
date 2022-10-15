

function make_album(artistName,albumName,nooftracks)
{
    let objArtirstAlbums= {artist:'', album:'',nooftracks:'' };
    objArtirstAlbums.artist = artistName;
    objArtirstAlbums.album = albumName;
    objArtirstAlbums.nooftracks = nooftracks
    // console.log('dictionary 1: Artist = ' +objArtirstAlbums.artist+ ' and Album = ' +objArtirstAlbums.album)

    return objArtirstAlbums;
}

let dict1 = make_album('Nusrat Fateh Ali Khan','Missives from Allah');
let dict2 = make_album('Abida parveen','Raqs-e-Bismil');
let dict3 = make_album('Atif Aslam','Jal');

let dict4 = make_album('Ali Zafar','Huqa Pani',7);

console.log('dictionary 1: Artist = ' +dict1.artist+ ' and Album = ' +dict1.album)
console.log('dictionary 2: Artist = ' +dict2.artist+ ' and Album = ' +dict2.album)
console.log('dictionary 3: Artist = ' +dict3.artist+ ' and Album = ' +dict3.album)

console.log('dictionary 4: Artist = ' +dict4.artist+ ' and Album = ' +dict4.album +' and Number of Tracks = '+dict4.nooftracks)
