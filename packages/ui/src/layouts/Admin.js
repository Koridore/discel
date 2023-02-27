import { Shell } from './Shell'
import { TableList } from '../lists/TableList'
import { CardList } from '../lists/CardList'

export const Admin = ({ graph, params, view, children }) => (
  <Shell params={params} view={view}>
    {
     view == 'list' && <TableList/> ||
     view == 'create' && <h1>Detail {params?.noun}</h1> ||
     <h1>Create {params?.noun}</h1>} 
  </Shell>
)

