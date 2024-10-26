import { SWRConfig } from "swr"
import { FetchUser } from "./Components/FetchUser"
import { fetcher } from "./Components/Fetcher"


export const App = () => {

  return (
    <SWRConfig value={{ fetcher }}>
      <FetchUser />
    </SWRConfig>
  )
}