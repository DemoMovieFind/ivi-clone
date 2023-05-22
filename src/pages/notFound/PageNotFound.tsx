import { useIntl } from "react-intl";

const PageNotFound = () => {
  const intl = useIntl();
  return (
    <h1 style={{
      color:'white',
      textAlign:'center',
    }}>{intl.formatMessage({id:'page_not_found'})}</h1>
  )
}

export default PageNotFound;