import software_lead from '$lib/assets/teamleads/Brock-Tomlinson.jpg';
import buisness_lead from '$lib/assets/teamleads/Reet-Pannu.jpg';
import captain1 from '$lib/assets/teamleads/Matthis-Preusser.jpg';
import captain2 from '$lib/assets/teamleads/Noah-Crawford.jpg';
import telemetry_lead from '$lib/assets/teamleads/Marcus-Meyer.jpg';
import chassis_lead from '$lib/assets/teamleads/Kaleb-Chhoa.jpg';
import powertrain_lead from '$lib/assets/teamleads/Evan-Myers.jpg';
import ergonomics_lead from '$lib/assets/teamleads/Abby-Osborne.jpg';
import steering2_lead from '$lib/assets/teamleads/Emily-Gall.jpg';
import suspension_lead from '$lib/assets/teamleads/Cash-Schempp.jpg';
import finaldrive_lead from '$lib/assets/teamleads/Connor-Wrusbleski.jpg';
import suspension2_lead from '$lib/assets/teamleads/Matt-Wall.jpg';
import steering_lead from '$lib/assets/teamleads/Abigail-Halvorson.jpg';

const TEAM_DATA = {
	captains: [
		{
			name: 'Matthias Preusser',
			role: 'Co-Captain',
			bio: 'Lorem ipsum dolor sit amet.',
			src: captain1,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Noah Crawford',
			role: 'Co-Captain',
			bio: 'Lorem ipsum dolor sit amet.',
			src: captain2,
			linkedin: 'https://linkedin.com'
		}
	],

	subTeamLeads: [
		{
			name: 'Abby Osborne',
			role: 'Ergonomics',
			bio: 'Lorem ipsum dolor sit amet.',
			src: ergonomics_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Abigail Halvorson',
			role: 'Steering',
			bio: 'Lorem ipsum dolor sit amet.',
			src: steering_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Brock Tomlinson',
			role: 'Software',
			bio: 'Lorem ipsum dolor sit amet.',
			src: software_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Cash Schempp',
			role: 'Manufacturing',
			bio: 'Lorem ipsum dolor sit amet.',
			src: suspension_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Connor Wrusbleski',
			role: 'Final Drive',
			bio: 'Lorem ipsum dolor sit amet.',
			src: finaldrive_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Emily Gall',
			role: 'Manufacturing',
			bio: 'Lorem ipsum dolor sit amet.',
			src: steering2_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Evan Myers',
			role: 'Powertrain',
			bio: 'Lorem ipsum dolor sit amet.',
			src: powertrain_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Kaleb Chhoa',
			role: 'Chassis',
			bio: 'Lorem ipsum dolor sit amet.',
			src: chassis_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Marcus Meyer',
			role: 'Telemetry',
			bio: 'Lorem ipsum dolor sit amet.',
			src: telemetry_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Matt Wall',
			role: 'Manufacturing',
			bio: 'Lorem ipsum dolor sit amet.',
			src: suspension2_lead,
			linkedin: 'https://linkedin.com'
		},
		{
			name: 'Reet Pannu',
			role: 'Buisness',
			bio: 'Lorem ipsum dolor sit amet.',
			src: buisness_lead,
			linkedin: 'https://linkedin.com'
		}
	]
};

export default TEAM_DATA;
