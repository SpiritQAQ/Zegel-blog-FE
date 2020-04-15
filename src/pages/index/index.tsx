import * as React from 'react'
import './index.scss'
import PageTitle from '../../layouts/pageTitle/PageTitle'

class IndexComp extends React.Component<object> {
  render() {
    return (
      <main>
        <PageTitle type="index" />
        <div className="indexContainer">
          <div className="indexCard"></div>
        </div>
      </main>
    )
  }
}

export default IndexComp
