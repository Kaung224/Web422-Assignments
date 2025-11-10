import MainNav from "./MainNav";
import { Container } from "react-bootstrap";

export default function Layout({children}){
  return (
    <>
      <MainNav />
      <br />
      <br />
      <br />
      <Container className="container-md">
        {children}
      </Container>
      <br />
    </>
  )
}