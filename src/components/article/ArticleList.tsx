import React, { useEffect, useState } from 'react';
import { getArticleList } from '../../services/api';
import { store } from 'src/models/index.js'
import ArticleModel from 'src/models/Article'
import ListItem from './ListItem';

const ArticleList: React.FC = () => {
  const [articleList, setList] = useState([]);
  // console.log("ArticlePage:React.FC -> articleList", articleList)
  // setList(ArticleModel.state.articleList)
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    getArticleList().then(
      (res: any) => {
        store.dispatch({
          type: 'UPDATE_ARTICLE_LIST',
          payload: res.data
        })
        setList(ArticleModel.state.articleList)
      }
    )
  }, []);


  return (
    <main>
      {articleList.map((item: any) => {
        return ListItem(item)
      })}
    </main>
  );
}

export default ArticleList
