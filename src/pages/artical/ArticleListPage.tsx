import React from 'react';
import ArticleList from '../../components/article/ArticleList';
import PageTitle from '../../layouts/pageTitle/PageTitle';

const ArticlePage: React.FC = () => {

  return (
    <>
      <PageTitle type="article" />
      <ArticleList />
    </>
  )
}

export default ArticlePage