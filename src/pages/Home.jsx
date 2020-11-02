import React from 'react';

import '../assets/scss/pages/Home.scss';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MediaList from '../components/MediaList';

class Home extends React.Component {
	state = {
		data: [
			{
				id: '001',
				mediatitle: 'Freda en el Bosque Verde',
				mediacategory: 'Grady',
				mediaposter: 'https://picsum.photos/id/237/600/400',
			},
			{
				id: '002',
				mediatitle: 'Freda en el Mar Azul',
				mediacategory: 'Grady',
				mediaposter: 'https://picsum.photos/id/238/600/400',
			},
			{
				id: '003',
				mediatitle: 'Freda en la Montaña Roja',
				mediacategory: 'Grady',
				mediaposter: 'https://picsum.photos/id/239/600/400',
			},
			{
				id: '004',
				mediatitle: 'Freda en la Montaña Roja',
				mediacategory: 'Grady',
				mediaposter: 'https://picsum.photos/id/239/600/400',
			},
			{
				id: '005',
				mediatitle: 'Freda en Rusia',
				mediacategory: 'Grady',
				mediaposter: 'https://picsum.photos/id/239/600/400',
			},
			{
				id: '006',
				mediatitle: 'Freda en Remojo',
				mediacategory: 'Grady',
				mediaposter: 'https://picsum.photos/id/239/600/400',
			},
		],
	};
	render(){
		return (
			<main class="main">
				<Hero />
				<section className="media-row">
					<MediaList items={this.state.data} />
				</section>
				<Footer />
			</main>
		);
	};
};

export default Home;
