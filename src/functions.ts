export const calcTimeDifference = (time: number): string => {
	const currTime: number = Date.now();
	const diff = (currTime - time) / 1000;
	let a: number;

	if (diff >= 31536000) {
		a = Math.floor(diff / 31536000);
		return a > 1 ? a + " years ago" : "a year ago";
	} else if (diff >= 2628000) {
		a = Math.floor(diff / 2628000);
		return a > 1 ? a + " months ago" : "a month ago";
	} else if (diff >= 86400) {
		a = Math.floor(diff / 86400);
		return a > 1 ? a + " days ago" : "a day ago";
	} else if (diff >= 3600) {
		a = Math.floor(diff / 3600);
		return a > 1 ? a + " hours ago" : "an hour ago";
	} else {
		a = Math.floor(diff / 60);
		return a > 1 ? a + " minutes ago" : "a minute ago";
	}
};

const DEFAULT_PARAMS = {
    "model": "text-davinci-003",
    "max_tokens": 80,
    "temperature": 0
}


export async function query(params = {}) {
    const params_ = { ...DEFAULT_PARAMS, ...params };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify(params_)
    };
    const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
    const data = await response.json();
    // console.log(requestOptions);
    // console.log(data);
    return data.choices[0].text;
};