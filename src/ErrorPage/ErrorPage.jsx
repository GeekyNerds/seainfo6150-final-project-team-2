import React from 'react'
import { Link } from "react-router-dom";
import { Result, Button, Input } from 'antd';
const { Search } = Input;

const ErrorPage = () => {
  return (
    <Result
    status="404"
    title="Sorry, the page you're going to visit does not exist :("
    subTitle="Cannot find the page you are looking for ?"
    extra={
      <div>
        <Search
        placeholder="Search..."
        style={{ width: 260 }}
        />
        <br /><br />
        <Button type="primary">
          <Link to="/">Go back to Home page</Link>
        </Button>
        <br /><br />
        <Button type="primary">
          <Link to="/contact">Sign up our Newsletter</Link>
        </Button>
      </div>}
    />
  )
}

export default ErrorPage
