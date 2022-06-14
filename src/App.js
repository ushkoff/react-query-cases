import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import {PaginatedQueriesPage} from "./components/PaginatedQueries.page";
import {InfinityQueriesPage} from "./components/InfinityQueries.page";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/super-heroes'>Traditional Super Heroes</Link>
                </li>
                <li>
                  <Link to='/rq-super-heroes'>React-Query Super Heroes</Link>
                </li>
                <li>
                  <Link to='/rq-parallel'>Parallel queries</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path='/super-heroes' element={<SuperHeroesPage />}/>
              <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}/>
              <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage />}/>
              <Route path='/rq-parallel' element={<ParallelQueriesPage />}/>
              <Route path='/rq-dynamic-parallel' element={<DynamicParallelPage heroIds={[1,3]} />}/>
              <Route path='/rq-dependent' element={<DependentQueriesPage email='example@mail.ua' />}/>
              <Route path='/rq-paginated' element={<PaginatedQueriesPage />}/>
              <Route path='/rq-infinity' element={<InfinityQueriesPage />}/>
              <Route path='/' element={<HomePage />}/>
            </Routes>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
  )
}

export default App