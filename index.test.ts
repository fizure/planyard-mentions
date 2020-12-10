import { splitMentionsAndText, getMentionIdAndName } from './index';

describe('planyard-mentions', () => {
	const mention = '@(1)[I am a long name]';

	describe('splitMentionsAndText', () => {
		it('should work without mentions', () => {
			const input = 'string with \n newline';
			expect(splitMentionsAndText(input)).toEqual([input]);
		});
		it('should work with one mention', () => {
			const input = mention;
			expect(splitMentionsAndText(input)).toEqual([
				'',
				input,
				'',
			]);
		});
		it('should work with multiple mentions', () => {
			const input = `${mention} ${mention}`;
			expect(splitMentionsAndText(input)).toEqual([
				'',
				mention,
				' ',
				mention,
				'',
			]);
		});
		it('should work with multiple mentions and text', () => {
			const input = `Hey ${mention}, look at ${mention}'s invoice.`;
			expect(splitMentionsAndText(input)).toEqual([
				'Hey ',
				mention,
				', look at ',
				mention,
				'\'s invoice.',
			]);
		});
	});
	describe('getMentionIdAndName', () => {
		it('should return null if no match', () => {
			expect(getMentionIdAndName('random string')).toEqual(null);
		});
		it('should return object with id and name if ', () => {
			expect(getMentionIdAndName(mention)).toEqual({
				id: '1',
				name: 'I am a long name',
			});
		});
	});
});
