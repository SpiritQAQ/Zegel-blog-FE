import React, { useEffect, useState } from 'react';
import { getArticleList } from '../../services/api';
import { dispatch } from 'src/models/index'
import ArticleModel from 'src/models/Article'

const ArticlePage: React.FC = () => {
  const [articleList, setList] = useState([]);
  // setList(ArticleModel.state.articleList)
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    getArticleList().then(
      (res: any) => {
        console.log(res)
        dispatch({
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
      {JSON.stringify(articleList)}
    </main>
  );
}

export default ArticlePage