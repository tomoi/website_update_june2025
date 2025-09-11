import { useState, useEffect, use } from 'react'
import NavBar from '../components/NavBar.tsx'


//this is not a paid API key, so I am not worried about it being public.
const apiKey = "fd5e12522935425197fc964d95235df6";
const apiUrl = "https://www.bungie.net/Platform/";
const imgPath = "https://www.bungie.net";

let staticCharacters = {
    "2305843009265520769": {
        "membershipId": "4611686018443871540",
        "membershipType": 1,
        "characterId": "2305843009265520769",
        "dateLastPlayed": "2024-11-29T19:49:55Z",
        "minutesPlayedThisSession": "1",
        "minutesPlayedTotal": "10418",
        "light": 2020,
        "stats": {
            "144602215": 50,
            "392767087": 100,
            "1735777505": 91,
            "1935470627": 2020,
            "1943323491": 52,
            "2996146975": 22,
            "4244567218": 51
        },
        "raceHash": 3887404748,
        "genderHash": 3111576190,
        "classHash": 3655393761,
        "raceType": 0,
        "classType": 0,
        "genderType": 0,
        "emblemPath": "/common/destiny2_content/icons/cb105a020b9c5c315c59b2b1df3885d6.jpg",
        "emblemBackgroundPath": "/common/destiny2_content/icons/724358bfba10e751c7e7dc2e2dd3b204.jpg",
        "emblemHash": 3953403248,
        "emblemColor": {
            "red": 1,
            "green": 0,
            "blue": 1,
            "alpha": 255
        },
        "levelProgression": {
            "progressionHash": 1716568313,
            "dailyProgress": 0,
            "dailyLimit": 0,
            "weeklyProgress": 0,
            "weeklyLimit": 0,
            "currentProgress": 0,
            "level": 50,
            "levelCap": 50,
            "stepIndex": 50,
            "progressToNextLevel": 0,
            "nextLevelAt": 0
        },
        "baseCharacterLevel": 50,
        "percentToNextLevel": 0,
        "titleRecordHash": 3464275895
    },
    "2305843009265520954": {
        "membershipId": "4611686018443871540",
        "membershipType": 1,
        "characterId": "2305843009265520954",
        "dateLastPlayed": "2024-11-29T20:32:27Z",
        "minutesPlayedThisSession": "32",
        "minutesPlayedTotal": "153095",
        "light": 2018,
        "stats": {
            "144602215": 62,
            "392767087": 91,
            "1735777505": 101,
            "1935470627": 2018,
            "1943323491": 90,
            "2996146975": 29,
            "4244567218": 30
        },
        "raceHash": 898834093,
        "genderHash": 2204441813,
        "classHash": 2271682572,
        "raceType": 2,
        "classType": 2,
        "genderType": 1,
        "emblemPath": "/common/destiny2_content/icons/d0d8a24c8a8143747adb192caaa43a5f.jpg",
        "emblemBackgroundPath": "/common/destiny2_content/icons/0104edbc63c03be30602d9b57d77b8be.jpg",
        "emblemHash": 383734238,
        "emblemColor": {
            "red": 18,
            "green": 0,
            "blue": 0,
            "alpha": 255
        },
        "levelProgression": {
            "progressionHash": 1716568313,
            "dailyProgress": 0,
            "dailyLimit": 0,
            "weeklyProgress": 0,
            "weeklyLimit": 0,
            "currentProgress": 0,
            "level": 50,
            "levelCap": 50,
            "stepIndex": 50,
            "progressToNextLevel": 0,
            "nextLevelAt": 0
        },
        "baseCharacterLevel": 50,
        "percentToNextLevel": 0,
        "titleRecordHash": 3464275895
    },
    "2305843009289646835": {
        "membershipId": "4611686018443871540",
        "membershipType": 1,
        "characterId": "2305843009289646835",
        "dateLastPlayed": "2024-11-17T03:33:25Z",
        "minutesPlayedThisSession": "4",
        "minutesPlayedTotal": "20676",
        "light": 2017,
        "stats": {
            "144602215": 64,
            "392767087": 104,
            "1735777505": 84,
            "1935470627": 2017,
            "1943323491": 18,
            "2996146975": 90,
            "4244567218": 32
        },
        "raceHash": 2803282938,
        "genderHash": 3111576190,
        "classHash": 671679327,
        "raceType": 1,
        "classType": 1,
        "genderType": 0,
        "emblemPath": "/common/destiny2_content/icons/f487163bdfc52e126e86b35e7c4a05b0.jpg",
        "emblemBackgroundPath": "/common/destiny2_content/icons/f97acbe1ff747a86946f98272d4397c9.jpg",
        "emblemHash": 908153539,
        "emblemColor": {
            "red": 2,
            "green": 9,
            "blue": 20,
            "alpha": 255
        },
        "levelProgression": {
            "progressionHash": 1716568313,
            "dailyProgress": 0,
            "dailyLimit": 0,
            "weeklyProgress": 0,
            "weeklyLimit": 0,
            "currentProgress": 0,
            "level": 50,
            "levelCap": 50,
            "stepIndex": 50,
            "progressToNextLevel": 0,
            "nextLevelAt": 0
        },
        "baseCharacterLevel": 50,
        "percentToNextLevel": 0,
        "titleRecordHash": 1089543274
    }
}

