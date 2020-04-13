import React, { useEffect, useState } from 'react';
import { getArticleList } from '../../services/api';
import { store } from 'src/models/index.js'
import ArticleModel from 'src/models/Article'

const ArticlePage: React.FC = () => {
  const [articleList, setList] = useState([]);
  console.log("ArticlePage:React.FC -> articleList", articleList)
  // setList(ArticleModel.state.articleList)
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    getArticleList().then(
      (res: any) => {
        console.log(res)
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
      {/* {articleList.forEach((item: any) => {
        return item
      })} */}
      {/* {JSON.stringify(articleList)} */}
    </main>
  );
}

export default ArticlePage