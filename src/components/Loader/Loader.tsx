import {ThreeDots} from 'react-loader-spinner'

const Loader = () => {
  return (
    <><ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#A020F0"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
    wrapperClass=""
    /></>
  )
}

export default Loader