//function to get bungie id from user-input text
async function getBungieId(bungieName: string) {
    //searches the bungie API using a POST request with the typed name, and returns an array of the users that match the searched name
    try {
        const response = await fetch(`${apiUrl}User/Search/GlobalName/0/`, {
            headers: { 'X-API-Key': apiKey },
            method: 'POST',
            body: JSON.stringify({ "displayNamePrefix": bungieName }),
        })
        const data = await response.json();
        // console.log(await data.Response.searchResults[0].destinyMemberships[0].membershipId)

        //retrieves character information in order to get the character emblem
        let characterInformation = getCharacters(await data.Response.searchResults[0].destinyMemberships[0].membershipType, await data.Response.searchResults[0].destinyMemberships[0].membershipId)

        console.log([await data.Response.searchResults, await characterInformation]);

        return [await data.Response.searchResults, await characterInformation];
    } catch (error) {
        errorMessage(error);
    }
}

function errorMessage(message: any) {
    console.log(message);
}

async function getCharacters(membershipType, membershipId) {
    try {
        const response = await fetch(`${apiUrl}/Destiny2/${membershipType}/Profile/${membershipId}/?components=Characters`, {
            headers: { 'X-API-Key': apiKey }
        });
        const data = await response.json();
        // console.log(data.Response.characters.data);
        return (data.Response.characters.data)
    } catch (error) {
        errorMessage(error);
    }
}


//takes the object that contains all the characters and parses through it to find the most recently played character
//returns the id of the most recent character
function recentlyPlayedCharacter(characterList: any) {
    let recentDate = new Date(characterList[Object.keys(characterList)[0]].dateLastPlayed);
    let recentCharacter = characterList[Object.keys(characterList)[0]].characterId;
    for (const character in characterList) {
        let newDate = new Date(characterList[character].dateLastPlayed);
        let newCharacter = characterList[character].characterId;
        if (recentDate.getTime() < newDate.getTime()) {
            recentCharacter = newCharacter;
            recentDate = newDate;
        }
    }
    //returns id of recent character
    return recentCharacter;
}


function Search(props) {
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState("");

    let results: any = []
    //only search after a short delay to prevent too many API calls
    useEffect(() => {
        const searchDelay = setTimeout(() => {
            (async () => {
                results = await getBungieId(search);
                setSearchResults(results);
            })();

        }, 1500)

        return () => clearTimeout(searchDelay)
    }, [search])

    let searchList: any = []
    for (const individual in searchResults[0]) {
        searchList = [...searchList, <><p onClick={() => {
            props.setBungieName(() => [searchResults[0][individual].destinyMemberships[0].membershipId, searchResults[0][individual].destinyMemberships[0].membershipType]);
            // setSearch("");
        }}>{searchResults[0][individual].bungieGlobalDisplayName}#{searchResults[0][individual].bungieGlobalDisplayNameCode}</p></>];

    }

    //<img src={`${imgPath}${searchResults[1][individual].}`} alt="character emblem" />
    return (
        <div className="search">
            <form onSubmit={() => { event.preventDefault() }}>
                <label for="nameInput">Enter a Bungie Id</label>
                <input type="text" autocomplete="off" name="nameInput" id="nameInput" placeholder="ex. name#1234" value={search}
                    onChange={(event) => { setSearch(event.target.value); }} required />
            </form>
            <div className="search-results">{searchList}</div>
        </div>
    )
}

function Destiny() {

    //first will be bungie internal id ex:"4611686018483610436", second will be platform ID ex: 3
    const [bungieName, setBungieName] = useState([])


    return (
        <div>
            <NavBar />
            <Search setBungieName={setBungieName} className="search_area" />
            <p>This is the Destiny Page</p>
        </div>
    )
}

export default Destiny