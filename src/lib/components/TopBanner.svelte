<script>
  let { titleText, imgUrl, subtitleText } = $props();
</script>

<div style="--img:url({imgUrl})">
  <div>
    <h1>{titleText}</h1>
	{#if subtitleText !== null}
		<h2>{subtitleText}</h2>

	{/if}
</div>
</div>

<style>
  :root{
    --fade-starts-at-bottom: 90%;
    --fade-starts-at-top: 96%;
    --banner-text-background: rgba(31,31,31,.8);
    --banner-text-padding: 2svh 2svw;
    --banner-text-rounding: 1rem;
  }

  div {
    position: relative;           /* anchor for children if needed */
    height: 100svh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background:
      /* top layer: the fade */
      linear-gradient(
        to bottom,
        rgba(0,0,0,0) var(--fade-starts-at-bottom, 70%),
        #1f1f1f 100%
      ),
      /* bottom layer: the image */
      var(--img) no-repeat center / cover;
    /* (equivalent to background-image + size/pos/repeat for both layers) */
  }

  /* title/subtitle wrapper */
  div > div{
    height: fit-content;
    margin-top: 35svh;
    width: fit-content;
    margin-right: 4svw;
	border-radius: 1rem;
    background: initial;
	background-color: rgba(0,0,0,0.3);
	flex-direction: column;
  }

  h1{
    font-size: 100px;
    font-weight: bolder;
    text-align: end;
    color: var(--BajaWhite);
    margin: var(--banner-text-padding);
    border-radius: var(--banner-text-rounding);
  }

  h2{
    width: fit-content;
    font-size: xx-large;
    font-weight: normal;
    color: var(--BajaWhite);
	margin: var(--banner-text-padding);
    border-radius: var(--banner-text-rounding);
  }
</style>
