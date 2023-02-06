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