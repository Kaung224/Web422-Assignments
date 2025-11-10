import { useAtom } from "jotai"
import { favouritesAtom } from "@/store"
import PageHeader from "@/components/PageHeader"
import {Row, Col} from "react-bootstrap"
import BookCard from "@/components/BookCard"

export default function Favourites(){
  const [favouritesList] = useAtom(favouritesAtom)

  console.log(favouritesList)

  return (
    <>
      <PageHeader text={favouritesList.length > 0 ? 'Your Favourites' : 'Nothing here'} subText={favouritesList.length > 0 ? 'All your favourite books, in one place' : 'Try adding a book to the list'}/>
      {favouritesList.length > 0 && (
        <Row className="gy-4">
          {favouritesList.map(workId => (
            <Col key={workId} lg={3} md={6}>
              <BookCard workId={workId} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}