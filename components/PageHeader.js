import { Card } from "react-bootstrap"

export default function PageHeader(props){
  return (
    <>
      <Card className="bg-light">
        <Card.Body style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h3 style={{textAlign: 'center', fontSize: '4rem'}}>{props.text}</h3>
          <p style={{textAlign : 'center', fontSize: '1.5rem'}}>{props.subText ? props.subText : ''}</p>
        </Card.Body>
      </Card>
      <br/>
      <br />
    </>
  )
}