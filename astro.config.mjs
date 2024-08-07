import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Apache Iceberg™ Unofficial Community Directory',
			social: {
				// twitter: 'https://www.twitter.com/icebergdatalake',
				// linkedin: 'https://www.linkedin.com/company/learniceberg'
			},
			sidebar: [
				{
					label: 'Online Community',
					autogenerate: { directory: 'online' },
				},
				{
					label: 'North American Community',
					autogenerate: { directory: 'na' },
				},
				{
					label: 'European Community',
					autogenerate: { directory: 'eu' },
				},
				{
					label: 'Asian Community',
					autogenerate: { directory: 'as' },
				},
				{
					label: 'Australian Community',
					autogenerate: { directory: 'au' },
				},
				{
					label: 'Central & South American Community',
					autogenerate: { directory: 'latam' },
				},
				{
					label: 'How to Start your Local Iceberg Community',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'Community Assets',
					autogenerate: { directory: 'community' },
				},
			],
			head: [
				{
				  tag: 'script',
				  attrs: {
					async: true,
					src: 'https://www.googletagmanager.com/gtag/js?id=G-KHDZBHVCQ7', // Replace with your Google Analytics ID
				  },
				},
				{
				  tag: 'script',
				  content: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-KHDZBHVCQ7'); // Replace with your Google Analytics ID
				  `,
				},
			  ],
		}),
	],
});
