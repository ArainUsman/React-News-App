import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgURL, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imgURL ? 'https://e3.365dm.com/21/09/1600x900/skynews-apple-iphone_5511930.jpg?20210914021743' : imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}..</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
