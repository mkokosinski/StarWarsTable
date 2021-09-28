import { REQUEST_STATUS } from 'api/constants'
import ErrorPage from 'components/errorPage/ErrorPage'
import PageLoader from 'components/pageLoader/PageLoader'
import StarWarsTable from 'components/starWarsTable/StarWarsTable'
import TopBar from 'components/topbar/TopBar'
import { useStarWarsData } from 'context/dataContext'

import './app.scss'

const App = () => {
  const { status, error } = useStarWarsData()

  if (status === REQUEST_STATUS.LOADING) {
    return <PageLoader />
  }

  if (status === REQUEST_STATUS.ERROR) {
    return <ErrorPage error={error} />
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
