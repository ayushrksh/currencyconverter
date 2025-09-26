  import React, { useEffect, useState } from 'react'

  function useCurrencyInfo(currency) {
      const [data, setData] = useState({})
      useEffect(() => {
          fetch(`https://v6.exchangerate-api.com/v6/f9a4293b53ff207a7b60d1ca/latest/USD`)
          .then((res) => res.json())
          .then((res) => setData(res.conversion_rates))

          console.log(data);
      }, [currency] )
      console.log(data);
    return data
  }

  export default useCurrencyInfo
