
export const exerciseOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-key': 'b0eaaf511fmshe445ffc7cce9e3fp12bfa8jsn4e760cb9567f',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};


// headers: {
// 		'x-rapidapi-key': 'b0eaaf511fmshe445ffc7cce9e3fp12bfa8jsn4e760cb9567f',
// 		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
// 	}

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "b0eaaf511fmshe445ffc7cce9e3fp12bfa8jsn4e760cb9567f",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};