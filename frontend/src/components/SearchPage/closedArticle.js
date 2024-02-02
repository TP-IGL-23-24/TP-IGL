import React from 'react';
import { Link } from 'react-router-dom';
import ArticleIcon from "../../assets/articleIcon.png";

const ClosedArticle = ({ article }) => {
  let formattedKeywords;
  let formattedAuthors;

  if (Array.isArray(article.keywords)) {
    formattedKeywords = article.keywords.join(' , ');
  } else {
    formattedKeywords = article.keywords ? article.keywords : ''; // Assuming it's a single keyword or undefined
  }

  if (Array.isArray(article.authors)) {
    formattedAuthors = article.authors.join(', ');
  } else {
    formattedAuthors = article.authors ? article.authors : ''; // Assuming it's a single author or undefined
  }

  const handleButtonClick = () => {
    // Store the article object in local storage
    localStorage.setItem('selectedArticle', JSON.stringify(article));
    console.log('Article stored in local storage:', article);
  };

  return (
    <div className="mt-5">
      <button
        className={`ml-14 w-4/6 flex items-center bg-white rounded-3xl py-3 border transition duration-300 ease-in-out hover:bg-gray-100 relative`}
        onClick={handleButtonClick}
      >
        <div className='w-3/4'>
          <Link to={{ pathname: `/UserSpace/ArticleDetails/${article.id}`, state: { article: article } }}>
            <p className="text-left pl-5 font-extrabold text-lg text-darkBlue">{article.title}</p>
          </Link>
          <p className="text-left pl-5 font text-lightBlue">{formattedKeywords}</p>
          <p className="text-left pl-5 font-thin text-darkBlue ">{article.PublishDate} , {formattedAuthors}</p>
        </div>
        <div className="w-1/4 ">
          <img
            src={ArticleIcon}
            alt="Search Loope Icon"
            className="ml-auto mr-5"
          />
        </div>
      </button>
    </div>
  );
};

export default ClosedArticle;
