import NewsCard from './NewsCard'

function NewsFeed({ newsList }) {
	return (
		<ul className="newsfeed">
			{newsList.map((newsItem, index) => {
				return (
					<li key={index}>
						<article className="newsfeed__card">
							<NewsCard newsItem={newsItem} />
						</article>
					</li>
				)
			})}
		</ul>
	)
}

export default NewsFeed
