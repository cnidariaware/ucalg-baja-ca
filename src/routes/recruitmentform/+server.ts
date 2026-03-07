import { json } from '@sveltejs/kit';
import { RECAPTCHA_SECRET_KEY } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const body = await request.json();

		const {
			name,
			email,
			ucid,
			major,
			year_of_study,
			availability,
			first_preference_sub_team,
			second_preference_sub_team,
			interest_question,
			technical_question,
			recaptchaToken
		} = body;

		if (
			!name ||
			!email ||
			!ucid ||
			!major ||
			!year_of_study ||
			!availability ||
			!first_preference_sub_team ||
			!second_preference_sub_team ||
			!interest_question ||
			!recaptchaToken
		) {
			return json({ error: 'Missing required fields.' }, { status: 400 });
		}

		const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				secret: RECAPTCHA_SECRET_KEY,
				response: recaptchaToken,
				remoteip: getClientAddress()
			})
		});

		const verifyData = await verifyRes.json();

		if (
			!verifyData.success ||
			verifyData.action !== 'recruitment_submit' ||
			typeof verifyData.score !== 'number' ||
			verifyData.score < 0.5
		) {
			return json(
				{
					error: 'reCAPTCHA verification failed.',
					details: verifyData['error-codes'] ?? null
				},
				{ status: 400 }
			);
		}

		const payload = {
			name,
			email,
			ucid,
			major,
			year_of_study,
			availability,
			first_preference_sub_team,
			second_preference_sub_team,
			interest_question,
			technical_question
		};

		console.log('Verified recruitment submission:', payload);

		return json({ success: true });
	} catch (error) {
		console.error('Recruitment form API error:', error);
		return json({ error: 'Server error while submitting form.' }, { status: 500 });
	}
};
