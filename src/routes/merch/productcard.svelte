<script>
  export let category = "";
  export let name = "";
  export let price = "";
  export let imageSrc = "";
  export let imageAlt = name ? `${name} picture` : "Item picture";
</script>

<figure>
  <img src={imageSrc} alt={imageAlt} width="200" height="200" />
  <figcaption>
    <div>{category}</div>
    <div>{name}</div>
    <div>{price}</div>
  </figcaption>
</figure>

