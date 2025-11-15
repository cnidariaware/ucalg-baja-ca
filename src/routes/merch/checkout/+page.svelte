<script>
	import TopBanner from '../MerchTopBanner.svelte';
	let member = $state(false);
	let subTeam = $state('');
	let couponCode = $state('');

	let amount = $state(10.0);

	let subTeams = ['Software', 'Team', 'Telemetry', 'Data Aquisition'];

	$inspect(member);
</script>

<TopBanner
	titleText="Checkout"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>

<div>
	<div>
		<form action="">
			<label for="UCalgary Member">Are you a registered member of UCalgary Baja?</label>
			<input type="checkbox" onchange={() => (member = !member)} />

			<h4>Contact</h4>
			<label for="name">Full Name:</label>
			<input type="text" name="name" required />
			<label for="email">Email (UCalgary Email preferred):</label>
			<input type="email" name="email" required />
			<label for="phone">Phone:</label>
			<input type="tel" name="phone" required />
			{#if member}
				<label for="submteam">Baja Sub-team:</label>
				<select id="sub_team" bindvalue={subTeam}>
					<option value="" disabled selected>Select a sub-team</option>
					{#each subTeams as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{/if}
			<h4>Shipping Address</h4>
			<h5>(We <u><strong>ONLY</strong></u> ship to Canada)</h5>
			<label for="shipingFirstName">First Name:</label>
			<input type="text" name="shipingFirstName" />
			<label for="shippingLastName">Last Name:</label>
			<input type="text" name="shippingLastName" />
			<label for="shippingStreet">Street Address:</label>
			<input type="text" name="shippingStreet" />
			<label for="shippingUnit">Unit Number:</label>
			<input type="text" name="shippingUnit" />
			<label for="shippingCity">City:</label>
			<input type="text" name="shippingCity" />
			<label for="shippingProvince">Province/Territory</label>
			<input type="text" name="shippingProvince" />
			<label for="shippingPostCode">Postal Code:</label>
			<input type="text" name="shippingPostCode" />
			<label for="shippingPhone">Phone:</label>
			<input type="text" name="shippingPhone" />
			<label for="couponCode"><strong>Coupon Code:</strong></label>
			<input type="text" bind:value={couponCode} />
			<label for="additionalInfo">Additional Information</label>
			<textarea name="additionalInfo"></textarea>
			<h4><strong>Payment:</strong></h4>
			<p>Will be manually processed at a later date.</p>
			<button>Place Order ${amount.toFixed(2)}</button>
		</form>
		<!-- insert cart here -->
	</div>
</div>
