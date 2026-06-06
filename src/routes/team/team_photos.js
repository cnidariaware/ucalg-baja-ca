import buisness_subteam from '$lib/assets/subteam_photos/buisness subteam.jpg';
import chassis_subteam from '$lib/assets/subteam_photos/chassis subteam.jpg';
import telemetry_subteam from '$lib/assets/subteam_photos/telemetry subteam.jpg';
import finaldrive_subteam from '$lib/assets/subteam_photos/finaldrive subteam.jpg';
import powertrain_subteam from '$lib/assets/subteam_photos/powertrain subteam.jpg';
import steering_subteam from '$lib/assets/subteam_photos/steering subteam.jpg';
import suspension_subteam from '$lib/assets/subteam_photos/suspension subteam.jpg';
import ergonomics_subteam from '$lib/assets/subteam_photos/ergonomics subteam.jpg';
import dataacquisition_subteam from '$lib/assets/subteam_photos/data acquisition.jpg';
import software_reveal_day from '$lib/assets/subteam_photos/software reveal day.JPG';

const SUB_TEAM_PHOTOS = {
	suspension: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_700,h_400/v1754169379/IMG_3532_c6mnwf_asokvg.jpg',
			alt: 'Welding suspension arms'
		},
		{
			src: suspension_subteam,
			alt: 'The suspension subteam of 2025-2026'
		}
		// {
		// 	src: 'https://res.cloudinary.com/dj4xevuvs/image/upload/v1775092195/IMG20240425140511_m9kp0e.jpg',
		// 	alt: 'Suspension Arms'
		// }
	],

	chassis: [
		// {
		// 	src: 'https://res.cloudinary.com/dj4xevuvs/image/upload/v1775092421/IMG_3083_q96ivi.webp',
		// 	alt: 'Chassis complete ready for powder coating'
		// }
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754167885/chassis2_gct4iq.png',
			alt: 'Chassis in ansys stress simulation'
		},
		{
			src: chassis_subteam,
			alt: 'The chassis subteam of 2025-2026'
		}
	],

	ergonomics: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/18HASpcxac4zjPwWZSpbQs94v0ooAX-3hmw4emI_0zO4qfnSYTO5XBMXSH7dow2E_xkngmq.png',
			alt: 'brakes and gas pedal CAD'
		},
		{
			src: ergonomics_subteam,
			alt: 'The ergonomics subteam of 2025-2026'
		}
	],

	steering: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/19yTuNKZMp1QCQoaBz86d-zpvATvP6Rx1SaVjynMSV6RQFROM2d7anw3zAD4_nabmkg.png',
			alt: 'Suspensions arms and steering'
		},
		{
			src: steering_subteam,
			alt: 'The steering subteam of 2025-2026'
		}
	],

	powertrain: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915331/cvt_zz0rgl.png',
			alt: 'cvt'
		},
		{
			src: powertrain_subteam,
			alt: 'The powertrain subteam of 2025-2026'
		}
	],

	finalDrive: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754168541/brakes-min_bgmnyc.jpg',
			alt: 'top down shot of our brake system'
		},
		{
			src: finaldrive_subteam,
			alt: 'The final drive subteam of 2025-2026'
		}
	],

	telemetry: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/12ZRS9P9XwyNLusJ59EfL98Yc_ZMpbdoYvATMAQKqnf0atoxj0ZUA2vtgQYh09a8_quphim.png',
			alt: 'strain gauge'
		},
		{
			src: telemetry_subteam,
			alt: 'The telemetry subteam of 2025-2026'
		}
	],

	dataAcquisition: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915330/scale_ccg4wg.png',
			alt: 'weight scale'
		},
		{
			src: dataacquisition_subteam,
			alt: 'The data acquisition subteam of 2025-2026'
		}
	],

	software: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1756590700/code-min_uqjr6m_c_fill_w_700_h_400_fftttm.png',
			alt: 'jsx code from our sponsors'
		},
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1779655313/Baja_Software_2025-2026_pvl1y3.jpg',
			alt: 'The software subteam of 2025-2026'
		},
		{
			src: software_reveal_day,
			alt: 'The software team on reveal day'
		},
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1779572781/Software_w_Brock_zpysst.jpg',
			alt: 'The software lead ai placed into the iron man scene'
		}
	],

	business: [
		{
			src: 'https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915387/DSC_0432_e1pfjn.jpg',
			alt: 'member wearing ucalgary baja t-shirt'
		},
		{
			src: buisness_subteam,
			alt: 'The buisness subteam of 2025-2026'
		}
	]
};

export default SUB_TEAM_PHOTOS;
