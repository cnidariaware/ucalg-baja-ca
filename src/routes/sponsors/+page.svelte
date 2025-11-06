<script>
	import TopBanner from '$lib/components/TopBanner.svelte';
  let sponsorInfo = $state("");
  const fetchingData=async()=>{
    let sponsors = await fetch("http://localhost:6526/sponsors");
    // sponsorInfo = await sponsors.json();
    let test = await sponsors.json();

    // Iterate through each tier
    for (let tier in test) {
      console.log("Tier:", tier);

      // Iterate through each sponsor in that tier
      for (let i = 0; i < test[tier].length; i++) {
        console.log(test[tier][i].SponsorName);
      }
    }

    sponsorInfo = test;
  }

</script>

<title>UCalgary Baja - Sponsors</title>

<TopBanner
	titleText="Sponsors"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914692/IMG_6671_daaeeq.jpg"
/>
<button 
  onclick={fetchingData} >
  Press me
</button>
<div>
  <!-- {#each sponsorInfo as info}
    <h1>
      {info}
    </h1>  
  {/each} -->


</div>

