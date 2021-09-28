import PageLoader from 'components/pageLoader/PageLoader'
import StarWarsTable from 'components/starWarsTable/StarWarsTable'
import TopBar from 'components/topbar/TopBar'
import { useStarWarsData } from 'context/dataContext'

import './app.scss'

const App = () => {
  const { status } = useStarWarsData()

  if (status === 'loading') {
    return <PageLoader />
  }
  return (
    <div className="layout">
      <header>
        <h1>Characters</h1>
        <TopBar />
      </header>
      <main>
        <StarWarsTable />
      </main>
    </div>
  )
}

export default App
