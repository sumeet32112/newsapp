import React from "react";

const NewsItem = (props)=> {
    let { title, description , imageUrl, newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>  
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={imageUrl?imageUrl:"https://images.livemint.com/img/2022/04/14/600x338/8c88c0f4-3a3b-11eb-a420-fe7c41eed781_1607565586630_1607565644431_1649921084884.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By: {author?author:'unknown'} on {new Date(date).toGMTString()}</small> </p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
