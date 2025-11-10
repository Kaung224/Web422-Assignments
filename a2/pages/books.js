/*********************************************************************************
*  WEB422 – Assignment 1
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Kaung Khant San Student ID: 108445248 Date: 10/6/2025
********************************************************************************/ 
import useSWR from "swr";
import { useState,useEffect } from "react";
import { Pagination, Table } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/router";


export default function Books() {
  const router = useRouter();

  const [page, setPage] = useState(1)
  const [pageData, setPageData] = useState([])

  const querString = new URLSearchParams(router.query).toString();

  const {data, error} = useSWR(`https://openlibrary.org/search.json?${querString}&page=${page}&limit=10`)

  const author = router.query.author;

  useEffect(() => {
    if (data){
      setPageData(data);
    }
  },[data])

  const previous = () => {
    if(page > 1){
      setPage(page - 1)
    }
  }

  const next = () => {
    setPage(page + 1)
  }

  return (
    <>
     <PageHeader text={'Search Results'} subText={`Novels by ${author}`}/>

     {error && <p>Error loading data.</p>}

     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        {pageData.docs?.map((book) => (
          <tr style={{cursor : "pointer"}} onClick={() => router.push(book.key)} key={book.key}>
            {console.log(book.key)}
            <td>{book.title}</td>
            <td>{book.first_publish_year}</td>
          </tr>
        ))}
      </tbody>
    </Table>

    <Pagination>
      <Pagination.Prev onClick={previous}/> 
      <Pagination.Item>{page}</Pagination.Item> 
      <Pagination.Next onClick={next}/> 
    </Pagination>
    </>
  );
}
