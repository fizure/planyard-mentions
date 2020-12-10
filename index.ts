const mentionRawPattern = /(@\(\d+\)\[[^\]\]]+\])/ig;
export const splitMentionsAndText = (value: string): string[] => value
	.split(new RegExp(mentionRawPattern));

export interface IdAndName {
	id: string;
	name: string;
}

const mentionValuesPattern = /@\((\d+)\)\[([^\]\]]+)\]/ig;
export const getMentionIdAndName = (value: string): IdAndName | null => {
	const mentionRegex = new RegExp(mentionValuesPattern);
	const result = mentionRegex.exec(value);
	if (result) {
		return {
			id: result[1],
			name: result[2],
		};
	}
	return null;
};
