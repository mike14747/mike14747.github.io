import React from 'react';

import portfolioItems from './data/portfolio';

import githubIcon from './images/github_icon.png';

import './css/portfolio.css';

const Portfolio = () => {
    return (
        <div className="row">
            {portfolioItems.length > 0 &&
                portfolioItems.filter(activeItem => activeItem.active).map((item, index) => (
                    <div key={index} className="pic-card">
                        <div className="pic-card-header">
                            {item.url === ''
                                ? item.label
                                : <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
                            }
                        </div>
                        {item.url === ''
                            ? <img src={item.image} alt={item.alt_text} className="pic-card-img" />
                            : <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.alt_text} className="pic-card-img" /></a>
                        }
                        <div className="pic-card-body">
                            <div className="pic-card-text">
                                {item.description}
                            </div>
                            <div className="pic-card-repo">
                                <a href={item.github_repo} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub Repo" className="mb-1 mr-2" />GitHub Repo</a>
                            </div>
                        </div>
                        <div className="pic-card-footer">
                            {item.tech.join(', ')}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Portfolio;
