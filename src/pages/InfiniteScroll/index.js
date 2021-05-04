
import React, { useState, useEffect, Suspense } from 'react';
import imageFile from './avatar.png';
import './index.scss';
const ImageComponent = React.lazy(() => import('./ImageComponent'));

const InfiniteScroll = () => {
	const [listItems, setListItems] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
        console.log("useEffect 1")
		fetchData();
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
        console.log("handleScroll",isFetching,window.innerHeight, document.documentElement.scrollTop, document.documentElement.offsetHeight, document.documentElement.scrollHeight);
		if (
			Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
	};

	const fetchData = async () => {
        console.log("DATAFETCHING")
		setTimeout(async () => {
			const result = await fetch(`https://picsum.photos/v2/list?page=${page}`);
			const data = await result.json();
			setPage(page + 1);
			setListItems(() => {
				return [...listItems, ...data];
			});
		}, 1000);
	};

	useEffect(() => {
        console.log("useEffect 2")
		if (!isFetching) return;
		fetchMoreListItems();
	}, [isFetching]);

	const fetchMoreListItems = () => {
		fetchData();
		setIsFetching(false);
	};

	return (
		<>
			{listItems.map((listItem) => (
				<div className='card' key={listItem.id}>
                    {/* <img src={imageFile} alt='Avatar' style={{ width: '50%' }} /> */}
					<Suspense fallback={<img src={imageFile} alt='Avatar' style={{ width: '50%' }} />}>
						<ImageComponent src={listItem.download_url} />
					</Suspense>

					<div className='container'>
						<h4>
							<b>{listItem.author}</b>
						</h4>
						<p>Architect & Engineer</p>
					</div>
				</div>
			))}
			{isFetching && <h1>Fetching more list items...</h1>}
		</>
	);
};

export default InfiniteScroll;