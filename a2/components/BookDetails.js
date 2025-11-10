import { Container, Row, Col, Button } from "react-bootstrap"
import { useAtom } from "jotai";
import { useState } from "react";
import { favouritesAtom } from "@/store";

export default function BookDetails({book, workId, showFavouritesBtn=true}){

  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom)

  const [showAdded, setShowAdded] = useState(() => workId ? favouritesList.includes(workId) : false)

  const favouritesClicked = () => {
    if(showAdded){
      setFavouritesList(current => current.filter(fav => fav != workId))
      setShowAdded(false);
    } else{
      setFavouritesList(current => [...current, workId])
      setShowAdded(true);
    }
  }

  return (
    <>
      <Container>
        <Row>
        <Col lg="4">
        <img onError={(event) => {
            event.target.onerror = null; 
        event.target.src =
        "https://placehold.co/400x600?text=Cover+Not+Available";
          }}
        className="img-fluid w-100 object-fit-cover"
        style={{ maxHeight: '600px', objectFit: 'cover' }}
        src={`https://covers.openlibrary.org/b/id/${book?.covers?.[0]}-L.jpg`}
        alt="Cover Image"
        />
      <br />
        <br />
        </Col>
        <Col lg="8">
          <h3>{book.title}</h3>
          {book.description && (
            <p>
              {typeof book.description === "string"
                ? book.description
                : book.description.value}
            </p>
          )}
          <br />

          {book.subject_people ? <>
            <h5>Characters</h5>
            {book.subject_people.join(', ')}
            <br /><br />
            </> : ""}

          {book.subject_places ? (
            <>
              <h5>Settings</h5>
              <p>{book.subject_places.join(', ')}</p>
              <br />
            </>
          ) : ("")}

          {book.links ? <h5>More Information</h5> : ""}
          {book.links ? book.links.map(link => {
            return (
              <span key={link.url}>
                <a href={link.url} target="_blank">{link.title}</a>
                <br />
              </span>
            )
          }) : ""}

          <br />

          {showFavouritesBtn && <Button variant={showAdded ? 'primary' : 'outline-primary'} style={{fontSize : '1rem'}} onClick={favouritesClicked}>{showAdded ? '+ Favourite (Added)' : '+ Favourite'}</Button>}
        </Col>
        </Row>
      </Container>
    </>
  )
}