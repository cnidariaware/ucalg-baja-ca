<script>
	const photos2 = [
    {
        id: 0,
        name: 'Jump',
        url: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1756589650/DSC_0970-min_telnpf_c_fill_w_780_h_400_o4vqdc.jpg',
    },
    {
        id: 1,
        name: 'Image 2',
        url: 'enter stock image url',
    },
    {
        id: 2,
        name: 'Image 3',
        url: 'enter stock image url',
    },
    {
        id: 3,
        name: 'Image 4',
        url: 'enter stock image url',
    },
    {
        id: 4,
        name: 'Image 5',
        url: 'enter stock image url',
    }
]
	let photos = ['https://media.timeout.com/images/106150176/image.jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg', 'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg', 'https://cdn.britannica.com/98/263098-138-87DCA742/why-are-mountains-so-tall.jpg?w=800&h=450&c=crop', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDYONMzfxBBGpFfn-GxfMa3Gq3fWjoCltwA&s']
	let selected = photos[0]; //the displayed image

    function selectPhoto(photo) { //defining a function that selects the current photo
        selected = photo;
    }
</script>

<img src= {selected} alt="Selected Photo"/>

<div>
	{#each photos as current_photo, index}
		<button onclick ={()=> {selectPhoto(current_photo)}}>
			{index + 1}
        </button>
	{/each}
</div>