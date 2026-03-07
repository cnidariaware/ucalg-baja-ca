<script lang="ts">
	import TopBanner from '$lib/components/TopBanner.svelte';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';
	import { recruitmentQuestions, type QuestionTeam } from './recruitment-questions';

	type Grecaptcha = {
		ready: (cb: () => void) => void;
		execute: (siteKey: string, options: { action: string }) => Promise<string>;
	};

	let formEl = $state<HTMLFormElement | null>(null);
	let isSubmitting = $state(false);
	let submitError = $state('');
	let showOtherMajor = $state(false);
	let selectedTeams = $state<string[]>([]);

	const recaptchaScriptSrc =
		'https://www.google.com/recaptcha/api.js?render=' + PUBLIC_RECAPTCHA_SITE_KEY;

	const majors = [
		'Engineering Common Core',
		'Mechanical Engineering',
		'Electrical Engineering',
		'Software Engineering',
		'Business (Haskayne)',
		'Computer Science',
		'Other Engineering Major',
		'Other Major'
	];

	const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4/4+', 'Internship'];

	const availabilityOptions = ['Yes', 'No', 'Partial'];

	const subTeams = [
		'Chassis',
		'Ergonomics',
		'Final Drive',
		'Powertrain',
		'Steering',
		'Suspension',
		'Data Acquisition',
		'Telemetry',
		'Software',
		'Business'
	];

	let teamsWithQuestions = $derived(
		selectedTeams.filter((t): t is QuestionTeam => t in recruitmentQuestions)
	);

	$effect(() => {
		const script = document.createElement('script');
		script.src = recaptchaScriptSrc;
		document.head.appendChild(script);

		return () => {
			script.remove();
		};
	});

	function updateMajor(event: Event) {
		const select = event.currentTarget as HTMLSelectElement;
		showOtherMajor = select.value.startsWith('Other');
	}

	function updateSelectedTeams() {
		if (!formEl) return;

		const formData = new FormData(formEl);
		const first = String(formData.get('first_preference_sub_team') ?? '');
		const second = String(formData.get('second_preference_sub_team') ?? '');

		selectedTeams = [...new Set([first, second].filter((team) => team && team !== 'None'))];
	}

	/**
	 * @param {string} action - The reCAPTCHA action name to execute.
	 * @returns {Promise<string>} The generated reCAPTCHA token.
	 * @description Executes reCAPTCHA and returns the token for the given action.
	 * @author Ahmad <ahmad.ahmad1@ucalgary.ca>
	 */
	function getRecaptchaToken(action: string): Promise<string> {
		return new Promise((resolve, reject) => {
			const grecaptcha = (window as Window & { grecaptcha?: Grecaptcha }).grecaptcha;

			if (!grecaptcha) {
				reject(new Error('reCAPTCHA failed to load.'));
				return;
			}

			grecaptcha.ready(async () => {
				try {
					const token = await grecaptcha.execute(PUBLIC_RECAPTCHA_SITE_KEY, { action });
					resolve(token);
				} catch {
					reject(new Error('Failed to generate reCAPTCHA token.'));
				}
			});
		});
	}

	/**
	 * @param {SubmitEvent} e - The form submit event.
	 * @returns {Promise<void>}
	 * @description Collects form data, builds the payload and handles submission.
	 * @author Ahmad <ahmad.ahmad1@ucalgary.ca>
	 */
	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		const form = e.currentTarget as HTMLFormElement;

		if (!form.reportValidity()) return;
		if (isSubmitting) return;

		isSubmitting = true;

		try {
			const formData = new FormData(form);
			const formObject = Object.fromEntries(formData.entries());
			const recaptchaToken = await getRecaptchaToken('recruitment_submit');

			const selectedMajor = String(formObject.major ?? '');
			const technicalAnswers: Record<string, string> = {};

			for (const team of teamsWithQuestions) {
				const answer = formData.get(`technical_question_${team}`);
				if (typeof answer === 'string' && answer.trim()) {
					technicalAnswers[team] = answer.trim();
				}
			}

			const technical_question = JSON.stringify(technicalAnswers);

			const payload = {
				name: String(formObject.name ?? ''),
				email: String(formObject.email ?? ''),
				ucid: String(formObject.ucid ?? ''),
				major: selectedMajor.startsWith('Other')
					? String(formObject.major_other ?? '')
					: selectedMajor,
				year_of_study: String(formObject.year_of_study ?? ''),
				availability: String(formObject.availability ?? ''),
				first_preference_sub_team: String(formObject.first_preference_sub_team ?? ''),
				second_preference_sub_team: String(formObject.second_preference_sub_team ?? ''),
				interest_question: String(formObject.interest_question ?? ''),
				technical_question,
				recaptchaToken
			};

			console.log(payload);
		} catch (err) {
			submitError = err instanceof Error ? err.message : 'Something went wrong.';
			console.error('Recruitment form submit error:', err);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<!-- <TopBanner
	titleText="Sponsors"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914692/IMG_6671_daaeeq.jpg"
/> -->

<title>UCalgary Baja - Recruitment Form</title>

<div class="wrap">
	<h2>UCalgary Baja Recruitment Form</h2>
	<p class="sub">
		<i
			>Excited to learn from a team-based experience? Fill out the form below and we'll reach out!</i
		>
	</p>

	<form bind:this={formEl} onsubmit={handleSubmit}>
		<div class="row">
			<label for="full-name">Full Name:<span class="required">*</span></label>
			<input id="full-name" name="name" required />
		</div>

		<div class="row">
			<label for="ucalgary-email">
				UCalgary Email:<span class="required">*</span>
			</label>

			<input
				id="ucalgary-email"
				name="email"
				type="email"
				required
				pattern="^[a-zA-Z0-9._%+\-]+@ucalgary\.ca$"
				title="Email must end with @ucalgary.ca"
			/>
		</div>

		<div class="row">
			<label for="student-ucid">UCID:<span class="required">*</span></label>
			<input
				id="student-ucid"
				name="ucid"
				type="text"
				required
				inputmode="numeric"
				pattern="^\d+$"
				title="UCID must contain numbers only"
			/>
		</div>

		<div class="row">
			<label for="major-selection">Major:<span class="required">*</span></label>
			<select id="major-selection" name="major" required onchange={updateMajor}>
				<option value="" disabled selected>Select...</option>
				{#each majors as m}
					<option value={m}>{m}</option>
				{/each}
			</select>
		</div>

		{#if showOtherMajor}
			<div class="row">
				<label for="other-major">Please specify your major:<span class="required">*</span></label>
				<input id="other-major" name="major_other" required />
			</div>
		{/if}

		<div class="row">
			<div id="academic-year-label">Academic Year:<span class="required">*</span></div>
			<div class="radio" role="radiogroup" aria-labelledby="academic-year-label">
				{#each years as y}
					<label class="r" for={'academic-year-' + y}>
						<input id={'academic-year-' + y} type="radio" name="year_of_study" value={y} required />
						{y}
					</label>
				{/each}
			</div>
		</div>

		<div class="row">
			<div id="meeting-availability-label">
				Are you available for the following team meetings?<span class="required">*</span>
			</div>
			<div class="hint">Saturdays: 10:00am-4:00pm | Wednesdays: 6:00pm-8:00pm</div>
			<div
				class="radio"
				style="margin-top: 8px;"
				role="radiogroup"
				aria-labelledby="meeting-availability-label"
			>
				{#each availabilityOptions as a}
					<label class="r" for={'meeting-availability-' + a}>
						<input
							id={'meeting-availability-' + a}
							type="radio"
							name="availability"
							value={a}
							required
						/>
						{a}
					</label>
				{/each}
			</div>
		</div>

		<div class="row">
			<label for="sub-team-descriptions">Sub-Team Descriptions:</label>
			<p id="sub-team-descriptions" class="hint">
				<b>Chassis</b> - The chassis involves the car's frame, providing support for all the other
				parts...
				<br /><br />
				<b>Ergonomics</b> - Ergonomics focuses on designing the car to be comfortable and easy to drive...
			</p>
		</div>

		<div class="row">
			<label for="first-sub-team-choice"
				>What sub-team are you interested in? (1st choice)<span class="required">*</span></label
			>
			<div class="hint">
				Your choice of sub-team does not have any affect on your chances of making the team, only
				select the team you are most interested in.
			</div>
			<select
				id="first-sub-team-choice"
				name="first_preference_sub_team"
				required
				onchange={updateSelectedTeams}
			>
				<option value="" disabled selected>Select...</option>
				{#each subTeams as t}
					<option value={t}>{t}</option>
				{/each}
			</select>
		</div>

		<div class="row">
			<label for="second-sub-team-choice"
				>What sub-team are you interested in? (2nd choice)<span class="required">*</span></label
			>
			<div class="hint">
				Your choice of sub-team does not have any affect on your chances of making the team, only
				select the team you are most interested in.
			</div>
			<select
				id="second-sub-team-choice"
				name="second_preference_sub_team"
				required
				onchange={updateSelectedTeams}
			>
				<option value="" disabled selected>Select...</option>
				{#each [...subTeams, 'None'] as t}
					<option value={t}>{t}</option>
				{/each}
			</select>
		</div>

		<div class="row">
			<label for="interest-response"
				>Why are you interested in joining UCalgary Baja?<span class="required">*</span></label
			>
			<textarea id="interest-response" name="interest_question" required></textarea>
		</div>

		{#if teamsWithQuestions.length > 0}
			<div class="block" aria-labelledby="sub-team-questions-label">
				<div id="sub-team-questions-label"><b>Sub-Team Questions</b></div>

				{#each teamsWithQuestions as t (t)}
					{@const team = t}

					<div class="row" style="margin-top: 12px;">
						<label for={team + '-question-answer'}
							><b>{team} Question:<span class="required">*</span></b></label
						>

						{#if team === 'Software'}
							<p class="hint">Please answer the integer that <code>result</code> will hold:</p>
							<pre class="code">{recruitmentQuestions[team]}</pre>
						{:else}
							<p class="hint">{recruitmentQuestions[team]}</p>
						{/if}

						<input
							id={team + '-question-answer'}
							name={'technical_question_' + team}
							required
							placeholder="Type your answer..."
							aria-label={team + ' question answer'}
						/>
					</div>
				{/each}
			</div>
		{/if}

		<div class="row" style="margin-top: 16px;">
			<button type="submit" disabled={isSubmitting}>
				{#if isSubmitting}
					Submitting...
				{:else}
					Submit
				{/if}
			</button>
			{#if submitError}
				<p class="error">{submitError}</p>
			{/if}
		</div>
	</form>
</div>

<style>
	.wrap {
		max-width: 720px;
		margin: 0 auto;
		padding: 24px;
		font-family: Arial, sans-serif;
		color: var(--BajaBlack);
	}
	h2 {
		margin: 5 0 20px;
	}
	.sub {
		margin: 0 0 18px;
		color: #444;
		margin-bottom: 30px;
	}
	.row {
		margin-top: 24px;
		margin-bottom: 12px;
	}
	label {
		display: block;
		font-size: 14px;
		margin-bottom: 6px;
	}
	input,
	select,
	textarea {
		width: 100%;
		padding: 8px;
		border: 1px solid #bbb;
		border-radius: 4px;
		font-size: 14px;
		box-sizing: border-box;
	}
	input,
	textarea {
		font-family: monospace;
	}
	textarea {
		min-height: 90px;
		resize: vertical;
	}
	.hint {
		font-size: 12px;
		color: #666;
		line-height: 1.35;
		margin-top: 6px;
	}
	.radio {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 6px;
	}
	.r {
		display: inline-flex;
		gap: 6px;
		align-items: center;
		margin: 0;
		font-weight: normal;
		white-space: nowrap;
	}
	@media (max-width: 800px) {
		.radio {
			gap: 12px;
		}
		.r {
			display: grid;
			grid-template-columns: 26px 1fr;
			column-gap: 12px;
			align-items: start;
			white-space: normal;
		}

		.r input[type='radio'] {
			margin: 3px 0 0 0;
		}
	}
	.block {
		border: 1px solid #eee;
		padding: 12px;
		border-radius: 6px;
		background: #fafafa;
		margin-top: 12px;
	}
	.code {
		margin: 10px 0;
		padding: 10px;
		border: 1px solid #eee;
		background: #fff;
		border-radius: 6px;
		overflow: auto;
		white-space: pre;
	}
	button {
		border-radius: 10px;
		background-color: var(--BajaRed);
		border-color: transparent;
		padding: 1svh 1svw;
		font-size: large;
		color: #ffffff;
		min-width: 15svw;
		display: block;
		margin: 2rem auto 0 auto;
	}

	button:hover {
		background-color: var(--BajaHover);
		color: black;
	}
	.required {
		color: var(--BajaRed);
		font-weight: bold;
		margin-left: 2px;
	}
	input[type='radio'] {
		accent-color: var(--BajaRed);
	}
	select {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-color: white;
		border: 1px solid #ccc;
		border-radius: 6px;
		padding: 8px 12px;
		font-size: 14px;
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.error {
		color: #b00020;
		text-align: center;
		margin-top: 10px;
		font-size: 14px;
	}
</style>
