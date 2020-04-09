import * as React from 'react'
import './index.scss'
import IndexHeader from '../../components/index/IndexHeader'

class IndexComp extends React.Component<object> {
  render() {
    return (
      <main>
        <IndexHeader />
        <div className="indexContainer">
          <div className="indexCard"></div>
        </div>
      </main>
    )
  }
}

export default IndexComp
