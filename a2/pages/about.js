import Link from "next/link";
import Card from "react-bootstrap"
import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps(){
  return fetch("https://openlibrary.org/works/OL453657W.json")
  .then((res) => res.json())
  .then((data) => {
    return {
      props : {book : data}
    }}
  )
}

export default function About(props){
  return (
    <>
      <PageHeader text="About the Developer : Kaung Khant San"/>

      <p>
        I’m Kaung Khant San from Myanmar, which is in Asia. My main interest is in frontend development, and I am working towards becoming a fullstack developer. I enjoy exploring new technologies and frameworks, especially those related to JavaScript and web development. My aim is to create scalable, user-friendly applications that have a positive impact. I am committed to continuous learning and always seeking ways to improve my skills.
      </p>

      <p>
        This book is Terry Pratchett’s first journey into the satirical world of Discworld, where the hapless wizard Rincewind guides the naive tourist Twoflower through a land of magic and absurdity.
      </p>
      <br />
      <br />

      <BookDetails book={props.book} workId={props.book.key} showFavouritesButton={false} />	
    </>
  )
}