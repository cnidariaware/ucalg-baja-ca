<script lang="ts">
	import TopBanner from '$lib/components/TopBanner.svelte';
	import { goto } from '$app/navigation';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';

	type Grecaptcha = {
		ready: (cb: () => void) => void;
		execute: (siteKey: string, options: { action: string }) => Promise<string>;
	};

	let name = $state('');
	let email = $state('');
	let ucid = $state('');
	let isSubmitting = $state(false);
	let submitError = $state('');

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

	let major = $state('');
	let majorOther = $state('');
	let isOtherMajor = $derived(major.startsWith('Other'));

	const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4/4+', 'Internship'];
	let year_of_study = $state('');

	const availabilityOptions = ['Yes', 'No', 'Partial'];
	let availability = $state('');

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

	let first_preference_sub_team = $state('');
	let second_preference_sub_team = $state('');

	let interest_question = $state('');

	const teamQuestionText: Record<string, string> = {
		Software: `Please answer the integer that the variable result will hold in this Python code:

result = 0
for x in [3,3,5]:
  if x >= 3:
    result = result - x
  else:
    result = result + x`,
		Chassis: `Example Chassis Question: What is one safety consideration in chassis design?`
		// Telemetry: '...',
		// Powertrain: '...'
	};

	type QuestionTeam = keyof typeof teamQuestionText;

	// Store answers keyed by team name: answers['Software'] = '...'
	let technical_question_internal = $state<Partial<Record<QuestionTeam, string>>>({});

	// Unique selected teams (no duplicates, no empty, no "None")
	let selectedTeams = $derived(
		Array.from(
			new Set(
				[first_preference_sub_team, second_preference_sub_team].filter(
					(team) => Boolean(team) && team !== 'None'
				)
			)
		)
	);

	// Teams that actually have questions
	let teamsWithQuestions = $derived(
		selectedTeams.filter((t): t is QuestionTeam => t in teamQuestionText)
	);

	// Keep answers tidy when selection changes
	$effect(() => {
		const keep = new Set(teamsWithQuestions);
		const filteredEntries = Object.entries(technical_question_internal).filter(([k]) =>
			keep.has(k as QuestionTeam)
		);

		const hasChanged =
			filteredEntries.length !== Object.keys(technical_question_internal).length ||
			filteredEntries.some(([k, v]) => technical_question_internal[k as QuestionTeam] !== v);

		if (hasChanged) {
			technical_question_internal = Object.fromEntries(filteredEntries) as Partial<
				Record<QuestionTeam, string>
			>;
		}
	});

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

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		const form = e.currentTarget as HTMLFormElement;

		submitError = '';

		if (!form.reportValidity()) return;
		if (isSubmitting) return;

		isSubmitting = true;

		try {
			const recaptchaToken = await getRecaptchaToken('recruitment_submit');

			const technical_question = JSON.stringify(technical_question_internal);

			const payload = {
				name,
				email,
				ucid,
				major: isOtherMajor ? majorOther : major,
				year_of_study,
				availability,
				first_preference_sub_team,
				second_preference_sub_team,
				interest_question,
				technical_question,
				recaptchaToken
			};

			const res = await fetch('/recruitmentform', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data?.error || 'Submission failed.');
			}

			goto('/recruitmentform/submitted');
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

<svelte:head>
	<title>UCalgary Baja - Recruitment Form</title>
	<script
		src={`https://www.google.com/recaptcha/api.js?render=${PUBLIC_RECAPTCHA_SITE_KEY}`}
	></script>
</svelte:head>

<div class="wrap">
	<h2>UCalgary Baja Recruitment Form</h2>
	<p class="sub" style="font-style: italic">
		Excited to learn from a team-based experience? Fill out the form below and we'll reach out!
	</p>

	<form onsubmit={handleSubmit}>
		<div class="row">
			<label for="full-name">Full Name:<span class="required">*</span></label>
			<input id="full-name" bind:value={name} required />
		</div>

		<div class="row">
			<label for="ucalgary-email">
				UCalgary Email:<span class="required">*</span>
			</label>

			<input
				id="ucalgary-email"
				type="email"
				bind:value={email}
				required
				pattern="^[a-zA-Z0-9._%+\-]+@ucalgary\.ca$"
				title="Email must end with @ucalgary.ca"
			/>
		</div>

		<div class="row">
			<label for="student-ucid">UCID:<span class="required">*</span></label>
			<input
				id="student-ucid"
				type="text"
				bind:value={ucid}
				required
				inputmode="numeric"
				pattern="^\d+$"
				title="UCID must contain numbers only"
			/>
		</div>

		<div class="row">
			<label for="major-selection">Major:<span class="required">*</span></label>
			<select id="major-selection" bind:value={major} required>
				<option value="" disabled selected>Select...</option>
				{#each majors as m}
					<option value={m}>{m}</option>
				{/each}
			</select>
		</div>

		{#if isOtherMajor}
			<div class="row">
				<label for="other-major">Please specify your major:<span class="required">*</span></label>
				<input id="other-major" bind:value={majorOther} required />
			</div>
		{/if}

		<div class="row">
			<div id="academic-year-label">Academic Year:<span class="required">*</span></div>
			<div class="radio" role="radiogroup" aria-labelledby="academic-year-label">
				{#each years as y}
					<label class="r" for={`academic-year-${y}`}>
						<input
							id={`academic-year-${y}`}
							type="radio"
							name="year"
							value={y}
							bind:group={year_of_study}
							required
						/>
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
					<label class="r" for={`meeting-availability-${a}`}>
						<input
							id={`meeting-availability-${a}`}
							type="radio"
							name="avail"
							value={a}
							bind:group={availability}
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
				<b>Chassis</b> – The chassis involves the car's frame, providing support for all the other
				parts...
				<br /><br />
				<b>Ergonomics</b> – Ergonomics focuses on designing the car to be comfortable and easy to drive...
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
			<select id="first-sub-team-choice" bind:value={first_preference_sub_team} required>
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
			<select id="second-sub-team-choice" bind:value={second_preference_sub_team} required>
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
			<textarea id="interest-response" bind:value={interest_question} required></textarea>
		</div>

		{#if teamsWithQuestions.length > 0}
			<div class="block" aria-labelledby="sub-team-questions-label">
				<div id="sub-team-questions-label"><b>Sub-Team Questions</b></div>

				{#each teamsWithQuestions as t (t)}
					{@const team = t as QuestionTeam}

					<div class="row" style="margin-top: 12px;">
						<label for={`${team}-question-answer`}
							><b>{team} Question:<span class="required">*</span></b></label
						>

						{#if team === 'Software'}
							<p class="hint">Please answer the integer that <code>result</code> will hold:</p>
							<pre class="code">{teamQuestionText[team]}</pre>
						{:else}
							<p class="hint">{teamQuestionText[team]}</p>
						{/if}

						<input
							id={`${team}-question-answer`}
							bind:value={technical_question_internal[team]}
							required
							placeholder="Type your answer..."
							aria-label={`${team} question answer`}
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
	@media (max-width: 1000px) {
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
