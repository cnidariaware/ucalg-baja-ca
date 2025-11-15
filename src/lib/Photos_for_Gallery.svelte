<script>
	import Gallery from './Gallery.svelte';

	import photo1 from 'lib/assets/gallery/photo1.JPG';
	import photo2 from 'lib/assets/gallery/photo2.JPG';
	import photo3 from 'lib/assets/gallery/photo3.JPG';
	import photo4 from 'lib/assets/gallery/photo4.JPG';
	import photo5 from 'lib/assets/gallery/photo5.JPG';

	photos = [photo1, photo2, photo3, photo4, photo5];
</script>

<Gallery {photos} />
