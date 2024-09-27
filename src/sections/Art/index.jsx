import ArtList from "./components/ArtList"
import { useState, useEffect } from "react"

function ArtsSection() {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then(res => res.json())
      .then(data => setArtList(data))
  }, []);


  return (
    <ArtList artList={artList} />
  )
}

export default ArtsSection
