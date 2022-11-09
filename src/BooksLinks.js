import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export const BooksLinks = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: null })

  return (
    <>

      <Link to='/books/1' >Book 1</Link> <br />
      <Link to='/books/2' >Book 2</Link> <br />
      <Link to='/books/3' >Book 3</Link> <br />
      <Link to='/books/new' >New Book</Link> <br />
      <input type='text' onChange={e => setSearchParams({ n: e.target.value })} />

      <Outlet />

    </>
  )
}


