import React from 'react';
import ArticleList from '../../components/article/ArticleList';
import PageTitle from '../../layouts/pageTitle/PageTitle';

const ArticlePage: React.FC = () => {

  return (
    <>
      <PageTitle type="article" />
      <div className="a-page-content main-width-content">
        <ArticleList />
      </div>

    </>
  )
}

export default ArticlePage