import axios from "axios"
import { useState, useEffect } from "react"


const QuotesApi = ({ category }) => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              "X-Api-Key":" dmP4aqdQ5Ts/1/DX85Ci3Q==3uRlNv8TR4dbLyyA",
              "Content-Type": "application/json",
            },
          }
        )

        setQuotes(response.data)
      } catch (error) {
        console.error("Error fetching quotes: ", error)
      }
    }

    fetchQuotes()
  }, [category])

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <p className="migra text-[25px] lg:text-[30px] justify-center">
            {quote.quote} — <em>{quote.author}</em>
          </p>
        </div>
      ))}
    </div>
  )
}

export default QuotesApi
