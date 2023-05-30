import "./EntryList.css";

export default function EntryList() {
    return (
        <ul className="entry-list">
			<li>
				<h2 className="entry-title">Entry 1</h2>
                <span className="entry-date">May 25, 2023</span>
                <svg className="entry-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF4A11" stroke="#FF4A11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				<span className="entry-text">Lorem ipsum dolor sit amet...</span>
				<button className="favorite-button">Favorite</button>
			</li>
			<li>
			    <h2 className="entry-title">Entry 2</h2>
				<span className="entry-date">May 24, 2023</span>
				<svg className="entry-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF4A11" stroke="#FF4A11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				<span className="entry-text">Lorem ipsum dolor sit amet...</span>
				<button className="favorite-button">Favorite</button>
			</li>
		</ul>
    )
}