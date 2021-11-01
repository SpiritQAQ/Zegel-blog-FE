import * as React from 'react';
import './PageTitle.scss'
interface Iprops {
  type: string
}

const PageTitle: React.FC<Iprops> = (props: Iprops) => {
  const Dic = {
    'index': "Zegel's Blog",
    'article': "Articles"
  }
  return (
    <div className="PageTitle">
      <h1>
        {Dic[props.type]}
      </h1>
    </div>

  );
}

export default PageTitle